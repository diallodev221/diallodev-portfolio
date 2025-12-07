"use client";

import Image from "next/image";
import {
  Github,
  Mail,
  Twitter,
  Linkedin,
  ArrowDown,
  Briefcase,
  Code,
  Award,
  MapPin,
  Phone,
  Calendar,
  Heart,
  GraduationCap,
  Users,
  Target,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/project-card";
import TechIcon from "@/components/tech-icon";
import { useLanguage } from "@/lib/i18n/context";
import { motion } from "framer-motion";
import { data } from "@/lib/data/data";

export default function Home() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 dot-pattern"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="flex justify-center mb-8">
              <Image
                src="/profile.png"
                alt="Saïfoulaye Diallo"
                width={200}
                height={200}
                className="rounded-full border-4 border-white/20 object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              {t("homePage.hero.greeting")}{" "}
              <span className="text-secondary">Saïfoulaye Diallo</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
              {t("homePage.hero.subtitle")}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-secondary">5+</div>
                <div className="text-sm opacity-90">
                  {t("homePage.hero.stats.yearsExperience")}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-sm opacity-90">
                  {t("homePage.hero.stats.projectsDelivered")}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm opacity-90">
                  {t("homePage.hero.stats.technologies")}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm opacity-90">
                  {t("homePage.hero.stats.clientSatisfaction")}
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center pt-6">
              <a
                href="https://www.linkedin.com/in/diallodev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/diallo__dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com/diallodev221"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:contact@diallodev.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-4"
            >
              <Button
                onClick={() => scrollToSection("#services")}
                size="lg"
                className="rounded-full bg-secondary text-primary-foreground hover:bg-secondary/90"
              >
                {t("homePage.hero.cta")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Moved up for client attention */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t("services.title")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("services.description")}
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(
                t("services.serviceItems", { returnObjects: true }) as any[]
              ).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/50 p-6 rounded-lg border border-border hover:shadow-lg hover:border-primary/20 transition-all flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                      {t("homePage.services.keyFeatures")}
                    </p>
                    <ul className="space-y-1.5">
                      {service.features
                        .slice(0, 4)
                        .map((feature: string, i: number) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2 text-xs mt-1">
                              ▸
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - Moved up to show proof of work */}
      <section id="works" className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t("homePage.portfolio.title")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("homePage.portfolio.description")}
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.projects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    link={`/works/${project.slug}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {t("homePage.about.title")}
            </h2>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">
                    {t("homePage.about.expertise.title")}
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{t("homePage.about.expertise.items.item1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{t("homePage.about.expertise.items.item2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{t("homePage.about.expertise.items.item3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{t("homePage.about.expertise.items.item4")}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-bold">
                    {t("homePage.about.experience.title")}
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>{t("homePage.about.experience.items.item1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>{t("homePage.about.experience.items.item2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>{t("homePage.about.experience.items.item3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>{t("homePage.about.experience.items.item4")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Brief Bio */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-muted-foreground leading-relaxed">
                {t("homePage.about.bio")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t("homePage.skills.title")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("homePage.skills.description")}
            </p>

            <div className="max-w-6xl mx-auto space-y-16">
              {/* Technical Skills Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("homePage.skills.technical.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("homePage.skills.technical.description")}
                    </p>
                  </div>
                </div>

                {/* Core Technologies */}
                <div className="mb-10">
                  <h4 className="text-lg font-semibold mb-4 text-muted-foreground">
                    {t("homePage.skills.technical.coreTechnologies")}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "Java",
                      "Spring Boot",
                      "React",
                      "Angular",
                      "TypeScript",
                      "Node.js",
                      "PostgreSQL",
                      "MongoDB",
                      "Docker",
                      "AWS",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        className="text-base px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                        <TechIcon name={skill} className="w-5 h-5" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technical Skills by Category */}
                <div className="space-y-12">
                  {Object.entries({
                    frontend: {
                      title: t("skills.technical.frontend.title"),
                      skills: t("skills.technical.frontend.skills", {
                        returnObjects: true,
                      }),
                    },
                    backend: {
                      title: t("skills.technical.backend.title"),
                      skills: t("skills.technical.backend.skills", {
                        returnObjects: true,
                      }),
                    },
                    devops: {
                      title: t("skills.technical.devops.title"),
                      skills: t("skills.technical.devops.skills", {
                        returnObjects: true,
                      }),
                    },
                    database: {
                      title: t("skills.technical.database.title"),
                      skills: t("skills.technical.database.skills", {
                        returnObjects: true,
                      }),
                    },
                  } as any).map(([key, category]: [string, any], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Code className="h-6 w-6 text-primary" />
                        {category.title}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {category.skills.map(
                          (skill: any, skillIndex: number) => {
                            const techName = skill.name
                              .split(" ")[0]
                              .split("-")[0]
                              .split("/")[0];

                            return (
                              <motion.div
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.3,
                                  delay: skillIndex * 0.05,
                                }}
                                className="bg-background p-4 rounded-lg border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
                              >
                                <div className="flex flex-col items-center gap-3 text-center">
                                  <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                                    <TechIcon
                                      name={techName}
                                      className="w-8 h-8"
                                    />
                                  </div>
                                  <p className="text-xs font-semibold text-foreground line-clamp-2 w-full">
                                    {skill.name}
                                  </p>
                                </div>
                              </motion.div>
                            );
                          }
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("homePage.skills.soft.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("homePage.skills.soft.description")}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {(
                    t("skills.business.skills", {
                      returnObjects: true,
                    }) as any[]
                  ).map((skill: any, index: number) => {
                    const icons = [Target, MessageSquare, Award];
                    const Icon = icons[index] || Users;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                            <Icon className="h-6 w-6 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold mb-2">
                              {skill.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Additional Soft Skills */}
                <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/10">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {t("homePage.skills.soft.additional")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(
                      t("homePage.skills.soft.additionalItems", {
                        returnObjects: true,
                      }) as string[]
                    ).map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-sm border-primary/20 hover:bg-primary/5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t("homePage.experience.title")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("homePage.experience.description")}
            </p>

            <div className="max-w-6xl mx-auto space-y-16">
              {/* Work Experience */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("homePage.experience.work.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("homePage.experience.work.description")}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {(
                    t("resume.experience.companies", {
                      returnObjects: true,
                    }) as any[]
                  ).map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all h-full flex flex-col"
                    >
                      <div className="mb-3">
                        <h4 className="text-xl font-bold mb-1">
                          {exp.position}
                        </h4>
                        <p className="text-lg text-primary font-semibold mb-2">
                          {exp.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {exp.description}
                      </p>
                      {exp.subInfos && exp.subInfos.length > 0 && (
                        <div className="space-y-2 mt-auto">
                          <p className="text-sm font-semibold text-foreground">
                            {t("homePage.experience.work.keyAchievements")}
                          </p>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {exp.subInfos.map((info: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                <span>{info}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Volunteer Experience */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("homePage.experience.volunteer.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("homePage.experience.volunteer.description")}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {(
                    t("resume.experience.volunteer", {
                      returnObjects: true,
                    }) as any[]
                  )?.map((vol, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-muted/50 p-6 rounded-lg border-l-4 border-secondary hover:shadow-lg transition-all"
                    >
                      <div className="mb-3">
                        <h4 className="text-lg font-bold">{vol.position}</h4>
                        <p className="text-base text-secondary font-semibold mb-1">
                          {vol.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{vol.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {vol.description}
                      </p>
                      {vol.subInfos && vol.subInfos.length > 0 && (
                        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                          {vol.subInfos.map((info: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <span className="text-secondary mr-2">•</span>
                              {info}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trainer/Mentor Experience */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("homePage.experience.trainerMentor.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("homePage.experience.trainerMentor.description")}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(
                    t("resume.experience.trainerMentor", {
                      returnObjects: true,
                    }) as any[]
                  )?.map((trainer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all"
                    >
                      <div className="mb-3">
                        <h4 className="text-lg font-bold">
                          {trainer.position}
                        </h4>
                        <p className="text-base text-primary font-semibold mb-1">
                          {trainer.name}
                        </p>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{trainer.period}</span>
                          </div>
                          {trainer.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{trainer.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {trainer.description}
                      </p>
                      {trainer.subInfos && trainer.subInfos.length > 0 && (
                        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                          {trainer.subInfos.map((info: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {info}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("homePage.experience.education.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("homePage.experience.education.description")}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {(
                    t("resume.education.items", {
                      returnObjects: true,
                    }) as any[]
                  ).map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-muted/50 p-6 rounded-lg border-l-4 border-secondary hover:shadow-lg transition-all"
                    >
                      <div className="mb-3">
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-lg text-secondary font-semibold mb-1">
                          {edu.school}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-32 hero-gradient text-white relative"
      >
        <div className="absolute inset-0 dot-pattern"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {t("contact.title")}
            </h2>
            <p className="text-lg mb-8 opacity-90 text-center">
              {t("contact.description")}
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <p className="text-sm opacity-75 mb-1">
                  {t("contact.location.title")}
                </p>
                <p className="font-semibold">{t("contact.location.value")}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <p className="text-sm opacity-75 mb-1">
                  {t("contact.email.title")}
                </p>
                <a
                  href={`mailto:${t("contact.email.value")}`}
                  className="font-semibold hover:text-secondary transition-colors break-all"
                >
                  {t("contact.email.value")}
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <p className="text-sm opacity-75 mb-1">
                  {t("contact.phone.title")}
                </p>
                <a
                  href={`tel:${t("contact.phone.value")}`}
                  className="font-semibold hover:text-secondary transition-colors"
                >
                  {t("contact.phone.value")}
                </a>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/diallodev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/diallo__dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com/diallodev221"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:contact@diallodev.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
