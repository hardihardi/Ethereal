"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { WalletIcon } from "lucide-react"

// Add this type declaration at the top of the file
declare global {
  interface Window {
    ethereum?: any
  }
}

export default function Web3WalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState("")

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window !== "undefined" && window.ethereum) {
      // Check if already connected
      window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          setIsConnected(true)
          setAddress(accounts[0])
        }
      })

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
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
    if (typeof window !== "undefined" && window.ethereum) {
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
      className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md mr-2"
    >
      <WalletIcon className="h-5 w-5 mr-2" />
      {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"}
    </motion.button>
  )
}

