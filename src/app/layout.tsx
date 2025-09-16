import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammadkashan.dev'),
  title: {
    default: 'Muhammad Kashan - National Gold Medalist Full Stack Developer',
    template: '%s | Muhammad Kashan'
  },
  description: '16-year-old National Gold Medalist Full Stack Web Developer with expertise in MERN stack. 50+ projects delivered, Harvard CS50 certified. Available for freelance work worldwide.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'React Developer',
    'Node.js Developer',
    'MongoDB',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Web Developer',
    'Freelancer',
    'National Gold Medalist',
    'Harvard CS50',
    'Pakistan Developer',
    'Lahore',
    'Frontend Developer',
    'Backend Developer',
    'API Development',
    'Database Design',
    'Responsive Design'
  ],
  authors: [{ name: 'Muhammad Kashan', url: 'https://muhammadkashan.dev' }],
  creator: 'Muhammad Kashan',
  publisher: 'Muhammad Kashan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadkashan.dev',
    title: 'Muhammad Kashan - National Gold Medalist Full Stack Developer',
    description: '16-year-old National Gold Medalist Full Stack Web Developer with expertise in MERN stack. 50+ projects delivered, Harvard CS50 certified.',
    siteName: 'Muhammad Kashan Portfolio',
    images: [
      {
        url: '/images/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Kashan - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Kashan - National Gold Medalist Full Stack Developer',
    description: '16-year-old National Gold Medalist Full Stack Web Developer with expertise in MERN stack.',
    creator: '@muhammadkashan',
    images: ['/images/profile.jpeg'],
  },
  alternates: {
    canonical: 'https://muhammadkashan.dev',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}