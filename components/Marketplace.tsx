"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Search, Filter, ChevronDown, Star, Heart, ShoppingCart } from "lucide-react"
import Checkout from "./Checkout"

interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart Contract Development",
    description: "Custom smart contract development for your blockchain project.",
    price: 2999,
    rating: 4.8,
    reviews: 120,
    image: "/marketplace/smart-contract-development.png",
    category: "Development",
  },
  {
    id: 2,
    name: "NFT Collection Launch",
    description: "End-to-end solution for launching your NFT collection.",
    price: 4999,
    rating: 4.9,
    reviews: 85,
    image: "/marketplace/nft-collection-launch.png",
    category: "NFT",
  },
  {
    id: 3,
    name: "DeFi Platform Development",
    description: "Build your decentralized finance platform from scratch.",
    price: 9999,
    rating: 4.7,
    reviews: 62,
    image: "/marketplace/defi-platform-development.png",
    category: "Development",
  },
  {
    id: 4,
    name: "Blockchain Consulting",
    description: "Expert advice on blockchain strategy and implementation.",
    price: 1999,
    rating: 4.9,
    reviews: 150,
    image: "/marketplace/blockchain-consulting.png",
    category: "Consulting",
  },
  {
    id: 5,
    name: "Token Creation Service",
    description: "Create and deploy your own custom token on various blockchains.",
    price: 3999,
    rating: 4.8,
    reviews: 95,
    image: "/marketplace/token-creation-service.png",
    category: "Development",
  },
  {
    id: 6,
    name: "Web3 Integration",
    description: "Integrate Web3 functionality into your existing applications.",
    price: 5999,
    rating: 4.6,
    reviews: 78,
    image: "/marketplace/web3-integration.png",
    category: "Development",
  },
]

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "All" || product.category === categoryFilter),
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price") return a.price - b.price
      if (sortBy === "rating") return b.rating - a.rating
      return 0
    })

  const toggleWishlist = (product: Product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id))
    } else {
      setWishlist([...wishlist, product])
    }
  }

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Web3 Marketplace
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Discover and purchase Web3 development services
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:text-white"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              aria-label="Filter by category"
            >
              <option value="All">All Categories</option>
              <option value="Development">Development</option>
              <option value="NFT">NFT</option>
              <option value="Consulting">Consulting</option>
            </select>
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <select
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:text-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort by"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
              <ChevronDown className="h-5 w-5 text-gray-400 -ml-6 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-48 sm:h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${product.price}</span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full sm:w-auto mr-2 bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center text-sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-2 rounded-full ${
                      wishlist.some((item) => item.id === product.id)
                        ? "bg-red-100 text-red-500"
                        : "bg-gray-100 text-gray-500"
                    } hover:bg-red-100 hover:text-red-500 transition duration-300`}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Shopping Cart</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                <div>
                  <span className="text-indigo-600 dark:text-indigo-400 mr-4">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Total: ${getTotalAmount()}</span>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      {isCheckoutOpen && <Checkout totalAmount={getTotalAmount()} onClose={() => setIsCheckoutOpen(false)} />}
    </div>
  )
}

