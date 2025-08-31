"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Code, BarChart3, Palette, TrendingUp, CreditCard, Building2, CheckCircle } from "lucide-react"

const schools = [
  {
    id: "engineering",
    title: "School of Engineering",
    icon: Code,
    tracks: ["Frontend Development", "Backend Development", "Mobile Development", "Cloud Engineering"],
    price: "₦150,000",
    duration: "6 months",
  },
  {
    id: "data",
    title: "School of Data",
    icon: BarChart3,
    tracks: ["Data Analysis", "Data Science", "Business Intelligence"],
    price: "₦120,000",
    duration: "5 months",
  },
  {
    id: "design",
    title: "School of Design",
    icon: Palette,
    tracks: ["UI/UX Design", "Product Design", "Visual Design"],
    price: "₦100,000",
    duration: "4 months",
  },
  {
    id: "growth-marketing",
    title: "School of Growth & Marketing",
    icon: TrendingUp,
    tracks: ["Content Creation", "Digital Marketing", "Growth Marketing", "Product Marketing"],
    price: "₦110,000",
    duration: "4 months",
  },
]

export default function EnrollPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    track: "",
    paymentMethod: "",
  })

  const selectedSchool = schools.find((school) => school.id === formData.school)

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-secondary rounded-full opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Start Your Tech Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with Talenth Tech School
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step >= stepNumber ? "bg-gradient-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`h-1 w-16 md:w-24 transition-all duration-300 ${
                      step > stepNumber ? "bg-gradient-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Personal Info</span>
            <span>Choose Program</span>
            <span>Payment</span>
            <span>Complete</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-heading">Personal Information</CardTitle>
                    <CardDescription>Tell us a bit about yourself</CardDescription>
                  </CardHeader>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <Button onClick={handleNext} className="w-full bg-gradient-primary hover:bg-gradient-secondary">
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Choose Program */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-heading">Choose Your Program</CardTitle>
                    <CardDescription>Select the school and track that interests you</CardDescription>
                  </CardHeader>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {schools.map((school) => {
                        const IconComponent = school.icon
                        return (
                          <motion.div key={school.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Card
                              className={`cursor-pointer transition-all duration-300 ${
                                formData.school === school.id
                                  ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5"
                                  : "hover:border-primary/50"
                              }`}
                              onClick={() => setFormData({ ...formData, school: school.id, track: "" })}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div className="p-2 rounded-lg bg-gradient-secondary">
                                    <IconComponent className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-sm">{school.title}</h3>
                                    <p className="text-xs text-muted-foreground">
                                      {school.duration} • {school.price}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )
                      })}
                    </div>

                    {selectedSchool && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label>Choose Your Track</Label>
                        <Select
                          value={formData.track}
                          onValueChange={(value) => setFormData({ ...formData, track: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a track" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedSchool.tracks.map((track) => (
                              <SelectItem key={track} value={track}>
                                {track}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>
                    )}

                    <div className="flex space-x-4">
                      <Button variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        className="flex-1 bg-gradient-primary hover:bg-gradient-secondary"
                        disabled={!formData.school || !formData.track}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment Method */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-heading">Payment Method</CardTitle>
                    <CardDescription>Choose how you'd like to pay for your program</CardDescription>
                  </CardHeader>

                  <div className="space-y-6">
                    {selectedSchool && (
                      <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border">
                        <h3 className="font-semibold">{selectedSchool.title}</h3>
                        <p className="text-sm text-muted-foreground">{formData.track}</p>
                        <p className="text-lg font-bold text-primary mt-2">{selectedSchool.price}</p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Card
                          className={`cursor-pointer transition-all duration-300 ${
                            formData.paymentMethod === "paystack"
                              ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5"
                              : "hover:border-primary/50"
                          }`}
                          onClick={() => setFormData({ ...formData, paymentMethod: "paystack" })}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <CreditCard className="w-6 h-6 text-primary" />
                              <div>
                                <h3 className="font-semibold">Pay with Paystack</h3>
                                <p className="text-sm text-muted-foreground">
                                  Secure online payment with card or bank transfer
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Card
                          className={`cursor-pointer transition-all duration-300 ${
                            formData.paymentMethod === "bank-transfer"
                              ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5"
                              : "hover:border-primary/50"
                          }`}
                          onClick={() => setFormData({ ...formData, paymentMethod: "bank-transfer" })}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <Building2 className="w-6 h-6 text-primary" />
                              <div>
                                <h3 className="font-semibold">Bank Transfer</h3>
                                <p className="text-sm text-muted-foreground">
                                  Direct bank transfer (Naira, Dollar, Pounds, Euro)
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    <div className="flex space-x-4">
                      <Button variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        className="flex-1 bg-gradient-primary hover:bg-gradient-secondary"
                        disabled={!formData.paymentMethod}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Payment Details or Success */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {formData.paymentMethod === "paystack" ? (
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-heading font-bold mb-2">Complete Payment</h2>
                        <p className="text-muted-foreground">
                          You'll be redirected to Paystack to complete your payment securely
                        </p>
                      </div>
                      <Button className="w-full bg-gradient-primary hover:bg-gradient-secondary text-lg py-6">
                        Pay {selectedSchool?.price} with Paystack
                      </Button>
                    </div>
                  ) : (
                    <BankTransferDetails onComplete={() => setStep(5)} />
                  )}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function BankTransferDetails({ onComplete }: { onComplete: () => void }) {
  const [hasPaid, setHasPaid] = useState(false)

  const bankDetails = [
    { currency: "NAIRA", account: "0801685551" },
    { currency: "DOLLAR", account: "0801685568" },
    { currency: "POUNDS", account: "0801685575" },
    { currency: "EURO", account: "0801685582" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-heading font-bold mb-2">Bank Transfer Details</h2>
        <p className="text-muted-foreground">Transfer to any of the accounts below based on your preferred currency</p>
      </div>

      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h3 className="font-bold text-lg">FREDMIND DIGITAL AGENCY LTD</h3>
            <p className="text-sm text-muted-foreground">GTBANK</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bankDetails.map((detail) => (
              <div key={detail.currency} className="p-4 bg-background rounded-lg border">
                <div className="text-center">
                  <p className="font-semibold text-primary">{detail.currency}</p>
                  <p className="text-lg font-mono font-bold">{detail.account}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Important Instructions</h4>
              <p className="text-sm text-amber-700">
                After making your transfer, please send confirmation (screenshot of payment receipt) to our WhatsApp:
                <span className="font-semibold"> +234 XXX XXX XXXX</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center space-x-2">
        <Checkbox id="paid" checked={hasPaid} onCheckedChange={(checked) => setHasPaid(checked as boolean)} />
        <Label htmlFor="paid" className="text-sm">
          I have completed the bank transfer and sent confirmation to WhatsApp
        </Label>
      </div>

      <Button
        onClick={onComplete}
        disabled={!hasPaid}
        className="w-full bg-gradient-primary hover:bg-gradient-secondary"
      >
        I Have Paid - Continue
      </Button>
    </div>
  )
}
