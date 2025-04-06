"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-6">{t("about.title")}</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Alex Morgan"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        <div className="md:w-2/3">
          <p className="mb-4 text-justify">{t("about.intro.p1")}</p>

          <p className="mb-4 text-justify">{t("about.intro.p2")}</p>

          <p className="mb-4 text-justify">{t("about.intro.p3")}</p>

          <p className="text-justify">{t("about.intro.p4")}</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t("about.experience.title")}</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">{t("about.experience.job1.title")}</h3>
            <p className="text-muted-foreground">
              {t("about.experience.job1.company")} • {t("about.experience.job1.period")}
            </p>
            <p className="mt-2 text-justify">{t("about.experience.job1.description")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">{t("about.experience.job2.title")}</h3>
            <p className="text-muted-foreground">
              {t("about.experience.job2.company")} • {t("about.experience.job2.period")}
            </p>
            <p className="mt-2 text-justify">{t("about.experience.job2.description")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">{t("about.experience.job3.title")}</h3>
            <p className="text-muted-foreground">
              {t("about.experience.job3.company")} • {t("about.experience.job3.period")}
            </p>
            <p className="mt-2 text-justify">{t("about.experience.job3.description")}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{t("about.skills.title")}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{t("about.skills.frontend.title")}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {t("about.skills.frontend.items", { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{t("about.skills.backend.title")}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {t("about.skills.backend.items", { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{t("about.skills.devops.title")}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {t("about.skills.devops.items", { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

