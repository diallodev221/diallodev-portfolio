import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n/context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Preloader from "@/components/preloader";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diallodev | Technology & Business Solutions",
  description:
    "Bridging technology and business needs with scalable, user-centric solutions.",
  icons: {
    icon: "/logo.png",
    apple: ""
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Preloader />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
