"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Heart, Globe, Award, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    "from-chart-5 to-chart-1",
    "from-chart-1 to-chart-3",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-24 overflow-hidden">
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
            className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-15"
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
        </div>

        <div className="relative container mx-auto px-4 text-center">
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
              <span>About Talenth Tech School</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 text-balance leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Mission is Simple: <span className="text-gradient-secondary">Unlock Africa's Tech Potential</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We believe that people with real passion can change the world, and at Talenth, we are here to support those
            who dare to try.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              {[
                "Africa's talent is boundless. What's missing is the right runway. We started with a mission to bridge the gap between raw potential and real-world opportunities, building a platform where ambitious Africans can acquire the skills, exposure, and community needed to access opportunities that could radically transform their lives.",
                "We have seen first-hand how brilliant minds are often left behind due to lack of access, direction, or belief. Talenth exists to change that for good.",
                "Our work is delivered by experienced faculty who have built and scaled tech products at leading companies. They bring practical insights on what it takes to succeed in fast-paced, high-performing environments.",
                "At Talenth, we focus on practical, job-relevant training. Our programmes cover product management, software engineering, and business operations—designed to align with what companies actually need. We emphasise hands-on projects, real-world case studies, and access to professionals who've done the work.",
                "We are here to close the opportunity gap—connecting talented Africans to the jobs and networks that can change their lives.",
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/40 to-muted/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-1 to-chart-2"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 shadow-lg mr-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Target className="h-8 w-8 text-white" />
                    </motion.div>
                    <h2 className="font-heading text-2xl font-bold text-gradient-primary">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To equip Africa's next generation of tech talent with the skills, mindset, and community needed to
                    innovate, lead, and thrive in the digital economy. We exist to unlock potential, preparing
                    passionate individuals for high-impact roles in engineering, product, data, design, marketing, and
                    more through practical, future-ready learning and access to global opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-3 to-chart-4"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-chart-3 to-chart-4 shadow-lg mr-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Lightbulb className="h-8 w-8 text-white" />
                    </motion.div>
                    <h2 className="font-heading text-2xl font-bold text-gradient-primary">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become Africa's most trusted platform for raising tech talent that transforms industries and
                    shapes the future locally and globally.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Strategic Objectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              To fulfil this mission, Talenth is focused on:
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: "Industry-Relevant Education",
                description:
                  "Delivering education that cuts across key tech disciplines from software engineering and product design to growth marketing and analytics.",
              },
              {
                icon: Target,
                title: "Direct Pathways to Opportunity",
                description:
                  "Creating pathways through apprenticeships, mentorship, hiring pipelines, and talent showcases.",
              },
              {
                icon: Users,
                title: "Strong Learning Community",
                description:
                  "Fostering a community where talent can collaborate, grow, and stay inspired through every stage of their journey.",
              },
              {
                icon: Heart,
                title: "Inclusive Access",
                description:
                  "Championing inclusive access to high-quality training for underrepresented individuals across Africa.",
              },
              {
                icon: Lightbulb,
                title: "Ethical Leadership",
                description:
                  "Shaping ethical, purpose-driven talent ready to solve real problems and lead with integrity.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "Preparing talent that can compete and lead on the global stage while solving local challenges.",
              },
            ].map((objective, index) => {
              const IconComponent = objective.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientColors[index]}`}></div>
                    <CardContent className="p-8">
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientColors[index]} shadow-lg mx-auto mb-6`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="font-heading text-xl font-semibold mb-4 text-gradient-primary">
                        {objective.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{objective.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/40 to-muted/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals from leading tech companies, dedicated to unlocking Africa's potential.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5, 6].map((member, index) => (
              <motion.div
                key={member}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientColors[index]}`}></div>
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-24 h-24 bg-gradient-to-br ${gradientColors[index]} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Users className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-gradient-primary">
                      Team Member {member}
                    </h3>
                    <p className="text-secondary font-medium mb-4">Position Title</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Brief bio and background information will be added here when team profiles are provided.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
