"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import ImageWithCaption from "@/components/image-with-caption";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<
    "overview" | "challenge" | "solution" | "results"
  >("overview");

  // This would typically come from a CMS or database based on the slug
  // For this example, I'm hardcoding a project
  const project = {
    title: "E-Commerce Platform",
    subtitle: "A scalable e-commerce solution for a growing retail business",
    description:
      "Designed and developed a comprehensive e-commerce platform that increased sales by 40% and improved customer retention through personalized shopping experiences and streamlined checkout processes.",
    client: "RetailPlus Inc.",
    duration: "4 months",
    completedDate: "June 2023",
    tags: ["React", "Node.js", "MongoDB", "AWS", "Redux"],
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Product listing page",
        caption: "Responsive product listing with advanced filtering",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Shopping cart",
        caption: "Intuitive shopping cart with real-time updates",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Admin dashboard",
        caption: "Comprehensive admin dashboard for inventory management",
      },
    ],
    challenge: {
      title: "The Challenge",
      description:
        "RetailPlus was facing significant challenges with their legacy e-commerce system. As their business grew, they encountered performance issues, limited scalability, and an outdated user interface that was affecting conversion rates. Additionally, their existing system lacked integration capabilities with their inventory management and CRM systems, creating operational inefficiencies and data inconsistencies.",
      keyPoints: [
        "Legacy system with performance bottlenecks during peak traffic periods",
        "Poor mobile experience leading to high bounce rates on smartphones",
        "Limited integration with inventory and CRM systems",
        "Manual order processing causing delays and errors",
        "Outdated design affecting brand perception and user engagement",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "I designed and developed a modern, scalable e-commerce platform tailored to RetailPlus's specific business needs. The solution featured a responsive, user-centric design with advanced product search and filtering capabilities, personalized recommendations, and a streamlined checkout process.",
      keyPoints: [
        "Microservices architecture for improved scalability and performance",
        "Responsive design with mobile-first approach",
        "Real-time inventory synchronization",
        "Integrated payment gateway with enhanced security features",
        "Customer account management with order history and tracking",
        "Advanced analytics dashboard for business intelligence",
      ],
      technologies: [
        "React for the frontend with Redux for state management",
        "Node.js and Express for the backend API",
        "MongoDB for flexible data storage",
        "AWS infrastructure (EC2, S3, CloudFront) for scalability",
        "Stripe for payment processing",
        "Elasticsearch for fast product search",
      ],
    },
    results: {
      title: "The Results",
      description:
        "The new e-commerce platform delivered significant business impact for RetailPlus, exceeding their expectations and providing a solid foundation for future growth.",
      metrics: [
        {
          label: "Increase in Sales",
          value: "40%",
          description: "Year-over-year sales growth after platform launch",
        },
        {
          label: "Mobile Conversion Rate",
          value: "35%",
          description: "Improvement in mobile conversion rate",
        },
        {
          label: "Page Load Time",
          value: "75%",
          description: "Reduction in average page load time",
        },
        {
          label: "Customer Retention",
          value: "28%",
          description: "Increase in repeat customer rate",
        },
      ],
      testimonial: {
        quote:
          "The new e-commerce platform has transformed our business. Not only has it significantly increased our sales, but it has also streamlined our operations and improved our customer experience. The attention to detail and focus on our specific business needs was impressive.",
        author: "Sarah Johnson",
        position: "CEO, RetailPlus Inc.",
      },
    },
    nextSteps: {
      title: "Next Steps",
      description:
        "Following the successful launch of the e-commerce platform, we're now exploring additional enhancements to further improve the customer experience and drive business growth:",
      items: [
        "Integration with a loyalty program to reward repeat customers",
        "Implementation of AI-powered product recommendations",
        "Expansion to international markets with multi-currency and multi-language support",
        "Development of a mobile app for iOS and Android",
      ],
    },
    links: [
      {
        title: "Project Website",
        url: "https://example.com/retailplus",
        description: "Visit the live e-commerce platform",
      },
      {
        title: "Case Study",
        url: "https://example.com/case-studies/retailplus",
        description: "Read the detailed case study about this project",
      },
    ],
  };

  // Similar projects would come from a database or CMS
  const similarProjects = [
    {
      slug: "analytics-dashboard",
      title: "Business Analytics Dashboard",
      description:
        "Real-time data visualization platform that helped reduce decision-making time by 60%",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "D3.js", "PostgreSQL"],
    },
    {
      slug: "supply-chain",
      title: "Supply Chain Management",
      description:
        "End-to-end logistics solution that optimized inventory and reduced operational costs by 25%",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "GraphQL", "AWS"],
    },
    {
      slug: "healthcare",
      title: "Healthcare Patient Portal",
      description:
        "Secure patient management system that improved patient engagement and staff productivity",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="content-container">
        <Link
          href="/works"
          className="flex items-center text-muted-foreground hover:text-primary mb-6 md:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("works.backToAllProjects")}
        </Link>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{t("works.client")}</h3>
              <p>{project.client}</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{t("works.duration")}</h3>
              <p>{project.duration}</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{t("works.completed")}</h3>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <p>{project.completedDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden">
          <Image
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Project navigation tabs */}
        <div className="mb-8 border-b">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 font-medium whitespace-nowrap ${
                activeTab === "overview"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("works.overview")}
            </button>
            <button
              onClick={() => setActiveTab("challenge")}
              className={`px-4 py-2 font-medium whitespace-nowrap ${
                activeTab === "challenge"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("works.challenge")}
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`px-4 py-2 font-medium whitespace-nowrap ${
                activeTab === "solution"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("works.solution")}
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-4 py-2 font-medium whitespace-nowrap ${
                activeTab === "results"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("works.results")}
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="mb-12">
          {activeTab === "overview" && (
            <div>
              <div className="prose prose-lg max-w-none mb-8 text-justify">
                <p>{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {project.gallery.map((image, index) => (
                  <ImageWithCaption
                    key={index}
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    caption={image.caption}
                  />
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">
                    {t("works.projectLinks")}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, index) => (
                      <Button key={index} asChild variant="outline">
                        <Link
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          {link.title}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "challenge" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {project.challenge.title}
              </h2>
              <div className="prose prose-lg max-w-none mb-8 text-justify">
                <p>{project.challenge.description}</p>
              </div>

              <h3 className="text-xl font-bold mb-4">{t("works.keyIssues")}</h3>
              <ul className="space-y-3 mb-8">
                {project.challenge.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ImageWithCaption
                src="/placeholder.svg?height=600&width=1200"
                alt="Challenge visualization"
                width={1200}
                height={600}
                caption="Figure 1: Visualization of the key challenges faced by RetailPlus"
              />
            </div>
          )}

          {activeTab === "solution" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {project.solution.title}
              </h2>
              <div className="prose prose-lg max-w-none mb-8 text-justify">
                <p>{project.solution.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t("works.keyFeatures")}
                  </h3>
                  <ul className="space-y-3">
                    {project.solution.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t("works.technologies")}
                  </h3>
                  <ul className="space-y-3">
                    {project.solution.technologies.map((tech, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ImageWithCaption
                src="/placeholder.svg?height=600&width=1200"
                alt="Solution architecture"
                width={1200}
                height={600}
                caption="Figure 2: High-level architecture of the e-commerce platform"
              />
            </div>
          )}

          {activeTab === "results" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {project.results.title}
              </h2>
              <div className="prose prose-lg max-w-none mb-8 text-justify">
                <p>{project.results.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {project.results.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-muted/30 p-6 rounded-lg text-center"
                  >
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {metric.value}
                    </div>
                    <h3 className="font-semibold mb-2">{metric.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <div className="text-lg italic mb-4">
                  "{project.results.testimonial.quote}"
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted mr-4 flex items-center justify-center">
                    <span className="text-xl font-bold">
                      {project.results.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">
                      {project.results.testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.results.testimonial.position}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  {project.nextSteps.title}
                </h3>
                <p className="mb-4">{project.nextSteps.description}</p>
                <ul className="space-y-3">
                  {project.nextSteps.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-muted p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("works.interestedInSimilarProject")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("works.interestedInSimilarProjectDescription")}
            </p>
            <Button asChild size="lg" className="gradient-bg">
              <Link href="/contact">{t("works.contactMe")}</Link>
            </Button>
          </div>
        </div>

        {/* Similar Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {t("works.similarProjects")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/works/${project.slug}`}
                className="group"
              >
                <div className="bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
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
