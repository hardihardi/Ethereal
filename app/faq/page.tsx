"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is Web3?",
    answer:
      "Web3 refers to the next generation of the internet, built on decentralized blockchain technology. It aims to create a more open, transparent, and user-centric web experience.",
  },
  {
    question: "How can Ethereal help with my Web3 project?",
    answer:
      "Ethereal provides end-to-end technical solutions for Web3 projects, including smart contract development, NFT integration, DeFi protocol implementation, and custom blockchain development.",
  },
  {
    question: "What blockchain platforms do you support?",
    answer:
      "We support a wide range of blockchain platforms, including Ethereum, Solana, Polkadot, and Cosmos. Our team can help you choose the best platform for your specific project needs.",
  },
  {
    question: "How long does it typically take to develop a Web3 project?",
    answer:
      "The development timeline varies depending on the complexity of the project. Simple projects can take a few weeks, while more complex ones may take several months. We'll provide a detailed timeline during the project scoping phase.",
  },
  {
    question: "Do you offer ongoing support after project launch?",
    answer:
      "Yes, we offer various support packages to ensure your Web3 project continues to run smoothly after launch. This includes bug fixes, security updates, and feature enhancements.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Find answers to common questions about Web3 and our services
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              <button className="w-full text-left p-6 focus:outline-none" onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h2>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

