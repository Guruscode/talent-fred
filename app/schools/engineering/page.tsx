// app/schools/engineering/page.tsx
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

export const engineeringData = {
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
      trackDetails: {
        objectives: [
          "Master modern frontend frameworks",
          "Build responsive UIs",
          "Optimize for performance",
        ],
        learningOutcomes: [
          "Develop with React and Next.js",
          "Use CSS frameworks like Tailwind",
          "Implement state management",
        ],
        tools: ["HTML5", "CSS3", "JavaScript ES6+", "Tailwind CSS", "Material-UI", "React", "Next.js"],
        curriculumOverview: [
          { week: 1, topic: "HTML/CSS Fundamentals" },
          { week: 2, topic: "JavaScript & React Basics" },
          { week: 3, topic: "Advanced React & Next.js" },
          { week: 4, topic: "Optimization & Capstone" },
        ],
        capstoneProject: {
          title: "E-commerce Frontend",
          description: "Build a responsive e-commerce site with React and Next.js.",
        },
        pricing: {
          standard: "$1,300",
          discounted: "$1,099",
          duration: "4 weeks",
        },
        faculty: [
          { name: "John Doe", role: "Frontend Lead", bio: "Engineer at Facebook." },
          { name: "Jane Smith", role: "React Expert", bio: "Open-source contributor." },
        ],
      },
    },
    {
      title: "Backend Development",
      description: "Build the brain behind web and mobile apps",
      tools: ["Node.js (Express)", "Python (Django)", "PHP (Laravel)", "NestJS", "GoLang"],
      projects: ["APIs", "authentication systems", "booking engines"],
      trackDetails: {
        objectives: [
          "Design RESTful APIs",
          "Implement authentication",
          "Handle databases",
        ],
        learningOutcomes: [
          "Build servers with Node.js and Python",
          "Use ORMs and databases",
          "Secure backend systems",
        ],
        tools: ["Node.js/Express", "Python/Django", "PHP/Laravel", "NestJS", "Go"],
        curriculumOverview: [
          { week: 1, topic: "Backend Basics & Node.js" },
          { week: 2, topic: "Databases & Authentication" },
          { week: 3, topic: "Advanced Frameworks" },
          { week: 4, topic: "Deployment & Capstone" },
        ],
        capstoneProject: {
          title: "API for Booking System",
          description: "Develop a secure API for a booking application.",
        },
        pricing: {
          standard: "$1,400",
          discounted: "$1,199",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Alice Brown", role: "Backend Instructor", bio: "Server-side expert at AWS." },
          { name: "Bob Green", role: "Database Specialist", bio: "DBA with 10 years experience." },
        ],
      },
    },
    {
      title: "Mobile Development",
      description: "Design apps that work seamlessly on any device",
      tools: ["Flutter & Dart", "React Native"],
      projects: ["Messaging apps", "delivery tracking apps", "mobile games"],
      trackDetails: {
        objectives: [
          "Build cross-platform apps",
          "Integrate APIs",
          "Handle device features",
        ],
        learningOutcomes: [
          "Develop with Flutter and React Native",
          "Deploy to iOS and Android",
          "Optimize mobile performance",
        ],
        tools: ["Flutter/Dart", "React Native", "Firebase"],
        curriculumOverview: [
          { week: 1, topic: "Mobile Fundamentals & Flutter" },
          { week: 2, topic: "State Management" },
          { week: 3, topic: "React Native & Integrations" },
          { week: 4, topic: "Testing & Capstone" },
        ],
        capstoneProject: {
          title: "Delivery Tracking App",
          description: "Create a mobile app for tracking deliveries with real-time updates.",
        },
        pricing: {
          standard: "$1,500",
          discounted: "$1,299",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Carol White", role: "Mobile Lead", bio: "App developer at Uber." },
          { name: "David Black", role: "Flutter Expert", bio: "Cross-platform specialist." },
        ],
      },
    },
    {
      title: "Cloud Engineering",
      description: "Deploy, scale, and secure your tech products",
      tools: ["AWS", "Azure", "DevOps pipelines", "Docker"],
      projects: ["CI/CD pipelines", "cloud-hosted apps", "server monitoring"],
      trackDetails: {
        objectives: [
          "Set up cloud infrastructure",
          "Implement CI/CD",
          "Monitor and scale applications",
        ],
        learningOutcomes: [
          "Use AWS and Azure services",
          "Containerize with Docker",
          "Automate deployments",
        ],
        tools: ["AWS EC2/S3", "Azure VMs", "Jenkins/GitHub Actions", "Docker/Kubernetes"],
        curriculumOverview: [
          { week: 1, topic: "Cloud Basics & AWS" },
          { week: 2, topic: "Containerization" },
          { week: 3, topic: "DevOps Pipelines" },
          { week: 4, topic: "Scaling & Capstone" },
        ],
        capstoneProject: {
          title: "Cloud-Hosted Application",
          description: "Deploy and scale a full app on AWS with CI/CD.",
        },
        pricing: {
          standard: "$1,600",
          discounted: "$1,399",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Eve Taylor", role: "Cloud Engineer", bio: "AWS certified architect." },
          { name: "Frank Harris", role: "DevOps Instructor", bio: "CI/CD expert." },
        ],
      },
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
        <TracksOverview tracks={engineeringData.tracks} school="engineering" />
        <ToolsSection tracks={engineeringData.tracks} />
        <ProjectsSection tracks={engineeringData.tracks} />
        <OutcomesSection outcomes={engineeringData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <FAQSection faqs={engineeringData.faqs} />
      </main>
      <Footer />
    </div>
  )
}