// components/learning-outcomes-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LearningOutcomesSection({ learningOutcomes }: { learningOutcomes: string[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Learning Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc ml-6">
              {learningOutcomes.map((outcome, i) => <li key={i}>{outcome}</li>)}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}