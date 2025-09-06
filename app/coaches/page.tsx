'use client'
import Link from 'next/link'

export default function Page() {
  const formHtml =
    process.env.NEXT_PUBLIC_FORM_EMBED_COACHES ??
    '<p style="color:#aeb4bf">Form missing. Add NEXT_PUBLIC_FORM_EMBED_COACHES in Vercel → Settings → Environment Variables.</p>'

  return (
    <div className="container">
      <header className="header" role="banner">
        <Link className="brand" href="/"><img src="/logo-512.png" alt="ClipForge" width={32} height={32} /><span>ClipForge</span></Link>
        <Link className="btn" href="/">← Back</Link>
      </header>

      <main className="hero" role="main">
        <h1>For B2B Coaches</h1>
        <p>Turn one coaching call or webinar into Shorts, LinkedIn posts, and a client-ready recap in minutes.</p>

        <div style={{display:'grid',gap:12,margin:'18px 0 26px'}}>
          <div className="btn" aria-disabled>Auto-finds golden moments</div>
          <div className="btn" aria-disabled>Branded captions & overlays</div>
          <div className="btn" aria-disabled>LinkedIn post + newsletter summary</div>
        </div>

        <h2 style={{margin:'18px 0 10px',fontSize:18,opacity:.85}}>Join the beta</h2>
        <div dangerouslySetInnerHTML={{ __html: formHtml }} />

        <footer className="footer">No spam. Unsubscribe anytime.</footer>
      </main>
    </div>
  )
}
