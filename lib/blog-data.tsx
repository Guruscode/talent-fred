export interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  content?: string
  tags?: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
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
    tags: ["Skills", "Career Development", "African Tech", "2024 Trends"],
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
  },
]

export function getBlogPost(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured).slice(0, 3)
}

export function getRelatedPosts(currentId: number, category: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.id !== currentId && post.category === category).slice(0, limit)
}
