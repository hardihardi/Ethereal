"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "DeFi Dashboard",
    image: "/project/defi-dashboard.png",
    description: "A comprehensive dashboard for managing DeFi investments",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    image: "/project/nft-marketplace.png",
    description: "A platform for buying, selling, and trading unique digital assets",
  },
  {
    id: 3,
    title: "Decentralized Social Network",
    image: "/project/decentralized-social-network.png",
    description: "A Web3-powered social network with user-owned data",
  },
  // Add more projects as needed
]

export default function Gallery() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

