## Resume site

built with nextjs static site generation. Running locally:

```bash
npm i
npm run dev
```

Deployed (using AWS) at https://konsimeonov.lol].

### Infra
Set up via [pulumi infrastructure-as-code](https://www.pulumi.com/) in the [infra/](./infra) directory. Includes the following components:

- Manually created hosted zone, purchased domain and name servers from the hosted zone added to the domain registrar
- Newly created or existing ssl certificate with ACM
- Route53 for DNS resolution to a cloudfront distribution via a DNS A type record
- Cloudfront distribution based on a non-public S3 bucket using the provided ssl certificate
- S3 bucket with a website endpoint and an access policy

Bringing up the infrastructure is as easy as executing `pulumi up` (and waiting for a couple of minutes).

### CI
Using github actions, the website is built and stored as an artifact, which is then uploaded to the S3 bucket using the aws cli. A cloudfront distribution cache invalidation is created afterwards, causing cloudfront to serve the newly uploaded files.
