// components/tracks-overview.tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Wrench, FolderOpen, CheckCircle } from "lucide-react"
import Link from "next/link"
import { generateSlug } from "@/lib/slug"

interface Track {
  title: string
  description: string
  tools: string[]
  projects: string[]
}

interface TracksOverviewProps {
  tracks: Track[]
  school: string
}

export function TracksOverview({ tracks, school }: TracksOverviewProps) {
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

  const gradientColors = [
    "from-chart-1 to-chart-2",
    "from-chart-2 to-chart-3",
    "from-chart-3 to-chart-4",
    "from-chart-4 to-chart-5",
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-10"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-6">Choose Your Track</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized learning paths designed to match your interests and career goals
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tracks.map((track, index) => {
            const trackSlug = generateSlug(track.title)
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Link href={`/schools/${school}/${trackSlug}`} className="block h-full">
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientColors[index % gradientColors.length]}`}
                    ></div>

                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} shadow-lg`}
                          whileHover={{
                            rotate: 5,
                            scale: 1.1,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <Code className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="font-heading text-xl text-gradient-primary group-hover:scale-105 transition-transform duration-300">
                          {track.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {track.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Wrench className="h-4 w-4 text-secondary" />
                            <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide">
                              Tools You'll Master
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {track.tools.map((tool, toolIndex) => (
                              <motion.span
                                key={toolIndex}
                                className={`px-4 py-2 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} text-white text-sm rounded-full font-medium shadow-md hover:shadow-lg transition-shadow`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.3 + toolIndex * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tool}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <FolderOpen className="h-4 w-4 text-secondary" />
                            <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide">
                              Sample Projects
                            </h4>
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            {track.projects.map((project, projectIndex) => (
                              <motion.li
                                key={projectIndex}
                                className="flex items-start gap-3 group-hover:text-foreground/80 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + projectIndex * 0.05 }}
                              >
                                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{project}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}