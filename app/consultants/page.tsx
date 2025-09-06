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
            <a className="btn btn-ghost" href="/">Home</a>
            <a className="btn btn-primary" href="#waitlist">Get Early Access</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1 className="display">Repurpose talks into lead-gen clips.</h1>
        <p className="lede">
          ClipForge extracts key takes from talks and calls, adds subtitles, and drafts LinkedIn/Twitter posts that drive inbound.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#waitlist">Join the Consultants Beta</a>
          <a className="btn btn-ghost" href="/">See all roles</a>
        </div>
      </section>

      <section id="waitlist" className="card" style={{marginTop: 12}}>
        <h2 style={{marginBottom: 8}}>Get early access</h2>
        <div dangerouslySetInnerHTML={{ __html: process.env.NEXT_PUBLIC_FORM_EMBED_CONSULTANTS ?? '' }} />
        <p className="footer">No spam. Unsubscribe anytime.</p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} ClipForge</footer>
    </div>
  );
}
