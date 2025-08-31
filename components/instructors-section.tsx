import { Card, CardContent } from "@/components/ui/card"

export function InstructorsSection() {
  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer at Meta",
      image: "/instructor-sarah.png",
      bio: "10+ years building scalable systems",
    },
    {
      name: "Michael Chen",
      role: "Data Science Lead at Flutterwave",
      image: "/instructor-michael.png",
      bio: "Expert in ML and business analytics",
    },
    {
      name: "Amina Hassan",
      role: "Design Director at Paystack",
      image: "/instructor-amina.png",
      bio: "Award-winning product designer",
    },
    {
      name: "David Okafor",
      role: "Growth Marketing Manager at PiggyVest",
      image: "/instructor-david.png",
      bio: "Scaled products to millions of users",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Learn From Industry Experts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our instructors are working professionals from top tech companies who bring real-world experience to the
            classroom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <img
                  src={instructor.image || "/placeholder.svg"}
                  alt={instructor.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-heading font-semibold text-lg text-primary mb-1">{instructor.name}</h3>
                <p className="text-sm text-secondary font-medium mb-2">{instructor.role}</p>
                <p className="text-xs text-muted-foreground">{instructor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
