"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "5 Essential Skills Every African Tech Professional Needs in 2024",
    excerpt: "Discover the key competencies that will set you apart in Africa's rapidly evolving tech landscape.",
    category: "Career Advice",
    author: "Sarah Okafor",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/african-tech-professional-working-on-laptop.png",
    content: `
      <p>Africa's tech ecosystem is experiencing unprecedented growth, with new opportunities emerging across the continent. As we move into 2024, the demand for skilled tech professionals continues to outpace supply, creating incredible opportunities for those who are prepared.</p>

      <h2>1. Cloud Computing and DevOps</h2>
      <p>With businesses rapidly adopting cloud-first strategies, understanding platforms like AWS, Azure, and Google Cloud has become essential. DevOps practices are no longer optional – they're the foundation of modern software development.</p>

      <h2>2. Data Analysis and AI Integration</h2>
      <p>The ability to work with data and integrate AI solutions into existing systems is becoming crucial across all tech roles. From basic SQL queries to understanding machine learning pipelines, data literacy is key.</p>

      <h2>3. Mobile-First Development</h2>
      <p>With mobile internet usage dominating across Africa, developing mobile-first solutions using frameworks like React Native, Flutter, or native development is essential for reaching African markets effectively.</p>

      <h2>4. Cybersecurity Awareness</h2>
      <p>As digital adoption increases, so do security threats. Every tech professional needs a solid understanding of cybersecurity principles, from secure coding practices to understanding common vulnerabilities.</p>

      <h2>5. Cross-Cultural Communication</h2>
      <p>Working in Africa's diverse tech ecosystem requires excellent communication skills across cultures and languages. The ability to collaborate effectively with international teams while understanding local contexts is invaluable.</p>

      <h2>Building Your Skill Set</h2>
      <p>The key to success is continuous learning and practical application. Focus on building projects that demonstrate these skills, contribute to open source, and engage with the vibrant African tech community.</p>

      <p>At Talenth Tech School, we've designed our curriculum around these essential skills, ensuring our graduates are ready for the opportunities that lie ahead in Africa's exciting tech future.</p>
    `,
    tags: ["Skills", "Career Development", "African Tech", "2024 Trends"],
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
    content: `
      <p>Kemi Adebayo's journey from a marketing graduate in Lagos to a product manager at a leading Silicon Valley fintech company is a testament to the power of determination, continuous learning, and the right educational foundation.</p>

      <h2>The Beginning</h2>
      <p>"I graduated with a marketing degree from the University of Lagos in 2020, right in the middle of the pandemic," Kemi recalls. "Job opportunities were scarce, and I realized I needed to pivot to survive in the new economy."</p>

      <h2>Discovering Tech</h2>
      <p>Like many of her generation, Kemi was drawn to the possibilities that technology offered. "I started learning about product management through online resources, but I quickly realized I needed structured learning and mentorship."</p>

      <p>That's when she discovered Talenth Tech School's Growth and Marketing program. "The curriculum was perfect – it combined my marketing background with the technical skills I needed to break into product management."</p>

      <h2>The Learning Journey</h2>
      <p>Kemi's experience at Talenth was transformative. "The hands-on projects were game-changers. We worked on real product challenges, analyzed user data, and learned to think like product managers from day one."</p>

      <p>One project that stood out was developing a go-to-market strategy for a fintech startup. "We had to understand the technical architecture, user needs, and market dynamics. It was challenging but incredibly rewarding."</p>

      <h2>Breaking Into Silicon Valley</h2>
      <p>After completing her program, Kemi initially worked with a Lagos-based fintech startup. "The experience was invaluable. I learned how to work with engineering teams, analyze user behavior, and drive product decisions with data."</p>

      <p>Her breakthrough came when she applied her skills to optimize the company's user onboarding process, resulting in a 40% increase in user activation rates. This success caught the attention of international recruiters.</p>

      <h2>Current Role and Future Plans</h2>
      <p>Today, Kemi works as a Senior Product Manager at a leading fintech company in San Francisco, focusing on emerging markets – particularly Africa. "It's incredible how my journey has come full circle. I'm now helping to build products that serve the African market I understand so well."</p>

      <p>Her advice to aspiring product managers? "Focus on solving real problems, understand your users deeply, and never stop learning. The tech industry moves fast, but the fundamentals of good product management remain constant."</p>

      <h2>Giving Back</h2>
      <p>Kemi remains connected to the Talenth community, mentoring current students and recent graduates. "Talenth gave me the foundation I needed to succeed. Now I want to help others on their journey."</p>
    `,
    tags: ["Success Story", "Product Management", "Career Change", "Alumni"],
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
    content: `
      <p>Africa's fintech revolution is reshaping the continent's financial landscape, creating unprecedented opportunities for developers who understand both technology and the unique challenges of African markets.</p>

      <h2>The Current Landscape</h2>
      <p>From mobile money solutions like M-Pesa to digital banking platforms like Kuda and payment processors like Flutterwave, African fintech companies are solving real problems for millions of users across the continent.</p>

      <p>The numbers are staggering: Africa's fintech sector attracted over $3 billion in funding in 2023, with Nigeria, Kenya, and South Africa leading the charge. This growth is creating thousands of opportunities for skilled developers.</p>

      <h2>Key Technologies Driving Growth</h2>
      <p>Several technologies are at the heart of Africa's fintech boom:</p>

      <h3>Mobile-First Architecture</h3>
      <p>With mobile phone penetration far exceeding traditional banking infrastructure, fintech solutions must be mobile-first. Developers skilled in React Native, Flutter, and progressive web apps are in high demand.</p>

      <h3>Blockchain and Cryptocurrency</h3>
      <p>As African countries explore digital currencies and cross-border payments, blockchain expertise is becoming increasingly valuable. Understanding smart contracts, DeFi protocols, and cryptocurrency exchanges opens up exciting opportunities.</p>

      <h3>API-First Development</h3>
      <p>The ability to integrate with multiple payment providers, banks, and financial institutions through APIs is crucial. RESTful API design and integration skills are essential for fintech developers.</p>

      <h2>Unique African Challenges</h2>
      <p>Developing for African markets requires understanding unique challenges:</p>

      <ul>
        <li><strong>Connectivity:</strong> Solutions must work reliably on 2G/3G networks</li>
        <li><strong>Device Limitations:</strong> Apps must run smoothly on entry-level smartphones</li>
        <li><strong>Regulatory Complexity:</strong> Each country has different financial regulations</li>
        <li><strong>Currency Volatility:</strong> Systems must handle multiple currencies and exchange rates</li>
      </ul>

      <h2>Skills in High Demand</h2>
      <p>Fintech companies are actively seeking developers with:</p>

      <ul>
        <li>Strong backend development skills (Node.js, Python, Java)</li>
        <li>Mobile development expertise (React Native, Flutter, native iOS/Android)</li>
        <li>Database management (PostgreSQL, MongoDB, Redis)</li>
        <li>Security and compliance knowledge</li>
        <li>Understanding of financial systems and regulations</li>
      </ul>

      <h2>Career Opportunities</h2>
      <p>The fintech boom is creating diverse career paths:</p>

      <ul>
        <li><strong>Backend Engineers:</strong> Building robust payment processing systems</li>
        <li><strong>Mobile Developers:</strong> Creating user-friendly financial apps</li>
        <li><strong>DevOps Engineers:</strong> Ensuring system reliability and security</li>
        <li><strong>Data Engineers:</strong> Processing transaction data for insights</li>
        <li><strong>Security Engineers:</strong> Protecting sensitive financial data</li>
      </ul>

      <h2>Getting Started</h2>
      <p>For developers looking to enter the fintech space, consider:</p>

      <ul>
        <li>Building personal projects that solve real financial problems</li>
        <li>Contributing to open-source fintech projects</li>
        <li>Learning about financial regulations and compliance</li>
        <li>Networking with fintech professionals and attending industry events</li>
        <li>Pursuing relevant certifications in security and financial technology</li>
      </ul>

      <p>The future of African fintech is bright, and developers who position themselves with the right skills and understanding of local markets will find themselves at the center of this exciting transformation.</p>
    `,
    tags: ["Fintech", "African Tech", "Career Opportunities", "Industry Analysis"],
  },
]

const relatedPosts = [
  {
    id: 4,
    title: "Building Your First React Application: A Beginner's Guide",
    category: "Career Advice",
    readTime: "10 min read",
    image: "/react-code-on-computer-screen.png",
  },
  {
    id: 5,
    title: "Partnership Spotlight: How Flutterwave is Shaping African Payments",
    category: "Partner Features",
    readTime: "4 min read",
    image: "/flutterwave-payment-technology.png",
  },
  {
    id: 6,
    title: "Data Science in Agriculture: Transforming African Farming",
    category: "Industry Trends",
    readTime: "8 min read",
    image: "/african-farmer-using-technology.png",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">{post.excerpt}</p>

            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="p-8 shadow-lg">
                  <CardContent className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </CardContent>
                </Card>

                {/* Tags */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <Card className="mt-8 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Share this article</h3>
                      <p className="text-muted-foreground">Help others discover this content</p>
                    </div>
                    <Button size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Author Card */}
                  <Card className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{post.author}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Tech educator and industry expert passionate about African innovation.
                      </p>
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                    </div>
                  </Card>

                  {/* Reading Progress */}
                  <Card className="p-6">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">{post.readTime}</p>
                        <p className="text-sm text-muted-foreground">Reading time</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Posts */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-12 text-center">Related Articles</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video bg-muted">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-3 line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">{relatedPost.readTime}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
