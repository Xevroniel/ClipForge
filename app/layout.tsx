// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

export const metadata: Metadata = {
  title: 'ClipForge — The Best Video Repurposing Tool in the Internet',
  description: 'Turn one long video into 10 shorts in minutes—titles, captions, and posts included.',
}

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
