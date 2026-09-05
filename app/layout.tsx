import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bungee, Plus_Jakarta_Sans } from 'next/font/google'
import { SiteLoader } from '@/components/site-loader'
import './globals.css'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Kurara 27 — Cosplay & Etkinlik Organizasyonu',
  description:
    'Kurara 27, sokak sanatı enerjisiyle harmanlanmış premium cosplay ve etkinlik organizasyonu. Ödüllü yarışmalar, K-Pop performansları ve oyun stantları seni bekliyor.',
  generator: 'v0.app',
  icons: {
    icon: '/images/kuaraminilogogo.png',
    shortcut: '/images/kuaraminilogogo.png',
    apple: '/images/kuaraminilogogo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${bungee.variable} ${jakarta.variable} antialiased`}>
        <SiteLoader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
