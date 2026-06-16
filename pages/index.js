import Head from 'next/head';
import Link from 'next/link';

const navLinks = [
  { href: '/live', label: 'Live @ UNGA' },
  { href: '/program', label: 'Program' },
  { href: '/partners', label: 'Partners' },
  { href: '/submit', label: 'Submit Event' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Africa Unveiled | Cultural Diplomacy at UNGA</title>
        <meta
          name="description"
          content="Africa Unveiled is a cultural diplomacy platform connecting African creators, institutions, partners, and global audiences during UNGA."
        />
        <meta property="og:title" content="Africa Unveiled at UNGA" />
        <meta property="og:description" content="Live programming, partner showcases, and affiliate events for Africa Unveiled during UNGA." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section style={styles.hero}>
          <div style={styles.mediaBadge}>Background image/video placeholder</div>
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>UNGA Cultural Diplomacy Hub</p>
            <h1 style={styles.headline}>Africa Unveiled brings the continent&apos;s cultural power to the center of UNGA.</h1>
            <p style={styles.lede}>
              Follow live conversations, creative economy showcases, partner convenings, and public events where artists,
              policymakers, founders, and institutions use culture as a bridge for diplomacy.
            </p>
            <nav aria-label="Africa Unveiled sections" style={styles.links}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: 'clamp(2rem, 6vw, 6rem)',
    color: '#fff',
    background:
      'linear-gradient(120deg, rgba(15, 23, 42, 0.92), rgba(180, 83, 9, 0.68)), url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=80") center/cover',
  },
  mediaBadge: {
    border: '1px solid rgba(255,255,255,.45)',
    borderRadius: '999px',
    padding: '.7rem 1rem',
    marginBottom: '1.5rem',
    background: 'rgba(15,23,42,.45)',
  },
  heroContent: { maxWidth: '980px', textAlign: 'center' },
  eyebrow: { letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 800, color: '#fde68a' },
  headline: { fontSize: 'clamp(2.5rem, 8vw, 6.5rem)', lineHeight: 0.95, margin: '0 0 1rem' },
  lede: { fontSize: 'clamp(1.05rem, 2vw, 1.45rem)', lineHeight: 1.7, maxWidth: '820px', margin: '0 auto' },
  links: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.8rem', marginTop: '2rem' },
  link: { color: '#0f172a', background: '#fff', borderRadius: '999px', padding: '.9rem 1.1rem', fontWeight: 800, textDecoration: 'none' },
};
