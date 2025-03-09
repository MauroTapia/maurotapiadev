import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mauro Tapia | Software Engineer",
  description: "Portfolio of Mauro Tapia, Software Engineer with 3 years of experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

