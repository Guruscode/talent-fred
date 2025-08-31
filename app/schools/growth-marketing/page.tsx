import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SchoolHero } from "@/components/school-hero"
import { TracksOverview } from "@/components/tracks-overview"
import { ToolsSection } from "@/components/tools-section"
import { ProjectsSection } from "@/components/projects-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { InstructorsSection } from "@/components/instructors-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"

const growthMarketingData = {
  title: "School of Growth and Marketing",
  tagline: "Create, Design & Market Brands in a Digital World",
  description:
    "This school equips you for high-impact roles at the intersection of product, brand, and customer acquisition. You will master how to build and execute data-driven marketing strategies that drive measurable business outcomes, preparing you for a thriving career in Marketing Analytics, Growth Marketing, or Product Marketing within top B2B and B2C tech companies.",
  tracks: [
    {
      title: "Content Creation",
      description: "Make videos, blogs, and social content that stand out",
      tools: ["Video editing", "Podcasting", "Blogging", "Short-form storytelling"],
      projects: ["Build a YouTube channel", "launch a podcast", "grow your personal brand"],
    },
    {
      title: "Digital Marketing",
      description: "Reach the right audience and drive action",
      tools: ["Social media strategy", "SEO", "Media Buying (Meta, TikTok, Google)", "Email automation"],
      projects: ["Run campaigns", "grow product sales", "track and optimize conversions"],
    },
    {
      title: "Growth Marketing",
      description: "Use experiments and insights to grow fast",
      tools: ["Funnel design", "A/B testing", "Retention strategies"],
      projects: ["Landing pages", "growth experiments", "customer retention plans"],
    },
    {
      title: "Product Marketing",
      description: "Position and launch products that customers love",
      tools: ["Market research", "Positioning", "Go-to-market strategy", "Customer insights"],
      projects: ["Product launches", "market analysis", "competitive positioning"],
    },
  ],
  outcomes: [
    "Growth Marketing Manager",
    "Digital Marketing Specialist",
    "Content Marketing Manager",
    "Product Marketing Manager",
    "Social Media Manager",
    "Marketing Analytics Specialist",
    "Brand Manager",
  ],
  faqs: [
    {
      question: "Do I need marketing experience to join?",
      answer:
        "No prior experience required. We start with marketing fundamentals and build to advanced growth strategies.",
    },
    {
      question: "Will I learn to use marketing tools?",
      answer: "Yes! You'll master tools like Google Analytics, Facebook Ads Manager, HubSpot, Mailchimp, and more.",
    },
    {
      question: "Is this program suitable for entrepreneurs?",
      answer: "The skills you learn are perfect for marketing your own business or startup.",
    },
    {
      question: "How much focus is on digital vs traditional marketing?",
      answer:
        "We focus primarily on digital marketing channels as they offer the best ROI and career opportunities in today's market.",
    },
    {
      question: "Will I create a real marketing campaign?",
      answer: "Yes! You'll plan, execute, and analyze real marketing campaigns as part of your capstone project.",
    },
  ],
}

export default function GrowthMarketingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SchoolHero
          title={growthMarketingData.title}
          tagline={growthMarketingData.tagline}
          description={growthMarketingData.description}
        />
        <TracksOverview tracks={growthMarketingData.tracks} />
        <ToolsSection tracks={growthMarketingData.tracks} />
        <ProjectsSection tracks={growthMarketingData.tracks} />
        <OutcomesSection outcomes={growthMarketingData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <PricingSection />
        <FAQSection faqs={growthMarketingData.faqs} />
      </main>
      <Footer />
    </div>
  )
}
