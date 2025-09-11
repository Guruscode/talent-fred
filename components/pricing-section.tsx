// components/pricing-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Pricing {
  standard: string
  discounted?: string
  duration: string
}

export function PricingSection({ pricing }: { pricing: Pricing }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Standard Price: {pricing.standard}</p>
            {pricing.discounted && <p>Discounted Price: {pricing.discounted}</p>}
            <p>Duration: {pricing.duration}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}