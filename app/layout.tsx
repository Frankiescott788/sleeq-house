import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Sleekhouse - Premium Web Solutions',
  description: 'Modern, responsive web solutions crafted with precision and attention to detail.',
  keywords: ['web development', 'design', 'modern', 'responsive'],
  authors: [{ name: 'Sleekhouse Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Sleekhouse - Premium Web Solutions',
    description: 'Modern, responsive web solutions crafted with precision and attention to detail.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sleekhouse - Premium Web Solutions',
    description: 'Modern, responsive web solutions crafted with precision and attention to detail.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} `}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}