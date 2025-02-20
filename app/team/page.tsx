"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Blockchain enthusiast with 10+ years of experience in tech startups.",
    social: {
      twitter: "https://twitter.com/alice",
      linkedin: "https://linkedin.com/in/alice",
      github: "https://github.com/alice",
    },
  },
  {
    name: "Bob Smith",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Experienced smart contract developer and blockchain architect.",
    social: {
      twitter: "https://twitter.com/bob",
      linkedin: "https://linkedin.com/in/bob",
      github: "https://github.com/bob",
    },
  },
  {
    name: "Carol Williams",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "UX/UI expert specializing in creating intuitive interfaces for Web3 applications.",
    social: {
      twitter: "https://twitter.com/carol",
      linkedin: "https://linkedin.com/in/carol",
      github: "https://github.com/carol",
    },
  },
  {
    name: "David Lee",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Full-stack developer with a passion for decentralized applications.",
    social: {
      twitter: "https://twitter.com/david",
      linkedin: "https://linkedin.com/in/david",
      github: "https://github.com/david",
    },
  },
]

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Team
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Meet the experts behind Ethereal's success
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center">
                  <Image
                    className="h-24 w-24 rounded-full"
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={96}
                    height={96}
                  />
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h2>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{member.bio}</p>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

