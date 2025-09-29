import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MapSection from "@/components/map-section"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "hokoinnovation.org",
  description: "HOKO Innovation for Disability Empowerment and Development",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <MapSection />
        <Footer />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  )
}
