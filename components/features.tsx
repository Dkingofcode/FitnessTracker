"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Target, TrendingUp, Users, Smartphone, Brain, Heart, Trophy, Clock } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Smart Workout Tracking",
    description: "AI-powered exercise recognition automatically logs your workouts with precision and accuracy.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Set custom fitness targets and receive tailored recommendations based on your progress.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Detailed insights and trends help you understand your fitness journey and optimize performance.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Track vital metrics like heart rate, sleep quality, and recovery to maintain optimal health.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "AI Personal Trainer",
    description: "Get intelligent workout suggestions and form corrections powered by machine learning.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Social Challenges",
    description: "Connect with friends, join challenges, and stay motivated through community support.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Sync",
    description: "Seamlessly sync across all your devices and wearables for a unified fitness experience.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Unlock badges, reach milestones, and celebrate your fitness victories along the way.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Adaptive workout plans that fit your schedule and adjust to your lifestyle changes.",
    color: "from-pink-500 to-rose-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Reach Your Goals
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our comprehensive fitness platform combines cutting-edge technology with proven methodologies to deliver
            results that matter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
