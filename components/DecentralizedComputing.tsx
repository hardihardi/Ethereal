"use client"

import { motion } from "framer-motion"
import { Cloud, Cpu } from "lucide-react"

const computingOptions = [
  {
    name: "Akash Network",
    description: "A marketplace for cloud computing resources.",
    icon: Cloud,
    features: ["Decentralized", "Cost-effective", "Flexible"],
  },
  {
    name: "Render Token",
    description: "Enables decentralized GPU rendering for graphics-intensive tasks.",
    icon: Cpu,
    features: ["GPU-powered", "Distributed rendering", "Token-based economy"],
  },
]

export default function DecentralizedComputing() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Decentralized Computing Solutions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {computingOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
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

