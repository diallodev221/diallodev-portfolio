import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-6">Newsletter</h1>

      <div className="bg-muted/30 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Join over 5,000 developers who receive regular updates on the latest web development trends, tutorials, and
          best practices. I send out a newsletter every two weeks with content that will help you become a better
          developer.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input id="name" name="name" type="text" placeholder="Your name" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
          </div>

          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-4">What to expect</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Tutorials & Guides</h3>
            <p className="text-muted-foreground">
              Step-by-step tutorials and comprehensive guides on web development topics, from beginner to advanced.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Code Snippets</h3>
            <p className="text-muted-foreground">
              Useful code snippets and solutions to common programming challenges that you can use in your projects.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Industry News</h3>
            <p className="text-muted-foreground">
              Updates on the latest frameworks, libraries, and tools in the web development ecosystem.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Career Advice</h3>
            <p className="text-muted-foreground">
              Tips and insights on advancing your career as a developer, including interview preparation and skill
              development.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Previous Issues</h2>

        <div className="space-y-4">
          {[
            {
              title: "Building Accessible Web Applications",
              date: "April 1, 2023",
              description: "Tips and techniques for creating more accessible web experiences.",
            },
            {
              title: "The Future of JavaScript in 2023",
              date: "March 15, 2023",
              description: "Exploring upcoming JavaScript features and trends.",
            },
            {
              title: "Optimizing React Performance",
              date: "March 1, 2023",
              description: "Strategies to make your React applications faster and more efficient.",
            },
            {
              title: "Getting Started with Web Components",
              date: "February 15, 2023",
              description: "An introduction to building reusable web components.",
            },
            {
              title: "Serverless Architecture Patterns",
              date: "February 1, 2023",
              description: "Exploring common patterns for serverless applications.",
            },
          ].map((issue, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <h3 className="font-semibold text-lg">{issue.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{issue.date}</p>
              <p className="text-muted-foreground">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

