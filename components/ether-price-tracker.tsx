"use client"

import { useState, useEffect } from "react"

export default function EtherPriceTracker() {
  const [price, setPrice] = useState<number | null>(null)

  useEffect(() => {
    // This is a placeholder. In a real application, you would fetch the actual price from an API
    const fetchPrice = () => {
      const mockPrice = Math.random() * 1000 + 2000
      setPrice(mockPrice)
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center">
      <p className="text-3xl font-bold">${price ? price.toFixed(2) : "Loading..."}</p>
      <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  )
}

