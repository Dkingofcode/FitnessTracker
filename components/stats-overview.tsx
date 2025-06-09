"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Users",
    description: "Join our growing community",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    value: "2M+",
    label: "Workouts Completed",
    description: "Collective fitness achievements",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Users reaching their goals",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    value: "4.9★",
    label: "App Store Rating",
    description: "Loved by fitness enthusiasts",
    color: "from-orange-500 to-red-500",
  },
]

export default function StatsOverview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
