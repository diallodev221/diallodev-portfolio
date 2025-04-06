import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link: string
}

export default function ProjectCard({ title, description, tags, imageUrl, link }: ProjectCardProps) {
  return (
    <Link href={link} className="group">
      <div className="bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

