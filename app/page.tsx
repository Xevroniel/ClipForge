import Link from 'next/link'

export default function Page() {
  return (
    <div className="container">
      <header className="header" role="banner">
        <Link className="brand" href="/">
          <img src="/logo-512.png" alt="ClipForge logo" width={36} height={36} />
          <span>ClipForge</span>
        </Link>
        <span className="badge" aria-label="beta">
          Beta
        </span>
      </header>

      <main id="main" className="card hero" role="main">
        <h1>What type of videos do you make?</h1>
        <p className="lead">Pick your path. We’ll tailor examples and a waitlist form to your world.</p>

        <div className="grid" role="list">
          <Link className="btn" href="/coaches" role="listitem" aria-label="B2B Coach">
            B2B Coach
          </Link>
          <Link className="btn" href="/consultants" role="listitem" aria-label="Consultant">
            Consultant
          </Link>
          <Link className="btn" href="/podcasters" role="listitem" aria-label="Podcast">
            Podcast
          </Link>
          <Link className="btn" href="/youtube" role="listitem" aria-label="YouTube Creator">
            YouTube
          </Link>
          <Link className="btn secondary" href="/course-creators" role="listitem" aria-label="Course Creator">
            Course Creator
          </Link>
        </div>

        <div className="section" style={{ fontSize: 14, color: '#cbd7f1' }}>
          Tip: Press <span className="kbd">1</span>–<span className="kbd">5</span> to jump quickly.
        </div>
      </main>

      <footer className="footer" role="contentinfo">
        © {new Date().getFullYear()} ClipForge — Made for creators. No spam, unsubscribe anytime.
      </footer>
    </div>
  )
}
