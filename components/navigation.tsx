"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary"></div>
            <span className="font-heading text-xl font-bold text-primary">Talenth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                Our Schools <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/schools/engineering">School of Engineering</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/schools/growth-marketing">School of Growth & Marketing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/schools/data">School of Data</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/schools/design">School of Design</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/enroll">Explore Programmes</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Our Schools</p>
              <Link href="/schools/engineering" className="block pl-4 text-sm hover:text-primary transition-colors">
                School of Engineering
              </Link>
              <Link
                href="/schools/growth-marketing"
                className="block pl-4 text-sm hover:text-primary transition-colors"
              >
                School of Growth & Marketing
              </Link>
              <Link href="/schools/data" className="block pl-4 text-sm hover:text-primary transition-colors">
                School of Data
              </Link>
              <Link href="/schools/design" className="block pl-4 text-sm hover:text-primary transition-colors">
                School of Design
              </Link>
            </div>
            <Link href="/about" className="block text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="block text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
              <Link href="/enroll">Explore Programmes</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
