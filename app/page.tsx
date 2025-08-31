import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ProgrammeOverview } from "@/components/programme-overview"
import { ImpactMetrics } from "@/components/impact-metrics"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturedVideo } from "@/components/featured-video"
import { LearningMethod } from "@/components/learning-method"
import { FeaturedBlogPreview } from "@/components/featured-blog-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrustBar />
        <ProgrammeOverview />
        <ImpactMetrics />
        <TestimonialsSection />
        <FeaturedVideo />
        <LearningMethod />
        <FeaturedBlogPreview />
      </main>
      <Footer />
    </div>
  )
}
