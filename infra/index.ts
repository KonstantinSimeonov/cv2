import * as pulumi from "@pulumi/pulumi"
import * as aws from "@pulumi/aws"

/**
 * @description
 * Created a certificate for the provided domain in the provided hosted zone.
 * The certificate is created in us-east-1, because cloudfront requires it.
 * The key algorithms is RSA_2048, which is another requirement by cloudfront.
 * ([see here](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html))
 *
 * Domain and certificate validations are also created and returned.
 */
const setupCert = (domain: string, zoneId: pulumi.Input<string>) => {
  const region = new aws.Provider(`east`, {
    profile: aws.config.profile,
    region: `us-east-1`,
  })

  const cert = new aws.acm.Certificate(
    `certificate`,
    {
      domainName: domain,
      validationMethod: `DNS`,
      keyAlgorithm: `RSA_2048`,
    },
    { provider: region }
  )

  const validationDomain = new aws.route53.Record(`${domain}-validation`, {
    name: cert.domainValidationOptions[0].resourceRecordName,
    zoneId,
    type: cert.domainValidationOptions[0].resourceRecordType,
    records: [cert.domainValidationOptions[0].resourceRecordValue],
    ttl: 10 * 60,
  })

  const certValidation = new aws.acm.CertificateValidation(
    `certificate-validation`,
    {
      certificateArn: cert.arn,
      validationRecordFqdns: [validationDomain.fqdn],
    },
    { provider: region }
  )

  return { region, cert, validationDomain, certValidation }
}

/**
 * @description
 * Create a bucket for the domain, enabling website endpoint,
 * making the bucket accessible with a policy/access indentity without
 * making the bucket public.
 */
const setupBucket = (domain: string) => {
  const bucket = new aws.s3.Bucket(`${domain}-bucket`, {
    bucket: domain,
    website: {
      indexDocument: `index.html`,
      errorDocument: `404.html`,
    },
  })

  const originAccessIdentity = new aws.cloudfront.OriginAccessIdentity(
    `originAccessIdentity`,
    {
      comment: `setup s3 bucket which is accessible, but not public`,
    }
  )

  const bucket_policy = new aws.s3.BucketPolicy(`bucket-policy`, {
    bucket: bucket.id,
    policy: pulumi.jsonStringify({
      Version: `2012-10-17`,
      Statement: [
        {
          Effect: `Allow`,
          Principal: {
            AWS: originAccessIdentity.iamArn,
          },
          Action: [`s3:GetObject`],
          Resource: [pulumi.interpolate`${bucket.arn}/*`],
        },
      ],
    }),
  })

  return { bucket, originAccessIdentity, bucket_policy }
}

// use a manually created zone because I don't
// want to deal with providing the name servers to the
// dns registrars.
const getZoneId = (zoneName: string) => {
  const zone = aws.route53.getZone({
    name: zoneName,
    privateZone: false,
  })

  return zone.then(z => z.zoneId)
}

/**
 * @description
 * Created a cloudfront distribution with access to the provided bucket via
 * access identity and the provided certificate.
 * Also creates a Route53 A type record for the distribution in the provided zone.
 */
const setupDistribution = (
  domain: string,
  certArn: pulumi.Input<string>,
  zoneId: pulumi.Input<string>,
  bucket: aws.s3.Bucket,
  originAccessIdentity: aws.cloudfront.OriginAccessIdentity
) => {
  const distribution = new aws.cloudfront.Distribution(`${domain}-distrib`, {
    enabled: true,

    aliases: [domain],

    viewerCertificate: {
      acmCertificateArn: certArn,
      sslSupportMethod: `sni-only`,
    },

    origins: [
      {
        originId: bucket.arn,
        domainName: bucket.bucketRegionalDomainName,
        s3OriginConfig: {
          originAccessIdentity:
            originAccessIdentity.cloudfrontAccessIdentityPath,
        },
      },
    ],

    defaultRootObject: `index.html`,

    defaultCacheBehavior: {
      targetOriginId: bucket.arn,
      allowedMethods: [`GET`, `HEAD`, `OPTIONS`],
      cachedMethods: [`GET`, `HEAD`, `OPTIONS`],
      viewerProtocolPolicy: `redirect-to-https`,
      forwardedValues: {
        cookies: { forward: `none` },
        queryString: false,
      },
    },

    priceClass: `PriceClass_100`,

    restrictions: {
      geoRestriction: {
        restrictionType: `none`,
      },
    },
  })

  const aRecord = new aws.route53.Record(domain, {
    name: domain,
    zoneId,
    type: `A`,
    aliases: [
      {
        name: distribution.domainName,
        zoneId: distribution.hostedZoneId,
        evaluateTargetHealth: true,
      },
    ],
  })

  return { distribution, aRecord }
}

/** Config file: {@link ./infra/Pulumi.resume.yaml} */
const stackCfg = new pulumi.Config()

const config = {
  domain: stackCfg.require(`domain`),
  certArn: stackCfg.get(`certArn`),
  zone: stackCfg.require(`zone`),
}

const { bucket, originAccessIdentity } = setupBucket(config.domain)
const zoneId = getZoneId(config.zone)
const certArn =
  config.certArn ||
  setupCert(config.domain, zoneId).certValidation.certificateArn
const { distribution } = setupDistribution(
  config.domain,
  certArn,
  zoneId,
  bucket,
  originAccessIdentity
)

export const bucketName = bucket.id
export const bucketUri = pulumi.interpolate`s3://${bucket.bucket}`
export const cloudfrontDomain = distribution.domainName
export const websiteEndpoint = bucket.websiteEndpoint
export const domainEndpoint = pulumi.interpolate`https://${config.domain}`
