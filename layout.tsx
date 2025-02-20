import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethereum - Empowering a Decentralized Future",
  description: "Build, innovate, and transform with Ethereum's blockchain technology.",
  keywords: "Ethereum, blockchain, smart contracts, decentralized finance, DeFi, NFT",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

