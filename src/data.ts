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
        "Delivered lectures that helped more than 2000 students on their journey from beginner to juniour in web development with C#, HTML, CSS and JavaScript",
        "Created exam programming problems for topics like algorithms, javascript DOM and programming fundamentals, organized exams and lectures",
        "Experienced firsthand how important keeping deadlines is, became better at taking responsibilities and honed organizational skills",
      ],
    },
    {
      from: "Apr 2017",
      to: "Jul 2019",
      jobTitle: "JavaScript Dev",
      location: "Chaosgroup",
      companySiteUrl: "https://www.chaos.com/",
      descriptions: [
        "Worked on V-Ray for Sketchup/Rhino/Revit, which provides a cross-platform Electron UI for interacting with V-Ray",
        "Built dynamic user interfaces using Electron, React, Typescript, Mobx - features like color pickers, file and graph explorers, material/geometries libraries",
        "Set up unit and e2e test environments with Mocha/Ava/Jest, implemented builds with Webpack, Gitlab/Jenkins CI/CD for apps and libraries",
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
        "Developed rhyme.com, an in-browser interactive studying VM environment, complete with audio/video calls and video instructions",
        "Implemented features like video transcriptions with AWS Transcribe and S3, in-browser video editing with FFMPEG, notification center, input capture/replay",
        "Worked with React, Redux, Typescript, AWS, PostgreSQL and Golang",
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
        "Worked on portal.synthesis.is (a student portal with game/study meetings and administrative functionality) with nextjs, typeorm, mysql, zod and react-query",
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
        "Working on app.loancrate.com which is a multi-tenant LOS system powered by AWS, Node, Graphql, React, Postgres and AI",
        "Designed and built a bunch of critical full stack features - tenant configuration management, automated UCD feedback integration, new tenant onboarding and authentication, etc",
        "Responsible for keeping CI/local builds running quickly and smoothly utilizing Turborepo, Docker, Linux, Bash, Circleci and AWS",
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
      name: "Algorithms",
      description:
        "I confidently use fundamental algorithms like dfs/bfs/topological sorting/union-find/knapsack as well as data structures like arrays/trees/queues/stacks/heaps/deques. I also occanisionally dip in more complex algorithms/structures like brute forcing with branch pruning, huffman coding, rolling hash, timsort, various dynammic programming problems, balanced trees/ASTs and immutable index trees.",
      priority: 4,
      img_url: "Algo",
    },
    {
      name: "Typescript",
      description:
        "I've used Javascript/Typescript in my jobs at TelerikAcademy, ChaosGroup, Rhyme and Synthesis to build interactive user interfaces, single page applications, backend services, automated builds and tests processes.",
      priority: 2,
      img_url: "TS",
    },
    {
      name: "NodeJS",
      description:
        "Node is the backend platform I feel most comfortable with - I love the opportunity to reuse code between frontend and backend, the abundance of libraries and the ease of prototyping. I've been using Node to build apps with Express, NextJS and Electron.",
      priority: 5,
      img_url: "Node",
    },
    {
      name: "Mentoring",
      description:
        "Mentoring is a natural part of working in a team - I had the opportunity to mentor a lot of students as a teacher in TelerikAcademy and that helped me later successfully mentor fresh team members in Coursera and Synthesis. I'm also mentoring several people outside of work - check out https://latrovaliev.dev/, he's my best student!",
      img_url: "Mentor",
    },
    {
      name: "FP",
      description:
        "FP can provide amazing benefits (immutability, pure functions, abstraction via monads/functions/composition) in the right circumstances - I've had a blast leveraging the strong sides of FP with Haskell/Typescript/Scala in a variety of situations like automation, restful APIs, front-end development and testing.",
      img_url: "Haskell",
    },
    {
      name: "Linux/bash",
      description:
        "I've used Fedora/Gentoo/Arch since my first year as a developer. I'm using bash loops, pipes, streams and command line tools like grep, cat, sed, rsync, ssh, less and other to make life simpler. Can't live without a terminal anymore!",
      img_url: "Linux",
    },
    {
      name: "SQL",
      description:
        "Building projects like editable video transcriptions (Coursera), 3d material store (ChaosGroup), student system with different roles, user search, event scheduling (Synthesis) made me appreciate how powerful and fun, yet also frustrating and complex relational databases/SQL can be.",
      priority: 4,
      img_url: "SQL",
    },
    {
      name: "React",
      description:
        "I've been using React for 7 (at TelerikAcademy, ChaosGroup, Coursera, Synthesis) years and I love what it offers - reusable components/hooks, terse and declarative code, comprehensible UI state management and reasonable performance. Some of the React features I use regularly are contexts, memos, refs, useEffect, useCallback, keys and fragments.",
      priority: -1,
      img_url: "React",
    },
    {
      name: "git",
      description:
        "Feature branches, rebasing, reflog, partial checkouts/stages, stashing - git is awesome, easily the best vcs for most software projects.",
      img_url: "Git",
    },
    {
      name: "OOP",
      description:
        "Before I became a functional programming hipster, I've explored OOP concepts (through working with C#, JS and Scala) such as class/prototypal inheritance, object composition, polymorphism and encapsulation. I also became familiar with design patterns such as decorators, chain of responsibility, command pattern, composite objects, factories and mediators.",
      priority: 9,
      img_url: "Oop",
    },
    {
      name: "NextJS",
      description:
        "I've used NextJS to optimize page loading times via SSR (Coursera), to build a production full-stack web app (portal.synthesis.is, pastes.konsimeonov.lol) and to generate static sites (this site). Server-side props, routing, nextauth, configuring nextjs builds, dynamic imports, custom middlewares and api routes are features which I use regularly and confidently.",
      img_url: "Nextjs",
      priority: 4,
    },
    {
      name: "AWS",
      description:
        "I've used SQS to implement notifications and client-facing APIs, AWS Transcribe to implement automatic subtitle generation for video lectures, S3 for storing environment variables, subtitles and hosting static sites, EC2 + ECS + ECR to deploy servers and jobs, RDS to provision Postgres instances, IAM for role/access management and Route 53/VPCs to secure and expose web applications. I'm also using the aws cli in github actions to automate deployments.",
      img_url: "AWS",
      priority: 3,
    },
  ],
} as const
