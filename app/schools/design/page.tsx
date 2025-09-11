// app/schools/design/page.tsx
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

export const designData = {
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
      trackDetails: {
        objectives: [
          "Learn user research methods",
          "Master wireframing and prototyping",
          "Understand accessibility and usability principles",
        ],
        learningOutcomes: [
          "Create user personas and journeys",
          "Design responsive interfaces",
          "Conduct usability testing",
        ],
        tools: ["Figma (Prototyping)", "Adobe XD (Wireframing)", "Sketch (UI Kits)", "Principle (Animations)", "InVision (Collaboration)"],
        curriculumOverview: [
          { week: 1, topic: "Design Fundamentals & User Research" },
          { week: 2, topic: "Wireframing & Prototyping" },
          { week: 3, topic: "UI Design Principles" },
          { week: 4, topic: "Testing & Capstone" },
        ],
        capstoneProject: {
          title: "Mobile App Redesign",
          description: "Redesign a popular app focusing on user experience improvements.",
        },
        pricing: {
          standard: "$1,100",
          discounted: "$899",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Sara Johnson", role: "UX Lead", bio: "Designer at Apple." },
          { name: "Mike Chen", role: "UI Expert", bio: "Former Adobe creative." },
        ],
      },
    },
    {
      title: "Product Design",
      description: "Shape the entire user journey from concept to launch",
      tools: ["User research", "Wireframing", "Prototyping", "Usability testing"],
      projects: ["End-to-end product design", "user research studies", "product strategy"],
      trackDetails: {
        objectives: [
          "Conduct comprehensive user research",
          "Develop product roadmaps",
          "Iterate designs based on feedback",
        ],
        learningOutcomes: [
          "Create wireframes and high-fidelity prototypes",
          "Perform A/B testing",
          "Develop product strategies",
        ],
        tools: ["Miro for Research", "Figma for Wireframing", "Proto.io for Prototyping", "UserTesting Platform"],
        curriculumOverview: [
          { week: 1, topic: "Product Fundamentals & Research" },
          { week: 2, topic: "Wireframing & Strategy" },
          { week: 3, topic: "Prototyping & Testing" },
          { week: 4, topic: "Launch Prep & Capstone" },
        ],
        capstoneProject: {
          title: "New Product Launch Design",
          description: "Design a complete product from concept to prototype for a startup idea.",
        },
        pricing: {
          standard: "$1,400",
          discounted: "$1,199",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Emma Davis", role: "Product Design Instructor", bio: "Product lead at Google." },
          { name: "Alex Kim", role: "Research Specialist", bio: "User experience researcher." },
        ],
      },
    },
    {
      title: "Visual Design",
      description: "Create compelling visual identities and brand experiences",
      tools: ["Adobe Creative Suite", "Branding", "Typography", "Color theory"],
      projects: ["Brand identity systems", "marketing materials", "digital illustrations"],
      trackDetails: {
        objectives: [
          "Master color theory and typography",
          "Develop brand identities",
          "Create digital and print materials",
        ],
        learningOutcomes: [
          "Use Adobe tools proficiently",
          "Design cohesive brand systems",
          "Apply visual principles to projects",
        ],
        tools: ["Photoshop", "Illustrator", "InDesign", "After Effects"],
        curriculumOverview: [
          { week: 1, topic: "Visual Fundamentals & Color Theory" },
          { week: 2, topic: "Typography & Branding" },
          { week: 3, topic: "Digital Illustrations" },
          { week: 4, topic: "Marketing Materials & Capstone" },
        ],
        capstoneProject: {
          title: "Brand Identity System",
          description: "Develop a full brand identity for a fictional company.",
        },
        pricing: {
          standard: "$1,000",
          discounted: "$799",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Laura Martinez", role: "Visual Design Lead", bio: "Brand designer at Nike." },
          { name: "David Lee", role: "Typography Expert", bio: "Freelance illustrator." },
        ],
      },
    },
    {
      title: "Design Systems",
      description: "Build scalable design frameworks for growing products",
      tools: ["Component libraries", "Design tokens", "Documentation", "Collaboration tools"],
      projects: ["Design system creation", "component libraries", "style guides"],
      trackDetails: {
        objectives: [
          "Create reusable components",
          "Implement design tokens",
          "Document design systems",
        ],
        learningOutcomes: [
          "Build scalable UI libraries",
          "Ensure design consistency",
          "Collaborate on large-scale designs",
        ],
        tools: ["Storybook", "Zeroheight", "Figma Tokens", "Notion for Docs"],
        curriculumOverview: [
          { week: 1, topic: "Design System Basics" },
          { week: 2, topic: "Component Building" },
          { week: 3, topic: "Tokens & Documentation" },
          { week: 4, topic: "Implementation & Capstone" },
        ],
        capstoneProject: {
          title: "Enterprise Design System",
          description: "Build a design system for a large-scale web application.",
        },
        pricing: {
          standard: "$1,200",
          discounted: "$999",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Rachel Wong", role: "Systems Designer", bio: "Design systems at Meta." },
          { name: "James Thompson", role: "Documentation Expert", bio: "Author of design books." },
        ],
      },
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
        <TracksOverview tracks={designData.tracks} school="design" />
        <ToolsSection tracks={designData.tracks} />
        <ProjectsSection tracks={designData.tracks} />
        <OutcomesSection outcomes={designData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <FAQSection faqs={designData.faqs} />
      </main>
      <Footer />
    </div>
  )
}