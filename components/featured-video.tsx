import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function FeaturedVideo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Story - Talenth in Motion
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our vision, methodology, and the inspiring stories of students who are transforming their lives
              through tech education.
            </p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-lg">
            <img
              src="/african-tech-students-in-modern-classroom-learning.png"
              alt="Talenth students learning in a modern tech classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full p-6"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">2-minute video showcasing our impact across Africa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
