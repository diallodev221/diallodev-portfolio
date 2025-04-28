"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    // Simulate loading time and then hide the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          ref={containerRef}
        >
          {/* Background gradient */}
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)",
            }}
          />

          {/* Main animation container */}
          <div className="relative w-full max-w-3xl px-4">
            {/* Central animation */}
            <div
              className={`relative ${
                isMobile ? "h-64" : "h-80"
              } flex items-center justify-center`}
            >
              {/* The bridge animation */}
              <div className="relative w-full">
                {/* Left side (Technology) */}
                <motion.div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 ${
                    isMobile ? "w-24" : isTablet ? "w-32" : "w-40"
                  } h-auto flex items-center justify-center`}
                  initial={{ x: isMobile ? -50 : -100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5,
                    },
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className={`${
                        isMobile
                          ? "w-20 h-20"
                          : isTablet
                          ? "w-24 h-24"
                          : "w-32 h-32"
                      } rounded-2xl gradient-bg flex items-center justify-center shadow-lg`}
                      initial={{ rotateY: 45 }}
                      animate={{
                        rotateY: [45, 0, 45],
                        transition: {
                          duration: 8,
                          ease: "easeInOut",
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                        },
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={isMobile ? "24" : "40"}
                        height={isMobile ? "24" : "40"}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </motion.div>

                    <motion.div
                      className="mt-4 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.8,
                        },
                      }}
                    >
                      <h3
                        className={`${
                          isMobile ? "text-xs" : "text-lg"
                        } font-medium tracking-wide text-primary`}
                      >
                        TECHNOLOGY
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right side (Business) */}
                <motion.div
                  className={`absolute right-0 top-1/2 -translate-y-1/2 ${
                    isMobile ? "w-24" : isTablet ? "w-32" : "w-40"
                  } h-auto flex items-center justify-center`}
                  initial={{ x: isMobile ? 50 : 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 1.0,
                    },
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className={`${
                        isMobile
                          ? "w-20 h-20"
                          : isTablet
                          ? "w-24 h-24"
                          : "w-32 h-32"
                      } rounded-2xl bg-secondary flex items-center justify-center shadow-lg`}
                      initial={{ rotateY: -45 }}
                      animate={{
                        rotateY: [-45, 0, -45],
                        transition: {
                          duration: 8,
                          ease: "easeInOut",
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                        },
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={isMobile ? "24" : "40"}
                        height={isMobile ? "24" : "40"}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-secondary-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </motion.div>

                    <motion.div
                      className="mt-4 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 1.3,
                        },
                      }}
                    >
                      <h3
                        className={`${
                          isMobile ? "text-xs" : "text-lg"
                        } font-medium tracking-wide text-secondary`}
                      >
                        BUSINESS
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>

                {/* The bridge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
                  {/* Bridge line */}
                  <motion.div
                    className="relative h-[2px] bg-gradient-to-r from-primary via-white to-secondary"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isMobile ? "70%" : "60%",
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1.8,
                      },
                    }}
                  >
                    {/* Animated dot */}
                    <motion.div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        isMobile ? "w-3 h-3" : "w-4 h-4"
                      } rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]`}
                      initial={{ left: "0%", scale: 0 }}
                      animate={{
                        left: ["0%", "100%"],
                        scale: [0, 1, 1, 0],
                        transition: {
                          duration: 2.5,
                          ease: "easeInOut",
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 0.5,
                        },
                      }}
                    />
                  </motion.div>

                  {/* "BRIDGING" text */}
                  <motion.div
                    className={`${isMobile ? "mt-4" : "mt-6"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 2.3,
                      },
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{
                        scale: [0.9, 1.05, 1],
                        transition: {
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 2.5,
                        },
                      }}
                    >
                      <h2
                        className={`${
                          isMobile
                            ? "text-xl"
                            : isTablet
                            ? "text-2xl"
                            : "text-3xl"
                        } font-bold tracking-wider gradient-text`}
                      >
                        BRIDGING
                      </h2>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Logo and tagline */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 3,
                },
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className={`${
                    isMobile ? "w-10 h-10" : "w-14 h-14"
                  } rounded-xl gradient-bg flex items-center justify-center text-white font-bold ${
                    isMobile ? "text-xl" : "text-2xl"
                  } shadow-lg mr-3`}
                  initial={{ rotateY: 90 }}
                  animate={{
                    rotateY: [90, 0],
                    transition: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 3.2,
                    },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  D
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 3.5,
                    },
                  }}
                >
                  <p
                    className={`font-semibold ${
                      isMobile ? "text-base" : "text-lg"
                    }`}
                  >
                    diallodev.com
                  </p>
                </motion.div>
              </div>

              <motion.p
                className={`text-muted-foreground text-center max-w-md ${
                  isMobile ? "text-xs px-4" : "text-sm"
                }`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 3.8,
                  },
                }}
              >
                {t("preloader.subtitle")}
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className={`absolute ${
                isMobile ? "bottom-[-40px]" : "bottom-[-60px]"
              } left-0 w-full h-[2px] bg-muted/50 overflow-hidden rounded-full`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            >
              <motion.div
                className="h-full w-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: {
                    duration: 4.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
