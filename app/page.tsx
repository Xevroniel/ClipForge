'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div className="container">
      <header className="header" role="banner">
        <Link className="brand" href="/">
          <img src="/logo-512.png" alt="ClipForge" width={34} height={34} />
          <span>ClipForge</span>
        </Link>
        <nav>
          <div className="cta-row">
            <a className="btn btn-ghost" href="#roles">Solutions</a>
            <a className="btn btn-primary" href="#waitlist">Get Early Access</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1 className="display">Turn one long video into <em>10 shorts</em> in minutes.</h1>
        <p className="lede">
          Upload a YouTube video or podcast. ClipForge auto-finds highlights, adds captions & layouts,
          and prepares posts for YouTube Shorts, TikTok, Instagram, and LinkedIn.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#waitlist">Join the Creator Beta</a>
          <a className="btn btn-ghost" href="#roles">See role-specific pages</a>
        </div>
      </section>

      <section id="roles" className="card" aria-label="Role selector" style={{marginTop: 12}}>
        <strong>Who is this for?</strong>
        <div style={{display:'flex', gap:10, marginTop:10, flexWrap:'wrap'}}>
          <Link href="/youtube" className="btn btn-ghost">YouTubers</Link>
          <Link href="/podcasters" className="btn btn-ghost">Podcasters</Link>
          <Link href="/coaches" className="btn btn-ghost">B2B Coaches</Link>
          <Link href="/consultants" className="btn btn-ghost">Consultants</Link>
          <Link href="/course-creators" className="btn btn-ghost">Course Creators</Link>
        </div>
      </section>

      <section id="waitlist" className="card" style={{marginTop: 12}}>
        <h2 style={{marginBottom: 8}}>Get early access</h2>
        <div dangerouslySetInnerHTML={{__html: process.env.NEXT_PUBLIC_FORM_EMBED_YOUTUBE ?? ''}} />
        <p className="footer">No spam. Unsubscribe anytime.</p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} ClipForge</footer>
    </div>
  );
}
