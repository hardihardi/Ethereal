import Hero from "../components/Hero"
import Features from "../components/Features"
import BlockchainComparison from "../components/BlockchainComparison"
import DecentralizedStorage from "../components/DecentralizedStorage"
import DecentralizedComputing from "../components/DecentralizedComputing"
import DeFiSection from "../components/DeFiSection"
import NFTSection from "../components/NFTSection"
import OtherWeb3Products from "../components/OtherWeb3Products"
import Testimonials from "../components/Testimonials"
import Pricing from "../components/Pricing"
import NewsletterSubscription from "../components/NewsletterSubscription"
import EventsSection from "../components/EventsSection"
import CTA from "../components/CTA"
import Gallery from "../components/Gallery"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <BlockchainComparison />
      <DecentralizedStorage />
      <DecentralizedComputing />
      <DeFiSection />
      <NFTSection />
      <OtherWeb3Products />
      <Gallery />
      <Testimonials />
      <Pricing />
      <EventsSection />
      <NewsletterSubscription />
      <CTA />
    </>
  )
}

