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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Decentralized Storage Solutions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {storageOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <option.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{option.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

