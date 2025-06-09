"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, TrendingUp, Zap } from "lucide-react"

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

const statsData = [
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: TrendingUp, value: "2M+", label: "Workouts Completed" },
  { icon: Star, value: "4.9", label: "App Rating" },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                #1 Fitness Tracker App
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                Fitness Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Track workouts, monitor progress, and achieve your fitness goals with our AI-powered personal trainer.
              Join thousands who've transformed their lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:text-blue-500 transition-colors" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <motion.div animate={floatingAnimation} className="relative z-10">
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden">
                  {/* Mock App Interface */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                      <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-600">Today's Steps</span>
                          <span className="text-xs text-green-600">+12%</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">8,547</div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-600">Calories Burned</span>
                          <span className="text-xs text-orange-600">+8%</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">2,847</div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-3/5"></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-sm text-slate-600 mb-2">Active Minutes</div>
                        <div className="text-2xl font-bold text-slate-900">127</div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
