import * as pulumi from "@pulumi/pulumi"
import * as aws from "@pulumi/aws"

const provider = new aws.Provider(`east`, {
  profile: aws.config.profile,
  region: `us-east-1`,
})

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
  const cert = new aws.acm.Certificate(
    `certificate`,
    {
      domainName: domain,
      validationMethod: `DNS`,
      keyAlgorithm: `RSA_2048`,
    },
    { provider }
  )

  const validationDomain = new aws.route53.Record(
    `${domain}-validation`,
    {
      name: cert.domainValidationOptions[0].resourceRecordName,
      zoneId,
      type: cert.domainValidationOptions[0].resourceRecordType,
      records: [cert.domainValidationOptions[0].resourceRecordValue],
      ttl: 10 * 60,
    },
    { provider }
  )

  const certValidation = new aws.acm.CertificateValidation(
    `certificate-validation`,
    {
      certificateArn: cert.arn,
      validationRecordFqdns: [validationDomain.fqdn],
    },
    { provider: provider }
  )

  return { provider, cert, validationDomain, certValidation }
}

/**
 * @description
 * Create a bucket for the domain with Origin Access Control (OAC).
 * The bucket is not public - CloudFront accesses it via the OAC
 * with a service principal policy.
 */
const setupBucket = (domain: string) => {
  const bucket = new aws.s3.Bucket(
    `${domain}-bucket`,
    {
      bucket: domain,
      website: {
        indexDocument: `index.html`,
        errorDocument: `404.html`,
      },
    },
    { provider }
  )

  const oac = new aws.cloudfront.OriginAccessControl(
    `oac`,
    {
      name: `${domain}-oac`,
      originAccessControlOriginType: `s3`,
      signingBehavior: `always`,
      signingProtocol: `sigv4`,
    },
    { provider }
  )

  return { bucket, oac }
}

const setupZone = (zoneName: string) => {
  const zone = new aws.route53.Zone(
    `${zoneName}-zone`,
    {
      name: zoneName,
    },
    { provider }
  )

  return zone
}

/**
 * @description
 * Created a cloudfront distribution with access to the provided bucket via
 * Origin Access Control (OAC) and the provided certificate.
 * Also creates a Route53 A type record for the distribution in the provided zone
 * and a bucket policy allowing CloudFront to read from the bucket.
 */
const setupDistribution = (
  domain: string,
  certArn: pulumi.Input<string>,
  zoneId: pulumi.Input<string>,
  bucket: aws.s3.Bucket,
  oac: aws.cloudfront.OriginAccessControl
) => {
  const distribution = new aws.cloudfront.Distribution(
    `${domain}-distrib`,
    {
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
          originAccessControlId: oac.id,
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
    },
    { provider }
  )

  const bucketPolicy = new aws.s3.BucketPolicy(
    `bucket-policy`,
    {
      bucket: bucket.id,
      policy: pulumi.jsonStringify({
        Version: `2012-10-17`,
        Statement: [
          {
            Effect: `Allow`,
            Principal: {
              Service: `cloudfront.amazonaws.com`,
            },
            Action: `s3:GetObject`,
            Resource: pulumi.interpolate`${bucket.arn}/*`,
            Condition: {
              StringEquals: {
                "AWS:SourceArn": distribution.arn,
              },
            },
          },
        ],
      }),
    },
    { provider }
  )

  const aRecord = new aws.route53.Record(
    domain,
    {
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
    },
    { provider }
  )

  return { distribution, aRecord, bucketPolicy }
}

/** Config file: {@link ./infra/Pulumi.resume.yaml} */
const stackCfg = new pulumi.Config()

const config = {
  domain: stackCfg.require(`domain`),
  zone: stackCfg.require(`zone`),
}

const zone = setupZone(config.zone)
const { bucket, oac } = setupBucket(config.domain)
const certArn = setupCert(config.domain, zone.id).certValidation.certificateArn
const { distribution } = setupDistribution(
  config.domain,
  certArn,
  zone.id,
  bucket,
  oac
)

export const bucketName = bucket.id
export const bucketUri = pulumi.interpolate`s3://${bucket.bucket}`
export const cloudfrontDomain = distribution.domainName
export const websiteEndpoint = bucket.websiteEndpoint
export const domainEndpoint = pulumi.interpolate`https://${config.domain}`
export const nameServers = zone.nameServers
