"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Star, Zap, Crown } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started with basic fitness tracking",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Star,
    color: "from-slate-500 to-slate-600",
    features: [
      "Basic workout tracking",
      "5 workout programs",
      "Progress analytics",
      "Community access",
      "Mobile app access",
    ],
    limitations: ["Limited to 3 workouts per week", "Basic progress reports", "Standard support"],
  },
  {
    name: "Pro",
    description: "Advanced features for serious fitness enthusiasts",
    monthlyPrice: 19,
    yearlyPrice: 190,
    icon: Zap,
    color: "from-blue-500 to-purple-600",
    popular: true,
    features: [
      "Unlimited workout access",
      "50+ workout programs",
      "AI personal trainer",
      "Advanced analytics",
      "Custom meal plans",
      "Priority support",
      "Offline workout downloads",
      "Heart rate monitoring",
    ],
    limitations: [],
  },
  {
    name: "Elite",
    description: "Premium experience with exclusive features and content",
    monthlyPrice: 39,
    yearlyPrice: 390,
    icon: Crown,
    color: "from-purple-500 to-pink-600",
    features: [
      "Everything in Pro",
      "1-on-1 virtual coaching",
      "Personalized nutrition plans",
      "Advanced form analysis",
      "Exclusive workout content",
      "24/7 premium support",
      "Wearable device integration",
      "Custom workout creation",
      "Progress photo analysis",
    ],
    limitations: [],
  },
]

const comparisonFeatures = [
  {
    category: "Workouts & Training",
    features: [
      { name: "Workout Programs", free: "5", pro: "50+", elite: "Unlimited" },
      { name: "AI Personal Trainer", free: false, pro: true, elite: true },
      { name: "Custom Workouts", free: false, pro: false, elite: true },
      { name: "Form Analysis", free: false, pro: "Basic", elite: "Advanced" },
      { name: "1-on-1 Coaching", free: false, pro: false, elite: true },
    ],
  },
  {
    category: "Analytics & Tracking",
    features: [
      { name: "Progress Tracking", free: "Basic", pro: "Advanced", elite: "Premium" },
      { name: "Health Metrics", free: "Limited", pro: "Full", elite: "Full + AI Insights" },
      { name: "Photo Progress", free: false, pro: true, elite: "AI Analysis" },
      { name: "Export Data", free: false, pro: true, elite: true },
    ],
  },
  {
    category: "Support & Community",
    features: [
      { name: "Community Access", free: true, pro: true, elite: true },
      { name: "Customer Support", free: "Standard", pro: "Priority", elite: "24/7 Premium" },
      { name: "Expert Consultations", free: false, pro: false, elite: true },
    ],
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Fitness Plan
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Start your transformation today with flexible pricing options designed to fit your fitness journey and
              budget.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={`text-lg font-medium ${!isYearly ? "text-slate-900 dark:text-white" : "text-slate-500"}`}
              >
                Monthly
              </span>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-blue-600" />
              <span className={`text-lg font-medium ${isYearly ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
                Yearly
              </span>
              <Badge className="bg-green-100 text-green-700 border-green-200">Save 20%</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? "md:-mt-8" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`h-full ${
                    plan.popular
                      ? "bg-white dark:bg-slate-800 shadow-2xl border-2 border-blue-200 dark:border-blue-800"
                      : "bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-lg"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader className="text-center pb-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</CardTitle>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">{plan.description}</p>
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 ml-2">/{isYearly ? "year" : "month"}</span>
                      </div>
                      {isYearly && plan.monthlyPrice > 0 && (
                        <p className="text-sm text-green-600 mt-2">
                          Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full py-3 text-lg font-semibold ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                      }`}
                    >
                      {plan.name === "Free" ? "Get Started Free" : `Choose ${plan.name}`}
                    </Button>

                    {plan.name === "Free" && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">No credit card required</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Compare
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Features
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              See what's included in each plan to make the best choice for your fitness journey
            </p>
          </motion.div>

          <div className="space-y-8">
            {comparisonFeatures.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="bg-white dark:bg-slate-800 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200 dark:border-slate-700">
                            <th className="text-left py-3 text-slate-900 dark:text-white font-medium">Feature</th>
                            <th className="text-center py-3 text-slate-900 dark:text-white font-medium">Free</th>
                            <th className="text-center py-3 text-slate-900 dark:text-white font-medium">Pro</th>
                            <th className="text-center py-3 text-slate-900 dark:text-white font-medium">Elite</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.features.map((feature, featureIndex) => (
                            <tr key={featureIndex} className="border-b border-slate-100 dark:border-slate-800">
                              <td className="py-4 text-slate-700 dark:text-slate-300">{feature.name}</td>
                              <td className="py-4 text-center">
                                {typeof feature.free === "boolean" ? (
                                  feature.free ? (
                                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                                  ) : (
                                    <span className="text-slate-400">—</span>
                                  )
                                ) : (
                                  <span className="text-slate-700 dark:text-slate-300">{feature.free}</span>
                                )}
                              </td>
                              <td className="py-4 text-center">
                                {typeof feature.pro === "boolean" ? (
                                  feature.pro ? (
                                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                                  ) : (
                                    <span className="text-slate-400">—</span>
                                  )
                                ) : (
                                  <span className="text-slate-700 dark:text-slate-300">{feature.pro}</span>
                                )}
                              </td>
                              <td className="py-4 text-center">
                                {typeof feature.elite === "boolean" ? (
                                  feature.elite ? (
                                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                                  ) : (
                                    <span className="text-slate-400">—</span>
                                  )
                                ) : (
                                  <span className="text-slate-700 dark:text-slate-300">{feature.elite}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
              },
              {
                question: "Is there a free trial for paid plans?",
                answer:
                  "Yes! All paid plans come with a 14-day free trial. You can cancel anytime during the trial period without being charged.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our encrypted payment system.",
              },
              {
                question: "Can I use the app offline?",
                answer:
                  "Pro and Elite subscribers can download workouts for offline use. The free plan requires an internet connection for most features.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
