import Link from 'next/link';

const navLinks = [
  { href: '/live', label: 'Live @ UNGA' },
  { href: '/program', label: 'Program' },
  { href: '/partners', label: 'Partners' },
  { href: '/submit', label: 'Submit Affiliate Event' },
];

const programCards = [
  {
    title: 'Cultural diplomacy briefings',
    copy: 'Policy, creative economy, and heritage conversations designed for delegates, founders, and institutions.',
  },
  {
    title: 'African soft-power showcases',
    copy: 'Music, film, fashion, food, literature, and design moments that make Africa visible across UNGA week.',
  },
  {
    title: 'Partner and affiliate events',
    copy: 'A discoverable calendar for aligned convenings, receptions, salons, and community activations.',
  },
];

export default function HomePage() {
  return (
    <main className="home-shell">
      <section className="hero-panel" aria-labelledby="hero-title">
        <div className="hero-overlay" />
        <header className="topbar">
          <Link className="brand-mark" href="/" aria-label="Africa Unveiled home">
            Africa Unveiled
          </Link>
          <nav className="topnav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="hero-content">
          <p className="eyebrow">Live @ UNGA</p>
          <h1 id="hero-title">Africa Unveiled @ UNGA</h1>
          <p className="lede">A cultural diplomacy and African soft-power platform for UNGA week.</p>
          <div className="hero-actions" aria-label="Homepage actions">
            <Link className="button primary" href="/program">
              Program
            </Link>
            <Link className="button secondary" href="/partners">
              Partners
            </Link>
            <Link className="button ghost" href="/submit">
              Submit Affiliate Event
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="program-title">
        <p className="eyebrow dark">Program</p>
        <h2 id="program-title">Culture as a bridge for diplomacy, investment, and global partnership.</h2>
        <div className="card-grid">
          {programCards.map((card) => (
            <article className="info-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
