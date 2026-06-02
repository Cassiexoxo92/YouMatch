import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'YouMatch — Finde deinen YouTube-Kanal',
  description:
    'Beantworte 4 Fragen zu deiner aktuellen Stimmung und entdecke den YouTube-Kanal, der perfekt zu dir passt. Kein Account, kein Tracking — nur dein nächster Lieblingskanal.',
  keywords: [
    'YouTube Kanal finden',
    'YouTube Empfehlung',
    'Deutschsprachige YouTuber',
    'YouMatch',
    'YouTube Discovery',
    'YouTube Quiz',
  ],
  authors: [{ name: 'YouMatch' }],
  creator: 'YouMatch',
  metadataBase: new URL('https://youmatch.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://youmatch.vercel.app',
    title: 'YouMatch — Finde deinen YouTube-Kanal',
    description: '4 Fragen. Dein perfekter YouTube-Match. Jetzt entdecken.',
    siteName: 'YouMatch',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouMatch — Finde deinen YouTube-Kanal',
    description: '4 Fragen. Dein perfekter YouTube-Match.',
  },
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
}

export const viewport: Viewport = {
  themeColor: '#0A0A0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="font-sans bg-bg text-white antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
