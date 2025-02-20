"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Alice Johnson",
    role: "DApp Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Ethereal's expertise in smart contract development has been invaluable for our project. Their team's attention to detail and security-first approach gave us peace of mind throughout the development process.",
  },
  {
    name: "Bob Smith",
    role: "NFT Artist",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "As an artist venturing into the world of NFTs, I found Ethereal's guidance and technical support to be exceptional. They helped me bring my digital art to life on the blockchain.",
  },
  {
    name: "Carol Williams",
    role: "DeFi Startup Founder",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Ethereal's deep understanding of DeFi protocols and market dynamics was crucial in launching our platform. Their team's innovative solutions helped us stand out in a competitive landscape.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Hear from the innovators and creators we've helped succeed in the Web3 space
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

