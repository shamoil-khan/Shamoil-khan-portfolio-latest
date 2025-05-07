"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ChevronDown, ChevronUp, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import config from "@/config"
import {
  Code,
  Server,
  Database,
  Palette,
  Globe,
  FileCode,
  Cpu,
  Layers,
  Smartphone,
  Zap,
  CheckCircle,
  Clock,
  AlertCircle,
  Flame,
  Cloud,
  Sparkles,
  HardDrive,
  Key,
} from "lucide-react"

// Technology icons mapping
// Replace the techIcons mapping with proper Lucide components
const techIcons = {
  React: <Code className="h-3 w-3" />,
  "Next.js": <Zap className="h-3 w-3" />,
  Node: <Server className="h-3 w-3" />,
  "Node.js": <Server className="h-3 w-3" />,
  MongoDB: <Database className="h-3 w-3" />,
  Express: <Zap className="h-3 w-3" />,
  JavaScript: <FileCode className="h-3 w-3" />,
  TypeScript: <FileCode className="h-3 w-3" />,
  HTML: <Globe className="h-3 w-3" />,
  CSS: <Palette className="h-3 w-3" />,
  Tailwind: <Palette className="h-3 w-3" />,
  Firebase: <Flame className="h-3 w-3" />,
  API: <Cloud className="h-3 w-3" />,
  "API Integration": <Cloud className="h-3 w-3" />,
  Authentication: <Key className="h-3 w-3" />,
  "Responsive Design": <Smartphone className="h-3 w-3" />,
  "3D Effects": <Cpu className="h-3 w-3" />,
  "DOM Manipulation": <Layers className="h-3 w-3" />,
  "Parallax Effects": <Sparkles className="h-3 w-3" />,
  Animations: <Sparkles className="h-3 w-3" />,
  "Chrome API": <Globe className="h-3 w-3" />,
  "Local Storage": <HardDrive className="h-3 w-3" />,
  Firestore: <Flame className="h-3 w-3" />,
  "Unsplash API": <Globe className="h-3 w-3" />,
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [showAll, setShowAll] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Initial number of projects to display
  const initialProjectCount = 4

  // Get all projects from config file
  const allProjects = config.projectsData

  // Show only initial count or all projects based on state
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, initialProjectCount)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)

    // Scroll back to projects section if collapsing
    if (showAll) {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Badge color mapping
  const getBadgeColor = (badgeText) => {
    switch (badgeText) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "In Development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "Pending":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary font-medium mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            MY WORK
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here are some of the projects I've worked on. Check them out!
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={showAll && index >= initialProjectCount ? { opacity: 0, y: 20 } : undefined}
                animate={showAll && index >= initialProjectCount ? { opacity: 1, y: 0 } : undefined}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                layout
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-card rounded-xl overflow-hidden border border-border/50 shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/20 h-full flex flex-col p-5">
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getBadgeColor(project.badge)}`}
                    >
                      {project.badge === "Completed" ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : project.badge === "In Development" ? (
                        <Clock className="h-3 w-3" />
                      ) : (
                        <AlertCircle className="h-3 w-3" />
                      )}
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Image - With 16:9 aspect ratio */}
                  <div className="relative w-full overflow-hidden rounded-lg mb-4" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={project.img || "/placeholder.svg?height=160&width=320"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                      priority={index < 2} // Prioritize loading the first two images
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{project.desc}</p>

                    {/* Tech Stack with Icons - Using tags from data */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-muted/50 hover:bg-muted flex items-center gap-1 px-2 py-1"
                        >
                          {techIcons[tag] || <Code className="h-3 w-3" />}
                          <span>{tag}</span>
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center gap-2 pt-2 border-t border-border/50">
                      {/* GitHub button styled as standard button */}
                      {project.disabled ? (
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          <Lock className="h-4 w-4 mr-1" />
                          Private
                        </Button>
                      ) : project.github ? (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          <Lock className="h-4 w-4 mr-1" />
                          Private
                        </Button>
                      )}

                      {/* Live Demo button styled as standard button */}
                      <Button variant="default" size="sm" className="w-full" asChild>
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less button - only display if there are more than the initial count */}
        {allProjects.length > initialProjectCount && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={toggleShowAll}
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:border-primary py-2 px-6 min-w-[180px] inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
