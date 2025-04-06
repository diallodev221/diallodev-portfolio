export type Language = "en" | "fr"

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
          description: "Developing technology solutions aligned with your business goals and objectives.",
        },
        card2: {
          title: "User-Centric Design",
          description: "Creating intuitive interfaces that enhance user experience and drive engagement.",
        },
        card3: {
          title: "Scalable Architecture",
          description: "Building robust systems that grow with your business and adapt to changing needs.",
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
        description: "Thoughts and strategies on technology, business integration, and digital transformation",
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
        p1: "Hello! I'm Alex Morgan, a Full Stack Developer with over 8 years of experience building web applications. I specialize in JavaScript/TypeScript, React, Node.js, and modern web technologies.",
        p2: "My journey in software development began when I was in college, where I built small websites for local businesses. Since then, I've worked with startups and large enterprises to create scalable, user-friendly applications.",
        p3: "When I'm not coding, I enjoy writing technical articles, contributing to open source projects, and mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.",
        p4: "This website serves as my digital garden where I document my learning journey and share insights about web development, software architecture, and best practices.",
      },
      experience: {
        title: "Work Experience",
        job1: {
          title: "Senior Full Stack Developer",
          company: "TechCorp Inc.",
          period: "2020 - Present",
          description:
            "Leading development of cloud-based SaaS applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
        },
        job2: {
          title: "Full Stack Developer",
          company: "WebSolutions",
          period: "2017 - 2020",
          description:
            "Developed and maintained multiple client projects using JavaScript frameworks. Collaborated with design and product teams to deliver high-quality web applications.",
        },
        job3: {
          title: "Frontend Developer",
          company: "CreativeAgency",
          period: "2015 - 2017",
          description:
            "Built responsive websites and interactive UIs for various clients. Focused on performance optimization and cross-browser compatibility.",
        },
      },
      skills: {
        title: "Skills & Technologies",
        frontend: {
          title: "Frontend",
          items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Redux / Zustand", "HTML5 / CSS3"],
        },
        backend: {
          title: "Backend",
          items: ["Node.js / Express", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"],
        },
        devops: {
          title: "DevOps",
          items: ["AWS / Vercel", "Docker", "CI/CD", "Git / GitHub", "Testing (Jest, Cypress)"],
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
          description: "Building scalable, user-friendly web applications that drive business growth and efficiency.",
          features: [
            "Custom web applications",
            "E-commerce platforms",
            "Business dashboards",
            "Content management systems",
            "Progressive Web Apps",
          ],
        },
        {
          title: "API Development",
          description:
            "Creating robust APIs that connect systems and enable seamless data flow across your organization.",
          features: [
            "RESTful API design",
            "GraphQL implementation",
            "API documentation",
            "Integration services",
            "Microservices architecture",
          ],
        },
        {
          title: "UI/UX Design",
          description: "Designing intuitive user interfaces that enhance user experience and drive engagement.",
          features: [
            "User research",
            "Wireframing & prototyping",
            "Responsive design",
            "Usability testing",
            "Design systems",
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
          description: "Helping businesses leverage technology to transform operations and create new opportunities.",
          features: [
            "Process automation",
            "Legacy system modernization",
            "Cloud migration",
            "Data strategy",
            "Digital workflow optimization",
          ],
        },
      ],
    },
    // Works page
    works: {
      title: "My Projects",
      description:
        "A showcase of business solutions that deliver measurable results and drive growth by connecting technology with business needs.",
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
            { name: "React & Next.js", level: "95%" },
            { name: "TypeScript", level: "90%" },
            { name: "HTML/CSS/Tailwind", level: "95%" },
            { name: "Redux & Context API", level: "85%" },
            { name: "Responsive Design", level: "90%" },
          ],
        },
        backend: {
          title: "Backend Development",
          skills: [
            { name: "Node.js & Express", level: "90%" },
            { name: "RESTful APIs", level: "95%" },
            { name: "GraphQL", level: "85%" },
            { name: "MongoDB & PostgreSQL", level: "90%" },
            { name: "Authentication & Security", level: "85%" },
          ],
        },
      },
      business: {
        title: "Business Skills",
        skills: [
          {
            title: "Problem Solving",
            description: "Identifying business challenges and developing effective technical solutions.",
          },
          {
            title: "Strategic Planning",
            description: "Developing technology roadmaps aligned with business objectives and growth targets.",
          },
          {
            title: "Client Communication",
            description: "Translating technical concepts into business language that stakeholders understand.",
          },
        ],
      },
      tools: {
        title: "Tools & Technologies",
      },
    },
    // Blog page
    blog: {
      title: "Blog",
      description: "Insights on technology, business integration, and digital transformation strategies",
      featured: "Featured",
      readArticle: "Read Article",
      categories: "Categories",
      subscribe: "Subscribe",
      subscribeText: "Get the latest articles and insights delivered to your inbox.",
      yourEmail: "Your email address",
      subscribeButton: "Subscribe",
      loadMore: "Load More Articles",
      date: "Date",
      readTime: "Read Time",
      author: "Author",
      relatedArticles: "Related Articles",
      backToAllArticles: "Back to all articles",
      whatToExpect: "What to expect",
      previousIssues: "Previous Issues",
      expectationItems: [
        {
          title: "Tutorials & Guides",
          description:
            "Step-by-step tutorials and comprehensive guides on web development topics, from beginner to advanced.",
        },
        {
          title: "Code Snippets",
          description:
            "Useful code snippets and solutions to common programming challenges that you can use in your projects.",
        },
        {
          title: "Industry News",
          description: "Updates on the latest frameworks, libraries, and tools in the web development ecosystem.",
        },
        {
          title: "Career Advice",
          description:
            "Tips and insights on advancing your career as a developer, including interview preparation and skill development.",
        },
      ],
    },
    // Resume page
    resume: {
      title: "Resume",
      subtitle: "My professional experience and qualifications",
      downloadCV: "Download CV",
      experience: {
        title: "Work Experience",
        companies: [
          {
            name: "Broadcom",
            position: "Spring Developer Advocate",
            period: "2023—Present",
          },
          {
            name: "VMware",
            position: "Spring Developer Advocate",
            period: "2022—2023",
          },
          {
            name: "Briebug",
            position: "Principal Enterprise Java Architect",
            period: "2021—2022",
          },
          {
            name: "Tech Elevator",
            position: "Curriculum Developer",
            period: "2018—2021",
          },
          {
            name: "Markel",
            position: "Senior Developer",
            period: "2012—2018",
          },
          {
            name: "Steris",
            position: "Senior Web Developer",
            period: "2008—2012",
          },
          {
            name: "LetterNine",
            position: "Web Developer",
            period: "2004—2008",
          },
          {
            name: "Five9",
            position: "Technical Support Specialist",
            period: "2001—2004",
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Master of Business Administration (MBA)",
            school: "Business School University",
            period: "2008 - 2012",
            description:
              "Specialized in Technology Management and Business Analytics. Graduated with honors. The program focused on bridging technology and business strategy, providing a comprehensive understanding of how to leverage technology for business growth and innovation.",
          },
          {
            degree: "Bachelor of Science in Computer Science",
            school: "Tech Institute",
            period: "2004 - 2008",
            description:
              "Focus on software engineering and business information systems. Graduated summa cum laude. Coursework included advanced programming, database design, systems architecture, and business process modeling, providing a solid foundation for enterprise software development.",
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
          { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2020" },
          { name: "Certified Scrum Master", issuer: "Scrum Alliance", year: "2019" },
          { name: "Professional Project Manager (PMP)", issuer: "Project Management Institute", year: "2018" },
          { name: "Microsoft Certified: Azure Solutions Architect", issuer: "Microsoft", year: "2021" },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "English", level: "100%", proficiency: "Native" },
          { name: "French", level: "85%", proficiency: "Professional" },
          { name: "Spanish", level: "70%", proficiency: "Intermediate" },
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
        value: "San Francisco, CA",
      },
      email: {
        title: "Email",
        value: "contact@diallodev.com",
      },
      phone: {
        title: "Phone",
        value: "+1 (555) 123-4567",
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
      copyright: "© 2025 Diallo. All rights reserved.",
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
        title: "Comment J'Aide les Entreprises",
        description:
          "Je comble le fossé entre la technologie et les besoins des entreprises, en créant des solutions évolutives centrées sur l'utilisateur qui stimulent la croissance et améliorent l'efficacité pour les organisations de toutes tailles.",
        card1: {
          title: "Solutions Stratégiques",
          description: "Développer des solutions technologiques alignées sur vos objectifs d'affaires.",
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
        p1: "Bonjour! Je suis Alex Morgan, un Développeur Full Stack avec plus de 8 ans d'expérience dans la création d'applications web. Je me spécialise en JavaScript/TypeScript, React, Node.js et les technologies web modernes.",
        p2: "Mon parcours dans le développement logiciel a commencé lorsque j'étais à l'université, où j'ai créé de petits sites web pour des entreprises locales. Depuis, j'ai travaillé avec des startups et de grandes entreprises pour créer des applications évolutives et conviviales.",
        p3: "Quand je ne code pas, j'aime écrire des articles techniques, contribuer à des projets open source et encadrer des développeurs en herbe. Je crois en l'apprentissage continu et au partage des connaissances avec la communauté.",
        p4: "Ce site web sert de jardin numérique où je documente mon parcours d'apprentissage et partage des idées sur le développement web, l'architecture logicielle et les meilleures pratiques.",
      },
      experience: {
        title: "Expérience Professionnelle",
        job1: {
          title: "Développeur Full Stack Senior",
          company: "TechCorp Inc.",
          period: "2020 - Présent",
          description:
            "Direction du développement d'applications SaaS basées sur le cloud utilisant React, Node.js et AWS. Mise en place de pipelines CI/CD et mentorat de développeurs juniors.",
        },
        job2: {
          title: "Développeur Full Stack",
          company: "WebSolutions",
          period: "2017 - 2020",
          description:
            "Développement et maintenance de multiples projets clients utilisant des frameworks JavaScript. Collaboration avec les équipes de design et de produit pour livrer des applications web de haute qualité.",
        },
        job3: {
          title: "Développeur Frontend",
          company: "CreativeAgency",
          period: "2015 - 2017",
          description:
            "Création de sites web responsifs et d'interfaces utilisateur interactives pour divers clients. Concentration sur l'optimisation des performances et la compatibilité multi-navigateurs.",
        },
      },
      skills: {
        title: "Compétences & Technologies",
        frontend: {
          title: "Frontend",
          items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Redux / Zustand", "HTML5 / CSS3"],
        },
        backend: {
          title: "Backend",
          items: ["Node.js / Express", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"],
        },
        devops: {
          title: "DevOps",
          items: ["AWS / Vercel", "Docker", "CI/CD", "Git / GitHub", "Testing (Jest, Cypress)"],
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
            "Applications web personnalisées",
            "Plateformes e-commerce",
            "Tableaux de bord d'entreprise",
            "Systèmes de gestion de contenu",
            "Applications Web Progressives",
          ],
        },
        {
          title: "Développement d'API",
          description:
            "Créer des API robustes qui connectent les systèmes et permettent un flux de données fluide dans toute votre organisation.",
          features: [
            "Conception d'API RESTful",
            "Implémentation GraphQL",
            "Documentation d'API",
            "Services d'intégration",
            "Architecture de microservices",
          ],
        },
        {
          title: "Conception UI/UX",
          description:
            "Concevoir des interfaces utilisateur intuitives qui améliorent l'expérience utilisateur et stimulent l'engagement.",
          features: [
            "Recherche utilisateur",
            "Wireframing & prototypage",
            "Design responsive",
            "Tests d'utilisabilité",
            "Systèmes de design",
          ],
        },
        {
          title: "Conseil Technique",
          description:
            "Fournir des conseils d'experts sur les choix technologiques, les décisions d'architecture et les meilleures pratiques de développement.",
          features: [
            "Évaluation de la pile technologique",
            "Planification de l'architecture",
            "Revues et audits de code",
            "Optimisation des performances",
            "Évaluations de sécurité",
          ],
        },
        {
          title: "Transformation Numérique",
          description:
            "Aider les entreprises à tirer parti de la technologie pour transformer les opérations et créer de nouvelles opportunités.",
          features: [
            "Automatisation des processus",
            "Modernisation des systèmes existants",
            "Migration vers le cloud",
            "Stratégie de données",
            "Optimisation des flux de travail numériques",
          ],
        },
      ],
    },
    // Works page
    works: {
      title: "Mes Projets",
      description:
        "Une vitrine de solutions d'entreprise qui offrent des résultats mesurables et stimulent la croissance en connectant la technologie aux besoins commerciaux.",
    },
    // Skills page
    skills: {
      title: "Mes Compétences",
      description:
        "Expertise technique et sens des affaires pour fournir des solutions qui relient la technologie et les besoins commerciaux, créant des solutions évolutives centrées sur l'utilisateur.",
      technical: {
        title: "Compétences Techniques",
        frontend: {
          title: "Développement Frontend",
          skills: [
            { name: "React & Next.js", level: "95%" },
            { name: "TypeScript", level: "90%" },
            { name: "HTML/CSS/Tailwind", level: "95%" },
            { name: "Redux & Context API", level: "85%" },
            { name: "Design Responsive", level: "90%" },
          ],
        },
        backend: {
          title: "Développement Backend",
          skills: [
            { name: "Node.js & Express", level: "90%" },
            { name: "APIs RESTful", level: "95%" },
            { name: "GraphQL", level: "85%" },
            { name: "MongoDB & PostgreSQL", level: "90%" },
            { name: "Authentification & Sécurité", level: "85%" },
          ],
        },
      },
      business: {
        title: "Compétences en Affaires",
        skills: [
          {
            title: "Résolution de Problèmes",
            description: "Identifier les défis commerciaux et développer des solutions techniques efficaces.",
          },
          {
            title: "Planification Stratégique",
            description:
              "Développer des feuilles de route technologiques alignées sur les objectifs commerciaux et les cibles de croissance.",
          },
          {
            title: "Communication Client",
            description:
              "Traduire les concepts techniques en langage commercial que les parties prenantes comprennent.",
          },
        ],
      },
      tools: {
        title: "Outils & Technologies",
      },
    },
    // Blog page
    blog: {
      title: "Blog",
      description:
        "Réflexions sur la technologie, l'intégration commerciale et les stratégies de transformation numérique",
      featured: "À la une",
      readArticle: "Lire l'article",
      categories: "Catégories",
      subscribe: "S'abonner",
      subscribeText: "Recevez les derniers articles et insights directement dans votre boîte de réception.",
      yourEmail: "Votre adresse email",
      subscribeButton: "S'abonner",
      loadMore: "Charger plus d'articles",
      date: "Date",
      readTime: "Temps de lecture",
      author: "Auteur",
      relatedArticles: "Articles connexes",
      backToAllArticles: "Retour à tous les articles",
      whatToExpect: "À quoi s'attendre",
      previousIssues: "Numéros précédents",
      expectationItems: [
        {
          title: "Tutoriels & Guides",
          description:
            "Tutoriels étape par étape et guides complets sur les sujets de développement web, du débutant à l'avancé.",
        },
        {
          title: "Extraits de Code",
          description:
            "Extraits de code utiles et solutions aux défis de programmation courants que vous pouvez utiliser dans vos projets.",
        },
        {
          title: "Actualités de l'Industrie",
          description:
            "Mises à jour sur les derniers frameworks, bibliothèques et outils dans l'écosystème du développement web.",
        },
        {
          title: "Conseils de Carrière",
          description:
            "Conseils et insights pour faire progresser votre carrière de développeur, y compris la préparation aux entretiens et le développement des compétences.",
        },
      ],
    },
    // Resume page
    resume: {
      title: "CV",
      subtitle: "Mon expérience professionnelle et mes qualifications",
      downloadCV: "Télécharger CV",
      experience: {
        title: "Expérience Professionnelle",
        companies: [
          {
            name: "Broadcom",
            position: "Défenseur des Développeurs Spring",
            period: "2023—Présent",
          },
          {
            name: "VMware",
            position: "Défenseur des Développeurs Spring",
            period: "2022—2023",
          },
          {
            name: "Briebug",
            position: "Architecte Java Enterprise Principal",
            period: "2021—2022",
          },
          {
            name: "Tech Elevator",
            position: "Développeur de Curriculum",
            period: "2018—2021",
          },
          {
            name: "Markel",
            position: "Développeur Senior",
            period: "2012—2018",
          },
          {
            name: "Steris",
            position: "Développeur Web Senior",
            period: "2008—2012",
          },
          {
            name: "LetterNine",
            position: "Développeur Web",
            period: "2004—2008",
          },
          {
            name: "Five9",
            position: "Spécialiste du Support Technique",
            period: "2001—2004",
          },
        ],
      },
      education: {
        title: "Formation",
        items: [
          {
            degree: "Master en Administration des Affaires (MBA)",
            school: "École de Commerce",
            period: "2008 - 2012",
            description:
              "Spécialisé en Gestion de la Technologie et Analyse d'Affaires. Diplômé avec mention. Le programme s'est concentré sur le rapprochement de la technologie et de la stratégie commerciale, offrant une compréhension complète de la façon de tirer parti de la technologie pour la croissance et l'innovation des entreprises.",
          },
          {
            degree: "Licence en Informatique",
            school: "Institut Technologique",
            period: "2004 - 2008",
            description:
              "Concentration sur l'ingénierie logicielle et les systèmes d'information d'entreprise. Diplômé summa cum laude. Les cours comprenaient la programmation avancée, la conception de bases de données, l'architecture de systèmes et la modélisation des processus d'entreprise, fournissant une base solide pour le développement de logiciels d'entreprise.",
          },
        ],
      },
      competencies: {
        title: "Compétences Principales",
        items: [
          { name: "Analyse d'Affaires", level: "95%" },
          { name: "Architecture de Solutions", level: "90%" },
          { name: "Développement Full Stack", level: "95%" },
          { name: "Gestion de Projet", level: "85%" },
          { name: "Transformation Numérique", level: "90%" },
        ],
      },
      certifications: {
        title: "Certifications",
        items: [
          { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2020" },
          { name: "Certified Scrum Master", issuer: "Scrum Alliance", year: "2019" },
          { name: "Professional Project Manager (PMP)", issuer: "Project Management Institute", year: "2018" },
          { name: "Microsoft Certified: Azure Solutions Architect", issuer: "Microsoft", year: "2021" },
        ],
      },
      languages: {
        title: "Langues",
        items: [
          { name: "Anglais", level: "100%", proficiency: "Natif" },
          { name: "Français", level: "85%", proficiency: "Professionnel" },
          { name: "Espagnol", level: "70%", proficiency: "Intermédiaire" },
        ],
      },
    },
    // Contact page
    contact: {
      title: "Contactez-Moi",
      description:
        "Prêt à discuter de votre projet? Je suis là pour vous aider à relier la technologie et les besoins commerciaux avec des solutions évolutives centrées sur l'utilisateur qui stimulent la croissance.",
      location: {
        title: "Emplacement",
        value: "San Francisco, CA",
      },
      email: {
        title: "Email",
        value: "contact@diallodev.com",
      },
      phone: {
        title: "Téléphone",
        value: "+1 (555) 123-4567",
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
      copyright: "© 2025 Diallo. Tous droits réservés.",
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
  },
}

