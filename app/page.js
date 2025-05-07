"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Toaster } from "react-hot-toast"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  // Create refs for each section
  const sectionRefs = {
    home: useRef(null),
    services: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  }

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        const headerOffset = 80 // Adjust based on your header height
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div ref={sectionRefs.home} id="home">
            <Hero scrollToSection={scrollToSection} />
          </div>

          <div ref={sectionRefs.services} id="services">
            <Services />
          </div>

          <div ref={sectionRefs.skills} id="skills">
            <Skills />
          </div>

          <div ref={sectionRefs.projects} id="projects">
            <Projects />
          </div>

          <div ref={sectionRefs.education} id="education">
            <Education />
          </div>

          <div ref={sectionRefs.contact} id="contact">
            <Contact />
          </div>
        </motion.div>
      </main>
      <Footer scrollToSection={scrollToSection} />
      <Toaster position="top-right" />
    </div>
  )
}
