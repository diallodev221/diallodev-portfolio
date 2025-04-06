"use client"

import Link from "next/link"
import { Github, Globe, Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start">
              <div className="w-10 h-10 rounded-md gradient-bg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <span className="ml-2 font-semibold">diallodev.com</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          <div className="flex gap-6">
            <Link
              href="mailto:contact@diallodev.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>contact@diallodev.com</span>
            </Link>
            <Link
              href="https://diallodev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe size={16} />
              <span>diallodev.com</span>
            </Link>
            <Link
              href="https://github.com/diallodev221"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span>diallodev221</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="/works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.works")}
            </Link>
            <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.skills")}
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.blog")}
            </Link>
            <Link href="/resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.resume")}
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

