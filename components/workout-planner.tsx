"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Flame } from "lucide-react"

const workouts = [
  {
    title: "HIIT Cardio Blast",
    duration: "20 min",
    calories: "300-400",
    difficulty: "Intermediate",
    image: "/anastase-maragos-FP7cfYPPUKM-unsplash.jpg",
    tags: ["Cardio", "Fat Burn", "No Equipment"],
  },
  {
    title: "Strength & Power",
    duration: "45 min",
    calories: "250-350",
    difficulty: "Advanced",
    image: "/daniel-apodaca-WdoQio6HPVA-unsplash.jpg",
    tags: ["Strength", "Muscle Building", "Weights"],
  },
  {
    title: "Yoga Flow",
    duration: "30 min",
    calories: "150-200",
    difficulty: "Beginner",
    image: "/steven-erixon-FxlYmu_To7o-unsplash.jpg",
    tags: ["Flexibility", "Mindfulness", "Recovery"],
  },
]

export default function WorkoutPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Workouts
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover our most popular workout programs designed by certified trainers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={workout.image || "/placeholder.svg"}
                    alt={workout.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0"
                  >
                    <Play className="w-6 h-6 text-white" />
                  </Button>
                  <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white border-0">
                    {workout.difficulty}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{workout.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Flame className="w-4 h-4" />
                      <span>{workout.calories} cal</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {workout.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Workout
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
