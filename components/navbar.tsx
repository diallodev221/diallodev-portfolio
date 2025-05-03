"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.works"), href: "/works" },
    { name: t("nav.skills"), href: "/skills" },
    { name: t("nav.resume"), href: "/resume" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="w-full py-4 border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-md gradient-bg flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <span className="ml-2 hidden sm:inline-block text-sm">
              Diallodev
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="rounded-md gradient-bg">
            <Link href="/contact">{t("nav.hireMe")}</Link>
          </Button>

          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background/95 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container py-8 flex flex-col items-center justify-center min-h-screen">
            <div className="space-y-6 text-center">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-xl font-medium transition-colors hover:text-primary block py-2",
                      pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-6"
              >
                <Button asChild className="w-full rounded-md gradient-bg">
                  <Link href="/contact">{t("nav.hireMe")}</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
