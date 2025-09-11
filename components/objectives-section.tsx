// components/objectives-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ObjectivesSection({ objectives }: { objectives: string[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc ml-6">
              {objectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}