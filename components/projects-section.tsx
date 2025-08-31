import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Track {
  title: string
  description: string
  tools: string[]
  projects: string[]
}

interface ProjectsSectionProps {
  tracks: Track[]
}

export function ProjectsSection({ tracks }: ProjectsSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Build Real Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create portfolio-ready projects that demonstrate your skills to potential employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="font-heading text-lg text-primary">{track.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {track.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{project}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
