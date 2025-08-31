import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "All", count: 24 },
  { name: "Career Advice", count: 8 },
  { name: "Industry Trends", count: 6 },
  { name: "Learner Stories", count: 7 },
  { name: "Partner Features", count: 3 },
]

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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
]

const recentArticles = [
  {
    id: 4,
    title: "Building Your First React Application: A Beginner's Guide",
    excerpt: "Step-by-step tutorial for creating your first React app with practical examples.",
    category: "Career Advice",
    author: "Grace Mwangi",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    image: "/react-code-on-computer-screen.png",
  },
  {
    id: 5,
    title: "Partnership Spotlight: How Flutterwave is Shaping African Payments",
    excerpt: "An inside look at our partnership with Flutterwave and their impact on African commerce.",
    category: "Partner Features",
    author: "John Mensah",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "/flutterwave-payment-technology.png",
  },
  {
    id: 6,
    title: "Data Science in Agriculture: Transforming African Farming",
    excerpt: "How data analytics is revolutionizing agriculture across the African continent.",
    category: "Industry Trends",
    author: "Amina Hassan",
    date: "Dec 3, 2024",
    readTime: "8 min read",
    image: "/african-farmer-using-technology.png",
  },
  {
    id: 7,
    title: "From Bootcamp to Full-Stack Developer in 6 Months",
    excerpt: "Emmanuel's journey from complete beginner to landing his dream job as a developer.",
    category: "Learner Stories",
    author: "Emmanuel Okoye",
    date: "Nov 30, 2024",
    readTime: "6 min read",
    image: "/african-developer-coding.png",
  },
  {
    id: 8,
    title: "Remote Work Best Practices for African Tech Teams",
    excerpt: "Essential tips for building and managing successful remote tech teams across Africa.",
    category: "Career Advice",
    author: "Fatima Al-Rashid",
    date: "Nov 28, 2024",
    readTime: "5 min read",
    image: "/african-remote-work-team-video-call.png",
  },
  {
    id: 9,
    title: "The Future of EdTech in Africa: Trends to Watch",
    excerpt: "Exploring the innovations shaping the future of education technology across Africa.",
    category: "Industry Trends",
    author: "Peter Nakamura",
    date: "Nov 25, 2024",
    readTime: "7 min read",
    image: "/african-students-using-educational-technology.png",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">Insights & Stories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh perspectives on learning, careers, and the future of work in Africa's tech ecosystem.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.name === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-primary mb-12 text-center">Featured Articles</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-primary mb-12 text-center">Recent Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
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
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${article.id}`}>{article.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest insights, career tips, and success stories delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
