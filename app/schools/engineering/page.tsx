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

const engineeringData = {
  title: "School of Engineering",
  tagline: "Build Functional, Scalable & Performant Systems",
  description:
    "School of Engineering prepares you for a career in software engineering, cloud computing. Guided by engineers who have scaled solutions for leading companies, you will gain the technical confidence, creative mindset, and build your portfolio to launch your career as a full-stack developer, cloud engineer, or system architect.",
  tracks: [
    {
      title: "Frontend Development",
      description: "Create beautiful, user-friendly interfaces",
      tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "MUI", "React", "Next.js"],
      projects: ["Portfolio websites", "dashboards", "e-commerce frontends"],
    },
    {
      title: "Backend Development",
      description: "Build the brain behind web and mobile apps",
      tools: ["Node.js (Express)", "Python (Django)", "PHP (Laravel)", "NestJS", "GoLang"],
      projects: ["APIs", "authentication systems", "booking engines"],
    },
    {
      title: "Mobile Development",
      description: "Design apps that work seamlessly on any device",
      tools: ["Flutter & Dart", "React Native"],
      projects: ["Messaging apps", "delivery tracking apps", "mobile games"],
    },
    {
      title: "Cloud Engineering",
      description: "Deploy, scale, and secure your tech products",
      tools: ["AWS", "Azure", "DevOps pipelines", "Docker"],
      projects: ["CI/CD pipelines", "cloud-hosted apps", "server monitoring"],
    },
  ],
  outcomes: [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile App Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "System Architect",
  ],
  faqs: [
    {
      question: "Do I need prior programming experience?",
      answer:
        "No prior experience is required. Our curriculum starts with fundamentals and progressively builds to advanced concepts.",
    },
    {
      question: "What programming languages will I learn?",
      answer:
        "You'll learn JavaScript, Python, and other languages depending on your chosen track. We focus on languages that are in high demand in the industry.",
    },
    {
      question: "How long does the program take?",
      answer:
        "The program duration varies by track, typically ranging from 6-12 months depending on your pace and chosen specialization.",
    },
    {
      question: "Will I build real projects?",
      answer:
        "Yes! You'll work on portfolio-ready projects that mirror real industry challenges, giving you practical experience employers value.",
    },
    {
      question: "What kind of job support do you provide?",
      answer:
        "We provide CV reviews, interview preparation, portfolio guidance, and direct connections to our hiring partner network.",
    },
  ],
}

export default function EngineeringPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SchoolHero
          title={engineeringData.title}
          tagline={engineeringData.tagline}
          description={engineeringData.description}
        />
        <TracksOverview tracks={engineeringData.tracks} />
        <ToolsSection tracks={engineeringData.tracks} />
        <ProjectsSection tracks={engineeringData.tracks} />
        <OutcomesSection outcomes={engineeringData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <PricingSection />
        <FAQSection faqs={engineeringData.faqs} />
      </main>
      <Footer />
    </div>
  )
}
