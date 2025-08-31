import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredArticles = [
  {
    id: 1,
    title: "5 Essential Skills Every African Tech Professional Needs in 2024",
    excerpt: "Discover the key competencies that will set you apart in Africa's rapidly evolving tech landscape.",
    category: "Career Advice",
    author: "Sarah Okafor",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/african-tech-professional-working-on-laptop.png",
  },
  {
    id: 2,
    title: "From Lagos to Silicon Valley: Alumni Success Story",
    excerpt: "How Kemi transformed from a marketing graduate to a product manager at a leading fintech company.",
    category: "Learner Stories",
    author: "David Adebayo",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "/young-african-woman-in-tech-office.png",
  },
  {
    id: 3,
    title: "The Rise of African Fintech: What It Means for Developers",
    excerpt: "Exploring opportunities in Africa's booming fintech sector and the skills needed to succeed.",
    category: "Industry Trends",
    author: "Michael Osei",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "/african-fintech-mobile-payment.png",
  },
]

export function FeaturedBlogPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh perspectives on learning, careers, and the future of work in Africa's tech ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${article.id}`}>{article.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                    <Calendar className="h-4 w-4 ml-2" />
                    <span>{article.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${article.id}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
