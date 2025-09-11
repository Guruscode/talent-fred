// app/schools/[school]/[track]/page.tsx
import { notFound } from "next/navigation"
import { ObjectivesSection } from "@/components/objectives-section"
import { LearningOutcomesSection } from "@/components/learning-outcomes-section"
import { TrackToolsSection } from "@/components/track-tools-section"
import { CurriculumOverviewSection } from "@/components/curriculum-overview-section"
import { CapstoneProjectSection } from "@/components/capstone-project-section"
import { PricingSection } from "@/components/pricing-section"
import { InstructorsSection } from "@/components/instructors-section"  // Assuming this can handle faculty
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { generateSlug } from "@/lib/slug"

// Import data (adjust paths if needed; assuming data is exported from school pages or centralized)
import { dataData } from "../../data/page"
import { designData } from "../../design/page"
import { engineeringData } from "../../engineering/page"
import { growthMarketingData } from "../../growth-marketing/page"

const allSchoolsData = {
  data: dataData,
  design: designData,
  engineering: engineeringData,
  "growth-marketing": growthMarketingData,
}

export default function TrackPage({ params }: { params: { school: string; track: string } }) {
  const schoolData = allSchoolsData[params.school as keyof typeof allSchoolsData]
  if (!schoolData) notFound()

  const track = schoolData.tracks.find(t => generateSlug(t.title) === params.track)
  if (!track || !track.trackDetails) notFound()

  const details = track.trackDetails

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">{track.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{track.description}</p>
          </div>
        </section>

        <ObjectivesSection objectives={details.objectives} />
        <LearningOutcomesSection learningOutcomes={details.learningOutcomes} />
        <TrackToolsSection tools={details.tools} />
        <CurriculumOverviewSection curriculumOverview={details.curriculumOverview} />
        <CapstoneProjectSection capstoneProject={details.capstoneProject} />
        <PricingSection pricing={details.pricing} />
        <InstructorsSection instructors={details.faculty} />  

      </main>
      <Footer />
    </div>
  )
}