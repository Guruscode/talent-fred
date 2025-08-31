import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Part-Time",
      price: "$299",
      duration: "per month",
      description: "Perfect for working professionals",
      features: [
        "Evening and weekend classes",
        "Self-paced learning materials",
        "Monthly 1-on-1 mentorship",
        "Access to community forum",
        "Certificate upon completion",
      ],
      popular: false,
    },
    {
      name: "Full-Time",
      price: "$499",
      duration: "per month",
      description: "Intensive program for faster results",
      features: [
        "Daily live sessions",
        "Accelerated curriculum",
        "Weekly 1-on-1 mentorship",
        "Priority job placement support",
        "Portfolio review sessions",
        "Industry networking events",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$799",
      duration: "per month",
      description: "Maximum support and personalization",
      features: [
        "All Full-Time benefits",
        "Personal career coach",
        "Guaranteed job placement support",
        "Direct employer introductions",
        "Lifetime community access",
        "Advanced masterclasses",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Choose Your Learning Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to fit your schedule and career goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-secondary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.duration}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
