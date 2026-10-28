export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.machitechinsights.com";

export const defaultSeo = {
  defaultTitle: "MachiTech Insights",
  titleTemplate: "%s | MachiTech Insights",
  description:
    "Conteúdo estratégico sobre tecnologia, inteligência artificial, produtos digitais e marketing para marcas que querem crescer com clareza.",
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "MachiTech Insights",
    title: "MachiTech Insights",
    description:
      "Conteúdo estratégico sobre tecnologia, inteligência artificial, produtos digitais e marketing para marcas que querem crescer com clareza.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "MachiTech Insights",
      },
    ],
  },
  twitter: {
    handle: "@machitechinsights",
    site: "@machitechinsights",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "theme-color", content: "#7C6FEC" },
    { name: "robots", content: "index, follow" },
  ],
} as const;

export function buildCanonical(pathname: string) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${normalizedPath}`;
}

export function stripHtml(html?: string | null) {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
