"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Target, Users, Award, Linkedin, Twitter, Mail, MapPin, TrendingUp, Globe, Shield } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former Olympic athlete with 15+ years in fitness technology. Passionate about making fitness accessible to everyone.",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", email: "sarah@fittracker.com" },
  },
  {
    name: "Dr. Michael Chen",
    role: "Chief Medical Officer",
    bio: "Sports medicine physician and researcher specializing in exercise physiology and injury prevention.",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", email: "michael@fittracker.com" },
  },
  {
    name: "Alex Rodriguez",
    role: "Head of Product",
    bio: "Product designer with expertise in user experience and behavioral psychology in fitness applications.",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", email: "alex@fittracker.com" },
  },
  {
    name: "Emily Watson",
    role: "Lead AI Engineer",
    bio: "Machine learning expert focused on developing intelligent fitness coaching and personalization algorithms.",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", email: "emily@fittracker.com" },
  },
]

const milestones = [
  { year: "2020", title: "Company Founded", description: "Started with a vision to democratize fitness coaching" },
  { year: "2021", title: "First 10K Users", description: "Reached our first major user milestone" },
  { year: "2022", title: "AI Integration", description: "Launched our revolutionary AI personal trainer" },
  { year: "2023", title: "50K+ Community", description: "Built a thriving fitness community" },
  { year: "2024", title: "Global Expansion", description: "Expanded to serve users in 50+ countries" },
]

const values = [
  {
    icon: Heart,
    title: "Health First",
    description: "We prioritize user health and safety above all else, ensuring every feature promotes wellbeing.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Fitness is for everyone. We create an inclusive environment where all fitness levels are welcomed.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "We help users set realistic goals and provide the tools and motivation to achieve them.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your health data is sacred. We maintain the highest standards of privacy and data protection.",
    color: "from-purple-500 to-indigo-500",
  },
]

const stats = [
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: TrendingUp, value: "2M+", label: "Workouts Completed" },
  { icon: Award, value: "4.9★", label: "App Store Rating" },
]

export default function AboutPage() {
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
              Transforming Lives Through
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Intelligent Fitness
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              We're on a mission to make personalized fitness coaching accessible to everyone, everywhere. Our
              AI-powered platform adapts to your unique needs, goals, and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                    <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Mission
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                To democratize access to personalized fitness coaching by leveraging artificial intelligence and
                cutting-edge technology. We believe everyone deserves a personal trainer, regardless of their budget,
                location, or fitness level.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Our platform adapts to each user's unique needs, providing customized workout plans, real-time feedback,
                and continuous motivation to help achieve lasting fitness transformations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden">
                <img
                  src="/alexander-red-d3bYmnZ0ank-unsplash.jpg"
                  alt="Team working"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Values
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Journey
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              From a simple idea to transforming lives worldwide
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="bg-white dark:bg-slate-800 shadow-lg">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Meet Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Team</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Passionate experts dedicated to revolutionizing the fitness industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex justify-center space-x-3">
                      <Button size="icon" variant="ghost" className="w-8 h-8">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-8 h-8">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-8 h-8">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-purple-600/90" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your fitness journey or join our team, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Our Office
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>

            <div className="mt-8 text-blue-100">
              <p className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA • New York, NY • Remote Worldwide</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
