// app/schools/growth-marketing/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SchoolHero } from "@/components/school-hero"
import { TracksOverview } from "@/components/tracks-overview"
import { ToolsSection } from "@/components/tools-section"
import { ProjectsSection } from "@/components/projects-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { InstructorsSection } from "@/components/instructors-section"
import { FAQSection } from "@/components/faq-section"

export const growthMarketingData = {
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
      trackDetails: {
        objectives: [
          "Create engaging content",
          "Master storytelling techniques",
          "Build an audience",
        ],
        learningOutcomes: [
          "Edit videos and podcasts",
          "Write compelling blogs",
          "Optimize for social platforms",
        ],
        tools: ["Adobe Premiere", "Audacity", "WordPress", "Canva"],
        curriculumOverview: [
          { week: 1, topic: "Content Fundamentals" },
          { week: 2, topic: "Video & Podcasting" },
          { week: 3, topic: "Blogging & Storytelling" },
          { week: 4, topic: "Audience Building & Capstone" },
        ],
        capstoneProject: {
          title: "Personal Brand Launch",
          description: "Create and launch a YouTube channel or podcast series.",
        },
        pricing: {
          standard: "$1,000",
          discounted: "$799",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Grace Lee", role: "Content Creator", bio: "YouTuber with 1M subscribers." },
          { name: "Henry Patel", role: "Podcasting Expert", bio: "Host of top podcast." },
        ],
      },
    },
    {
      title: "Digital Marketing",
      description: "Reach the right audience and drive action",
      tools: ["Social media strategy", "SEO", "Media Buying (Meta, TikTok, Google)", "Email automation"],
      projects: ["Run campaigns", "grow product sales", "track and optimize conversions"],
      trackDetails: {
        objectives: [
          "Develop marketing strategies",
          "Optimize for SEO",
          "Run ad campaigns",
        ],
        learningOutcomes: [
          "Use Google Ads and Meta Ads",
          "Implement email marketing",
          "Analyze campaign performance",
        ],
        tools: ["Google Analytics", "Meta Ads Manager", "Mailchimp", "SEMrush"],
        curriculumOverview: [
          { week: 1, topic: "Digital Marketing Basics" },
          { week: 2, topic: "SEO & Social Strategy" },
          { week: 3, topic: "Media Buying" },
          { week: 4, topic: "Optimization & Capstone" },
        ],
        capstoneProject: {
          title: "Digital Campaign",
          description: "Run a full digital marketing campaign for a product.",
        },
        pricing: {
          standard: "$1,200",
          discounted: "$999",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Ivy Chen", role: "Digital Marketer", bio: "SEO specialist at HubSpot." },
          { name: "Jack Wilson", role: "Ads Expert", bio: "Media buyer for e-commerce." },
        ],
      },
    },
    {
      title: "Growth Marketing",
      description: "Use experiments and insights to grow fast",
      tools: ["Funnel design", "A/B testing", "Retention strategies"],
      projects: ["Landing pages", "growth experiments", "customer retention plans"],
      trackDetails: {
        objectives: [
          "Design growth funnels",
          "Conduct A/B tests",
          "Implement retention tactics",
        ],
        learningOutcomes: [
          "Analyze user behavior",
          "Optimize conversion rates",
          "Scale growth strategies",
        ],
        tools: ["Optimizely", "Google Optimize", "Mixpanel", "Amplitude"],
        curriculumOverview: [
          { week: 1, topic: "Growth Fundamentals" },
          { week: 2, topic: "Funnel Design" },
          { week: 3, topic: "A/B Testing" },
          { week: 4, topic: "Retention & Capstone" },
        ],
        capstoneProject: {
          title: "Growth Experiment Plan",
          description: "Design and execute growth experiments for a startup.",
        },
        pricing: {
          standard: "$1,300",
          discounted: "$1,099",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Katie Moore", role: "Growth Lead", bio: "Growth hacker at Airbnb." },
          { name: "Liam Scott", role: "Testing Expert", bio: "A/B testing consultant." },
        ],
      },
    },
    {
      title: "Product Marketing",
      description: "Position and launch products that customers love",
      tools: ["Market research", "Positioning", "Go-to-market strategy", "Customer insights"],
      projects: ["Product launches", "market analysis", "competitive positioning"],
      trackDetails: {
        objectives: [
          "Conduct market research",
          "Develop positioning strategies",
          "Plan go-to-market",
        ],
        learningOutcomes: [
          "Analyze competitors",
          "Create launch plans",
          "Gather customer insights",
        ],
        tools: ["SurveyMonkey", "Typeform", "Ahrefs", "ProductBoard"],
        curriculumOverview: [
          { week: 1, topic: "Product Marketing Basics" },
          { week: 2, topic: "Market Research" },
          { week: 3, topic: "Positioning & Strategy" },
          { week: 4, topic: "Launches & Capstone" },
        ],
        capstoneProject: {
          title: "Product Launch Strategy",
          description: "Develop a go-to-market plan for a new product.",
        },
        pricing: {
          standard: "$1,100",
          discounted: "$899",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Mia Rodriguez", role: "Product Marketer", bio: "PMM at Salesforce." },
          { name: "Noah Garcia", role: "Research Specialist", bio: "Market analyst." },
        ],
      },
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
        <TracksOverview tracks={growthMarketingData.tracks} school="growth-marketing" />
        <ToolsSection tracks={growthMarketingData.tracks} />
        <ProjectsSection tracks={growthMarketingData.tracks} />
        <OutcomesSection outcomes={growthMarketingData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <FAQSection faqs={growthMarketingData.faqs} />
      </main>
      <Footer />
    </div>
  )
}