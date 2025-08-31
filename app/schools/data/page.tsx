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

const dataData = {
  title: "School of Data",
  tagline: "Make Smart Decisions Using Numbers and Insights",
  description:
    "Unlock career paths in Data Science, Business Intelligence, and Advanced Analytics with the School of Data and Analytics. This school prepares you to become the strategist behind the numbers, equipping you with the skills to analyse complex data, uncover actionable insights, and influence business decisions in high-growth industries and innovative organisations.",
  tracks: [
    {
      title: "Data Analysis",
      description: "Make sense of raw data and turn it into reports and decisions",
      tools: ["Excel", "SQL", "Power BI", "Tableau"],
      projects: ["Dashboards", "performance tracking tools", "business reports"],
    },
    {
      title: "Data Science",
      description: "Build predictive tools using data and AI",
      tools: ["Python", "Machine Learning", "Statistics", "AI tools"],
      projects: ["Recommendation engines", "churn models", "chatbots"],
    },
    {
      title: "Business Intelligence",
      description: "Translate data into strategies executives can act on",
      tools: ["Forecasting", "KPIs", "automated reporting", "metrics visualization"],
      projects: ["BI dashboards", "strategy reports", "executive insights"],
    },
  ],
  outcomes: [
    "Data Analyst",
    "Data Scientist",
    "Business Intelligence Analyst",
    "Data Engineer",
    "Analytics Consultant",
    "Research Analyst",
    "Business Analyst",
  ],
  faqs: [
    {
      question: "Do I need a mathematics background?",
      answer:
        "While helpful, it's not required. We start with basic statistics and build up your mathematical foundation as needed.",
    },
    {
      question: "What tools will I learn to use?",
      answer:
        "You'll master Excel, SQL, Python, Power BI, Tableau, and various AI tools depending on your chosen track.",
    },
    {
      question: "Are there job opportunities in Africa?",
      answer: "Yes! Data roles are rapidly growing across African markets as companies become more data-driven.",
    },
    {
      question: "Will I work with real datasets?",
      answer:
        "Absolutely. You'll analyze real business data and work on projects that mirror actual industry challenges.",
    },
    {
      question: "How technical is the program?",
      answer:
        "We balance technical skills with business acumen, ensuring you can both analyze data and communicate insights effectively.",
    },
  ],
}

export default function DataPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SchoolHero title={dataData.title} tagline={dataData.tagline} description={dataData.description} />
        <TracksOverview tracks={dataData.tracks} />
        <ToolsSection tracks={dataData.tracks} />
        <ProjectsSection tracks={dataData.tracks} />
        <OutcomesSection outcomes={dataData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <PricingSection />
        <FAQSection faqs={dataData.faqs} />
      </main>
      <Footer />
    </div>
  )
}
