// app/components/MarketingSections.tsx

export function SocialProof() {
  return (
    <section className="section reveal">
      <div className="container">
        <div className="card" style={{ display: 'grid', gap: 12 }}>
          <div className="muted" aria-hidden="true">Trusted by early creators across five niches</div>
          <div className="logo-row" aria-label="Early adopter niches">
            <span className="logo-chip">Coaches</span>
            <span className="logo-chip">Consultants</span>
            <span className="logo-chip">Podcasters</span>
            <span className="logo-chip">YouTubers</span>
            <span className="logo-chip">Course Creators</span>
          </div>
          <div className="muted" style={{ fontSize: 14 }}>
            Swap these chips for real logos/testimonials once you have them.
          </div>
        </div>
      </div>
    </section>
  )
}

export function PricingTeaser() {
  return (
    <section className="section reveal" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="card">
          <div className="grid-2">
            <div style={{ display: 'grid', gap: 12 }}>
              <h2 id="pricing-heading" className="heading">Simple, creator-friendly pricing</h2>
              <p className="muted">
                Start small, scale when you’re ready. Early beta lets us fine-tune the value and
                integrations you need most.
              </p>
              <ul className="muted" style={{ display: 'grid', gap: 8, margin: 0, paddingLeft: '1.1rem' }}>
                <li>Up to <strong>10 clips per source video</strong> (MVP)</li>
                <li>Auto captions + titles + social-post drafts</li>
                <li>Exports for <strong>9:16</strong>, <strong>1:1</strong>, and <strong>16:9</strong></li>
              </ul>
            </div>

            <div style={{ display: 'grid', alignContent: 'center', gap: 16 }}>
              <div className="price">
                <span>$29.99</span><span>/mo (Starter, beta)</span>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a className="btn btn-primary" href="#roles">Join the beta waitlist</a>
                <a className="btn btn-ghost" href="/coaches">See role pages</a>
              </div>
              <div className="muted" style={{ fontSize: 13 }}>
                No commitment during beta. Final tiers will reflect usage and integrations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
