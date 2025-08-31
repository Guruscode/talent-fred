"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, BarChart3, Palette, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ProgrammeOverview() {
  const programmes = [
    {
      icon: BarChart3,
      title: "School of Data",
      description: "I love numbers and want to help businesses make smarter decisions",
      href: "/schools/data",
      color: "text-chart-1",
    },
    {
      icon: Code,
      title: "School of Engineering",
      description: "I love solving problems and want to build websites, apps, and tools",
      href: "/schools/engineering",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "School of Design",
      description: "I love being creative and want to design beautiful things that connect with people",
      href: "/schools/design",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "School of Growth and Marketing",
      description: "I love digital media and want to grow products and brands online",
      href: "/schools/growth-marketing",
      color: "text-accent",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-primary mb-4">Choose Your Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our programme is structured under four core schools, each designed to help you master in-demand tools and
            build real-world projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programmes.map((programme, index) => {
            const IconComponent = programme.icon
            return (
              <motion.div
                key={programme.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-secondary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-secondary"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconComponent className={`h-8 w-8 text-white`} />
                    </motion.div>
                    <CardTitle className="font-heading text-xl group-hover:text-gradient-primary transition-all duration-300">
                      {programme.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-6 text-pretty group-hover:text-foreground/80 transition-colors">
                      {programme.description}
                    </CardDescription>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        className="bg-gradient-primary hover:bg-gradient-secondary text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href="/enroll">Explore Programmes</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
