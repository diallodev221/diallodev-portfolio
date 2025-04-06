import Link from "next/link"
import type { ReactNode } from "react"

interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center p-2 rounded-full border border-border hover:bg-primary/10 hover:border-primary transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

