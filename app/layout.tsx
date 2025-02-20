import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/ThemeProvider"
import Header from "../components/Header"
import Footer from "../components/Footer"
import type { Metadata } from "next"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethereal - Web3 Development Agency",
  description: "End-to-end technical solutions for your Web3 project launch",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'