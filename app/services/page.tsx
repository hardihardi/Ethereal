"use client"

import { motion } from "framer-motion"
import { Code, Coins, Shield, Zap, Globe, Users, Cpu, Database, PenTool } from 'lucide-react'

const services = [
  {
    icon: Code,
    name: "Smart Contract Development",
    description: "Secure and efficient smart contracts tailored to your needs, audited for maximum security.",
  },
  {
    icon: Coins,
    name: "DeFi Solutions",
    description: "Cutting-edge decentralized finance applications and protocols to revolutionize financial services.",
  },
  {
    icon: Shield,
    name: "Security Audits",
    description: "Comprehensive security analysis to protect your assets and ensure the integrity of your blockchain projects.",
  },
  {
    icon: Zap,
    name: "High-Performance dApps",
    description: "Scalable and responsive decentralized applications optimized for the best user experience.",
  },
  {
    icon: Globe,
    name: "Cross-Chain Integration",
    description: "Seamless interoperability between multiple blockchains for enhanced functionality and reach.",
  },
  {
    icon: Users,
    name: "DAO Development",
    description: "Create and manage decentralized autonomous organizations with customized governance models.",
  },
  {
    icon: Cpu,
    name: "Layer 2 Solutions",
    description: "Implement scalability solutions to enhance transaction speed and reduce costs on blockchain networks.",
  },
  {
    icon: Database,
    name: "Tokenization Services",
    description: "Design and implement custom tokens for various use cases, including utility tokens and security tokens.",
  },
  {
    icon: PenTool,
    name: "NFT Development",
    description: "Create unique digital assets and build NFT marketplaces with advanced features and royalty systems.",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Comprehensive Web3 solutions to bring your blockchain projects to life
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{service.name}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-100 dark:bg-indigo-900 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

