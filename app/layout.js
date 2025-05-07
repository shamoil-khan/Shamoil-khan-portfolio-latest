import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import config from "@/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    images: [config.meta.ogImage],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
