// app/page.tsx
import Link from 'next/link'
import { SocialProof, PricingTeaser } from './components/MarketingSections'

export default function Page() {
  return (
    <div className="container">
      <header className="header" role="banner">
        <Link className="brand" href="/">
          <img src="/logo-512.png" alt="ClipForge logo" width={36} height={36} />
          <span>ClipForge</span>
        </Link>
        <span
          style={{
            padding: '8px 12px',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,.08)',
            background: 'rgba(255,255,255,.02)',
            color: '#aeb4bf',
            fontSize: 13,
          }}
        >
          Beta
        </span>
      </header>

      {/* Role chooser (anchor target) */}
      <main id="roles" className="hero" role="main">
        <h1>What type of videos do you make?</h1>
        <p>Pick your path. We’ll tailor examples and a waitlist form to your world.</p>

        <div className="choices" role="navigation" aria-label="Choose your role">
          <Link className="btn" href="/coaches">B2B Coach</Link>
          <Link className="btn" href="/consultants">Consultant</Link>
          <Link className="btn" href="/podcasters">Podcast</Link>
          <Link className="btn" href="/youtube">YouTube</Link>
          <Link className="btn btn-primary" href="/course-creators">Course Creator</Link>
        </div>

        <div className="tip">Tip: Press <kbd>1</kbd>–<kbd>5</kbd> to jump quickly.</div>
      </main>

      {/* New sections below the chooser */}
      <SocialProof />
      <PricingTeaser />

      <footer className="footer">
        © 2025 ClipForge — Made for creators. No spam, unsubscribe anytime.
      </footer>
    </div>
  )
}
