"use client"

import { motion } from "framer-motion"

const platforms = [
  {
    name: "Ethereum",
    description: "The foundation for many dApps and smart contracts.",
    tps: "15",
    blockTime: "12 seconds",
    consensus: "Proof of Stake",
    latestBlock: "19,245,032",
  },
  {
    name: "Solana",
    description: "Known for high speed and scalability.",
    tps: "1,500",
    blockTime: "400ms",
    consensus: "Proof of History",
    latestBlock: "282,839,293",
  },
  {
    name: "Polkadot",
    description: "Aims to connect various blockchains together.",
    tps: "1,000",
    blockTime: "6 seconds",
    consensus: "NPoS",
    latestBlock: "14,832,944",
  },
  {
    name: "Cosmos",
    description: "Focuses on interoperability between different blockchains.",
    tps: "10,000",
    blockTime: "6 seconds",
    consensus: "Tendermint",
    latestBlock: "9,283,842",
  },
]

export default function BlockchainPlatforms() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Blockchain Platforms
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Compare different blockchain platforms and their key characteristics
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{platform.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">TPS:</span>
                    <span className="font-semibold">{platform.tps}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Block Time:</span>
                    <span className="font-semibold">{platform.blockTime}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Consensus:</span>
                    <span className="font-semibold">{platform.consensus}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Latest Block:</span>
                    <span className="font-semibold">{platform.latestBlock}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

