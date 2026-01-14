import type { Metadata } from "next";
import viTranslation from "./locales/vi.json";
import enTranslation from "./locales/en.json";

const translations = {
  vi: viTranslation,
  en: enTranslation,
};

export function getMetadata(locale: string = "vi"): Metadata {
  const lang = locale === "en" ? "en" : "vi";
  const t = translations[lang].metadata;

  return {
    title: {
      default: t.title,
      template: "%s | AVARIS",
    },
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "AVARIS" }],
    creator: "AVARIS",
    publisher: "AVARIS",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://avariswater.com"),
    alternates: {
      canonical: "/",
      languages: {
        vi: "/",
        en: "/",
      },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: "https://avariswater.com",
      siteName: "AVARIS",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.twitterDescription,
      images: ["/og-image.jpg"],
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
    verification: {
      google: "your-google-verification-code",
    },
  };
}
