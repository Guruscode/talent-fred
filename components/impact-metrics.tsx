"use client"

import { motion } from "framer-motion"
import { Users, Globe, TrendingUp } from "lucide-react"

export function ImpactMetrics() {
  const metrics = [
    {
      value: "20,000+",
      label: "Students Trained",
      description: "Across all our programmes",
      icon: Users,
      color: "from-chart-1 to-chart-2",
    },
    {
      value: "15+",
      label: "African Countries",
      description: "Learners from across the continent",
      icon: Globe,
      color: "from-chart-3 to-chart-4",
    },
    {
      value: "85%",
      label: "Job Placement",
      description: "Within 6 months of graduation",
      icon: TrendingUp,
      color: "from-chart-4 to-chart-5",
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

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            y: [0, 20, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Impact Across <span className="text-gradient-secondary">Africa</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real results from real people building real careers in tech
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="text-center"
              >
                <div className="glass-effect rounded-3xl p-8 hover-lift bg-white/10 backdrop-blur-md border border-white/20">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} mb-6 shadow-lg`}
                    whileHover={{
                      rotate: 5,
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <span className="font-heading text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                      {metric.value}
                    </span>
                  </motion.div>

                  <motion.h3
                    className="font-heading text-xl font-semibold mb-3 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {metric.label}
                  </motion.h3>

                  <motion.p
                    className="text-white/80 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {metric.description}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join Our Success Stories</span>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
