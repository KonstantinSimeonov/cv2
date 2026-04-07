export default {
  personalInfo: {
    title: "Software dev and haskell/linux hobbyist",
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
      {
        url: "https://www.hackerrank.com/kon_trombon",
        text: "hackerrank",
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
      jobTitle: "JavaScript Dev",
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
        "Scheduled emails leveraging Akka and Apache Kafka and implemented email statistics using Apache Spark and Apache Kafka",
        "Put together a CI/CD pipeline for the new email scheduling system using GitLab, SBT, Docker, Linux and Bash",
        "Ensured code correctness by combining functional programming and testing with ScalaTest and ScalaCheck",
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
        "Migrated CI from CircleCI to Buildkite, cutting build times from 60 min to ~13 min while halving costs - implemented Docker layer caching, Turborepo remote cache, parallel deployments, short-lived credentials, granular token scoping and job timeouts",
        "Built Terraform-managed ephemeral review environments with AWS CloudMap service discovery, auto-rollback of failed migrations, daily cleanup automation and cost-optimized resource scaling",
        "Leveraged AI to automate product changes to tenant configurations and extract/validate document data on mortgage applications",
      ],
    },
  ],
  projects: [
    {
      title: "Advent of Code",
      description:
        "Using fun languages like haskell, rust and plsql to solve Advent of Code algorithmic problems",
      url: "https://github.com/KonstantinSimeonov/aoc-megarepo",
    },
    {
      title: "tsx-ctrl-statements",
      description:
        "Typescript compiler plugin that adds control flow elements to jsx. Currently sitting at 4K weekly downloads on npm.",
      url: "https://github.com/KonstantinSimeonov/tsx-control-statements",
    },
    {
      title: "aot",
      description:
        "Pure compile-time implementation of various fun programs (fibs, primes, string ops) using typescript type language.",
      url: "https://github.com/KonstantinSimeonov/aot",
    },
    {
      title: "guacamole-client types",
      description:
        "Typescript library definitions for apache guacamole-client library which is used at Coursera.",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/45949",
    },
    {
      title: "pastes.konsimeonov.lol",
      description:
        "Web app for sharing code with multiple files per paste, private pastes, code highlighting and more. Build with Nextjs, Postgres and AWS.",
      url: "https://pastes.konsimeonov.lol",
    },
    {
      title: "blog.konsimeonov.lol",
      description: "A blog where I get to share esoteric, non-trivial or otherwise curious programming insights. Built with Nextjs and AWS.",
      url: "https://blog.konsimeonov.lol"
    }
  ],
  skills: [
    {
      name: "AWS",
      description:
        "Built and managed infrastructure across ECS, EC2, RDS, S3, SQS, SNS, CloudMap and IAM. At Loancrate, I use Terraform to provision ephemeral review environments, manage ECS deployments with service discovery and handle networking with VPCs and security groups. Previously used AWS Transcribe for video subtitles at Coursera and SQS/SNS for event-driven APIs at Pontica.",
      img_url: "AWS",
      priority: 1,
    },
    {
      name: "NodeJS",
      description:
        "My primary backend platform. At Loancrate I work on a Node/GraphQL/Prisma API powering a multi-tenant mortgage system - building features like cross-org config sync, internal job scheduling, Kafka consumers and webhook event publishing. Previously built backend services at Coursera (with Golang) and Synthesis (with NextJS API routes).",
      img_url: "Node",
      priority: 2,
    },
    {
      name: "SQL",
      description:
        "Daily work with PostgreSQL through Prisma at Loancrate - schema design, migrations, seed infrastructure, query optimization and multi-tenant data management across thousands of configuration records. At Synthesis, optimized TypeORM/MySQL queries and migrated table schemas. At Coursera, designed schemas for video transcription and scheduling systems.",
      img_url: "SQL",
      priority: 3,
    },
    {
      name: "Typescript",
      description:
        "My primary language for the last 9 years across frontend, backend, infrastructure tooling and CI pipelines. I use advanced type-level features regularly - branded types, conditional types, template literals, mapped types - and have published a TypeScript compiler plugin (tsx-ctrl-statements) with 4K weekly npm downloads.",
      img_url: "TS",
      priority: 4,
    },
    {
      name: "Algorithms",
      description:
        "Confident with fundamentals like DFS/BFS, topological sorting, union-find, dynamic programming, heaps and balanced trees. I use Haskell, Rust and PicoLisp to solve Advent of Code problems and practice on HackerRank. This background helps me reason about performance tradeoffs and data modeling in day-to-day backend work.",
      img_url: "Algo",
      priority: 5,
    },
    {
      name: "Linux/Docker/CI",
      description:
        "Daily driver since my first year as a developer (Fedora, Gentoo, Arch). At Loancrate I migrated CI from CircleCI to Buildkite, built custom AWS AMIs with Packer, implemented Docker layer caching, wrote Bash tooling for deployments, review environment lifecycle and cost optimization. Comfortable with shell scripting, containers, networking and debugging production systems over SSH.",
      img_url: "Linux",
      priority: 6,
    },
    {
      name: "React",
      description:
        "9 years of experience building production UIs with React across five companies. Comfortable with hooks, context, performance optimization (memoization, stable references, code splitting) and testing. At Loancrate I work on a large multi-tenant SPA with GraphQL; at Coursera I built an in-browser VM environment with audio/video calls.",
      img_url: "React",
      priority: 7,
    },
    {
      name: "Mentoring",
      description:
        "Mentored 2000+ students at Telerik Academy and continued mentoring junior and mid-level engineers at Coursera, Synthesis and Loancrate. I also mentor developers outside of work - check out https://latrovaliev.dev/, he's my best student!",
      img_url: "Mentor",
      priority: 8,
    },
  ],
} as const
