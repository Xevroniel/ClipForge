// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="cf-bg font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
