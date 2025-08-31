import { Badge } from "@/components/ui/badge"

interface OutcomesSectionProps {
  outcomes: string[]
}

export function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Career Outcomes</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Graduate ready for high-demand roles in the tech industry
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-6 py-3 text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              {outcome}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
