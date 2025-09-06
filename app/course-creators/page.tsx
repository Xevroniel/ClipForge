'use client'
import Link from 'next/link'

export default function Page() {
  const formHtml =
    process.env.NEXT_PUBLIC_FORM_EMBED_COURSE_CREATORS ??
    '<p style="color:#aeb4bf">Form missing. Add NEXT_PUBLIC_FORM_EMBED_COURSE_CREATORS in Vercel.</p>'

  return (
    <div className="container">
      <header className="header" role="banner">
        <Link className="brand" href="/"><img src="/logo-512.png" alt="ClipForge" width={32} height={32} /><span>ClipForge</span></Link>
        <Link className="btn" href="/">← Back</Link>
      </header>

      <main className="hero" role="main">
        <h1>For Course Creators</h1>
        <p>Convert modules and lessons into promo clips, carousels, and email teasers that sell.</p>

        <div style={{display:'grid',gap:12,margin:'18px 0 26px'}}>
          <div className="btn" aria-disabled>Lesson highlight extraction</div>
          <div className="btn" aria-disabled>CTA overlays to your funnel</div>
          <div className="btn" aria-disabled>Carousel + email draft</div>
        </div>

        <h2 style={{margin:'18px 0 10px',fontSize:18,opacity:.85}}>Join the beta</h2>
        <div dangerouslySetInnerHTML={{ __html: formHtml }} />

        <footer className="footer">No spam. Unsubscribe anytime.</footer>
      </main>
    </div>
  )
}
