// components/track-tools-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TrackToolsSection({ tools }: { tools: string[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 bg-secondary text-white rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}