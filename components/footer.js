"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Heart,
  Code,
} from "lucide-react";
import config from "@/config";

export default function Footer({ scrollToSection }) {
  // const [emailInput, setEmailInput] = useState("")
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [subscribed, setSubscribed] = useState(false)

  const year = new Date().getFullYear();

  // const handleSubscribe = (e) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false)
  //     setSubscribed(true)
  //     setEmailInput("")

  //     // Reset success message after 3 seconds
  //     setTimeout(() => {
  //       setSubscribed(false)
  //     }, 3000)
  //   }, 1000)
  // }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: config.socialLinks.github,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: config.socialLinks.linkedin,
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: `mailto:${config.contactEmail}`,
    },
    {
      name: "Website",
      icon: <ExternalLink className="h-5 w-5" />,
      url: config.socialLinks.website,
    },
  ];

  return (
    <footer className="border-t border-border bg-gradient-to-b from-muted/30 to-background">
      {/* Main Footer Content */}
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{config.name}</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              {config.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Get in touch
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Quick Links
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="mr-1 h-4 w-4 text-primary/70" />
                    {link.name}
                  </button>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Connect
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {socialLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="bg-muted/50 p-2 rounded-md mr-3 text-primary">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Newsletter - Commented out for future implementation
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Stay Updated
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Subscribe to receive updates on new projects and articles.
            </motion.p>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubscribe}
              className="mt-2 space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || subscribed}
                  className={`mt-2 w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-white font-medium transition-colors ${
                    isSubmitting || subscribed ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : subscribed ? (
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Subscribed!
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </motion.form>
          </div>
          */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {year} | {config.name} | All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
