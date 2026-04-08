export const data = {
  site: "https://konsimeonov.com",
  personalInfo: {
    title: "Senior Software Engineer | Backend & Infrastructure",
    photoUrl: "target/web/public/main/konche-bonche.jpg",
    contacts: [
      {
        url: "https://github.com/KonstantinSimeonov",
        text: "github",
      },
      {
        url: "https://blog.konsimeonov.lol",
        text: "blog",
      },
    ],
  },
  workExperience: [
    {
      from: "Dec 2015",
      to: "Jan 2017",
      jobTitle: "Technical Trainer",
      location: "Telerik Academy",
      companySiteUrl: "https://www.telerikacademy.com/",
      descriptions: [
        "Delivered lectures and mentored 2000+ students through beginner-to-junior web development curriculum covering C#, HTML, CSS and JavaScript",
      ],
    },
    {
      from: "Apr 2017",
      to: "Jul 2019",
      jobTitle: "JS Dev",
      location: "Chaosgroup",
      companySiteUrl: "https://www.chaos.com/",
      descriptions: [
        "Built a cross-platform Electron UI for V-Ray (Sketchup/Rhino/Revit) with React, Typescript and Mobx",
        "Solved performance and scalability problems - virtualized explorer views for large material libraries, implemented graph subgraph copying, and used multi-process rendering for preview generation outside of Electron's main process",
        "Drove the initiative of implementing a Gitlab CI/CD pipeline with Typescript/Webpack builds, linting, package and app publishing and e2e testing for apps and libraries",
      ],
    },
    {
      from: "Jul 2019",
      to: "Jan 2020",
      jobTitle: "Scala Contractor",
      location: "Pontica Solutions Ltd",
      companySiteUrl: "https://ponticasolutions.com/",
      descriptions: [
        "Evaluated and chose the Scala/Akka/Redis/Kafka stack for an email scheduling system, authoring the design doc covering architecture and tradeoffs",
        "Scheduled emails leveraging Akka and Apache Kafka and implemented email statistics using Apache Spark and Apache Kafka",
        "Put together a CI/CD pipeline for the new email scheduling system using GitLab, SBT, Docker, Linux and Bash",
        "Used AWS SQS, SNS and S3 to implement customer facing APIs for eventing and data export",
      ],
    },
    {
      from: "Jan 2020",
      to: "Mar 2022",
      jobTitle: "Senior Software Dev",
      location: "Coursera",
      companySiteUrl: "https://www.coursera.org/",
      descriptions: [
        "Developed rhyme.com, an in-browser interactive studying VM environment with audio/video calls and video instructions, using React, Typescript, AWS, PostgreSQL and Golang",
        "Implemented video transcription pipeline with AWS Transcribe and S3, in-browser video editing with FFMPEG, notification center and input capture/replay",
        "Designed and documented the approach for video/subtitle CRUD and led an app-wide accessibility implementation under a tight deadline",
        "Introduced property-based testing, published typescript definitions for untyped libraries, set up code coverage and automated dependency updates",
      ],
    },
    {
      from: "Mar 2022",
      to: "Mar 2023",
      jobTitle: "Senior Full-Stack Dev",
      location: "Synthesis",
      companySiteUrl: "https://www.synthesis.com/teams",
      descriptions: [
        "Built and maintained portal.synthesis.is, a student portal for game/study scheduling and administration, using NextJS, TypeORM, MySQL, Zod and React Query",
        "Optimized typeorm/mysql queries, modified indexes and constraints, migrated table schemas to improve performance and enable new features",
        "Sped up CI runtime multiple times by more than 10 minutes using sharding, parallel db testing and job splitting",
        "Introduced strongly-typed middleware for authentication and validation to improve security and dev experience",
      ],
    },
    {
      from: "Apr 2023",
      to: "Ongoing",
      jobTitle: "Senior Full-Stack Dev",
      location: "Loancrate",
      companySiteUrl: "https://loancrate.com/",
      descriptions: [
        "Designed and built a cross-organization config sync system from scratch - sync templates, source ID namespaces, change diffing/planning and error recovery - used by all tenants to manage thousands of configuration records across 10+ organizations",
        "Migrated CI from CircleCI to Buildkite, cutting build times from 1 hr to ~13 min and halving costs - used Docker layer caching, Turborepo remote cache, sharding, short-lived credentials/granular tokens",
        "Built Terraform-managed ephemeral review environments with AWS CloudMap service discovery, auto-rollback of failed migrations, daily cleanup automation and cost-optimized resource scaling",
        "Leveraged AI to automate product changes to tenant configurations and extract/validate document data on mortgage applications",
        "Built multi-tenant onboarding and authentication with WorkOS - SSO integration with Azure AD/Google Workspace, tenant environment provisioning and switching, user provisioning and onboarding flows",
        "On-call rotation with PagerDuty - debug and resolve production issues using Datadog, Sentry, BullMQ Arena, Conduktor for Kafka and readonly access to Redis and PostgreSQL via CLI",
        "Authored RFCs and design docs for architectural decisions including cross-org config sync, AWS cost optimization and testing practices - covering risk assessment, rollout plans and security/cost tradeoffs",
      ],
    },
  ],
  projects: [
    {
      title: "tsx-ctrl-statements",
      description:
        "Typescript compiler plugin that adds control flow elements to jsx. Currently sitting at 4K weekly downloads on npm.",
      url: "https://github.com/KonstantinSimeonov/tsx-control-statements",
    },
    {
      title: "linear-cli",
      description:
        "A Rust CLI for managing Linear issues via GraphQL, built for fast terminal-based workflow.",
      url: "https://github.com/KonstantinSimeonov/linear-cli",
    },
    {
      title: "aot",
      description:
        "Pure compile-time implementation of various fun programs (fibs, primes, string ops) using typescript type language.",
      url: "https://github.com/KonstantinSimeonov/aot",
    },
    {
      title: "Advent of Code",
      description:
        "Using fun languages like haskell, rust and plsql to solve Advent of Code algorithmic problems",
      url: "https://github.com/KonstantinSimeonov/aoc-megarepo",
    }
  ],
  skills: [
    {
      name: "AWS",
      description:
        "Built/managed infrastructure across ECS, EC2, RDS, S3, SQS, SNS, CloudMap, IAM, ASGs, CloudFormation and CloudWatch. Handled networking with VPCs and security groups. Used AWS Transcribe for subtitles at Coursera and SQS/SNS for event-driven APIs at Pontica.",
      img_url: "AWS",
      priority: 1,
    },
    {
      name: "NodeJS",
      description:
        "My primary backend platform for building GraphQL/Prisma APIs and background job systems. Experienced with Node performance debugging - profiling event loop blocks in resolvers and jobs, reducing heap usage, improving startup time by untangling import graphs and instrumenting services with Sentry and Datadog.",
      img_url: "Node",
      priority: 2,
    },
    {
      name: "Databases",
      description:
        "Daily work with PostgreSQL (Prisma) at Loancrate - schema design, migrations, seed infrastructure, query optimization and multi-tenant data management. Used Redis for caching and job queues (BullMQ). At Synthesis, consolidated separate per-user-type tables into a single table with a discriminator column and JSON profile field, eliminating expensive multi-table joins and significantly speeding up search queries across a read-heavy app. At Coursera, designed PostgreSQL schemas for indexing S3-hosted videos and subtitle translations.",
      img_url: "SQL",
      priority: 3,
    },
    {
      name: "Typescript",
      description:
        "My primary language for the last 10 years across frontend, backend, infrastructure tooling and CI pipelines. Experienced with scaling TypeScript builds in large monorepos - simplifying complex types to reduce tsc overhead, tuning module structure and heap size to cut build times. Fluent in advanced type-level features regularly - branded types, conditional types, template literals, mapped types. Author of a TypeScript compiler plugin (tsx-ctrl-statements) with 4K weekly npm downloads. ",
      img_url: "TS",
      priority: 7,
    },
    {
      name: "Algorithms",
      description:
        "Applied often in production work - BFS/DFS for CI job dependency skipping, topological sorting for multi-table database syncing with foreign key dependencies, bin-packing for test splitting with historical timing data, task queues for parallel workloads. Rendering ASTs of business rules to human-readable sentences, serializing ASTs for similarity comparisons. Using longest common subsequence on token representations to detect similar config record names for quality control.",
      img_url: "Algo",
      priority: 6,
    },
    {
      name: "Docker/CI",
      description:
        "Used multi-stage Docker builds for shipping Node apps. Have done a ton of image size optimizations, security maintainance, health checks for ECS services and Docker Compose for local dev and testing. Authored 50+ production shell scripts for ECS deployment orchestration, Terraform automation, Docker image builds, test sharding and Lambda deployments. Built a custom Buildkite plugin for S3-based git repo caching with file locking for concurrent agents.",
      img_url: "Linux",
      priority: 5,
    },
    {
      name: "Terraform/IaC",
      description:
        "Authored custom Terraform modules to manage Buildkite CI infrastructure on top of the AWS Elastic Stack - clusters, pipelines, S3 buckets for logs/cache/artifacts, secrets management, CI feature flags and a release freeze implementation.",
      img_url: "Terraform",
      priority: 4,
    },
    {
      name: "React",
      description:
        "10 years of experience building production UIs with React across five companies. Often implemented performance improvements such as virtualization for large interactive tables/lists, code splitting with dynamic imports, bundle analysis and profiling re-renders with React DevTools and CPU/network with browser DevTools. Use Apollo GraphQL hooks at Loancrate and React Query at Synthesis, including optimistic updates with both. Testing with Chromatic visual snapshots and Playwright e2e. At Coursera I worked on an in-browser VM environment with audio/video calls.",
      img_url: "React",
      priority: 8,
    },
  ],
} as const
