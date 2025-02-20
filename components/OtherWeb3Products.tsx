"use client"

import { motion } from "framer-motion"
import { Users, Globe, Shield } from "lucide-react"

const otherProducts = [
  {
    name: "DAOs",
    description: "Decentralized Autonomous Organizations for community-driven decision making.",
    icon: Users,
    examples: ["MakerDAO", "Uniswap Governance", "Compound Governance"],
  },
  {
    name: "Metaverse Platforms",
    description: "Virtual worlds where users can interact, play games, and own digital assets.",
    icon: Globe,
    examples: ["Decentraland", "The Sandbox", "Cryptovoxels"],
  },
  {
    name: "Web3 Browsers & Wallets",
    description: "Tools for interacting with decentralized applications and managing crypto assets.",
    icon: Shield,
    examples: ["Brave Browser", "MetaMask", "Trust Wallet"],
  },
]

export default function OtherWeb3Products() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Other Web3 Products
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <product.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Examples:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {product.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>{example}</li>
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

