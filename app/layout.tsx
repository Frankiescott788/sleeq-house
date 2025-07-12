import type {Metadata, Viewport} from 'next'
import {Inter} from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import TanstackProvider from "@/providers/tanstack";
import HeroUI from "@/providers/heroui";

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
  title: 'SleeqHouse – Elevate Your Living Space',
  description: 'SleeqHouse delivers premium, modern interior design solutions—sleek spaces tailored to how you live.',
  applicationName: 'SleeqHouse',
  keywords: ['interior design', 'modern home', 'premium interiors', 'sleek design'],
  authors: [{name: 'SleeqHouse Team'}],
  robots: 'index, follow',
  openGraph: {
    title: 'SleeqHouse – Elevate Your Living Space',
    description: 'Premium interior design by SleeqHouse—where modern style meets everyday living.',
    url: 'https://sleeq-house.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://sleeq-house.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sleek modern interior living room by SleeqHouse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SleeqHouse – Premium Interior Design',
    description: 'Discover modern, stylish interiors by SleeqHouse.',
    images: ['https://sleeq-house.vercel.app/og-image.png'],
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
    <body className={inter.className}>
    <TanstackProvider>
      <HeroUI>
        <Navbar/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </HeroUI>
    </TanstackProvider>
    </body>
    </html>
  )
}
