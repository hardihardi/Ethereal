"use client"

import { useState, useEffect } from "react"
import { ethers, formatEther, parseEther } from "ethers"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle } from "lucide-react"

interface CheckoutProps {
  totalAmount: number
  onClose: () => void
}

export default function Checkout({ totalAmount, onClose }: CheckoutProps) {
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [balance, setBalance] = useState<bigint | null>(null)

  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      setStatus("error")
      setErrorMessage("MetaMask is not installed. Please install MetaMask to proceed with the checkout.")
    }
  }, [])

  const fetchBalance = async (provider: ethers.BrowserProvider, address: string) => {
    const balance = await provider.getBalance(address)
    setBalance(balance)
    return balance
  }

  const handleCheckout = async () => {
    if (typeof window.ethereum === "undefined") {
      setStatus("error")
      setErrorMessage("MetaMask is not installed. Please install MetaMask to proceed with the checkout.")
      return
    }

    setStatus("processing")

    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
      if (accounts.length === 0) {
        throw new Error("No accounts found. Please connect to MetaMask.")
      }

      const provider = new ethers.BrowserProvider(window.ethereum)

      // Check if we're connected to the correct network (e.g., Mainnet)
      const network = await provider.getNetwork()
      if (network.chainId !== BigInt(1)) {
        // 1 is the chain ID for Ethereum Mainnet
        throw new Error("Please connect to the Ethereum Mainnet")
      }

      const signer = await provider.getSigner()
      const address = await signer.getAddress()

      // Fetch and check balance
      const balance = await fetchBalance(provider, address)
      const amountInWei = parseEther(totalAmount.toString())

      if (balance < amountInWei) {
        throw new Error(`Insufficient funds. Your balance: ${formatEther(balance)} ETH`)
      }

      // Replace with your actual smart contract address and ABI
      const contractAddress = "0x1234567890123456789012345678901234567890" // Replace with your actual contract address
      const contractABI = [
        // Replace with your actual contract ABI
        {
          inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
          name: "processPayment",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ]
      const contract = new ethers.Contract(contractAddress, contractABI, signer)

      // Estimate gas
      const gasEstimate = await contract.processPayment.estimateGas(amountInWei, { value: amountInWei })
      const feeData = await provider.getFeeData()
      const gasPrice = feeData.gasPrice
      if (gasPrice === null) {
        throw new Error("Failed to fetch gas price. Please try again later.")
      }
      const gasCost = gasEstimate * gasPrice

      if (balance < amountInWei + gasCost) {
        throw new Error(
          `Insufficient funds for gas. Your balance: ${formatEther(balance)} ETH, Required: ${formatEther(amountInWei + gasCost)} ETH`,
        )
      }

      // Call the smart contract function to process the payment
      const transaction = await contract.processPayment(amountInWei, { value: amountInWei, gasLimit: gasEstimate })
      console.log("Transaction sent:", transaction.hash)
      const receipt = await transaction.wait()
      console.log("Transaction confirmed:", receipt)

      setStatus("success")
    } catch (error) {
      console.error("Checkout error:", error)
      setStatus("error")
      if (error instanceof Error) {
        setErrorMessage(`Error: ${error.message}`)
      } else if (typeof error === "object" && error !== null && "code" in error) {
        if (error.code === "INSUFFICIENT_FUNDS") {
          setErrorMessage("Insufficient funds. Please check your balance and try again.")
        } else {
          setErrorMessage(`An error occurred: ${error.code}`)
        }
      } else {
        setErrorMessage("An unknown error occurred during checkout. Please try again.")
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Checkout</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">Total Amount: {totalAmount} ETH</p>
        {balance !== null && (
          <p className="mb-4 text-gray-600 dark:text-gray-300">Your balance: {formatEther(balance)} ETH</p>
        )}

        {status === "idle" && (
          <button
            onClick={handleCheckout}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Pay with MetaMask
          </button>
        )}

        {status === "processing" && (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <p className="ml-2 text-gray-600 dark:text-gray-300">Processing payment...</p>
          </div>
        )}

        {status === "success" && (
          <div className="flex items-center text-green-600 dark:text-green-400">
            <CheckCircle className="h-6 w-6 mr-2" />
            <p>Payment successful!</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center text-red-600 dark:text-red-400">
            <AlertCircle className="h-6 w-6 mr-2" />
            <p>{errorMessage}</p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
        >
          Close
        </button>
      </div>
    </motion.div>
  )
}

