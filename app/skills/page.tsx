"use client"

import { useLanguage } from "@/lib/i18n/context"

export default function SkillsPage() {
  const { t } = useLanguage()
  const frontendSkills = t("skills.technical.frontend.skills", { returnObjects: true })
  const backendSkills = t("skills.technical.backend.skills", { returnObjects: true })
  const businessSkills = t("skills.business.skills", { returnObjects: true })

  return (
    <div className="py-12 md:py-24">
      <div className="section-container text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("skills.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("skills.description")}</p>
      </div>

      <div className="content-container space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">{t("skills.technical.title")}</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">{t("skills.technical.frontend.title")}</h3>
              <ul className="space-y-4">
                {frontendSkills.map((skill: any, index: number) => (
                  <li key={index} className="space-y-1">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-secondary">{skill.level}</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="gradient-bg h-2 rounded-full" style={{ width: skill.level }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">{t("skills.technical.backend.title")}</h3>
              <ul className="space-y-4">
                {backendSkills.map((skill: any, index: number) => (
                  <li key={index} className="space-y-1">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-secondary">{skill.level}</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="gradient-bg h-2 rounded-full" style={{ width: skill.level }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">{t("skills.business.title")}</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {businessSkills.map((skill: any, index: number) => (
              <div key={index} className="bg-muted p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-4">
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
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-justify">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">{t("skills.tools.title")}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "GraphQL",
              "AWS",
              "Docker",
              "Git",
              "CI/CD",
              "Figma",
              "Tailwind CSS",
              "Redux",
              "Jest",
            ].map((tool, index) => (
              <div key={index} className="bg-muted p-4 rounded-lg text-center">
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

