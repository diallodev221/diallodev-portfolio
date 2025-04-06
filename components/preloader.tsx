"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n/context"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate loading time and then hide the preloader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Top curtain */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-background z-30"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </motion.div>

          {/* Bottom curtain */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-background z-30"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </motion.div>

          {/* Left curtain */}
          <motion.div
            className="absolute top-0 left-0 bottom-0 w-1/2 bg-background z-20"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
          </motion.div>

          {/* Right curtain */}
          <motion.div
            className="absolute top-0 right-0 bottom-0 w-1/2 bg-background z-20"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
          </motion.div>

          {/* Center content */}
          <div className="relative z-40 flex flex-col items-center justify-center">
            <motion.div
              className="relative w-32 h-32 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              exit={{
                opacity: 0,
                scale: 1.2,
                transition: { duration: 0.3, delay: 0 },
              }}
            >
              {/* Logo */}
              <div className="w-32 h-32 rounded-md gradient-bg flex items-center justify-center text-white font-bold text-6xl">
                D
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-md border-2 border-primary"
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.3, delay: 0 },
              }}
            >
              <h2 className="text-xl font-bold mb-2">
                <span className="gradient-text">{t("preloader.title")}</span>
              </h2>
              <p className="text-muted-foreground">{t("preloader.subtitle")}</p>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

