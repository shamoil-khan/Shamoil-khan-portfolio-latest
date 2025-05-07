"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import config from "@/config"

export default function Header({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll event to change header style and detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect which section is in view
      const sections = ["home", "services", "skills", "projects", "education", "contact"]
      const sectionElements = sections.map((id) => document.getElementById(id))

      const currentSection = sectionElements.reduce((acc, section) => {
        if (!section) return acc

        const rect = section.getBoundingClientRect()
        const offset = 100 // Adjust based on your header height

        if (rect.top <= offset && rect.bottom > offset) {
          return section.id
        }
        return acc
      }, "home")

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleNavClick = (sectionId) => {
    setIsOpen(false)

    // Add a small delay to ensure the menu closes before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        scrollToSection(sectionId)
      }
    }, 100)
  }

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold hover:text-primary transition-colors relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {config.name.split(" ")[0]}
          <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
            animate={{ width: activeSection === "home" ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium hover:text-primary transition-colors relative ${
                activeSection === link.id ? "text-primary" : ""
              }`}
            >
              {link.label}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                animate={{ width: activeSection === link.id ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t fixed left-0 right-0 top-[60px] z-50 shadow-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium py-3 hover:text-primary transition-colors text-left ${
                    activeSection === link.id ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
