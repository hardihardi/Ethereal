"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Coins, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Smart Contract Development",
    description: "Secure and efficient smart contracts tailored to your needs.",
  },
  {
    icon: Coins,
    title: "DeFi Solutions",
    description: "Cutting-edge decentralized finance applications and protocols.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security analysis to protect your assets.",
  },
  {
    icon: Zap,
    title: "High-Performance dApps",
    description: "Scalable and responsive decentralized applications.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Web3 Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Comprehensive solutions for your blockchain and decentralized application needs.
          </p>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap justify-center -mx-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-8 h-full flex flex-col justify-between">
        <div>
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{feature.title}</h3>
          <p className="mt-5 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

