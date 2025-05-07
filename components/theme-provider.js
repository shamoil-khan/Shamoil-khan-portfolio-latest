"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Load theme from localStorage on mount or set dark as default
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Force a re-render after mounting to ensure theme is applied correctly
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        document.documentElement.classList.toggle("dark", savedTheme === "dark")
      } else {
        // If no saved theme, use dark mode as default
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      }

      // Force a re-render after a short delay to ensure styles are applied
      const timer = setTimeout(() => {
        setMounted(false)
        setTimeout(() => setMounted(true), 10)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider {...props} defaultTheme="dark">
      {children}
    </NextThemesProvider>
  )
}
