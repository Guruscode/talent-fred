"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Briefcase, MessageSquare, Trophy, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function LearningMethod() {
  const methods = [
    {
      icon: BookOpen,
      title: "Immersive Learning",
      description: "Engaging videos + real-world assignments",
      details: ["Self-paced lessons with live classes", "Projects that mirror industry needs"],
      color: "from-chart-1 to-chart-2",
      bgColor: "bg-gradient-to-br from-chart-1/10 to-chart-2/10",
    },
    {
      icon: Users,
      title: "Labs and Live Sessions",
      description: "Weekend and evening sessions",
      details: ["Guided labs and practical exercises", "Focus on real business problems, not just theory"],
      color: "from-chart-2 to-chart-3",
      bgColor: "bg-gradient-to-br from-chart-2/10 to-chart-3/10",
    },
    {
      icon: Trophy,
      title: "Capstone Projects",
      description: "Build portfolio-ready projects",
      details: ["Get feedback from mentors and peers", "Collaborate like you are already in a tech team"],
      color: "from-chart-3 to-chart-4",
      bgColor: "bg-gradient-to-br from-chart-3/10 to-chart-4/10",
    },
    {
      icon: Briefcase,
      title: "Career Coaching and Job Support",
      description: "LinkedIn and personal brand training",
      details: ["CV reviews tailored to tech roles", "Interview prep + job access + demo sessions"],
      color: "from-chart-4 to-chart-5",
      bgColor: "bg-gradient-to-br from-chart-4/10 to-chart-5/10",
    },
    {
      icon: MessageSquare,
      title: "Soft Skills and Leadership Training",
      description: "Learn how to lead teams and communicate effectively",
      details: [
        "Build confidence, critical thinking, and problem-solving skills",
        "Understand workplace culture, emotional intelligence, and personal growth strategies",
      ],
      color: "from-chart-5 to-chart-1",
      bgColor: "bg-gradient-to-br from-chart-5/10 to-chart-1/10",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-8"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-6">How You Will Learn</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            At Talenth, you will gain real skills by doing real work guided by experts, built around projects, and
            focused on your career.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine flexible learning with hands-on experiences so you are ready to build, lead, and grow in tech.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {methods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card
                  className={`h-full hover:shadow-2xl transition-all duration-500 border-0 ${method.bgColor} backdrop-blur-sm relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <CardHeader className="text-center pb-6 relative z-10">
                    <motion.div
                      className={`mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-br ${method.color} shadow-lg`}
                      whileHover={{
                        rotate: 5,
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="font-heading text-xl text-gradient-primary group-hover:scale-105 transition-transform duration-300">
                      {method.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center relative z-10">
                    <p className="text-muted-foreground mb-6 font-medium text-base leading-relaxed">
                      {method.description}
                    </p>
                    <motion.ul
                      className="text-sm text-muted-foreground space-y-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {method.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          className="text-left flex items-start gap-3 group-hover:text-foreground/80 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + detailIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ready to Start Learning?</span>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <BookOpen className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
