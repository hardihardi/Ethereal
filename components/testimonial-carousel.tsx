"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Alice Johnson",
    role: "DApp Developer",
    content: "Ethereum has revolutionized the way I think about building applications. The possibilities are endless!",
  },
  {
    name: "Bob Smith",
    role: "NFT Artist",
    content: "Thanks to Ethereum, I've been able to monetize my digital art in ways I never thought possible.",
  },
  {
    name: "Carol Williams",
    role: "DeFi Enthusiast",
    content: "Ethereum's DeFi ecosystem has completely changed my approach to personal finance.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <Card>
        <CardContent className="pt-6">
          <blockquote className="text-center">
            <p className="text-lg mb-4">"{testimonials[currentIndex].content}"</p>
            <footer>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
            </footer>
          </blockquote>
        </CardContent>
      </Card>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

