interface Track {
  title: string
  description: string
  tools: string[]
  projects: string[]
}

interface ToolsSectionProps {
  tracks: Track[]
}

export function ToolsSection({ tracks }: ToolsSectionProps) {
  // Collect all unique tools from all tracks
  const allTools = Array.from(new Set(tracks.flatMap((track) => track.tools)))

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Tools & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the industry-standard tools and technologies that employers are looking for
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {allTools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">{tool.charAt(0).toUpperCase()}</span>
              </div>
              <span className="font-medium text-card-foreground">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
