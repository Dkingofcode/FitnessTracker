"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Brain,
  Heart,
  Target,
  Users,
  Trophy,
  Zap,
  Shield,
  Globe,
  Camera,
  Headphones,
  Calendar,
  BarChart3,
} from "lucide-react"

const featureCategories = {
  tracking: [
    {
      icon: Activity,
      title: "Smart Exercise Recognition",
      description: "AI automatically detects and logs your workouts with 95% accuracy across 100+ exercises.",
      benefits: ["Auto-detection", "Form analysis", "Rep counting", "Calorie estimation"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Advanced Health Monitoring",
      description: "Track heart rate, sleep quality, stress levels, and recovery metrics in real-time.",
      benefits: ["24/7 monitoring", "Health insights", "Recovery tracking", "Stress analysis"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Detailed progress reports with trends, predictions, and personalized recommendations.",
      benefits: ["Progress trends", "Performance predictions", "Custom reports", "Goal tracking"],
      color: "from-green-500 to-emerald-500",
    },
  ],
  training: [
    {
      icon: Brain,
      title: "AI Personal Trainer",
      description: "Get personalized workout plans and real-time coaching powered by machine learning.",
      benefits: ["Custom workouts", "Form corrections", "Adaptive difficulty", "Voice coaching"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Target,
      title: "Goal-Based Programs",
      description: "Structured programs designed to help you achieve specific fitness objectives.",
      benefits: ["Weight loss", "Muscle building", "Endurance training", "Flexibility"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Adaptive workout scheduling that fits your lifestyle and optimizes recovery.",
      benefits: ["Flexible timing", "Recovery optimization", "Habit building", "Reminder system"],
      color: "from-teal-500 to-cyan-500",
    },
  ],
  social: [
    {
      icon: Users,
      title: "Community Challenges",
      description: "Join group challenges, compete with friends, and stay motivated together.",
      benefits: ["Group challenges", "Leaderboards", "Social sharing", "Motivation system"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Unlock badges, reach milestones, and celebrate your fitness victories.",
      benefits: ["Progress badges", "Milestone rewards", "Streak tracking", "Achievement sharing"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Headphones,
      title: "Audio Coaching",
      description: "Professional trainers guide you through workouts with motivational audio coaching.",
      benefits: ["Expert guidance", "Motivational cues", "Technique tips", "Music integration"],
      color: "from-indigo-500 to-purple-500",
    },
  ],
}

const premiumFeatures = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade encryption and privacy protection for your health data.",
  },
  {
    icon: Globe,
    title: "Global Sync",
    description: "Access your data anywhere with cloud synchronization across all devices.",
  },
  {
    icon: Camera,
    title: "Form Analysis",
    description: "AI-powered video analysis provides real-time feedback on your exercise form.",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Get immediate feedback and recommendations based on your performance data.",
  },
]

export default function FeaturesPage() {
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
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-6 py-2 text-lg">
              <Zap className="w-5 h-5 mr-2" />
              Powered by AI
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Features That
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Transform Fitness
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover the comprehensive suite of tools designed to revolutionize your fitness journey with cutting-edge
              technology and personalized experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="tracking" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <TabsTrigger value="tracking" className="text-lg py-4">
                Smart Tracking
              </TabsTrigger>
              <TabsTrigger value="training" className="text-lg py-4">
                AI Training
              </TabsTrigger>
              <TabsTrigger value="social" className="text-lg py-4">
                Social & Motivation
              </TabsTrigger>
            </TabsList>

            {Object.entries(featureCategories).map(([category, features]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <CardHeader>
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <feature.icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-900 dark:text-white">Key Benefits:</h4>
                            <ul className="space-y-1">
                              {feature.benefits.map((benefit, benefitIndex) => (
                                <li
                                  key={benefitIndex}
                                  className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Premium Features */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Premium
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Features
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Unlock advanced capabilities designed for serious fitness enthusiasts and professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold"
            >
              Upgrade to Premium
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
