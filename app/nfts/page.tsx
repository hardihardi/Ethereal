"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Palette } from "lucide-react"

const nftCategories = [
  {
    name: "NFT Marketplaces",
    description: "Platforms for buying, selling, and trading unique digital assets.",
    icon: ShoppingBag,
    examples: ["OpenSea", "Rarible", "SuperRare"],
  },
  {
    name: "NFT Creation Tools",
    description: "Tools for artists and creators to mint and manage their NFTs.",
    icon: Palette,
    examples: ["Mintable", "Manifold"],
  },
]

export default function NFTs() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Non-Fungible Tokens (NFTs)
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore the world of unique digital assets and collectibles
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {nftCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Examples:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {category.examples.map((example, exampleIndex) => (
                    <motion.li
                      key={exampleIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + exampleIndex * 0.1 }}
                    >
                      {example}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

