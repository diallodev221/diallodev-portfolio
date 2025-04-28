import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

 interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link} className="group">
      <div className="bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4 md:p-6 flex flex-col flex-grow">
          <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
