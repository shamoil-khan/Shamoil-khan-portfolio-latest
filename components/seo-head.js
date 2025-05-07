import Head from "next/head";
import config from "@/config";

export default function SeoHead({
  title,
  description,
  ogImage,
  ogType,
  twitterCard,
}) {
  // Use defaults from config if not provided
  const pageTitle = title || config.meta.title;
  const pageDescription = description || config.meta.description;
  const pageOgImage = ogImage || config.meta.ogImage;
  const pageOgType = ogType || "website";
  const pageTwitterCard = twitterCard || "summary_large_image";
  const siteUrl = config.meta.siteUrl || "https://your-portfolio-url.com";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={config.meta.keywords} />
      <meta name="author" content={config.name} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageOgType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${siteUrl}${pageOgImage}`} />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={pageTwitterCard} />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={`${siteUrl}${pageOgImage}`} />
      {config.meta.twitterHandle && (
        <meta property="twitter:creator" content={config.meta.twitterHandle} />
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#111827" />
    </Head>
  );
}
