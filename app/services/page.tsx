"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"

export default function ServicesPage() {
  const { t } = useLanguage()
  const serviceItems = t("services.serviceItems", { returnObjects: true })

  return (
    <div className="py-12 md:py-24">
      <div className="section-container text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("services.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.description")}</p>
      </div>

      <div className="content-container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service: any, index: number) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mr-2 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full">
                  <Link href="/contact">{t("services.getStarted")}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

