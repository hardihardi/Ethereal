"use client"

import { motion } from "framer-motion"
import { Code, Coins, Shield, Zap, Globe, Users, Cpu, Database, PenTool } from "lucide-react"

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
    description:
      "Comprehensive security analysis to protect your assets and ensure the integrity of your blockchain projects.",
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
    description:
      "Implement scalability solutions to enhance transaction speed and reduce costs on blockchain networks.",
  },
  {
    icon: Database,
    name: "Tokenization Services",
    description:
      "Design and implement custom tokens for various use cases, including utility tokens and security tokens.",
  },
  {
    icon: PenTool,
    name: "NFT Development",
    description: "Create unique digital assets and build NFT marketplaces with advanced features and royalty systems.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
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
              className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

