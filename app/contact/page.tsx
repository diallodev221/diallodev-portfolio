"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Globe, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="py-12 md:py-24">
      <div className="section-container text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
      </div>

      <div className="content-container">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md gradient-bg flex items-center justify-center text-white shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{t("contact.location.title")}</h3>
                  <p className="text-muted-foreground">{t("contact.location.value")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md gradient-bg flex items-center justify-center text-white shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{t("contact.email.title")}</h3>
                  <p className="text-muted-foreground">{t("contact.email.value")}</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md gradient-bg flex items-center justify-center text-white shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{t("contact.phone.title")}</h3>
                  <p className="text-muted-foreground">{t("contact.phone.value")}</p>
                </div>
              </div> */}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">{t("contact.connectWithMe")}</h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/diallodev221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <Github size={20} />
                </Link>
                <Link
                  href="https://diallodev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="sr-only">Website</span>
                  <Globe size={20} />
                </Link>
                <Link
                  href="mailto:contact@diallodev.com"
                  className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="sr-only">Email</span>
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{t("contact.form.title")}</h2>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contact.form.name")}
                    </label>
                    <Input id="name" name="name" type="text" placeholder={t("contact.form.namePlaceholder")} required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={t("contact.form.subjectPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gradient-bg">
                  {t("contact.form.send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

