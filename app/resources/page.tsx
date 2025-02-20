"use client"

import { motion } from "framer-motion"
import { Book, Video, FileText, LinkIcon } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Introduction to Web3",
    description: "A comprehensive guide to understanding Web3 technology and its potential.",
    type: "article",
    icon: FileText,
    link: "/resources/intro-to-web3",
  },
  {
    title: "Smart Contract Development 101",
    description: "Learn the basics of writing and deploying smart contracts on various blockchains.",
    type: "video",
    icon: Video,
    link: "https://www.youtube.com/watch?v=example",
  },
  {
    title: "Web3 Development Best Practices",
    description: "A collection of best practices for building secure and efficient Web3 applications.",
    type: "ebook",
    icon: Book,
    link: "/resources/web3-best-practices.pdf",
  },
  {
    title: "Blockchain Interoperability",
    description: "Explore the concepts and technologies behind cross-chain communication.",
    type: "webinar",
    icon: LinkIcon,
    link: "/resources/blockchain-interoperability-webinar",
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Resources
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore our collection of Web3 learning materials and tools
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <Link
                href={resource.link}
                className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <resource.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{resource.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {resource.type}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

