// Homepage: editorial hero and cultural-diplomacy thesis entry points.
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return <Layout title="Africa Unveiled at UNGA 2026 | Cultural Diplomacy Media Hub">
    <section className="hero" aria-labelledby="home-title">
      <div className="heroContent">
        <p className="eyebrow">UNGA 2026 Media Hub</p>
        <h1 id="home-title">Africa&apos;s culture is diplomatic infrastructure.</h1>
        <p className="lede">Africa Unveiled at UNGA treats music, film, heritage, design, food systems, and creative enterprise as serious tools of diplomacy. Follow live briefings, partner conversations, and public stories that show how cultural power shapes policy, investment, and global imagination.</p>
        <div className="actions"><Link className="button" href="/live">Watch Live @ UNGA</Link><Link className="button alt" href="/program/summit">Explore Program</Link><Link className="button alt" href="/events">Affiliate Calendar</Link></div>
      </div>
    </section>
    <section className="section" aria-labelledby="thesis"><h2 id="thesis">A newsroom for cultural diplomacy</h2><p className="lede">The platform connects daily agenda coverage, session replays, approved affiliate events, partner access, and visitor stories in one responsive hub built for delegates, media, artists, and institutions.</p></section>
  </Layout>;
}
