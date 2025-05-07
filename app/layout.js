import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import config from "@/config";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: config.meta.title,
    template: `%s | ${config.name}`,
  },
  description: config.meta.description,
  keywords: config.meta.keywords,
  authors: [{ name: config.name }],
  creator: config.name,
  publisher: config.name,
  icons: {
    icon: config.meta.icon,
  },
  metadataBase: new URL(
    config.meta.siteUrl || "https://your-portfolio-url.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.meta.siteUrl || "https://your-portfolio-url.com",
    title: config.meta.title,
    description: config.meta.description,
    siteName: config.meta.title,
    images: [
      {
        url: config.meta.ogImage || "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${config.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.meta.title,
    description: config.meta.description,
    images: [config.meta.ogImage || "/og-image.jpg"],
    creator: config.socialLinks.twitter
      ? `@${config.socialLinks.twitter.split("/").pop()}`
      : "@username",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  category: "portfolio",
};

export default function RootLayout({ children }) {
  // Create structured data for Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.name,
    url: config.meta.siteUrl || "https://your-portfolio-url.com",
    jobTitle: config.title,
    description: config.description,
    sameAs: [
      config.socialLinks.github,
      config.socialLinks.linkedin,
      config.socialLinks.twitter,
      config.socialLinks.website,
    ].filter(Boolean),
  };

  // Create structured data for WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.meta.title,
    description: config.meta.description,
    url: config.meta.siteUrl || "https://your-portfolio-url.com",
    potentialAction: {
      "@type": "SearchAction",
      target: `${
        config.meta.siteUrl || "https://your-portfolio-url.com"
      }/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
