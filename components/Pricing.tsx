"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$999",
    features: ["Smart contract development", "Basic NFT integration", "Web3 wallet integration", "24/7 support"],
  },
  {
    name: "Pro",
    price: "$2,999",
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
    <section id="pricing" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Pricing Plans</h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">Choose the perfect plan for your Web3 project</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700 dark:text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-5 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

