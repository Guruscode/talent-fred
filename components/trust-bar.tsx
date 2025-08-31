"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TrustBar() {
  const companies = [
    { name: "Meta", logo: "/meta-logo-abstract.png" },
    { name: "Andela", logo: "/andela-logo.png" },
    { name: "Flutterwave", logo: "/flutterwave-logo.png" },
    { name: "Paystack", logo: "/paystack-logo.png" },
    { name: "PiggyVest", logo: "/piggyvest-logo.png" },
    { name: "Meta", logo: "/meta-logo-abstract.png" },
    { name: "Andela", logo: "/andela-logo.png" },
    { name: "Flutterwave", logo: "/flutterwave-logo.png" },
    { name: "Paystack", logo: "/paystack-logo.png" },
    { name: "PiggyVest", logo: "/piggyvest-logo.png" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [companies.length])

  return (
    <section className="py-16 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trained by professionals from top tech companies
          </p>
        </motion.div>

        <div className="relative h-20 md:h-24">
          <motion.div
            className="flex items-center gap-12 md:gap-16"
            animate={{
              x: `-${currentIndex * 200}px`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              width: `${companies.length * 200}px`,
            }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center min-w-[180px]"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-500 filter hover:brightness-110"
                  whileHover={{
                    filter: "grayscale(0%) brightness(1.1)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 2) === Math.floor(index / 2) ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
