"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small projects and startups",
    features: ["Smart contract development", "Basic NFT integration", "Web3 wallet integration", "24/7 support"],
  },
  {
    name: "Pro",
    price: "$2,999",
    description: "Ideal for growing businesses and established projects",
    features: [
      "Everything in Starter",
      "Custom token creation",
      "DeFi protocol integration",
      "Advanced security audits",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale Web3 projects",
    features: [
      "Everything in Pro",
      "Custom blockchain development",
      "Scalable infrastructure setup",
      "Comprehensive ecosystem integration",
      "On-site training and workshops",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing Plans
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Choose the perfect plan for your Web3 project
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h2>
                <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">{plan.price}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

