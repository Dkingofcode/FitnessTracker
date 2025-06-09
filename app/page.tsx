"use client"

import { motion } from "framer-motion"
import HeroSection from "../components/hero-section"
import Features from "../components/features"
import StatsOverview from "../components/stats-overview"
import WorkoutPreview from "../components/workout-planner"
import Testimonials from "../components/testimonials"
import CallToAction from "../components/call-to-action"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const sectionVariants = {
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

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <motion.section variants={sectionVariants}>
        <HeroSection />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <StatsOverview />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <Features />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <WorkoutPreview />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <Testimonials />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <CallToAction />
      </motion.section>
    </motion.div>
  )
}
