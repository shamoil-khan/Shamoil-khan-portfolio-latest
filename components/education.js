"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import config from "@/config"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary font-medium mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            MY JOURNEY
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Education & Training
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
            My academic journey and professional certifications.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          {config.education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 last:mb-0 relative ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto md:mr-auto md:pl-0"
                  : "md:pl-12 md:ml-auto md:mr-auto md:pr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-5 ${
                  index % 2 === 0 ? "md:-right-3 left-0 md:left-auto" : "md:-left-3 left-0"
                } w-6 h-6 rounded-full bg-primary z-10`}
              ></div>

              <Card className="border border-border hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
