"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/context"

export default function BlogPage() {
  const { t } = useLanguage()

  // This would typically come from a CMS or database
  const featuredPost = {
    id: "building-scalable-apis",
    title: "Building Scalable APIs for Enterprise Applications",
    excerpt:
      "Learn how to design and implement robust APIs that can handle enterprise-level traffic and integrate with multiple systems.",
    date: "April 3, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["API Design", "Enterprise", "Scalability"],
  }

  const blogPosts = [
    {
      id: "microservices-architecture",
      title: "Microservices Architecture: Breaking Down Monoliths",
      excerpt:
        "Explore the benefits and challenges of transitioning from monolithic applications to microservices architecture in enterprise environments.",
      date: "March 15, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Microservices", "Architecture", "Enterprise"],
    },
    {
      id: "data-integration-strategies",
      title: "Data Integration Strategies for Business Growth",
      excerpt:
        "Effective data integration is crucial for business intelligence and decision-making. Learn key strategies for connecting disparate data sources.",
      date: "February 28, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Data Integration", "Business Intelligence", "Strategy"],
    },
    {
      id: "cloud-migration-guide",
      title: "Cloud Migration Guide for Enterprise Applications",
      excerpt:
        "A comprehensive guide to migrating legacy enterprise applications to cloud infrastructure while minimizing disruption and maximizing benefits.",
      date: "February 10, 2023",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Cloud", "Migration", "Enterprise"],
    },
    {
      id: "security-best-practices",
      title: "Security Best Practices for Business Applications",
      excerpt:
        "Implementing robust security measures is essential for protecting sensitive business data. Learn the latest best practices for application security.",
      date: "January 25, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Security", "Best Practices", "Compliance"],
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation: Technology as a Business Driver",
      excerpt:
        "How technology can drive business transformation, improve efficiency, and create new opportunities for growth and innovation.",
      date: "January 12, 2023",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Digital Transformation", "Innovation", "Strategy"],
    },
    {
      id: "user-experience-design",
      title: "User Experience Design for Business Applications",
      excerpt:
        "Creating intuitive and efficient user experiences for business applications that enhance productivity and user satisfaction.",
      date: "December 20, 2022",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UX Design", "Business Applications", "Productivity"],
    },
  ]

  const categories = [
    { name: "All", count: 24 },
    { name: "Enterprise Solutions", count: 8 },
    { name: "Architecture", count: 6 },
    { name: "Integration", count: 5 },
    { name: "Security", count: 4 },
    { name: "Cloud", count: 7 },
    { name: "Digital Transformation", count: 5 },
  ]

  return (
    <div className="py-12 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("blog.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("blog.description")}</p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="rounded-lg overflow-hidden border border-border hover:border-primary/20 transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {t("blog.featured")}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-4 text-justify">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild>
                  <Link href={`/blog/${featuredPost.id}`}>{t("blog.readArticle")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-4">{t("blog.categories")}</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex justify-between items-center hover:text-primary transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-muted-foreground text-sm">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">{t("blog.subscribe")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("blog.subscribeText")}</p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder={t("blog.yourEmail")}
                      className="w-full p-2 rounded-md border border-border bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t("blog.subscribeButton")}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="md:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="blog-card">
                  <div className="blog-image">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-date">
                      {post.date} • {post.readTime}
                    </div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt text-justify">{post.excerpt}</p>
                    <div className="blog-tags">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">{t("blog.loadMore")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

