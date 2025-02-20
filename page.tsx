import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, DollarSign, PaintbrushIcon as PaintBrush, Zap } from "lucide-react"
import EthereumLogo from "@/components/ethereum-logo"
import EtherPriceTracker from "@/components/ether-price-tracker"
import GasFeeEstimator from "@/components/gas-fee-estimator"
import TestimonialCarousel from "@/components/testimonial-carousel"
import EventCalendar from "@/components/event-calendar"
import LanguageSelector from "@/components/language-selector"

export default function EthereumLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href="/">
              <EthereumLogo className="h-8 w-8" />
              <span className="hidden font-bold sm:inline-block">Ethereum</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about">About</Link>
              <Link href="#developers">Developers</Link>
              <Link href="#community">Community</Link>
              <Link href="#resources">Resources</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <EthereumLogo className="h-24 w-24 md:h-32 md:w-32 animate-pulse" />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Empowering a Decentralized Future
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Build, innovate, and transform with Ethereum's blockchain technology.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Code />}
                title="Smart Contracts"
                description="Self-executing contracts with code-based terms"
              />
              <FeatureCard icon={<DollarSign />} title="DeFi" description="Open and accessible financial services" />
              <FeatureCard icon={<PaintBrush />} title="NFTs" description="Unique digital assets and collectibles" />
              <FeatureCard
                icon={<Zap />}
                title="Scalability"
                description="Continuous improvements for faster transactions"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Live Ethereum Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ether Price Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <EtherPriceTracker />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gas Fee Estimator</CardTitle>
                </CardHeader>
                <CardContent>
                  <GasFeeEstimator />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Community Voices</h2>
            <TestimonialCarousel />
            <div className="mt-12">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Upcoming Events</h3>
              <EventCalendar />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Reddit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Developers</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Bounties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Grants
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Ethereum. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img src="/placeholder.svg?height=40&width=40" alt="Open Source" className="h-10" />
              <img src="/placeholder.svg?height=40&width=40" alt="Secure Network" className="h-10" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

