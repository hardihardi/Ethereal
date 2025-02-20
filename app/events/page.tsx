"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Web3 Developer Conference",
    date: "2023-09-15",
    location: "Virtual",
    description: "A global conference for Web3 developers to share knowledge and network",
  },
  {
    id: 2,
    title: "DeFi Summit",
    date: "2023-10-20",
    location: "New York, NY",
    description: "Exploring the latest trends and innovations in decentralized finance",
  },
  {
    id: 3,
    title: "NFT Art Exhibition",
    date: "2023-11-05",
    location: "London, UK",
    description: "Showcasing the best NFT artworks from around the world",
  },
  // Add more events as needed
]

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Upcoming Events
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Join us at these exciting Web3 events
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{event.date}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.location}</p>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

