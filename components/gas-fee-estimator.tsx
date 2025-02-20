"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function GasFeeEstimator() {
  const [gasPrice, setGasPrice] = useState("")
  const [gasLimit, setGasLimit] = useState("")
  const [estimatedFee, setEstimatedFee] = useState<number | null>(null)

  const calculateFee = () => {
    const price = Number.parseFloat(gasPrice)
    const limit = Number.parseFloat(gasLimit)
    if (!isNaN(price) && !isNaN(limit)) {
      setEstimatedFee((price * limit) / 1e9) // Convert Gwei to ETH
    }
  }

  return (
    <div className="space-y-4">
      <Input
        type="number"
        placeholder="Gas Price (Gwei)"
        value={gasPrice}
        onChange={(e) => setGasPrice(e.target.value)}
      />
      <Input type="number" placeholder="Gas Limit" value={gasLimit} onChange={(e) => setGasLimit(e.target.value)} />
      <Button onClick={calculateFee} className="w-full">
        Calculate Fee
      </Button>
      {estimatedFee !== null && <p className="text-center">Estimated Fee: {estimatedFee.toFixed(6)} ETH</p>}
    </div>
  )
}

