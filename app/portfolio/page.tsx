"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    name: "DecentralBank",
    description: "A decentralized lending and borrowing platform built on Ethereum.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "https://decentralbank.example.com",
  },
  {
    name: "NFT Realm",
    description: "A marketplace for creating, buying, and selling unique digital assets.",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "https://nftrealm.example.com",
  },
  {
    name: "ChainLink",
    description: "A bridge connecting Ethereum and Binance Smart Chain for seamless asset transfers.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "https://chainlink.example.com",
  },
  {
    name: "GovernDAO",
    description: "A decentralized governance platform for community-driven decision making.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "https://governdao.example.com",
  },
  {
    name: "MetaVerse Realms",
    description: "A virtual world where users can interact, play games, and own digital assets.",
    image:
      "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "https://metaverserealms.example.com",
  },
  {
    name: "DeFi Aggregator",
    description: "An all-in-one platform for accessing various DeFi protocols and optimizing yields.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    link: "https://defiaggregator.example.com",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Portfolio
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore our successful Web3 projects and innovations
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
                >
                  Visit Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

