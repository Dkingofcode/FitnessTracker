"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, Flame, Users, Star, Search, Dumbbell, Heart, Zap, Target, Timer } from "lucide-react"

const workoutCategories = {
  cardio: [
    {
      title: "HIIT Cardio Blast",
      duration: "20 min",
      calories: "300-400",
      difficulty: "Intermediate",
      rating: 4.8,
      participants: 15420,
      image: "/steven-erixon-FxlYmu_To7o-unsplash.jpg",
      tags: ["Fat Burn", "No Equipment", "High Intensity"],
      description:
        "High-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness.",
    },
    {
      title: "Morning Run Routine",
      duration: "30 min",
      calories: "250-350",
      difficulty: "Beginner",
      rating: 4.6,
      participants: 8930,
      image: "/anastase-maragos-iUzgePOoGko-unsplash.jpg",
      tags: ["Outdoor", "Endurance", "Morning"],
      description: "Perfect morning routine to kickstart your day with energy and boost your metabolism.",
    },
    {
      title: "Dance Cardio Party",
      duration: "45 min",
      calories: "400-500",
      difficulty: "Intermediate",
      rating: 4.9,
      participants: 12650,
      image: "/victor-freitas-WvDYdXDzkhs-unsplash.jpg",
      tags: ["Fun", "Dance", "Full Body"],
      description: "Fun and energetic dance workout that doesn't feel like exercise while burning serious calories.",
    },
  ],
  strength: [
    {
      title: "Upper Body Power",
      duration: "40 min",
      calories: "200-300",
      difficulty: "Advanced",
      rating: 4.7,
      participants: 9840,
      image: "/gabin-vallet-J154nEkpzlQ-unsplash.jpg",
      tags: ["Weights", "Muscle Building", "Upper Body"],
      description: "Comprehensive upper body workout focusing on building strength and muscle definition.",
    },
    {
      title: "Core Crusher",
      duration: "25 min",
      calories: "150-200",
      difficulty: "Intermediate",
      rating: 4.8,
      participants: 11230,
      image: "/daniel-apodaca-WdoQio6HPVA-unsplash.jpg",
      tags: ["Core", "Abs", "No Equipment"],
      description: "Intense core workout targeting all abdominal muscles for a stronger, more defined midsection.",
    },
    {
      title: "Full Body Strength",
      duration: "50 min",
      calories: "300-400",
      difficulty: "Advanced",
      rating: 4.9,
      participants: 7650,
      image: "/gabin-vallet-J154nEkpzlQ-unsplash.jpg",
      tags: ["Full Body", "Compound", "Strength"],
      description: "Complete strength training session working all major muscle groups with compound movements.",
    },
  ],
  flexibility: [
    {
      title: "Morning Yoga Flow",
      duration: "30 min",
      calories: "100-150",
      difficulty: "Beginner",
      rating: 4.9,
      participants: 18420,
      image: "/daniel-apodaca-WdoQio6HPVA-unsplash.jpg",
      tags: ["Yoga", "Flexibility", "Mindfulness"],
      description: "Gentle yoga flow perfect for starting your day with mindfulness and improved flexibility.",
    },
    {
      title: "Deep Stretch Recovery",
      duration: "20 min",
      calories: "80-120",
      difficulty: "Beginner",
      rating: 4.7,
      participants: 6890,
      image: "/alexander-red-d3bYmnZ0ank-unsplash.jpg",
      tags: ["Recovery", "Stretching", "Relaxation"],
      description: "Restorative stretching session designed to improve flexibility and aid muscle recovery.",
    },
    {
      title: "Power Pilates",
      duration: "35 min",
      calories: "180-250",
      difficulty: "Intermediate",
      rating: 4.8,
      participants: 9340,
      image: "/anastase-maragos-FP7cfYPPUKM-unsplash.jpg",
      tags: ["Pilates", "Core", "Flexibility"],
      description: "Dynamic Pilates workout combining strength, flexibility, and core stability training.",
    },
  ],
}

const featuredWorkouts = [
  {
    title: "30-Day Transformation Challenge",
    description: "Complete fitness transformation program with progressive workouts",
    duration: "30 days",
    workouts: 45,
    image: "/anastase-maragos-iUzgePOoGko-unsplash.jpg",
    badge: "Most Popular",
  },
  {
    title: "Beginner's Complete Guide",
    description: "Perfect starting point for fitness newcomers with guided instruction",
    duration: "14 days",
    workouts: 28,
    image: "/jared-rice-NTyBbu66_SI-unsplash.jpg",
    badge: "Beginner Friendly",
  },
  {
    title: "Advanced Athletic Training",
    description: "Elite-level training for serious athletes and fitness enthusiasts",
    duration: "60 days",
    workouts: 90,
    image: "/mark-adriane-xQghSLXYD3M-unsplash.jpg",
    badge: "Expert Level",
  },
]

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("cardio")

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
              Discover Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Workout
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Choose from hundreds of expert-designed workouts tailored to your fitness level, goals, and schedule.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search workouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Programs
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Comprehensive workout programs designed by certified trainers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorkouts.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                      {program.badge}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{program.title}</CardTitle>
                    <p className="text-slate-600 dark:text-slate-300">{program.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Timer className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{program.workouts} workouts</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Start Program
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Browse by
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Category
              </span>
            </h2>
          </motion.div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <TabsTrigger value="cardio" className="text-lg py-4">
                <Heart className="w-5 h-5 mr-2" />
                Cardio
              </TabsTrigger>
              <TabsTrigger value="strength" className="text-lg py-4">
                <Dumbbell className="w-5 h-5 mr-2" />
                Strength
              </TabsTrigger>
              <TabsTrigger value="flexibility" className="text-lg py-4">
                <Zap className="w-5 h-5 mr-2" />
                Flexibility
              </TabsTrigger>
            </TabsList>

            {Object.entries(workoutCategories).map(([category, workouts]) => (
              <TabsContent key={category} value={category}>
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
                        <div className="relative">
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
                          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                            {workout.title}
                          </CardTitle>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{workout.description}</p>
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

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{workout.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-slate-600 dark:text-slate-400">
                              <Users className="w-4 h-4" />
                              <span>{workout.participants.toLocaleString()}</span>
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
