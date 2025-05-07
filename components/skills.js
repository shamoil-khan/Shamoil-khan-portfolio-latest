"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Server, Database, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Skill categories with icons
const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "REST APIs", level: 80 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 70 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    name: "Design & Tools",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: "Figma", level: 70 },
      { name: "Git", level: 80 },
      { name: "Responsive Design", level: 85 },
      { name: "UI/UX", level: 75 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState("Frontend")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Get the active category data
  const activeCategoryData = skillCategories.find((category) => category.name === activeCategory)

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary font-medium mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            MY EXPERTISE
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
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
            Here are the technologies I specialize in.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <Card className="border border-border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary">{activeCategoryData?.icon}</div>
                <h3 className="text-2xl font-bold">{activeCategoryData?.name} Skills</h3>
              </div>

              <div className="grid gap-6">
                {activeCategoryData?.skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          {index + 1}
                        </Badge>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skill Badges */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-3 text-muted-foreground">OTHER SKILLS</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories
                    .filter((category) => category.name !== activeCategory)
                    .flatMap((category) => category.skills)
                    .slice(0, 8)
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="py-1.5">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
