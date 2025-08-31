"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, ArrowRight, Sparkles } from "lucide-react"

interface SchoolHeroProps {
  title: string
  tagline: string
  description: string
}

export function SchoolHero({ title, tagline, description }: SchoolHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            y: [0, 25, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-25"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        ></motion.div>
      </div>

      <div className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white/90 text-sm font-medium">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <span>Premium Tech Education</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white text-balance leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl font-semibold text-gradient-secondary mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {tagline}
            </motion.p>

            <motion.p
              className="text-xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Apply Now
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm group bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Curriculum
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { label: "Industry Projects", value: "12+" },
                { label: "Expert Mentors", value: "8+" },
                { label: "Job Placement", value: "85%" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center glass-effect rounded-2xl p-6 hover-lift"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
