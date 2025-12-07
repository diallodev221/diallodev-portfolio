export type Language = "en" | "fr";

export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      services: "Services",
      works: "Works",
      skills: "Skills",
      blog: "Blog",
      resume: "Resume",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    // Home page
    home: {
      hero: {
        title: "BRIDGING",
        titleHighlight1: "TECHNOLOGY &",
        titleHighlight2: "BUSINESS",
        subtitle1: "Connecting Technology with Business needs",
        subtitle2: "Creating scalable, User-Centric Solutions",
        cta1: "Get in Touch",
        cta2: "View Projects",
      },
      valueProposition: {
        title: "How I Help Businesses",
        description:
          "I bridge the gap between technology and business needs, creating scalable, user-centric solutions that drive growth and improve efficiency for organizations of all sizes.",
        card1: {
          title: "Strategic Solutions",
          description:
            "Developing technology solutions aligned with your business goals and objectives.",
        },
        card2: {
          title: "User-Centric Design",
          description:
            "Creating intuitive interfaces that enhance user experience and drive engagement.",
        },
        card3: {
          title: "Scalable Architecture",
          description:
            "Building robust systems that grow with your business and adapt to changing needs.",
        },
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Solutions that deliver business value",
        viewAll: "View All Projects",
      },
      skills: {
        title: "Technical Expertise",
        description:
          "Leveraging modern technologies to build robust, scalable solutions that solve real business problems.",
        frontend: "Frontend Development",
        backend: "Backend Development",
        viewAll: "View All Skills",
      },
      blog: {
        title: "Latest Insights",
        description:
          "Thoughts and strategies on technology, business integration, and digital transformation",
        viewAll: "View All Articles",
      },
      cta: {
        title: "Ready to transform your business?",
        description:
          "Let's collaborate to bridge technology and business needs, creating scalable, user-centric solutions that drive growth, improve efficiency, and deliver exceptional results.",
        button: "Start a Project",
      },
    },
    // About page
    about: {
      title: "About Me",
      intro: {
        p1: "👋 Hi, I’m Saïfoulaye Diallo, a Software Engineer passionate about building scalable, high-performing, and user-friendly applications. My expertise spans the Java ecosystem (Spring Boot), microservices architectures, as well as modern front-end technologies like React and Angular. I’ve contributed to diverse projects, from small-scale applications to enterprise-grade systems.",
        p2: "💡 My journey in software development began at university, where I created small websites for local businesses. Since then, I’ve worked with both startups and large organizations such as BOA Group, developing robust solutions tailored to business needs.",
        p3: "🧠 I strongly believe in continuous learning, clean architecture, and knowledge sharing. Beyond coding, I enjoy writing technical articles and mentoring aspiring developers.",
        p4: "🌱 This website is my digital garden—a space where I document my journey, share insights on software development, architecture, and best practices, while growing alongside the tech community.",
      },
      experience: {
        title: "Work Experience",
        topExps: [
          {
            title: "Prestataire Software Engineer",
            company: "BOA Group",
            period: "Jan 2025 - Present",
            description:
              "Leading development of cloud-based SaaS applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
          },
          {
            title: "Consultant IT",
            company: "Eng Technologie groupe",
            period: "2017 - 2020",
            description:
              "Developed and maintained multiple client projects using JavaScript frameworks. Collaborated with design and product teams to deliver high-quality web applications.",
          },
          {
            title: "Software Engineer",
            company: "Mafalia",
            period: "Nov 2023 - Nov 2024",
            description:
              "Built responsive websites and interactive UIs for various clients. Focused on performance optimization and cross-browser compatibility.",
          },
          {
            title: "Full-Stack Developer",
            company: "SarayaTech Senegal",
            period: "Dec 2022 - Mars 2022",
            description:
              "Built responsive websites and interactive UIs for various clients. Focused on performance optimization and cross-browser compatibility.",
          },
        ],
        job1: {
          title: "Prestataire Software Engineer",
          company: "BOA Group",
          period: "Jan 2025 - Present",
          description:
            "Leading development of cloud-based SaaS applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
        },
        job2: {
          title: "Consultant IT",
          company: "Eng Technologie groupe",
          period: "2017 - 2020",
          description:
            "Developed and maintained multiple client projects using JavaScript frameworks. Collaborated with design and product teams to deliver high-quality web applications.",
        },
        job3: {
          title: "Software Engineer",
          company: "Mafalia",
          period: "Nov 2023 - Nov 2024",
          description:
            "Built responsive websites and interactive UIs for various clients. Focused on performance optimization and cross-browser compatibility.",
        },
        job4: {
          title: "Full-Stack Developer",
          company: "SarayaTech Senegal",
          period: "Dec 2022 - Mars 2022",
          description:
            "Built responsive websites and interactive UIs for various clients. Focused on performance optimization and cross-browser compatibility.",
        },
      },
      skills: {
        title: "Skills & Technologies",
        frontend: {
          title: "Frontend",
          items: [
            "React / Next.js / Angular",
            "JavaScript / TypeScript",
            "Tailwind CSS / Material UI",
            "Redux / Zustand",
            "HTML5 / CSS3",
          ],
        },
        backend: {
          title: "Backend",
          items: [
            "Java / J2EE / Spring Boot / Spring Cloud / Spring Batch / Spring MVC / Spring Integration",
            "NestJS / Node.js / Express",
            "REST APIs / GraphQL",
            "Oracle / PostgreSQL / MySQL / Redis / MongoDB",
            "Authentication / Security",
            "Microservices / Event-Driven Architecture",
            "Kafka / RabbitMQ / ActiveMQ",
            "Mockito / JUnit5",
            "Swagger / OpenAPI",
          ],
        },
        devops: {
          title: "DevOps",
          items: [
            "AWS / Azure / GCP / Vercel / Netlify",
            "Kubernetes / Docker",
            "Git / GitHub / GitLab",
            "CI/CD (Jenkins / GitHub Actions)",
            "Monitoring (Prometheus / Grafana)",
            "Agile / Scrum / Kanban",
            "Project Management (JIRA / Trello)",
            "Testing (JUnit / Mockito / Cypress)",
            "Testing (Jest / Cypress / Selenium)",
          ],
        },
        tools: {
          title: "Tools & Technologies",
          items: [
            "Visual Studio Code / IntelliJ IDEA / Eclipse",
            "Postman / Insomnia",
            "Figma",
            "Slack / Microsoft Teams",
            "Notion / Confluence",
            "Trello / JIRA",
            "Docker Desktop / Docker Compose",
            "Splunk / Graylog",
            "Sentry / New Relic",
            "JMeter / Gatling / Locust",
            "SonarQube / ESLint / PMD",
            "Build Automation (Maven / Gradle / NPM / YARN / PNPM)",
          ],
        },
      },
    },
    // Services page
    services: {
      title: "My Services",
      description:
        "I provide comprehensive technology solutions that bridge the gap between business needs and technical implementation, creating scalable, user-centric solutions that drive growth and efficiency.",
      getStarted: "Get Started",
      serviceItems: [
        {
          title: "Business Analysis",
          description:
            "Analyzing your business needs and translating them into technical requirements for effective solutions.",
          features: [
            "Requirements gathering",
            "Process analysis",
            "Technology assessment",
            "ROI evaluation",
            "Solution roadmapping",
          ],
        },
        {
          title: "Web Application Development",
          description:
            "Building scalable, user-friendly web applications that drive business growth and efficiency.",
          features: [
            "Custom web applications",
            "E-commerce platforms",
            "Business dashboards",
            "Client portals & internal dashboards",
            "Progressive Web Apps  (PWAs)",
          ],
        },
        {
          title: "API & Backend Development",
          description:
            "Creating robust APIs that connect systems and enable seamless data flow across your organization.",
          features: [
            "RESTful and GraphQL API design",
            "GraphQL implementation",
            "API documentation (Swagger/OpenAPI)",
            "Secure API implementation (OAuth2, JWT)",
            "Microservices architecture using Spring Boot",
          ],
        },
        {
          title: "Technical Consulting",
          description:
            "Providing expert advice on technology choices, architecture decisions, and development best practices.",
          features: [
            "Technology stack evaluation",
            "Architecture planning",
            "Code reviews & audits",
            "Performance optimization",
            "Security assessments",
          ],
        },
        {
          title: "Digital Transformation",
          description:
            "Helping businesses leverage technology to transform operations and create new opportunities.",
          features: [
            "Process automation",
            "Legacy system modernization",
            "Digital workflow optimization",
          ],
        },
        {
          title: "Mentoring & Technical Coaching",
          description:
            "Help your tech team grow with personalized coaching and knowledge sharing tailored to real-world scenarios.",
          features: [
            "Mentoring junior developers",
            "Code review sessions",
            "Training on Java, Spring Boot, React, Git, Docker, etc.",
          ],
        },
      ],
    },
    // Works page
    works: {
      title: "My Projects",
      description:
        "A showcase of business solutions that deliver measurable results and drive growth by connecting technology with business needs.",
      backToAllProjects: "Back to all projects",
      overview: "Overview",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      keyIssues: "Key Issues",
      keyFeatures: "Key Features",
      technologies: "Technologies",
      projectLinks: "Project Links",
      interestedInSimilarProject: "Interested in a similar project?",
      interestedInSimilarProjectDescription:
        "Let's discuss how I can help you achieve your business goals with a custom solution tailored to your specific needs.",
      contactMe: "Contact Me",
      similarProjects: "Similar Projects",
      client: "Client",
      duration: "Duration",
      completed: "Completed",
      noProjects: "No projects available at the moment.",
    },
    // Skills page
    skills: {
      title: "My Skills",
      description:
        "Technical expertise and business acumen to deliver solutions that bridge technology and business needs, creating scalable, user-centric solutions.",
      technical: {
        title: "Technical Skills",
        frontend: {
          title: "Frontend Development",
          skills: [
            { name: "React & Next.js & Angular", level: "95%" },
            { name: "JavaScript/TypeScript", level: "90%" },
            { name: "HTML/CSS/Tailwind", level: "95%" },
            { name: "Redux & Context API & Zustand", level: "85%" },
            { name: "Responsive Design", level: "90%" },
            { name: "Progressive Web Apps", level: "85%" },
            { name: "Web Accessibility (WCAG)", level: "80%" },
            { name: "Figma", level: "70%" },
            { name: "Web Performance Optimization", level: "90%" },
          ],
        },
        backend: {
          title: "Backend Development",
          skills: [
            {
              name: "Java - J2EE - Spring - Spring Boot - Spring Cloud",
              level: "90%",
            },
            { name: "NestJS - Node.js & Express", level: "90%" },
            { name: "RESTful APIs / GraphQL / gRPC", level: "95%" },
            {
              name: "Modular Monolithic - Microservices - Event-Driven Architecture",
              level: "90%",
            },
            { name: "RabbitMQ - Kafka - ActiveMQ", level: "85%" },
            { name: "Testing (JUnit - Mockito)", level: "90%" },
            { name: "Swagger - OpenAPI", level: "90%" },
            { name: "MySQL - Redis - Oracle - PostgreSQL", level: "90%" },
            { name: "JWT - OAuth - OpenID Connect - Security", level: "85%" },
          ],
        },
        devops: {
          title: "DevOps",
          skills: [
            { name: "AWS - GCP - Netlify", level: "90%" },
            { name: "Kubernetes - Docker ", level: "85%" },
            {
              name: "CI/CD (Jenkins & GitHub Actions & Gitlab CI)",
              level: "90%",
            },
            { name: "Monitoring (Prometheus & Grafana)", level: "85%" },
            { name: "Agile - Scrum - Kanban", level: "90%" },
          ],
        },
        database: {
          title: "Database Management",
          skills: [
            {
              name: "Oracle - PostgreSQL - MySQL - Redis - MongoDB",
              level: "90%",
            },
            { name: "Database Design", level: "85%" },
            { name: "Stored Procedures", level: "80%" },
            { name: "Database Optimization", level: "85%" },
            { name: "Data Migration", level: "80%" },
          ],
        },
      },
      business: {
        title: "Business Skills",
        skills: [
          {
            title: "Problem Solving",
            description:
              "Identifying business challenges and developing effective technical solutions.",
          },
          {
            title: "Strategic Planning",
            description:
              "Developing technology roadmaps aligned with business objectives and growth targets.",
          },
          {
            title: "Client Communication",
            description:
              "Translating technical concepts into business language that stakeholders understand.",
          },
        ],
      },
      tools: {
        title: "Tools & Technologies",
      },
    },
    // Blog page
    // blog: {
    //   title: "Blog",
    //   description:
    //     "Insights on technology, business integration, and digital transformation strategies",
    //   featured: "Featured",
    //   readArticle: "Read Article",
    //   categories: "Categories",
    //   subscribe: "Subscribe",
    //   subscribeText:
    //     "Get the latest articles and insights delivered to your inbox.",
    //   yourEmail: "Your email address",
    //   subscribeButton: "Subscribe",
    //   loadMore: "Load More Articles",
    //   date: "Date",
    //   readTime: "Read Time",
    //   author: "Author",
    //   relatedArticles: "Related Articles",
    //   backToAllArticles: "Back to all articles",
    //   whatToExpect: "What to expect",
    //   previousIssues: "Previous Issues",
    //   expectationItems: [
    //     {
    //       title: "Tutorials & Guides",
    //       description:
    //         "Step-by-step tutorials and comprehensive guides on web development topics, from beginner to advanced.",
    //     },
    //     {
    //       title: "Code Snippets",
    //       description:
    //         "Useful code snippets and solutions to common programming challenges that you can use in your projects.",
    //     },
    //     {
    //       title: "Industry News",
    //       description:
    //         "Updates on the latest frameworks, libraries, and tools in the web development ecosystem.",
    //     },
    //     {
    //       title: "Career Advice",
    //       description:
    //         "Tips and insights on advancing your career as a developer, including interview preparation and skill development.",
    //     },
    //   ],
    // },
    // Resume page
    resume: {
      title: "Resume",
      subtitle: "My professional experience and qualifications",
      downloadCV: "Download CV",
      experience: {
        title: "Work Experience",
        companies: [
          {
            name: "BOA (Bank of Africa) Group",
            position: "Software Engineer",
            period: "Jan 2025 — Present",
            description:
              "Redesign of BOA’s core business application. Contributed to the modernization of the backend architecture using Java & Spring Boot by designing and optimizing several critical business services to improve system performance and reliability.",
            subInfos: [
              // "Designed and implemented a new microservices-based architecture",
              // "Optimized performance using Redis caching and Elasticsearch indexing",
              // "Set up automated testing and continuous integration using Jenkins",
            ],
          },
          {
            name: "ENG Technologie Group",
            position: "IT Consultant",
            period: "Jul 2023 — Feb 2025",
            description:
              "Designed a comprehensive credit request management system for microfinance institutions with integration of Wave & Orange Money APIs using Java, Spring Boot, AWS Cloud, and React.",
            subInfos: [
              "Developed RESTful APIs to integrate with Wave and Orange Money",
              "Built a cloud-native architecture on AWS with Docker containerization",
              "Implemented security features and OAuth2 authentication",
            ],
          },
          {
            name: "Mafalia",
            position: "Frontend Developer",
            period: "Nov 2023 — Nov 2024",
            description:
              "Frontend development of a custom supply chain management platform tailored for FMCG and hospitality sectors using Angular. Improved UI/UX design and interactions for better usability.",
            subInfos: [
              // "Developed reusable and modular Angular components",
              // "Enhanced frontend performance through lazy loading and SSR",
              // "Integrated data visualizations with D3.js and state management using NgRx",
            ],
          },
          {
            name: "SarayaTech Senegal",
            position: "Full-Stack Developer",
            period: "Dec 2022 — Feb 2023",
            description:
              "Developed a web application for human resources management using Spring Boot and Angular. Implemented core features like leave tracking, performance management, and advanced reporting.",
            subInfos: [
              "Created a modern full-stack architecture with Spring Boot and Angular",
              "Set up PostgreSQL database with migration handling",
              // "Built an advanced reporting system using JasperReports",
            ],
          },
        ],
        volunteer: [
          // {
          //   name: "Vie publique du Sénégal",
          //   position: "Technical contributor - Member",
          //   period: "Oct 2024 — Present",
          //   description:
          //     "Contributing to open-source projects and technical initiatives for public service improvement in Senegal.",
          //   subInfos: [],
          // },
          // {
          //   name: "Jiggen Tech",
          //   position: "Technical mentor - Member",
          //   period: "Jan 2013 — Present",
          //   description:
          //     "Mentoring aspiring developers and contributing to tech community initiatives in Senegal.",
          //   subInfos: [],
          // },
          // {
          //   name: "Dakar Ruby Brigade",
          //   position: "Admin, Member",
          //   period: "Jan 2011 — Present",
          //   description:
          //     "Organizing Ruby community events, workshops, and contributing to open-source Ruby projects.",
          //   subInfos: [],
          // },
          // {
          //   name: "Weekend Startups Dakar",
          //   position: "Technical mentor - Member",
          //   period: "Jan 2018 — Apr 2021",
          //   description:
          //     "Mentoring startup founders and developers on technical best practices and architecture.",
          //   subInfos: [],
          // },
        ],
        trainerMentor: [
          // {
          //   name: "Force N",
          //   position: "Mentor - Learning",
          //   period: "Present",
          //   location: "Dakar, Senegal",
          //   description:
          //     "Mentoring students in software development and providing guidance on career paths in tech.",
          //   subInfos: [],
          // },
          // {
          //   name: "Sonatel Academy",
          //   position: "Independent speaker - Trainer",
          //   period: "Present",
          //   location: "Dakar, Senegal",
          //   description:
          //     "Delivering technical training sessions on modern web development, microservices architecture, and best practices.",
          //   subInfos: [],
          // },
          // {
          //   name: "Edacy",
          //   position: "Trainer - Learning",
          //   period: "Present",
          //   location: "Dakar, Senegal",
          //   description:
          //     "Training students in full-stack development, focusing on practical skills and real-world projects.",
          //   subInfos: [],
          // },
          // {
          //   name: "SIR FST/UCAD",
          //   position: "Trainer - Learning",
          //   period: "Present",
          //   location: "Dakar, Senegal",
          //   description:
          //     "Teaching software engineering courses and mentoring computer science students.",
          //   subInfos: [],
          // },
          // {
          //   name: "OpenClassrooms",
          //   position: "Mentor - Learning",
          //   period: "Present",
          //   location: "Remote, Dakar, Senegal",
          //   description:
          //     "Providing one-on-one mentorship to students pursuing software development careers online.",
          //   subInfos: [],
          // },
          // {
          //   name: "SpringBoard",
          //   position: "Mentor - Learning",
          //   period: "Present",
          //   location: "Dakar, Senegal",
          //   description:
          //     "Mentoring bootcamp students in software engineering and helping them transition into tech careers.",
          //   subInfos: [],
          // },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Master Software Engineering",
            school: "Digital Virtuelle University of Senegal",
            period: "2024 - ",
            description:
              "Focus on software engineering. Coursework included advanced programming, database design, systems architecture, providing a solid foundation for enterprise software development.",
          },
          {
            degree: "Bachelor of Science in Computer Science",
            school: "Digital Virtuelle University of Senegal",
            period: "2020 - 2023",
            description:
              "Focus on software engineering. Coursework included advanced programming, database design, systems architecture, providing a solid foundation for enterprise software development.",
          },
        ],
      },
      competencies: {
        title: "Core Competencies",
        items: [
          { name: "Business Analysis", level: "95%" },
          { name: "Solution Architecture", level: "90%" },
          { name: "Full Stack Development", level: "95%" },
          { name: "Project Management", level: "85%" },
          { name: "Digital Transformation", level: "90%" },
        ],
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "Full-Stack Java Developer",
            issuer: "SarayaTech Senegal",
            year: "2020",
          },
          // {
          //   name: "AWS Certified Solutions Architect",
          //   issuer: "Amazon Web Services",
          //   year: "2020",
          // },
          // {
          //   name: "Certified Scrum Master",
          //   issuer: "Scrum Alliance",
          //   year: "2019",
          // },
          // {
          //   name: "Professional Project Manager (PMP)",
          //   issuer: "Project Management Institute",
          //   year: "2018",
          // },
          // {
          //   name: "Microsoft Certified: Azure Solutions Architect",
          //   issuer: "Microsoft",
          //   year: "2021",
          // },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "English", level: "100%", proficiency: "Native" },
          { name: "French", level: "85%", proficiency: "Professional" },
        ],
      },
    },
    // Contact page
    contact: {
      title: "Get In Touch",
      description:
        "Ready to discuss your project? I'm here to help you bridge technology and business needs with scalable, user-centric solutions that drive growth.",
      location: {
        title: "Location",
        value: "Dakar, Senegal",
      },
      email: {
        title: "Email",
        value: "contact@diallodev.com",
      },
      phone: {
        title: "Phone",
        value: "+221 771244151",
      },
      connectWithMe: "Connect with me",
      form: {
        title: "Send me a message",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "What's this about?",
        message: "Message",
        messagePlaceholder: "Your message...",
        send: "Send Message",
      },
    },
    // Footer
    footer: {
      tagline: "Bridging Technology & Business",
      copyright: "© 2025 Diallodev. All rights reserved.",
    },
    // Language
    language: {
      en: "English",
      fr: "French",
      select: "Select language",
    },
    preloader: {
      title: "BRIDGING TECHNOLOGY & BUSINESS",
      subtitle: "Creating scalable, user-centric solutions",
    },
    // Home Page (app/page.tsx)
    homePage: {
      hero: {
        greeting: "Hi, I'm",
        subtitle:
          "Full-Stack Software Engineer | Software Architect | Java & Spring Boot Expert",
        stats: {
          yearsExperience: "Years Experience",
          projectsDelivered: "Projects Delivered",
          technologies: "Technologies",
          clientSatisfaction: "Client Satisfaction",
        },
        cta: "Explore Services",
      },
      portfolio: {
        title: "Portfolio",
        description: "Business solutions that deliver measurable results",
      },
      services: {
        keyFeatures: "Key Features:",
      },
      about: {
        title: "About me",
        expertise: {
          title: "Expertise",
          items: {
            item1: "Full-Stack Development (Java, Spring Boot, React, Angular)",
            item2: "Microservices Architecture & Event-Driven Systems",
            item3: "Cloud Solutions (AWS, Docker, Kubernetes)",
            item4: "API Design & Integration (REST, GraphQL)",
          },
        },
        experience: {
          title: "Experience",
          items: {
            item1:
              "Worked with enterprise clients (BOA Group, ENG Technologies)",
            item2: "Led development of scalable business solutions",
            item3: "Mentored junior developers and conducted training",
            item4: "Delivered projects on time with high quality standards",
          },
        },
        bio: "Passionate Software Engineer with 5+ years of experience building scalable, high-performing applications. Specialized in Java/Spring Boot ecosystems and modern frontend frameworks. I bridge technology and business needs, delivering solutions that drive growth and efficiency.",
      },
      skills: {
        title: "Skills",
        description:
          "Technical expertise and interpersonal skills for delivering exceptional results",
        technical: {
          title: "Technical Skills",
          description: "Technologies, frameworks, and tools I master",
          coreTechnologies: "Core Technologies",
        },
        soft: {
          title: "Soft Skills",
          description: "Interpersonal and business competencies",
          additional: "Additional Competencies",
          additionalItems: [
            "Team Leadership",
            "Agile Methodology",
            "Project Management",
            "Client Relations",
            "Technical Writing",
            "Code Review",
            "Mentoring",
            "Problem Solving",
            "Critical Thinking",
            "Time Management",
          ],
        },
      },
      experience: {
        title: "Experience",
        description:
          "Professional journey, community involvement, and knowledge sharing",
        work: {
          title: "Work Experience",
          description: "Professional positions and achievements",
          keyAchievements: "Key Achievements:",
        },
        volunteer: {
          title: "Volunteer Experience",
          description: "Community involvement and contributions",
        },
        trainerMentor: {
          title: "Trainer / Mentor Experience",
          description: "Knowledge sharing and education",
        },
        education: {
          title: "Education",
          description: "Academic qualifications and certifications",
        },
      },
    },
  },
  fr: {
    // Navigation
    nav: {
      about: "À Propos",
      services: "Services",
      works: "Projets",
      skills: "Compétences",
      blog: "Blog",
      resume: "CV",
      contact: "Contact",
      hireMe: "Engagez-moi",
    },
    // Home page
    home: {
      hero: {
        title: "RELIER",
        titleHighlight1: "TECHNOLOGIE &",
        titleHighlight2: "BUSINESS",
        subtitle1: "Connecter la technologie aux besoins des entreprises",
        subtitle2: "Créer des solutions évolutives centrées sur l'utilisateur",
        cta1: "Me Contacter",
        cta2: "Voir les Projets",
      },
      valueProposition: {
        title: "Comment J'aide les Entreprises",
        description:
          "Je comble le fossé entre la technologie et les besoins des entreprises, en créant des solutions évolutives centrées sur l'utilisateur qui stimulent la croissance et améliorent l'efficacité pour les organisations de toutes tailles.",
        card1: {
          title: "Solutions Stratégiques",
          description:
            "Développer des solutions technologiques alignées sur vos objectifs d'affaires.",
        },
        card2: {
          title: "Design Centré Utilisateur",
          description:
            "Créer des interfaces intuitives qui améliorent l'expérience utilisateur et favorisent l'engagement.",
        },
        card3: {
          title: "Architecture Évolutive",
          description:
            "Construire des systèmes robustes qui évoluent avec votre entreprise et s'adaptent aux besoins changeants.",
        },
      },
      projects: {
        title: "Projets en Vedette",
        subtitle: "Des solutions qui apportent une valeur commerciale",
        viewAll: "Voir Tous les Projets",
      },
      skills: {
        title: "Expertise Technique",
        description:
          "Utiliser les technologies modernes pour construire des solutions robustes et évolutives qui résolvent de vrais problèmes d'entreprise.",
        frontend: "Développement Frontend",
        backend: "Développement Backend",
        viewAll: "Voir Toutes les Compétences",
      },
      blog: {
        title: "Dernières Réflexions",
        description:
          "Pensées et stratégies sur la technologie, l'intégration commerciale et la transformation numérique",
        viewAll: "Voir Tous les Articles",
      },
      cta: {
        title: "Prêt à transformer votre entreprise?",
        description:
          "Collaborons pour relier la technologie et les besoins des entreprises, en créant des solutions évolutives centrées sur l'utilisateur qui stimulent la croissance, améliorent l'efficacité et offrent des résultats exceptionnels.",
        button: "Démarrer un Projet",
      },
    },
    // About page
    about: {
      title: "À Propos de Moi",
      intro: {
        p1: "👋 Bonjour, je suis Saïfoulaye Diallo, Ingénieur logiciel passionné par la conception et le développement d’applications scalables, performantes et centrées sur l’utilisateur. Mon expertise s’étend de l’écosystème Java (Spring Boot) et des architectures microservices aux technologies front-end modernes comme React et Angular. J’ai eu l’opportunité de contribuer à des projets variés, allant d’applications locales à des systèmes complexes de niveau entreprise.",
        p2: "💡 Mon aventure dans le développement a commencé à l’université, où je réalisais de petits sites web pour des entreprises locales. Depuis, j’ai accompagné aussi bien des startups que de grands groupes tels que BOA Group, en développant des solutions robustes et adaptées aux besoins métiers.",
        p3: "🧠 Convaincu de la valeur de l’apprentissage continu, de l’architecture propre et du partage de connaissances, j’aime transmettre mon expérience à travers des articles techniques et le mentorat de jeunes développeurs.",
        p4: "🌱 Ce site est mon espace numérique : un lieu où je documente mon parcours, partage mes réflexions sur le développement logiciel, l’architecture et les bonnes pratiques, tout en évoluant aux côtés de la communauté tech.",
      },
      experience: {
        title: "Expérience Professionnelle",
        topExps: [
          {
            title: "Ingénieur logiciel",
            company: "BOA Group",
            period: "Jan 2025 - Présent",
            description:
              "Diriger le développement d'applications SaaS cloud utilisant React, Node.js et AWS. Mise en place de pipelines CI/CD et mentorat de développeurs juniors.",
          },
          {
            title: "Consultant IT",
            company: "Eng Technologie groupe",
            period: "2017 - 2020",
            description:
              "Développement et maintenance de plusieurs projets clients en utilisant des frameworks JavaScript. Collaboration avec les équipes de design et produit pour livrer des applications web de haute qualité.",
          },
          {
            title: "Ingénieur Logiciel",
            company: "Mafalia",
            period: "Nov 2023 - Nov 2024",
            description:
              "Création de sites web responsives et d'interfaces interactives pour divers clients. Focus sur l'optimisation des performances et la compatibilité multi-navigateurs.",
          },
          {
            title: "Développeur Full-Stack",
            company: "SarayaTech Senegal",
            period: "Déc 2022 - Mars 2022",
            description:
              "Création de sites web responsives et d'interfaces interactives pour divers clients. Focus sur l'optimisation des performances et la compatibilité multi-navigateurs.",
          },
        ],
        job1: {
          title: "Ingénieur logicielle",
          company: "BOA (Bank of Africa) Group",
          period: "Jan 2025 - Présent",
          description:
            "Refonte de l’application métier de la BOA (Bank of Africa). Intervenu sur la modernisation de l’architecture back-end avec Java & Spring Boot, j’ai conçu et optimisé plusieurs services métiers critiques pour améliorer la performance et la fiabilité du système.",
        },
        job2: {
          title: "Consultant IT",
          company: "ENG Technologie Groupe",
          period: "Jul 2023 - Feb 2025",
          description:
            "Conception d’un système complet de gestion de demandes de crédit pour les microfinances avec intégration des APIs Wave & Orange Money utilisant Java, Spring Boot, AWS cloud, React",
        },
        job3: {
          title: "Développeur Frontend",
          company: "Mafalia",
          period: "Nov 2023 - Nov 2024",
          description:
            "Développement frontal d'une plateforme de gestion de la chaîne d'approvisionnement personnalisée, adaptée aux secteurs des biens de consommation à rotation rapide et de l'hôtellerie, en utilisant Angular, en améliorant la conception de l'interface utilisateur et l'interaction pour une meilleure convivialité.",
        },
        job4: {
          title: "Développeur Full-Stack",
          company: "SarayaTech Senegal",
          period: "Déc 2022 - Mars 2022",
          description:
            "Création de sites web responsives et d'interfaces interactives pour divers clients. Focus sur l'optimisation des performances et la compatibilité multi-navigateurs.",
        },
      },
      skills: {
        title: "Compétences & Technologies",
        frontend: {
          title: "Frontend",
          items: [
            "React / Next.js / Angular",
            "JavaScript / TypeScript",
            "Tailwind CSS",
            "Redux / Zustand",
            "HTML5 / CSS3",
          ],
        },
        backend: {
          title: "Backend",
          items: [
            "Java / J2EE / Spring Boot",
            "REST & GraphQL APIs",
            "Node.js / Express",
            "MongoDB, Redis",
            "PostgreSQL, MySQL, Oracle",
          ],
        },
        devops: {
          title: "DevOps",
          items: [
            "AWS, GCP, Netlify, Vercel",
            "Docker, Kubernetes",
            "CI/CD, Pipelines",
            "Git / GitHub, Gitlab",
            "Testing (Jest, Cypress)",
          ],
        },
        tools: {
          title: "Outils & Technologies",
          items: [
            "Visual Studio Code / IntelliJ IDEA / Eclipse",
            "Postman / Insomnia",
            "Figma",
            "Slack / Microsoft Teams",
            "Notion / Confluence",
            "Trello / JIRA",
            "Docker Desktop / Docker Compose",
            "Splunk / Graylog",
            "Sentry / New Relic",
            "JMeter / Gatling / Locust",
            "SonarQube / ESLint / PMD",
            "Automatisation de Build (Maven / Gradle / NPM / YARN / PNPM)",
          ],
        },
      },
    },
    // Services page
    services: {
      title: "Mes Services",
      description:
        "Je fournis des solutions technologiques complètes qui comblent le fossé entre les besoins commerciaux et la mise en œuvre technique, créant des solutions évolutives centrées sur l'utilisateur qui stimulent la croissance et l'efficacité.",
      getStarted: "Commencer",
      serviceItems: [
        {
          title: "Analyse d'Affaires",
          description:
            "Analyser vos besoins commerciaux et les traduire en exigences techniques pour des solutions efficaces.",
          features: [
            "Collecte des exigences",
            "Analyse des processus",
            "Évaluation technologique",
            "Évaluation du ROI",
            "Feuille de route des solutions",
          ],
        },
        {
          title: "Développement d'Applications Web",
          description:
            "Construire des applications web évolutives et conviviales qui stimulent la croissance et l'efficacité des entreprises.",
          features: [
            "Applications web sur mesure (B2B/B2C)",
            "Portails clients & tableaux de bord internes",
            "Tableaux de bord d'entreprise",
            "Plateformes e-commerce",
            "Applications Web Progressives",
          ],
        },
        {
          title: "Développement d’API & Backend",
          description:
            "Concevoir et implémenter des backends robustes et des APIs modernes pour vos applications.",
          features: [
            "Conception & Implémentation d'API RESTful / GraphQL",
            "Documentation technique (Swagger/OpenAPI)",
            "Sécurisation des API (OAuth2, JWT)",
            "Services de microservices avec Spring Boot",
          ],
        },
        {
          title: "Conseil Technique",
          description:
            "Aider à faire les bons choix techniques pour une base fiable, évolutive et sécurisée.",
          features: [
            "Évaluation de la stack technologique",
            "Conception d'architecture scalable (Hexagonale, Microservices…)",
            "Revues et audits de code",
            "Optimisation des performances",
            "Évaluations de sécurité",
          ],
        },
        {
          title: "Transformation Numérique",
          description:
            "Aider les entreprises à exploiter la technologie pour transformer les opérations et créer de nouvelles opportunités.",
          features: [
            "Automatisation des processus",
            "Modernisation des systèmes hérités",
            "Optimisation des flux de travail numériques",
          ],
        },
        {
          title: "Mentorat & Coaching Technique",
          description:
            "Accompagner les équipes ou développeurs dans leur montée en compétences techniques.",
          features: [
            "Mentorat pour développeurs juniors",
            "Sessions de revue de code",
            "Présentations techniques (équipe ou direction)",
            "Formateur (Java, Spring Boot, React, Git, Docker…)",
          ],
        },
      ],
    },
    // Works page
    works: {
      title: "Mes Projets",
      description:
        "Une vitrine de solutions d'entreprise qui offrent des résultats mesurables et stimulent la croissance en connectant la technologie aux besoins commerciaux.",
      backToAllProjects: "Retour à tous les projets",
      overview: "Aperçu",
      challenge: "Défi",
      solution: "Solution",
      results: "Résultats",
      keyIssues: "Problématiques Clés",
      keyFeatures: "Fonctionnalités Clés",
      technologies: "Technologies",
      projectLinks: "Liens du Projet",
      interestedInSimilarProject: "Intéressé par un projet similaire ?",
      interestedInSimilarProjectDescription:
        "Discutons de la manière dont je peux vous aider à atteindre vos objectifs commerciaux avec une solution personnalisée adaptée à vos besoins spécifiques.",
      contactMe: "Contactez-moi",
      similarProjects: "Projets Similaires",
      client: "Client",
      duration: "Durée",
      completed: "Terminé",
      noProjects: "Aucun projet disponible pour le moment.",
    },
    // Skills page
    skills: {
      title: "Mes Compétences",
      description:
        "Expertise technique pointue et compréhension approfondie des enjeux business pour créer des solutions innovantes, évolutives et centrées utilisateur qui génèrent une réelle valeur ajoutée.",
      technical: {
        title: "Compétences Techniques",
        frontend: {
          title: "Développement Frontend",
          skills: [
            { name: "React, Next.js & Angular", level: "95%", years: "4+" },
            { name: "JavaScript & TypeScript", level: "90%", years: "5+" },
            { name: "HTML5/CSS3/Tailwind/SASS", level: "95%", years: "5+" },
            { name: "Redux, Zustand & Context API", level: "85%", years: "3+" },
            {
              name: "Design Responsive & Mobile First",
              level: "90%",
              years: "4+",
            },
            { name: "Web Performance & SEO", level: "85%", years: "3+" },
            {
              name: "Tests (Jest, React Testing Library)",
              level: "85%",
              years: "3+",
            },
          ],
        },
        backend: {
          title: "Développement Backend",
          skills: [
            {
              name: "Java/J2EE, Spring Boot & Spring Cloud",
              level: "90%",
              years: "4+",
            },
            { name: "NestJS & Node.js Express", level: "90%", years: "3+" },
            { name: "REST, GraphQL & gRPC APIs", level: "95%", years: "4+" },
            { name: "Microservices & Event-Driven", level: "85%", years: "3+" },
            {
              name: "OAuth2, JWT & Spring Security",
              level: "85%",
              years: "3+",
            },
            {
              name: "Tests (JUnit, Mockito, TestContainers)",
              level: "85%",
              years: "3+",
            },
          ],
        },
        devops: {
          title: "DevOps & Cloud",
          skills: [
            { name: "AWS (EC2, S3, Lambda, RDS)", level: "90%", years: "3+" },
            { name: "Docker & Kubernetes", level: "85%", years: "2+" },
            {
              name: "CI/CD (Jenkins, GitHub Actions)",
              level: "90%",
              years: "3+",
            },
            { name: "Git, GitHub & GitLab", level: "95%", years: "5+" },
            {
              name: "Monitoring (Prometheus, Grafana)",
              level: "80%",
              years: "2+",
            },
          ],
        },
        database: {
          title: "Bases de Données & Data",
          skills: [
            { name: "PostgreSQL, MySQL & Oracle", level: "90%", years: "4+" },
            { name: "MongoDB & Redis", level: "85%", years: "3+" },
            { name: "Modélisation & Optimisation", level: "85%", years: "4+" },
            { name: "Migration & ETL", level: "80%", years: "2+" },
            { name: "Data Analysis & Reporting", level: "80%", years: "2+" },
          ],
        },
      },
      business: {
        title: "Compétences Business",
        skills: [
          {
            title: "Analyse & Stratégie",
            description:
              "Capacité à analyser les besoins business complexes et à élaborer des solutions technologiques stratégiques.",
          },
          {
            title: "Gestion de Projet Agile",
            description:
              "Expérience dans la direction de projets IT avec méthodologies Agile/Scrum et outils modernes.",
          },
          {
            title: "Communication",
            description:
              "Excellence dans la communication technique et business, facilitant la collaboration entre équipes.",
          },
          {
            title: "Innovation & Veille",
            description:
              "Veille technologique active et capacité à identifier/implémenter des solutions innovantes.",
          },
        ],
      },
      tools: {
        title: "Outils & Environnements",
        categories: [
          {
            name: "IDE & Éditeurs",
            tools: ["IntelliJ IDEA", "VS Code", "Eclipse"],
          },
          {
            name: "Collaboration",
            tools: ["Jira", "Confluence", "Slack", "Teams"],
          },
          {
            name: "Design & UI",
            tools: ["Figma", "Adobe XD", "Sketch"],
          },
        ],
      },
    },
    // Blog page
    // blog: {
    //   title: "Blog",
    //   description:
    //     "Réflexions sur la technologie, l'intégration commerciale et les stratégies de transformation numérique",
    //   featured: "À la une",
    //   readArticle: "Lire l'article",
    //   categories: "Catégories",
    //   subscribe: "S'abonner",
    //   subscribeText:
    //     "Recevez les derniers articles et insights directement dans votre boîte de réception.",
    //   yourEmail: "Votre adresse email",
    //   subscribeButton: "S'abonner",
    //   loadMore: "Charger plus d'articles",
    //   date: "Date",
    //   readTime: "Temps de lecture",
    //   author: "Auteur",
    //   relatedArticles: "Articles connexes",
    //   backToAllArticles: "Retour à tous les articles",
    //   whatToExpect: "À quoi s'attendre",
    //   previousIssues: "Numéros précédents",
    //   expectationItems: [
    //     {
    //       title: "Tutoriels & Guides",
    //       description:
    //         "Tutoriels étape par étape et guides complets sur les sujets de développement web, du débutant à l'avancé.",
    //     },
    //     {
    //       title: "Extraits de Code",
    //       description:
    //         "Extraits de code utiles et solutions aux défis de programmation courants que vous pouvez utiliser dans vos projets.",
    //     },
    //     {
    //       title: "Actualités de l'Industrie",
    //       description:
    //         "Mises à jour sur les derniers frameworks, bibliothèques et outils dans l'écosystème du développement web.",
    //     },
    //     {
    //       title: "Conseils de Carrière",
    //       description:
    //         "Conseils et insights pour faire progresser votre carrière de développeur, y compris la préparation aux entretiens et le développement des compétences.",
    //     },
    //   ],
    // },
    // Resume page
    resume: {
      title: "CV",
      subtitle: "Mon expérience professionnelle et mes qualifications",
      downloadCV: "Télécharger CV",
      experience: {
        title: "Expérience Professionnelle",
        companies: [
          {
            name: "BOA (Bank of Africa) Group",
            position: "Ingénieur logicielle",
            period: "Jan 2025 — Présent",
            description:
              "Refonte de l'application métier de la BOA (Bank of Africa). Intervenu sur la modernisation de l'architecture back-end avec Java & Spring Boot, j'ai conçu et optimisé plusieurs services métiers critiques pour améliorer la performance et la fiabilité du système.",
            subInfos: [
              // "Conception et implémentation d'une nouvelle architecture microservices",
              // "Optimisation des performances avec mise en cache Redis et indexation Elasticsearch",
              // "Mise en place de tests automatisés et intégration continue avec Jenkins",
            ],
          },
          {
            name: "ENG Technologie Groupe",
            position: "Consultant IT",
            period: "Jul 2023 — Feb 2025",
            description:
              "Conception d'un système complet de gestion de demandes de crédit pour les microfinances avec intégration des APIs Wave & Orange Money utilisant Java, Spring Boot, AWS cloud, React",
            subInfos: [
              "Développement d'APIs RESTful pour l'intégration avec Wave et Orange Money",
              "Mise en place d'une architecture cloud-native sur AWS avec conteneurisation Docker",
              "Implémentation de fonctionnalités de sécurité et authentification OAuth2",
            ],
          },
          {
            name: "Mafalia",
            position: "Développeur Frontend",
            period: "Nov 2023 — Nov 2024",
            description:
              "Développement frontal d'une plateforme de gestion de la chaîne d'approvisionnement personnalisée, adaptée aux secteurs des biens de consommation à rotation rapide et de l'hôtellerie, en utilisant Angular, en améliorant la conception de l'interface utilisateur et l'interaction pour une meilleure convivialité.",
            subInfos: [
              // "Développement de composants Angular réutilisables et modulaires",
              // "Optimisation des performances frontend avec lazy loading et SSR",
              // "Intégration de visualisations de données avec D3.js et NgRx pour la gestion d'état",
            ],
          },
          {
            name: "SarayaTech Senegal",
            position: "Développeur FullStack",
            period: "Dec 2022 — Feb 2023",
            description:
              "Développement d'une application web de gestion des ressources humaines avec Spring Boot et Angular. Implémentation de fonctionnalités clés comme le suivi des congés, la gestion des performances et le reporting.",
            subInfos: [
              "Création d'une architecture full-stack moderne avec Spring Boot et Angular",
              "Mise en place d'une base de données PostgreSQL avec gestion des migrations",
              // "Développement d'un système de reporting avancé avec JasperReports",
            ],
          },
        ],
        volunteer: [
          {
            name: "Vie publique du Sénégal",
            position: "Contributeur technique - Membre",
            period: "Oct 2024 — Présent",
            description:
              "Contribution à des projets open-source et initiatives techniques pour l'amélioration des services publics au Sénégal.",
            subInfos: [],
          },
          {
            name: "Jiggen Tech",
            position: "Mentor technique - Membre",
            period: "Jan 2013 — Présent",
            description:
              "Mentorat de développeurs en devenir et contribution aux initiatives de la communauté tech au Sénégal.",
            subInfos: [],
          },
          {
            name: "Dakar Ruby Brigade",
            position: "Admin, Membre",
            period: "Jan 2011 — Présent",
            description:
              "Organisation d'événements et d'ateliers de la communauté Ruby, contribution à des projets Ruby open-source.",
            subInfos: [],
          },
          {
            name: "Weekend Startups Dakar",
            position: "Mentor technique - Membre",
            period: "Jan 2018 — Avr 2021",
            description:
              "Mentorat de fondateurs de startups et développeurs sur les meilleures pratiques techniques et l'architecture.",
            subInfos: [],
          },
        ],
        trainerMentor: [
          {
            name: "Force N",
            position: "Mentor - Apprentissage",
            period: "Présent",
            location: "Dakar, Senegal",
            description:
              "Mentorat d'étudiants en développement logiciel et orientation sur les parcours de carrière dans la tech.",
            subInfos: [],
          },
          {
            name: "Sonatel Academy",
            position: "Conférencier indépendant - Formateur",
            period: "Présent",
            location: "Dakar, Senegal",
            description:
              "Animation de sessions de formation technique sur le développement web moderne, l'architecture microservices et les meilleures pratiques.",
            subInfos: [],
          },
          {
            name: "Edacy",
            position: "Formateur - Apprentissage",
            period: "Présent",
            location: "Dakar, Senegal",
            description:
              "Formation d'étudiants en développement full-stack, axée sur les compétences pratiques et les projets réels.",
            subInfos: [],
          },
          {
            name: "SIR FST/UCAD",
            position: "Formateur - Apprentissage",
            period: "Présent",
            location: "Dakar, Senegal",
            description:
              "Enseignement de cours d'ingénierie logicielle et mentorat d'étudiants en informatique.",
            subInfos: [],
          },
          {
            name: "OpenClassrooms",
            position: "Mentor - Apprentissage",
            period: "Présent",
            location: "Remote, Dakar, Senegal",
            description:
              "Mentorat individuel d'étudiants poursuivant des carrières en développement logiciel en ligne.",
            subInfos: [],
          },
          {
            name: "SpringBoard",
            position: "Mentor - Apprentissage",
            period: "Présent",
            location: "Dakar, Senegal",
            description:
              "Mentorat d'étudiants de bootcamp en ingénierie logicielle et aide à leur transition vers des carrières dans la tech.",
            subInfos: [],
          },
        ],
      },
      education: {
        title: "Formation",
        items: [
          {
            degree: "Master en Ingénieurie logiciel",
            school: "Université Cheikh Hamidou Kane",
            period: "2024 - Present",
            description:
              "Concentration sur l'ingénierie logicielle et les systèmes d'information d'entreprise. Les cours comprenaient la programmation avancée, la conception de bases de données, l'architecture de systèmes et la modélisation des processus d'entreprise, fournissant une base solide pour le développement de logiciels d'entreprise.",
          },
          {
            degree: "Licence Mathématiques et Informatiques",
            school: "Université Cheikh Hamidou Kane",
            period: "Jan 2020 - Feb 2023",
            description:
              "Concentration sur l'ingénierie logicielle et les systèmes d'information d'entreprise. Les cours comprenaient la programmation avancée, la conception de bases de données, l'architecture de systèmes et la modélisation des processus d'entreprise, fournissant une base solide pour le développement de logiciels d'entreprise.",
          },
        ],
      },
      competencies: {
        title: "Compétences Principales",
        items: [
          { name: "Architecture de Solutions", level: "90%" },
          { name: "Développement Full Stack", level: "95%" },
          { name: "Gestion de Projet", level: "85%" },
          { name: "Transformation Numérique", level: "90%" },
        ],
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "Full-Stack Java Developer",
            issuer: "SarayaTech Senegal",
            year: "2022",
          },
          // {
          //   name: "AWS Certified Solutions Architect",
          //   issuer: "Amazon Web Services",
          //   year: "2020",
          // },
          // {
          //   name: "Certified Scrum Master",
          //   issuer: "Scrum Alliance",
          //   year: "2019",
          // },
          // {
          //   name: "Professional Project Manager (PMP)",
          //   issuer: "Project Management Institute",
          //   year: "2018",
          // },
          // {
          //   name: "Microsoft Certified: Azure Solutions Architect",
          //   issuer: "Microsoft",
          //   year: "2021",
          // },
        ],
      },
      languages: {
        title: "Langues",
        items: [
          { name: "Anglais", level: "100%", proficiency: "Natif" },
          { name: "Français", level: "85%", proficiency: "Professionnel" },
        ],
      },
    },
    // Contact page
    contact: {
      title: "Contactez-Moi",
      description:
        "Prêt à discuter de votre projet? Je suis là pour vous aider à relier la technologie et les besoins commerciaux avec des solutions évolutives centrées sur l'utilisateur qui stimulent la croissance.",
      location: {
        title: "Location",
        value: "Dakar, Senegal",
      },
      email: {
        title: "Email",
        value: "contact@diallodev.com",
      },
      phone: {
        title: "Phone",
        value: "+221 771244151",
      },
      connectWithMe: "Connectez-vous avec moi",
      form: {
        title: "Envoyez-moi un message",
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "De quoi s'agit-il?",
        message: "Message",
        messagePlaceholder: "Votre message...",
        send: "Envoyer le Message",
      },
    },
    // Footer
    footer: {
      tagline: "Relier Technologie & Business",
      copyright: "© 2025 Diallodev. Tous droits réservés.",
    },
    // Language
    language: {
      en: "Anglais",
      fr: "Français",
      select: "Choisir la langue",
    },
    preloader: {
      title: "RELIER TECHNOLOGIE & BUSINESS",
      subtitle: "Créer des solutions évolutives centrées sur l'utilisateur",
    },
    // Home Page (app/page.tsx)
    homePage: {
      hero: {
        greeting: "Bonjour, je suis",
        subtitle:
          "Ingénieur Architecte Logiciel | Développeur Full Stack Java & Spring Boot | React & Angular",
        stats: {
          yearsExperience: "Années d'Expérience",
          projectsDelivered: "Projets Livrés",
          technologies: "Technologies",
          clientSatisfaction: "Satisfaction Client",
        },
        cta: "Explorer les Services",
      },
      portfolio: {
        title: "Réalisations",
        description:
          "Solutions business qui apportent des résultats mesurables",
      },
      services: {
        keyFeatures: "Fonctionnalités Clés:",
      },
      about: {
        title: "À propos de moi",
        expertise: {
          title: "Expertise",
          items: {
            item1:
              "Développement Full-Stack (Java, Spring Boot, React, Angular)",
            item2: "Architecture Microservices & Systèmes Event-Driven",
            item3: "Solutions Cloud (AWS, Docker, Kubernetes)",
            item4: "Conception & Intégration d'API (REST, GraphQL)",
          },
        },
        experience: {
          title: "Expérience",
          items: {
            item1:
              "Travail avec des clients entreprise (BOA Group, ENG Technologies)",
            item2: "Dirigé le développement de solutions business scalables",
            item3: "Mentoré des développeurs juniors et animé des formations",
            item4:
              "Livré des projets à temps avec des standards de qualité élevés",
          },
        },
        bio: "Ingénieur Logiciel passionné avec 5+ ans d'expérience dans la construction d'applications scalables et performantes. Spécialisé dans les écosystèmes Java/Spring Boot et les frameworks frontend modernes. Je fais le pont entre la technologie et les besoins business, en livrant des solutions qui stimulent la croissance et l'efficacité.",
      },
      skills: {
        title: "Compétences",
        description:
          "Expertise technique et compétences interpersonnelles pour livrer des résultats exceptionnels",
        technical: {
          title: "Compétences Techniques",
          description: "Technologies, frameworks et outils que je maîtrise",
          coreTechnologies: "Technologies Principales",
        },
        soft: {
          title: "Compétences Douces",
          description: "Compétences interpersonnelles et business",
          additional: "Compétences Supplémentaires",
          additionalItems: [
            "Leadership d'Équipe",
            "Méthodologie Agile",
            "Gestion de Projet",
            "Relations Clients",
            "Rédaction Technique",
            "Revue de Code",
            "Mentorat",
            "Résolution de Problèmes",
            "Pensée Critique",
            "Gestion du Temps",
          ],
        },
      },
      experience: {
        title: "Expérience",
        description:
          "Parcours professionnel, implication communautaire et partage de connaissances",
        work: {
          title: "Expérience Professionnelle",
          description: "Postes professionnels et réalisations",
          keyAchievements: "Réalisations Clés:",
        },
        volunteer: {
          title: "Expérience Bénévole",
          description: "Implication communautaire et contributions",
        },
        trainerMentor: {
          title: "Expérience Formateur / Mentor",
          description: "Partage de connaissances et éducation",
        },
        education: {
          title: "Formation",
          description: "Qualifications académiques et certifications",
        },
      },
    },
  },
};
