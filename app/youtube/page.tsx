'use client'
import Link from 'next/link'

export default function Page() {
  const formHtml =
    process.env.NEXT_PUBLIC_FORM_EMBED_YOUTUBE ??
    '<p style="color:#aeb4bf">Form missing. Add NEXT_PUBLIC_FORM_EMBED_YOUTUBE in Vercel.</p>'

  return (
    <div className="container">
      <header className="header" role="banner">
        <Link className="brand" href="/"><img src="/logo-512.png" alt="ClipForge" width={32} height={32} /><span>ClipForge</span></Link>
        <Link className="btn" href="/">← Back</Link>
      </header>

      <main className="hero" role="main">
        <h1>For YouTubers</h1>
        <p>Auto-cut your long videos into Shorts with brand-ready captions, end-cards, and posting copy.</p>

        <div style={{display:'grid',gap:12,margin:'18px 0 26px'}}>
          <div className="btn" aria-disabled>Hook detector + chaptering</div>
          <div className="btn" aria-disabled>Auto subtitles & styling</div>
          <div className="btn" aria-disabled>Title/description/hashtags</div>
        </div>

        <h2 style={{margin:'18px 0 10px',fontSize:18,opacity:.85}}>Join the beta</h2>
        <div dangerouslySetInnerHTML={{ __html: formHtml }} />

        <footer className="footer">No spam. Unsubscribe anytime.</footer>
      </main>
    </div>
  )
}
