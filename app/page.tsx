"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Globe, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { useLanguage } from "@/lib/i18n/context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {t("home.hero.title")} <br />
                <span className="text-secondary">{t("home.hero.titleHighlight1")}</span> <br />
                <span className="text-secondary">{t("home.hero.titleHighlight2")}</span>
              </h1>
              <div className="space-y-2">
                <p className="text-lg md:text-xl">{t("home.hero.subtitle1")}</p>
                <p className="text-lg md:text-xl text-secondary">{t("home.hero.subtitle2")}</p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-md bg-secondary text-primary-foreground">
                  <Link href="/contact">{t("home.hero.cta1")}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md border-white text-white hover:bg-white/10"
                >
                  <Link href="/works">{t("home.hero.cta2")}</Link>
                </Button>
              </div>

              <div className="flex gap-6 pt-4 justify-center lg:justify-start">
                <Link
                  href="mailto:contact@diallodev.com"
                  className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                >
                  <Mail size={16} />
                  <span>contact@diallodev.com</span>
                </Link>
                <Link
                  href="https://diallodev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                >
                  <Globe size={16} />
                  <span>diallodev.com</span>
                </Link>
                <Link
                  href="https://github.com/diallodev221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                >
                  <Github size={16} />
                  <span>diallodev221</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Diallo"
                  width={500}
                  height={600}
                  className="object-cover mx-auto"
                  priority
                />
              </div>
              <div className="absolute top-0 right-0 w-3/4 h-full rounded-full bg-secondary/30 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">{t("home.valueProposition.title")}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-justify">
            {t("home.valueProposition.description")}
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.valueProposition.card1.title")}</h3>
              <p className="text-muted-foreground">{t("home.valueProposition.card1.description")}</p>
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.valueProposition.card2.title")}</h3>
              <p className="text-muted-foreground">{t("home.valueProposition.card2.description")}</p>
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bar-chart-3"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.valueProposition.card3.title")}</h3>
              <p className="text-muted-foreground">{t("home.valueProposition.card3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">{t("home.projects.title")}</h2>
              <p className="text-muted-foreground">{t("home.projects.subtitle")}</p>
            </div>
            <Button asChild variant="ghost" className="flex items-center">
              <Link href="/works">
                {t("home.projects.viewAll")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-Commerce Platform"
              description="A scalable e-commerce solution that increased sales by 40% and improved customer retention"
              tags={["React", "Node.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              link="/works/ecommerce"
            />
            <ProjectCard
              title="Business Analytics Dashboard"
              description="Real-time data visualization platform that helped reduce decision-making time by 60%"
              tags={["Next.js", "D3.js", "PostgreSQL"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              link="/works/analytics"
            />
            <ProjectCard
              title="Supply Chain Management"
              description="End-to-end logistics solution that optimized inventory and reduced operational costs by 25%"
              tags={["React", "GraphQL", "AWS"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              link="/works/supply-chain"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">{t("home.skills.title")}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">{t("home.skills.description")}</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted p-8 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-4">{t("home.skills.frontend")}</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex justify-between">
                    <span>React & Next.js</span>
                    <span className="text-secondary">95%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex justify-between">
                    <span>TypeScript</span>
                    <span className="text-secondary">90%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex justify-between">
                    <span>UI/UX Design</span>
                    <span className="text-secondary">85%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-8 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-4">{t("home.skills.backend")}</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex justify-between">
                    <span>Node.js & Express</span>
                    <span className="text-secondary">90%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex justify-between">
                    <span>Database Design</span>
                    <span className="text-secondary">85%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex justify-between">
                    <span>API Development</span>
                    <span className="text-secondary">95%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <Button asChild className="mt-8">
            <Link href="/skills">{t("home.skills.viewAll")}</Link>
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("home.blog.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.blog.description")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Building Scalable APIs for Enterprise Applications",
                excerpt:
                  "Learn how to design and implement robust APIs that can handle enterprise-level traffic and integrate with multiple systems.",
                date: "April 3, 2023",
                image: "/placeholder.svg?height=400&width=600",
                slug: "building-scalable-apis",
              },
              {
                title: "Microservices Architecture: Breaking Down Monoliths",
                excerpt:
                  "Explore the benefits and challenges of transitioning from monolithic applications to microservices architecture in enterprise environments.",
                date: "March 15, 2023",
                image: "/placeholder.svg?height=400&width=600",
                slug: "microservices-architecture",
              },
              {
                title: "Data Integration Strategies for Business Growth",
                excerpt:
                  "Effective data integration is crucial for business intelligence and decision-making. Learn key strategies for connecting disparate data sources.",
                date: "February 28, 2023",
                image: "/placeholder.svg?height=400&width=600",
                slug: "data-integration-strategies",
              },
            ].map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="blog-card group">
                <div className="blog-image">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-date">{post.date}</div>
                  <h3 className="blog-title group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="blog-excerpt text-justify">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/blog" className="flex items-center">
                {t("home.blog.viewAll")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient text-white relative">
        <div className="absolute inset-0 dot-pattern"></div>
        <div className="content-container text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-justify">{t("home.cta.description")}</p>
          <Button asChild size="lg" className="rounded-md bg-secondary text-primary-foreground">
            <Link href="/contact">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

