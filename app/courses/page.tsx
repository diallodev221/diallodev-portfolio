import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      <p className="text-muted-foreground mb-8">
        I create comprehensive courses on web development topics to help developers level up their skills. Each course
        is designed with practical, real-world examples and exercises.
      </p>

      <div className="space-y-12">
        {/* Featured Course */}
        <div className="bg-muted/30 rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <Image src="/placeholder.svg?height=400&width=800" alt="Mastering Next.js" fill className="object-cover" />
          </div>
          <div className="p-6">
            <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded mb-4">
              Featured Course
            </div>
            <h2 className="text-2xl font-bold mb-2">Mastering Next.js</h2>
            <p className="text-muted-foreground mb-4">
              A comprehensive guide to building modern web applications with Next.js. Learn everything from the basics
              to advanced patterns, server components, and deployment strategies.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-muted px-2 py-1 rounded text-xs">Next.js</div>
              <div className="bg-muted px-2 py-1 rounded text-xs">React</div>
              <div className="bg-muted px-2 py-1 rounded text-xs">TypeScript</div>
              <div className="bg-muted px-2 py-1 rounded text-xs">Server Components</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">$99</div>
                <div className="text-sm text-muted-foreground">20 hours of content</div>
              </div>
              <Button asChild>
                <Link href="https://example.com/course" target="_blank" rel="noopener noreferrer">
                  View Course <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Courses</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "React Performance Optimization",
                description: "Learn how to identify and fix performance issues in React applications.",
                image: "/placeholder.svg?height=200&width=400",
                price: "$79",
                duration: "10 hours",
                tags: ["React", "Performance", "DevTools"],
                link: "https://example.com/course",
              },
              {
                title: "TypeScript for JavaScript Developers",
                description: "A practical guide to adopting TypeScript in your JavaScript projects.",
                image: "/placeholder.svg?height=200&width=400",
                price: "$69",
                duration: "8 hours",
                tags: ["TypeScript", "JavaScript"],
                link: "https://example.com/course",
              },
              {
                title: "Building a Full-Stack SaaS",
                description: "Step-by-step guide to building a SaaS application with Next.js and Node.js.",
                image: "/placeholder.svg?height=200&width=400",
                price: "$129",
                duration: "25 hours",
                tags: ["Next.js", "Node.js", "SaaS"],
                link: "https://example.com/course",
              },
              {
                title: "Modern CSS Techniques",
                description: "Master modern CSS features like Grid, Flexbox, and CSS Variables.",
                image: "/placeholder.svg?height=200&width=400",
                price: "$59",
                duration: "6 hours",
                tags: ["CSS", "Responsive Design"],
                link: "https://example.com/course",
              },
            ].map((course, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="bg-muted px-2 py-1 rounded text-xs">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">{course.price}</div>
                      <div className="text-xs text-muted-foreground">{course.duration}</div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={course.link} target="_blank" rel="noopener noreferrer">
                        View Course
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Free Resources</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "JavaScript Fundamentals",
                description: "A refresher on JavaScript basics for beginners.",
                image: "/placeholder.svg?height=150&width=300",
                link: "https://example.com/resource",
              },
              {
                title: "Git & GitHub Crash Course",
                description: "Learn the essentials of version control with Git and GitHub.",
                image: "/placeholder.svg?height=150&width=300",
                link: "https://example.com/resource",
              },
              {
                title: "Web Accessibility Checklist",
                description: "A comprehensive checklist for building accessible websites.",
                image: "/placeholder.svg?height=150&width=300",
                link: "https://example.com/resource",
              },
            ].map((resource, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                      Access Resource
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

