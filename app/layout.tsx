import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://clipforge.app'),
  title: 'ClipForge — Turn one long video into 10 shorts',
  description:
    'ClipForge repurposes long videos and podcasts into ready-to-post Shorts, LinkedIn posts, and newsletters in minutes.',
  openGraph: {
    title: 'ClipForge — Turn one long video into 10 shorts',
    description:
      'ClipForge repurposes long videos and podcasts into ready-to-post Shorts, LinkedIn posts, and newsletters in minutes.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClipForge',
    description:
      'Turn one long video into 10 shorts — titles, captions, posts included.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main" style={{position:'absolute',left:-9999,top:-9999}}>Skip to content</a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ClipForge',
              applicationCategory: 'Multimedia',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '29', priceCurrency: 'USD' },
              url: 'https://clipforge.app',
              logo: 'https://clipforge.app/logo-512.png'
            }),
          }}
        />
      </body>
    </html>
  )
}
