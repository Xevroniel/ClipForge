import Link from 'next/link'
import { rolePacks } from '@/lib/rolePacks'
import { WaitlistEmbed } from '@/components/WaitlistEmbed'

export default function RolePage({ params }: { params: { role: string } }) {
  const pack = rolePacks[params.role as keyof typeof rolePacks]
  if (!pack) {
    return (
      <div className="container">
        <main className="card" style={{ marginTop: 24 }}>
          <h1>Role not found</h1>
          <p>Select a role from the homepage.</p>
          <Link className="btn" href="/">Go home</Link>
        </main>
      </div>
    )
  }
  return (
    <div className="container">
      <header className="header">
        <Link className="brand" href="/">
          <img src="/logo-512.png" alt="ClipForge logo" width={36} height={36} />
          <span>ClipForge</span>
        </Link>
        <Link className="btn" href="/">Change role</Link>
      </header>

      <section className="card role">
        <h1>{pack.hero}</h1>
        <p className="sub">Built with {pack.title.toLowerCase()} — polished templates, platform-aware exports, and copy that fits your voice.</p>

        <div className="row">
          <div className="box">
            <h3 style={{ marginTop: 0 }}>What you get</h3>
            <ul>{pack.gets.map((g, i) => (<li key={i}>{g}</li>))}</ul>
            <hr className="sep" />
            <h3 style={{ marginTop: 0 }}>Why it works</h3>
            <ul>{pack.why.map((w, i) => (<li key={i}>{w}</li>))}</ul>
          </div>
          <div className="box">
            <h3 style={{ marginTop: 0 }}>Get early access</h3>
            <p className="notice">Embed your waitlist form below (or set it via env variable).</p>
            <WaitlistEmbed role={pack.slug} />
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" type="email" placeholder="you@example.com" aria-label="email" />
            <input type="hidden" value={pack.slug} />
            <a className="cta" href="#" onClick={(e)=>{e.preventDefault(); alert('Replace with your embed form.');}}>Join the waitlist</a>
            <p className="notice">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} ClipForge — Templates adapt to your role.</footer>
    </div>
  )
}
