"use client"

import { motion } from "framer-motion"
import { RefreshCcw, DollarSign, Layers } from "lucide-react"

const defiCategories = [
  {
    name: "Decentralized Exchanges (DEXs)",
    description: "Platforms for swapping tokens without intermediaries.",
    icon: RefreshCcw,
    examples: ["Uniswap", "SushiSwap", "PancakeSwap"],
  },
  {
    name: "Lending & Borrowing",
    description: "Platforms that enable users to lend and borrow cryptocurrencies.",
    icon: DollarSign,
    examples: ["Aave", "Compound"],
  },
  {
    name: "Stablecoins",
    description: "Cryptocurrencies designed to maintain a stable value.",
    icon: Layers,
    examples: ["DAI", "USDC"],
  },
]

export default function DeFi() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Decentralized Finance (DeFi)
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore the world of open and permissionless financial services
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {defiCategories.map((category, index) => (
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

