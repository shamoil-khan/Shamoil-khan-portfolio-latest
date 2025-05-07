"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import config from "@/config"

export default function Hero({ scrollToSection }) {
  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Create the sequence for typing animation
  const typeAnimationSequence = []

  // Build the sequence with each role followed by a pause
  config.heroRoles.forEach((role, index) => {
    typeAnimationSequence.push(role) // Add the role text
    typeAnimationSequence.push(1500) // Pause for 1.5 seconds

    // Don't add delete animation for the last item
    if (index !== config.heroRoles.length - 1) {
      typeAnimationSequence.push("") // Delete the text
      typeAnimationSequence.push(500) // Pause for 0.5 seconds before next role
    }
  })

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            className="text-sm uppercase tracking-wider text-primary font-medium mb-4"
            variants={itemVariants}
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" variants={itemVariants}>
            Hi, I'm <span className="text-primary">{config.name}</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground h-8"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={typeAnimationSequence}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              cursor={true}
              className="text-primary"
            />
          </motion.div>

          <motion.p className="text-lg mb-8 max-w-lg text-center text-muted-foreground" variants={itemVariants}>
            {config.description}
          </motion.p>

          <motion.div className="flex flex-wrap gap-6 md:gap-8 justify-center w-full" variants={itemVariants}>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group py-2 px-6 min-w-[160px] inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="py-2 px-6 min-w-[160px] inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-1 h-2 bg-primary rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
