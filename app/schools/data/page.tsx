// app/schools/data/page.tsx
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

export const dataData = {
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
      trackDetails: {
        objectives: [
          "Master data cleaning and preparation techniques",
          "Learn to create compelling visualizations",
          "Develop skills to communicate data insights to non-technical stakeholders",
        ],
        learningOutcomes: [
          "Ability to query databases using SQL",
          "Proficiency in building interactive dashboards",
          "Understanding of statistical analysis basics",
        ],
        tools: ["Excel Advanced Functions", "SQL (Joins, Aggregations)", "Power BI (DAX, Modeling)", "Tableau (Calculations, Maps)"],
        curriculumOverview: [
          { week: 1, topic: "Data Fundamentals & Excel Mastery" },
          { week: 2, topic: "SQL for Data Querying" },
          { week: 3, topic: "Visualization with Power BI" },
          { week: 4, topic: "Advanced Tableau & Capstone Prep" },
        ],
        capstoneProject: {
          title: "Business Intelligence Dashboard",
          description: "Build a comprehensive dashboard analyzing sales data for a retail company, including forecasts and KPIs.",
        },
        pricing: {
          standard: "$1,200",
          discounted: "$999 (Early Bird)",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Dr. Ada Obi", role: "Data Lead Instructor", bio: "10+ years in analytics at Google." },
          { name: "Chidi Eze", role: "SQL Expert", bio: "Former BI Analyst at Microsoft." },
        ],
      },
    },
    {
      title: "Data Science",
      description: "Build predictive tools using data and AI",
      tools: ["Python", "Machine Learning", "Statistics", "AI tools"],
      projects: ["Recommendation engines", "churn models", "chatbots"],
      trackDetails: {
        objectives: [
          "Understand machine learning algorithms",
          "Apply Python for data modeling",
          "Build and deploy AI prototypes",
        ],
        learningOutcomes: [
          "Implement supervised and unsupervised learning",
          "Use libraries like Scikit-learn and TensorFlow",
          "Evaluate model performance",
        ],
        tools: ["Python (Pandas, NumPy)", "Scikit-learn", "TensorFlow", "Jupyter Notebooks"],
        curriculumOverview: [
          { week: 1, topic: "Python for Data Science" },
          { week: 2, topic: "Statistics & ML Fundamentals" },
          { week: 3, topic: "Advanced Models & AI" },
          { week: 4, topic: "Deployment & Capstone" },
        ],
        capstoneProject: {
          title: "Customer Churn Prediction Model",
          description: "Develop a ML model to predict customer churn using telecom data.",
        },
        pricing: {
          standard: "$1,500",
          discounted: "$1,299",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Prof. Ngozi Okonjo", role: "ML Specialist", bio: "PhD in AI from Stanford." },
          { name: "Tunde Afolabi", role: "Python Instructor", bio: "5+ years in data science consulting." },
        ],
      },
    },
    {
      title: "Business Intelligence",
      description: "Translate data into strategies executives can act on",
      tools: ["Forecasting", "KPIs", "automated reporting", "metrics visualization"],
      projects: ["BI dashboards", "strategy reports", "executive insights"],
      trackDetails: {
        objectives: [
          "Develop forecasting models",
          "Identify and track key performance indicators",
          "Create automated reporting systems",
        ],
        learningOutcomes: [
          "Build BI dashboards for decision-making",
          "Analyze business metrics effectively",
          "Present insights to executives",
        ],
        tools: ["Advanced Excel", "Power BI Advanced", "Tableau Prep", "Google Data Studio"],
        curriculumOverview: [
          { week: 1, topic: "BI Fundamentals & KPIs" },
          { week: 2, topic: "Forecasting Techniques" },
          { week: 3, topic: "Automated Reporting" },
          { week: 4, topic: "Visualization & Capstone" },
        ],
        capstoneProject: {
          title: "Executive Strategy Dashboard",
          description: "Create a BI system for tracking company performance with forecasts and recommendations.",
        },
        pricing: {
          standard: "$1,300",
          discounted: "$1,099",
          duration: "4 weeks",
        },
        faculty: [
          { name: "Emeka Nwosu", role: "BI Lead", bio: "15 years in business analytics." },
          { name: "Aisha Bello", role: "Forecasting Expert", bio: "Consultant for Fortune 500 companies." },
        ],
      },
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
        <TracksOverview tracks={dataData.tracks} school="data" />
        <ToolsSection tracks={dataData.tracks} />
        <ProjectsSection tracks={dataData.tracks} />
        <OutcomesSection outcomes={dataData.outcomes} />
        <CurriculumSection />
        <InstructorsSection />
        <FAQSection faqs={dataData.faqs} />
      </main>
      <Footer />
    </div>
  )
}