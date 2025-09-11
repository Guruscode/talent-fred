// components/capstone-project-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CapstoneProject {
  title: string
  description: string
}

export function CapstoneProjectSection({ capstoneProject }: { capstoneProject: CapstoneProject }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Capstone Project: {capstoneProject.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{capstoneProject.description}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}