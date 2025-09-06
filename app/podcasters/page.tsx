'use client'
import Link from 'next/link'

export default function Page() {
  const formHtml =
    process.env.NEXT_PUBLIC_FORM_EMBED_PODCASTERS ??
    '<p style="color:#aeb4bf">Form missing. Add NEXT_PUBLIC_FORM_EMBED_PODCASTERS in Vercel.</p>'

  return (
    <div className="container">
      <header className="header" role="banner">
        <Link className="brand" href="/"><img src="/logo-512.png" alt="ClipForge" width={32} height={32} /><span>ClipForge</span></Link>
        <Link className="btn" href="/">← Back</Link>
      </header>

      <main className="hero" role="main">
        <h1>For Podcasters</h1>
        <p>Turn each episode into short clips, social captions, and a newsletter summary automatically.</p>

        <div style={{display:'grid',gap:12,margin:'18px 0 26px'}}>
          <div className="btn" aria-disabled>Speaker-aware clipping</div>
          <div className="btn" aria-disabled>Vertical/1:1/16:9 exports</div>
          <div className="btn" aria-disabled>Show notes + newsletter draft</div>
        </div>

        <h2 style={{margin:'18px 0 10px',fontSize:18,opacity:.85}}>Join the beta</h2>
        <div dangerouslySetInnerHTML={{ __html: formHtml }} />

        <footer className="footer">No spam. Unsubscribe anytime.</footer>
      </main>
    </div>
  )
}
