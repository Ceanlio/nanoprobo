import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { StructuredData } from "@/components/structured-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Nanoprobo - Advanced AI Solutions for Modern Business",
    template: "%s | Nanoprobo",
  },
  description:
    "Transform your business with Nanoprobo's cutting-edge AI platform. Join thousands of companies leveraging advanced machine learning, analytics, and automation tools. Start your free trial today.",
  keywords: [
    "AI platform",
    "machine learning",
    "artificial intelligence",
    "business automation",
    "AI analytics",
    "enterprise AI",
    "AI solutions",
    "proboscis monkey AI",
  ],
  authors: [{ name: "Nanoprobo Team" }],
  creator: "Nanoprobo",
  publisher: "Nanoprobo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://nanoprobo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nanoprobo - Advanced AI Solutions for Modern Business",
    description: "Transform your business with cutting-edge AI technology. Join our early access program.",
    url: "/",
    siteName: "Nanoprobo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nanoprobo - AI Solutions Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanoprobo - Advanced AI Solutions",
    description: "Transform your business with cutting-edge AI technology.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  )
}
