"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import UsefulLinks from "@/components/useful-links";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t } = useLanguage();

  // This would typically come from a CMS or database based on the slug
  // For this example, I'm hardcoding a service
  const service = {
    title: "Web Application Development",
    subtitle:
      "Building scalable, user-friendly web applications that drive business growth and efficiency",
    description:
      "I design and develop custom web applications that solve specific business challenges, improve operational efficiency, and deliver exceptional user experiences. From concept to deployment, I focus on creating scalable, maintainable solutions that align with your business goals.",
    icon: "/placeholder.svg?height=100&width=100",
    mainImage: "/placeholder.svg?height=600&width=1200",
    benefits: [
      {
        title: "Increased Operational Efficiency",
        description:
          "Streamline business processes and automate repetitive tasks to save time and reduce costs.",
      },
      {
        title: "Enhanced User Experience",
        description:
          "Create intuitive interfaces that improve user satisfaction and engagement.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Build applications that can grow with your business and adapt to changing needs.",
      },
      {
        title: "Data-Driven Insights",
        description:
          "Leverage analytics and reporting to make informed business decisions.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        description:
          "I begin by understanding your business goals, user needs, and technical requirements. This phase includes stakeholder interviews, user research, and competitive analysis to establish a solid foundation for the project.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Design & Prototyping",
        description:
          "Based on the insights gathered, I create wireframes and interactive prototypes to visualize the application's structure and user flow. This iterative process ensures that the final design meets both user needs and business objectives.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Development & Testing",
        description:
          "Using modern technologies and best practices, I develop the application with a focus on code quality, performance, and security. Rigorous testing at each stage ensures a robust, bug-free product.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Deployment & Support",
        description:
          "Once the application is ready, I handle the deployment process and provide comprehensive documentation. Ongoing support and maintenance ensure that your application continues to perform optimally.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    technologies: [
      "React / Next.js for frontend development",
      "Node.js / Express for backend APIs",
      "MongoDB / PostgreSQL for data storage",
      "AWS / Vercel for cloud infrastructure",
      "Docker for containerization",
      "CI/CD pipelines for automated deployment",
    ],
    features: [
      "Responsive design for all devices",
      "Authentication and authorization",
      "Real-time data synchronization",
      "API integrations with third-party services",
      "Analytics and reporting dashboards",
      "Search and filtering capabilities",
      "Content management systems",
      "Payment processing integration",
    ],
    caseStudies: [
      {
        title: "E-Commerce Platform",
        description:
          "Developed a custom e-commerce solution that increased sales by 40% and improved customer retention.",
        image: "/placeholder.svg?height=300&width=400",
        link: "/works/ecommerce",
      },
      {
        title: "Business Analytics Dashboard",
        description:
          "Created a real-time data visualization platform that reduced decision-making time by 60%.",
        image: "/placeholder.svg?height=300&width=400",
        link: "/works/analytics",
      },
      {
        title: "Healthcare Patient Portal",
        description:
          "Built a secure patient management system that improved patient engagement and staff productivity.",
        image: "/placeholder.svg?height=300&width=400",
        link: "/works/healthcare",
      },
    ],
    faq: [
      {
        question:
          "How long does it typically take to develop a web application?",
        answer:
          "The timeline varies depending on the complexity of the application. A simple application might take 2-3 months, while more complex projects can take 4-6 months or longer. During our initial consultation, I'll provide a more accurate timeline based on your specific requirements.",
      },
      {
        question: "What is your development process?",
        answer:
          "I follow an agile development methodology, which involves iterative development cycles with regular client feedback. This approach allows for flexibility and ensures that the final product aligns with your vision and requirements.",
      },
      {
        question:
          "Do you provide ongoing support after the application is launched?",
        answer:
          "Yes, I offer various support and maintenance packages to ensure your application continues to run smoothly after launch. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
      },
      {
        question: "How do you ensure the security of web applications?",
        answer:
          "Security is a top priority in all my projects. I implement industry best practices such as data encryption, secure authentication, regular security audits, and compliance with relevant regulations (e.g., GDPR, HIPAA) depending on your industry.",
      },
      {
        question: "Can you integrate my web application with existing systems?",
        answer:
          "Yes, I specialize in creating web applications that integrate seamlessly with existing systems and third-party services. This includes CRM systems, payment gateways, inventory management, and other business tools.",
      },
    ],
    links: [
      {
        title: "Web Application Development Guide",
        url: "https://example.com/web-app-guide",
        description:
          "A comprehensive guide to the web application development process",
      },
      {
        title: "Technology Stack Comparison",
        url: "https://example.com/tech-stack",
        description:
          "Comparing different technology stacks for web applications",
      },
      {
        title: "Web Application Security Best Practices",
        url: "https://example.com/security",
        description: "Essential security practices for modern web applications",
      },
    ],
  };

  // Related services would come from a database or CMS
  const relatedServices = [
    {
      slug: "api-development",
      title: "API Development",
      description:
        "Creating robust APIs that connect systems and enable seamless data flow across your organization.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces that enhance user experience and drive engagement.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      slug: "technical-consulting",
      title: "Technical Consulting",
      description:
        "Providing expert advice on technology choices, architecture decisions, and development best practices.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="content-container">
        <Link
          href="/services"
          className="flex items-center text-muted-foreground hover:text-primary mb-6 md:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("services.backToAllServices")}
        </Link>

        <div className="mb-8 md:mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">{service.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="prose prose-lg max-w-none text-justify">
            <p>{service.description}</p>
            <p>
              Whether you need a customer portal, an internal tool, or a
              public-facing application, I deliver tailored solutions that
              address your specific business challenges and create tangible
              value.
            </p>
            <p>
              My approach combines technical expertise with business acumen,
              ensuring that every feature and function serves a clear purpose
              and contributes to your overall business objectives.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src={service.mainImage || "/placeholder.svg"}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            {t("services.keyBenefits")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            {t("services.developmentProcess")}
          </h2>

          <div className="space-y-12">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    {step.description}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("services.technologies")}
            </h2>
            <ul className="space-y-3">
              {service.technologies.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("services.features")}
            </h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            {t("services.caseStudies")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.caseStudies.map((caseStudy, index) => (
              <Link key={index} href={caseStudy.link} className="group">
                <div className="bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
                      {caseStudy.description}
                    </p>
                    <div className="flex items-center text-primary">
                      <span className="mr-2">
                        {t("services.viewCaseStudy")}
                      </span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">{t("services.faq")}</h2>

          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <div key={index} className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                <p className="text-muted-foreground text-justify">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Resources */}
        <UsefulLinks
          links={service.links}
          title={t("services.usefulResources")}
        />

        {/* CTA Section */}
        <div className="bg-muted p-8 rounded-lg mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("services.readyToStart")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("services.readyToStartDescription")}
            </p>
            <Button asChild size="lg" className="gradient-bg">
              <Link href="/contact">{t("services.contactMe")}</Link>
            </Button>
          </div>
        </div>

        {/* Related Services */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {t("services.relatedServices")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group"
              >
                <div className="bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary">
                      <span className="mr-2">{t("services.learnMore")}</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
