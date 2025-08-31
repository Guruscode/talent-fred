import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CurriculumSection() {
  const weeks = [
    { week: "Weeks 1-2", title: "Foundations", description: "Core concepts and fundamentals" },
    { week: "Weeks 3-6", title: "Building Skills", description: "Hands-on practice with tools and techniques" },
    { week: "Weeks 7-10", title: "Advanced Topics", description: "Complex projects and industry best practices" },
    { week: "Weeks 11-12", title: "Capstone Project", description: "Portfolio-ready final project" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Curriculum Overview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured 12-week journey from beginner to job-ready professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {weeks.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold">{index + 1}</span>
                </div>
                <CardTitle className="font-heading text-lg">{item.week}</CardTitle>
                <p className="font-semibold text-primary">{item.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
