"use client"

import { motion } from "framer-motion"
import { Database, HardDrive, Shield } from "lucide-react"

const storageOptions = [
  {
    name: "IPFS",
    description: "A peer-to-peer file system for storing and sharing data.",
    icon: Database,
    features: ["Content-addressed", "Distributed", "Versioned"],
  },
  {
    name: "Arweave",
    description: "Permanent data storage with a one-time fee.",
    icon: HardDrive,
    features: ["Permanent", "Decentralized", "Low-cost"],
  },
  {
    name: "Filecoin",
    description: "A decentralized storage network with a focus on data integrity.",
    icon: Shield,
    features: ["Verifiable", "Market-driven", "Large-scale"],
  },
]

export default function DecentralizedStorage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Decentralized Storage
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore innovative solutions for storing data in a decentralized manner
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {storageOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <option.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{option.name}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {option.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                    >
                      {feature}
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

