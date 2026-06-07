// ════════════════════════════════════════════
// Root Layout — Next.js 14 App Router
// File: src/app/layout.tsx
// ════════════════════════════════════════════
import type { Metadata, Viewport } from 'next';
import {
  Cinzel,
  Cormorant_Garamond,
  IBM_Plex_Sans_Arabic,
  Inter,
} from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { getDictionary, getDirection } from '@/lib/i18n';
import { isLocale, locales, type Locale } from '@/lib/i18n/types';
import './globals.css';

// Fonts
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

// ════════════════════════════════════════════
// SEO Metadata
// ════════════════════════════════════════════
export const metadata: Metadata = {
  metadataBase: new URL('https://deebajroyal.com'),
  title: {
    default: 'ديباج رويال | مناديل فاخرة ست طبقات',
    template: '%s | Deebaj Royal',
  },
  description:
    'ديباج رويال — مناديل فاخرة بست طبقات حقيقية. نعومة القطن بلمسة الحرير. علامة سعودية للعناية اليومية الراقية. شحن مجاني فوق ٢٠٠ ريال.',
  keywords: [
    'ديباج رويال',
    'مناديل فاخرة',
    'مناديل ست طبقات',
    'مناديل سعودية',
    'deebaj royal',
    'luxury tissue saudi',
  ],
  authors: [{ name: 'مؤسسة دروب الرقمية الحديثة للخدمات التسويقية' }],
  creator: 'Deebaj Royal',
  publisher: 'Droob Alnokhbah Est.',
  alternates: {
    canonical: 'https://deebajroyal.com',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://deebajroyal.com',
    title: 'ديباج رويال | نعومة القطن بلمسة الحرير',
    description: 'مناديل فاخرة بست طبقات حقيقية. علامة سعودية للعناية اليومية.',
    siteName: 'DEEBAJ ROYAL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deebaj Royal Luxury Tissue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deebaj Royal | Softness You Remember',
    description: 'Luxury 6-ply tissue from Saudi Arabia',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#FCF8EE',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ════════════════════════════════════════════
// JSON-LD Structured Data
// ════════════════════════════════════════════
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ديباج رويال',
  alternateName: 'Deebaj Royal',
  url: 'https://deebajroyal.com',
  logo: 'https://deebajroyal.com/logo.png',
  description: 'علامة سعودية فاخرة للعناية اليومية',
  telephone: '+966580209346',
  email: 'info@deebajroyal.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SA',
    addressLocality: 'الرياض',
    addressRegion: 'Riyadh',
  },
  taxID: '302132361800003',
  identifier: [
    {
      '@type': 'PropertyValue',
      propertyID: 'CR',
      value: '1010868233',
    },
  ],
};

const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'ديباج رويال',
  image: 'https://deebajroyal.com/logo.png',
  '@id': 'https://deebajroyal.com',
  url: 'https://deebajroyal.com',
  telephone: '+966580209346',
  priceRange: 'SAR 35 - SAR 120',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'الرياض',
    addressCountry: 'SA',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
  },
};

// ════════════════════════════════════════════
// Root Layout Component
// ════════════════════════════════════════════
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} ${ibmPlexArabic.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body className="bg-cream text-ink font-arabic antialiased">
        <Header locale={locale} dictionary={dictionary.header} />
        <main>{children}</main>
        <Footer locale={locale} dictionary={dictionary.footer} />
        
        {/* Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
