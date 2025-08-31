"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { VideoModal } from "./video-modal"

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-40 right-10 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-25"
            animate={{
              y: [0, -15, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 7,
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
                className="flex justify-center mb-6"
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
                  <span>Building the Future of Tech Education</span>
                </div>
              </motion.div>

              <motion.h1
                className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Building tech skills for the{" "}
                <motion.span
                  className="text-gradient-secondary inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  future of work
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Developing tech talents who think, build, and create value for the world through immersive, hands-on
                learning experiences
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-primary hover:bg-white/90 hover-lift px-8 py-4 text-lg font-semibold rounded-xl shadow-lg group">
                    Explore Programmes
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
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 hover-lift px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm group bg-transparent"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    <motion.div whileHover={{ scale: 1.2 }} className="mr-2">
                      <Play className="h-5 w-5" />
                    </motion.div>
                    Watch Our Story
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { value: "20,000+", label: "Students Trained" },
                  { value: "15+", label: "African Countries" },
                  { value: "85%", label: "Job Placement Rate" },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="text-center glass-effect rounded-2xl p-6 hover-lift"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-white/80 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="dQw4w9WgXcQ" // Replace with actual Talenth video ID
      />
    </>
  )
}
