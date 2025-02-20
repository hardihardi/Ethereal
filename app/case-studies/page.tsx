"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: "DeFi Protocol Optimization",
    description: "How we improved transaction speed by 300% for a leading DeFi platform",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "/case-studies/defi-optimization",
  },
  {
    id: 2,
    title: "NFT Marketplace Launch",
    description: "Scaling to handle 1 million users in the first week for a revolutionary NFT platform",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "/case-studies/nft-marketplace",
  },
  {
    id: 3,
    title: "Cross-Chain Bridge Development",
    description: "Connecting Ethereum and Solana ecosystems for seamless asset transfer",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "/case-studies/cross-chain-bridge",
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Case Studies
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore our successful Web3 projects and learn how we've helped businesses achieve their goals
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{study.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                <Link
                  href={study.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

