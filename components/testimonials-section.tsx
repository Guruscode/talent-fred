"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Frontend Developer at Flutterwave",
      image: "/african-woman-software-developer.png",
      quote:
        "Talenth didn't just teach me to code - they taught me to think like a developer. The hands-on projects and mentorship prepared me for real-world challenges.",
    },
    {
      name: "Kwame Asante",
      role: "Data Analyst at Paystack",
      image: "/african-man-data-analyst.png",
      quote:
        "The School of Data transformed my career. From Excel basics to machine learning, I gained skills that made me invaluable to my team.",
    },
    {
      name: "Fatima Hassan",
      role: "Growth Marketing Manager at PiggyVest",
      image: "/african-woman-marketing-professional.png",
      quote:
        "The practical approach to learning growth marketing gave me the confidence to drive real results. I landed my dream job within 3 months of graduating.",
    },
    {
      name: "Chidi Okwu",
      role: "UX Designer at Andela",
      image: "/african-man-ux-designer.png",
      quote:
        "Talenth's design program taught me to create with purpose. The portfolio I built opened doors I never thought possible.",
    },
    {
      name: "Zara Mwangi",
      role: "Cloud Engineer at Meta",
      image: "/african-woman-cloud-engineer.png",
      quote:
        "The cloud engineering track was intensive but incredibly rewarding. The instructors' industry experience made all the difference.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonialVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-muted/40 to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-primary mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our alumni who are now building the future of tech across Africa
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={testimonialVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col md:flex-row items-center gap-8"
                  >
                    <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <motion.img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-secondary/20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      />
                    </motion.div>
                    <div className="flex-1 text-center md:text-left">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <Quote className="h-8 w-8 text-secondary mb-4 mx-auto md:mx-0" />
                      </motion.div>
                      <motion.blockquote
                        className="text-lg md:text-xl text-foreground mb-6 text-pretty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        "{testimonials[currentIndex].quote}"
                      </motion.blockquote>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <cite className="font-heading font-semibold text-gradient-primary not-italic">
                          {testimonials[currentIndex].name}
                        </cite>
                        <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-gradient-primary text-white border-0 hover:bg-gradient-secondary shadow-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-secondary scale-125" : "bg-muted-foreground/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: index === currentIndex ? 1.25 : 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-gradient-primary text-white border-0 hover:bg-gradient-secondary shadow-lg"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
