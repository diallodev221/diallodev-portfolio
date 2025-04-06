import Link from "next/link"

interface FeaturedCardProps {
  title: string
  description: string
  date: string
  href: string
}

export default function FeaturedCard({ title, description, date, href }: FeaturedCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-muted/30 rounded-lg p-6 h-full hover:bg-muted/50 transition-colors">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </Link>
  )
}

