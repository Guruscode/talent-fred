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

const designData = {
  title: "School of Design",
  tagline: "Create Beautiful Experiences That Connect With People",
  description:
    "Transform your creative vision into impactful digital experiences. Our School of Design prepares you for a career in UX/UI design, product design, and visual communication. Learn to create user-centered designs that solve real problems while building a portfolio that stands out in the competitive design industry.",
  tracks: [
    {
      title: "UX/UI Design",
      description: "Design intuitive and beautiful user experiences",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
      projects: ["Mobile app designs", "web application interfaces", "design systems"],
    },
    {
      title: "Product Design",
      description: "Shape the entire user journey from concept to launch",
      tools: ["User research", "Wireframing", "Prototyping", "Usability testing"],
      projects: ["End-to-end product design", "user research studies", "product strategy"],
    },
    {
      title: "Visual Design",
      description: "Create compelling visual identities and brand experiences",
      tools: ["Adobe Creative Suite", "Branding", "Typography", "Color theory"],
      projects: ["Brand identity systems", "marketing materials", "digital illustrations"],
    },
    {
      title: "Design Systems",
      description: "Build scalable design frameworks for growing products",
      tools: ["Component libraries", "Design tokens", "Documentation", "Collaboration tools"],
      projects: ["Design system creation", "component libraries", "style guides"],
    },
  ],
  outcomes: [
    "UX/UI Designer",
    "Product Designer",
    "Visual Designer",
    "Design System Designer",
    "User Researcher",
    "Creative Director",
    "Brand Designer",
  ],
  faqs: [
    {
      question: "Do I need artistic skills to become a designer?",
      answer:
        "While helpful, artistic skills aren't required. We focus on design thinking, problem-solving, and user-centered design principles.",
    },
    {
      question: "What design tools will I learn?",
      answer:
        "You'll master industry-standard tools like Figma, Adobe Creative Suite, and various prototyping and research tools.",
    },
    {
      question: "Will I build a design portfolio?",
      answer:
        "Yes! Portfolio development is central to our program. You'll create multiple projects that showcase your skills to potential employers.",
    },
    {
      question: "Is coding required for designers?",
      answer:
        "Basic HTML/CSS knowledge is helpful but not required. We focus on design skills while teaching enough technical knowledge to collaborate effectively with developers.",
    },
    {
      question: "How do you teach design thinking?",
      answer:
        "Through hands-on projects, user research, and real-world case studies. You'll learn to approach problems from the user's perspective.",
    },
  ],
}

export default function DesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SchoolHero title={designData.title} tagline={designData.tagline} description={designData.description} />
        <TracksOverview tracks={designData.tracks} />
        <ToolsSection tracks={designData.tracks} />
        <ProjectsSection tracks={designData.tracks} />
        <OutcomesSection outcomes={designData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <PricingSection />
        <FAQSection faqs={designData.faqs} />
      </main>
      <Footer />
    </div>
  )
}
