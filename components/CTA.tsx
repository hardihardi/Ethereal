"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-indigo-700 dark:bg-indigo-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive into Web3?</span>
          <span className="block text-indigo-300">Start your journey with Ethereal today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Get started
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-3 inline-flex rounded-md shadow"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

