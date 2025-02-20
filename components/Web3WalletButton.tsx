"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { WalletIcon } from "lucide-react"

export default function Web3WalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState("")

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      // Check if already connected
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) {
          setIsConnected(true)
          setAddress(accounts[0])
        }
      })

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setIsConnected(true)
          setAddress(accounts[0])
        } else {
          setIsConnected(false)
          setAddress("")
        }
      })
    }
  }, [])

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setIsConnected(true)
        setAddress(accounts[0])
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      window.open("https://metamask.io/download/", "_blank")
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={connectWallet}
      className="flex items-center bg-indigo-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md mr-2 text-xs sm:text-sm"
    >
      <WalletIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
      {isConnected ? (
        `${address.slice(0, 4)}...${address.slice(-4)}`
      ) : (
        <>
          <span className="hidden sm:inline">Connect Wallet</span>
          <span className="sm:hidden">Connect</span>
        </>
      )}
    </motion.button>
  )
}
