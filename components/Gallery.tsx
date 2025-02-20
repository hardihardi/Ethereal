"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "DeFi Dashboard",
    image: "https://cdn.qwenlm.ai/output/a26f005f-384b-4e36-a939-94b8319e5605/t2i/a0b543d2-698c-49a0-9c3a-2986183ec289/8503e468-92cb-45c0-b8d6-20fedc0850cc.png",
    description: "A comprehensive dashboard for managing DeFi investments",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    image: "https://cdn.qwenlm.ai/output/a26f005f-384b-4e36-a939-94b8319e5605/t2i/ba73cf73-dc39-4d49-8b6a-a2d32974e365/fa84a295-e345-4987-8ac5-5f5c66585cf1.png",
    description: "A platform for buying, selling, and trading unique digital assets",
  },
  {
    id: 3,
    title: "Decentralized Social Network",
    image: "https://cdn.qwenlm.ai/output/a26f005f-384b-4e36-a939-94b8319e5605/t2i/a2fd8e59-881e-4e30-8374-bebca6e42225/10d72d6c-c34f-4666-a976-c5f81a7c508c.png",
    description: "A Web3-powered social network with user-owned data",
  },
  // Add more projects as needed
]

export default function Gallery() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
