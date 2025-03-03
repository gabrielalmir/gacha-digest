import { ContentPreview } from "@/components/content-preview"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { NewsletterFeatures } from "@/components/newsletter-features"
import { NewsletterHero } from "@/components/newsletter-hero"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <MainNav />
      <main className="flex-1">
        <NewsletterHero />
        <NewsletterFeatures />
        <ContentPreview />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}

