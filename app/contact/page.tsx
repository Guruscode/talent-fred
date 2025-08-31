"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Instagram, Twitter, Linkedin, Send, Clock, Sparkles } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
              <span>Get in Touch</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 text-balance leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's <span className="text-gradient-secondary">Talk</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Have a question or want to partner with us? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-1 to-chart-2"></div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-gradient-primary flex items-center gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 shadow-lg"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="h-5 w-5 text-white" />
                    </motion.div>
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          className="border-2 border-border/50 focus:border-secondary transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="border-2 border-border/50 focus:border-secondary transition-colors"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <Label htmlFor="subject" className="text-foreground font-medium">
                        Subject
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="border-2 border-border/50 focus:border-secondary transition-colors">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="programs">Program Information</SelectItem>
                          <SelectItem value="partnerships">Partnership Opportunities</SelectItem>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                        className="border-2 border-border/50 focus:border-secondary transition-colors resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-lg font-semibold"
                        >
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-2 to-chart-3"></div>
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-6 text-gradient-primary flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-lg bg-gradient-to-br from-chart-2 to-chart-3 shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </motion.div>
                      Get in Touch
                    </h3>
                    <div className="space-y-6">
                      {[
                        { icon: Mail, title: "General Inquiries", value: "hello@talenth.com" },
                        { icon: Mail, title: "Partnerships", value: "partnerships@talenth.com" },
                        { icon: MapPin, title: "Location", value: "HQ – Abuja | Remote Team – Africa-wide" },
                      ].map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <motion.div
                            key={index}
                            className="flex items-center group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 mr-4 group-hover:scale-110 transition-transform">
                              <IconComponent className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{item.title}</p>
                              <p className="text-muted-foreground">{item.value}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-3 to-chart-4"></div>
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-6 text-gradient-primary">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { icon: Instagram, href: "#", label: "Instagram" },
                        { icon: Twitter, href: "#", label: "Twitter" },
                        { icon: Linkedin, href: "#", label: "LinkedIn" },
                      ].map((social, index) => {
                        const IconComponent = social.icon
                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          >
                            <Button
                              variant="outline"
                              size="icon"
                              asChild
                              className="border-2 border-secondary/30 hover:bg-gradient-primary hover:text-white hover:border-transparent transition-all duration-300 bg-transparent"
                            >
                              <a href={social.href} aria-label={social.label}>
                                <IconComponent className="h-4 w-4" />
                              </a>
                            </Button>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-4 to-chart-5"></div>
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-6 text-gradient-primary flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-lg bg-gradient-to-br from-chart-4 to-chart-5 shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Clock className="h-5 w-5 text-white" />
                      </motion.div>
                      Office Hours
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      {[
                        "Monday - Friday: 9:00 AM - 6:00 PM (WAT)",
                        "Saturday: 10:00 AM - 2:00 PM (WAT)",
                        "Sunday: Closed",
                      ].map((hour, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          {hour}
                        </motion.p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
