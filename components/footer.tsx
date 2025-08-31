import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-secondary"></div>
              <span className="font-heading text-xl font-bold">Talenth</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Building tech skills for the future of work across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-sm hover:text-secondary transition-colors">
                About
              </Link>
              <Link href="/blog" className="block text-sm hover:text-secondary transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-sm hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Schools */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Our Schools</h3>
            <div className="space-y-2">
              <Link href="/schools/engineering" className="block text-sm hover:text-secondary transition-colors">
                Engineering
              </Link>
              <Link href="/schools/data" className="block text-sm hover:text-secondary transition-colors">
                Data
              </Link>
              <Link href="/schools/design" className="block text-sm hover:text-secondary transition-colors">
                Design
              </Link>
              <Link href="/schools/growth-marketing" className="block text-sm hover:text-secondary transition-colors">
                Growth & Marketing
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80">Get the latest updates on programs and opportunities.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-secondary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy
            </Link>
            <span className="text-primary-foreground/60">© 2024 Talenth Tech School. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
