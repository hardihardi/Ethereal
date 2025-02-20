"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Here you would typically send a request to your API to handle the subscription
    // For this example, we'll simulate an API call with a timeout
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    }, 1500)
  }

  return (
    <div className="bg-indigo-100 dark:bg-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Stay updated with our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get the latest news and updates about Web3 and blockchain technology
          </p>
        </div>
        <div className="mt-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe <Send className="inline-block ml-2 h-4 w-4" />
                </>
              )}
            </motion.button>
          </form>
          {status === "success" && (
            <p className="mt-2 text-green-600 dark:text-green-400">Thank you for subscribing!</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-600 dark:text-red-400">Please enter a valid email address.</p>
          )}
        </div>
      </div>
    </div>
  )
}

