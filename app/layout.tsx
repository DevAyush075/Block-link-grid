import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Spectral_SC } from "next/font/google"
import { LenisProvider } from "../components/Lenis-Provider"
import CustomCursor from "@/components/custom-cursor"

const spectralSC = Spectral_SC({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose weights you need
  variable: "--font-spectral-sc",
  display: "swap",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern Card Dashboard",
  description: "A modern project management dashboard with beautiful cards",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={`${spectralSC.variable}`}>
      <CustomCursor/>
       <LenisProvider />
      <body className='font-spectral-sc'>{children}</body>
    </html>
  )
}
