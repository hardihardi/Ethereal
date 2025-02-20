"use client"
import { motion } from "framer-motion"
import { Users, Globe, Shield } from "lucide-react"
import { ErrorBoundary, type FallbackProps } from "react-error-boundary"
import type React from "react" // Added import for React

interface Product {
  name: string
  description: string
  icon: React.ElementType
  examples: string[]
}

const otherProducts: Product[] = [
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

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
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
  )
}

function ErrorFallback({ error }: FallbackProps) {
  return (
    <div className="text-center py-10 px-4 bg-red-100 dark:bg-red-900 rounded-lg">
      <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">Oops! Something went wrong.</h2>
      <p className="text-red-600 dark:text-red-300">{error.message}</p>
    </div>
  )
}

export default function OtherWeb3Products() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Other Web3 Products
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore innovative solutions in the Web3 ecosystem
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProducts.map((product, index) => (
            <ErrorBoundary key={product.name} FallbackComponent={ErrorFallback}>
              <ProductCard product={product} index={index} />
            </ErrorBoundary>
          ))}
        </div>
      </main>
    </div>
  )
}
