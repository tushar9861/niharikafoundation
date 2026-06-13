import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StickyNavbar } from '@/components/StickyNavbar'
import { FloatingActionButtons } from '@/components/FloatingActionButtons'
import { StructuredData } from '@/components/StructuredData'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Niharika Foundation - Empowering Through Education',
  description: 'Niharika Foundation is an Educational Charitable Trust dedicated to empowering underprivileged students through quality education, scholarships, and mentorship in Odisha.',
  keywords: 'NGO, Education, Scholarship, Odisha, Charity, Foundation, Students',
  openGraph: {
    title: 'Niharika Foundation - Education for All',
    description: 'Empowering futures through quality education and community development',
    type: 'website',
    url: 'https://niharikafoundation.org',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased pt-20">
        <StickyNavbar />
        <main>
          {children}
        </main>
        <FloatingActionButtons />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
