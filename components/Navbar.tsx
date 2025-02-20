"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react'
import { useTheme } from "next-themes"
import Web3WalletButton from "./Web3WalletButton"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <path fill="#2F3030" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                <path fill="#828384" d="M127.962 0L0 212.32l127.962 75.639V154.158z" />
                <path fill="#343535" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" />
                <path fill="#828384" d="M127.962 416.905v-104.72L0 236.585z" />
                <path fill="#141414" d="M127.961 287.958l127.96-75.637-127.96-58.162z" />
                <path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z" />
              </svg>
              Ethereal
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Web3WalletButton />
            {mounted && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-700" />
                )}
              </motion.button>
            )}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

