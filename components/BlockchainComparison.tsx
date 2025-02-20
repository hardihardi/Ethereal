"use client"

import { motion } from "framer-motion"
import { Coins, Sun, Atom, Globe } from "lucide-react"

const blockchains = [
  {
    name: "Ethereum",
    icon: Coins,
    status: "Active",
    tps: "15",
    blockTime: "12 seconds",
    consensus: "Proof of Stake",
    latestBlock: "19,245,032",
    description: "The foundation for many dApps and smart contracts.",
  },
  {
    name: "Solana",
    icon: Sun,
    status: "Active",
    tps: "1,500",
    blockTime: "400ms",
    consensus: "Proof of History",
    latestBlock: "282,839,293",
    description: "Known for high speed and scalability.",
  },
  {
    name: "Polkadot",
    icon: Atom,
    status: "Active",
    tps: "1,000",
    blockTime: "6 seconds",
    consensus: "NPoS",
    latestBlock: "14,832,944",
    description: "Aims to connect various blockchains together.",
  },
  {
    name: "Cosmos",
    icon: Globe,
    status: "Active",
    tps: "10,000",
    blockTime: "6 seconds",
    consensus: "Tendermint",
    latestBlock: "9,283,842",
    description: "Focuses on interoperability between different blockchains.",
  },
]

export default function BlockchainComparison() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Blockchain Platform Comparison
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blockchains.map((blockchain, index) => (
            <motion.div
              key={blockchain.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <blockchain.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{blockchain.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{blockchain.description}</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Status:</span> {blockchain.status}
                  </li>
                  <li>
                    <span className="font-medium">Current TPS:</span> {blockchain.tps}
                  </li>
                  <li>
                    <span className="font-medium">Block Time:</span> {blockchain.blockTime}
                  </li>
                  <li>
                    <span className="font-medium">Consensus:</span> {blockchain.consensus}
                  </li>
                  <li>
                    <span className="font-medium">Latest Block:</span> {blockchain.latestBlock}
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

