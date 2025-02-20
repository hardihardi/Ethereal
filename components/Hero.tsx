"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <style jsx>{`
  @media (max-width: 640px) {
    svg {
      height: 150px;
    }
  }
  @media (min-width: 641px) {
    svg {
      height: 320px;
    }
  }
`}</style>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8 [mask-image:linear-gradient(0deg,transparent,black)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-320px)] sm:min-h-[calc(100vh-150px)] text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6"
        >
          Revolutionize Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            Web3 Journey
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl"
        >
          End-to-end solutions for blockchain, NFTs, and DeFi
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/services"
            className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-gray-100 cursor-pointer z-10 relative inline-block"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,218.7C672,192,768,160,864,165.3C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill="#f3f4f6"
          fillOpacity="0.8"
          d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,165.3C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  )
}

