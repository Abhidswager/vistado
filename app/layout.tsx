import type { Metadata, Viewport } from 'next';
import { profile } from '@/lib/content';
import './globals.css';

const { seo, name, brand, role } = profile;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || seo.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${brand}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name }],
  creator: name,
  publisher: brand,
  applicationName: brand,
  alternates: { canonical: '/' },
  category: 'Design & Web Development',
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: brand,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${name} — ${role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F1EC',
};

/** Structured data (JSON-LD) — Person + ProfessionalService for rich results. */
function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name,
        jobTitle: role,
        url: siteUrl,
        image: `${siteUrl}${profile.heroImage}`,
        worksFor: { '@type': 'Organization', name: brand },
        sameAs: [
          profile.social.linkedin,
          profile.social.instagram,
          profile.social.behance,
          profile.social.facebook,
        ],
      },
      {
        '@type': 'ProfessionalService',
        name: brand,
        description: seo.description,
        url: siteUrl,
        image: `${siteUrl}${seo.ogImage}`,
        email: profile.contact.email,
        founder: { '@type': 'Person', name },
        areaServed: profile.contact.location,
        address: { '@type': 'PostalAddress', addressCountry: 'IN' },
        priceRange: '₹₹',
        serviceType: [
          'Logo Design',
          'Social Media Design',
          'Shopify Website Design',
          'WordPress Website Design',
          'Banner & Advertising Design',
          'Packaging Design',
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
