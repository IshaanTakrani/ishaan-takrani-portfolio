import type { Metadata } from 'next'
import { Geist, Geist_Mono, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: '700',
})

const BASE_URL = 'https://ishaantakrani.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Ishaan Takrani – Software Developer',
  description:
    'Software Developer, Co-founder, and CS student at Toronto Metropolitan University. Building products at the intersection of AI and developer tooling.',
  keywords: [
    'Ishaan Takrani',
    'Software Developer',
    'Full Stack Developer',
    'Toronto',
    'Toronto Metropolitan University',
    'TMU',
    'React',
    'Next.js',
    'TypeScript',
    'AI',
    'Founder',
  ],
  authors: [{ name: 'Ishaan Takrani', url: BASE_URL }],
  creator: 'Ishaan Takrani',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ishaan Takrani – Software Developer',
    description:
      'Software Developer, Co-founder, and CS student at Toronto Metropolitan University. Building products at the intersection of AI and developer tooling.',
    url: BASE_URL,
    siteName: 'Ishaan Takrani',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ishaan Takrani – Software Developer',
    description:
      'Software Developer, Co-founder, and CS student at Toronto Metropolitan University.',
    creator: '@ishaantakrani',
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Ishaan Takrani',
      url: BASE_URL,
      email: 'ishaantakrani@gmail.com',
      jobTitle: 'Software Developer',
      description:
        'Software Developer, Co-founder, and CS student at Toronto Metropolitan University.',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Toronto Metropolitan University',
        url: 'https://www.torontomu.ca',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toronto',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
      sameAs: [
        'https://github.com/IshaanTakrani',
        'https://linkedin.com/in/ishaan-takrani',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Ishaan Takrani',
      description: 'Portfolio of Ishaan Takrani – Software Developer, Co-founder, Educator.',
      author: { '@id': `${BASE_URL}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
