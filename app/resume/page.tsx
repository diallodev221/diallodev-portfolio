"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export default function ResumePage() {
  const { t } = useLanguage()
  const companies = t("resume.experience.companies", { returnObjects: true })
  const educationItems = t("resume.education.items", { returnObjects: true })
  const competencies = t("resume.competencies.items", { returnObjects: true })
  const certifications = t("resume.certifications.items", { returnObjects: true })
  const languages = t("resume.languages.items", { returnObjects: true })

  return (
    <div className="py-12 md:py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {t("resume.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("resume.subtitle")}
            </p>
          </div>
          <Button asChild size="lg" className="gradient-bg">
            <Link href="#">
              <Download className="mr-2 h-4 w-4" /> {t("resume.downloadCV")}
            </Link>
          </Button>
        </div>

        <div className="content-container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
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
                    className="mr-3"
                  >
                    <rect
                      x="3"
                      y="8"
                      width="18"
                      height="12"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 8V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"></path>
                  </svg>
                  {t("resume.experience.title")}
                </h2>

                {/* <div className="bg-muted/30 rounded-lg p-6 space-y-0">
                  {companies.map((company: any, index: number) => (
                    <div key={index} className="work-experience-item">
                      <div className="work-logo">
                        <Image src="/placeholder.svg?height=64&width=64" alt={company.name} width={64} height={64} />
                      </div>
                      <div className="work-details">
                        <div className="work-company">{company.name}</div>
                        <div className="work-position">{company.position}</div>
                      </div>
                      <div className="work-date">{company.period}</div>
                    </div>
                  ))}
                </div> */}

                <div className="space-y-8">
                  {companies.map((company: any, index: number) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-primary/30"
                    >
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full gradient-bg"></div>
                      <div className="mb-1">
                        <span className="inline-block px-3 py-1 text-xs rounded-full gradient-bg text-white mb-2">
                          {company.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{company.position}</h3>
                      <p className="text-primary font-medium mb-2">
                        {company.name}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {company.description}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {company.subInfos?.map((info: any, index: number) => (
                          <li key={index}>{info}</li>
                        ))}                        
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">
                  {t("resume.education.title")}
                </h2>

                <div className="space-y-8">
                  {educationItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-primary/30"
                    >
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full gradient-bg"></div>
                      <div className="mb-1">
                        <span className="inline-block px-3 py-1 text-xs rounded-full gradient-bg text-white mb-2">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-primary font-medium mb-2">
                        {item.school}
                      </p>
                      <p className="text-muted-foreground text-justify">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-muted p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">
                  {t("resume.competencies.title")}
                </h2>

                <div className="space-y-4">
                  {competencies.map((item: any, index: number) => (
                    <div key={index}>
                      <h3 className="text-sm font-medium mb-2">{item.name}</h3>
                      <div className="w-full bg-background rounded-full h-2">
                        <div
                          className="gradient-bg h-2 rounded-full"
                          style={{ width: item.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-muted p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">
                  {t("resume.certifications.title")}
                </h2>

                <div className="space-y-4">
                  {certifications.map((cert: any, index: number) => (
                    <div key={index}>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}, {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-muted p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">
                  {t("resume.languages.title")}
                </h2>

                <div className="space-y-4">
                  {languages.map((lang: any, index: number) => (
                    <div key={index}>
                      <h3 className="text-sm font-medium mb-2">{lang.name}</h3>
                      <div className="w-full bg-background rounded-full h-2">
                        <div
                          className="gradient-bg h-2 rounded-full"
                          style={{ width: lang.level }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {lang.proficiency}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

