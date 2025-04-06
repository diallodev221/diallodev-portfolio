"use client"

import ProjectCard from "@/components/project-card"
import { useLanguage } from "@/lib/i18n/context"

export default function WorksPage() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce solution that increased sales by 40% and improved customer retention",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/ecommerce",
    },
    {
      title: "Business Analytics Dashboard",
      description: "Real-time data visualization platform that helped reduce decision-making time by 60%",
      tags: ["Next.js", "D3.js", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/analytics",
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end logistics solution that optimized inventory and reduced operational costs by 25%",
      tags: ["React", "GraphQL", "AWS"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/supply-chain",
    },
    {
      title: "Healthcare Patient Portal",
      description: "Secure patient management system that improved patient engagement and staff productivity",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/healthcare",
    },
    {
      title: "Financial Services Platform",
      description: "Secure banking application with advanced analytics and reporting capabilities",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/finance",
    },
    {
      title: "Real Estate Marketplace",
      description: "Property listing platform that connected buyers and sellers, increasing transaction volume by 35%",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/realestate",
    },
    {
      title: "Enterprise Resource Planning",
      description: "Comprehensive ERP system that streamlined operations across multiple departments",
      tags: ["React", "GraphQL", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/erp",
    },
    {
      title: "Customer Relationship Management",
      description: "CRM solution that improved lead conversion rates by 45% and enhanced customer service",
      tags: ["Next.js", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/crm",
    },
    {
      title: "Inventory Management System",
      description: "Automated inventory tracking system that reduced stockouts by 60% and optimized purchasing",
      tags: ["React", "Express", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "/works/inventory",
    },
  ]

  return (
    <div className="py-12 md:py-24">
      <div className="section-container text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("works.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("works.description")}</p>
      </div>

      <div className="content-container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

