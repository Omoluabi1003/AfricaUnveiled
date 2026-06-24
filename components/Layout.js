import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Africa Unveiled at UNGA', description = 'Africa Unveiled at UNGA 2026 cultural diplomacy media hub.' }) {
  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="UNGA, Africa, cultural diplomacy, 2026, media hub" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header className="siteHeader">
      <Link className="brand" href="/"><img src="https://raw.githubusercontent.com/Omoluabi1003/AfricaUnveiled/main/Africa%20Unveiled%20logo.jpeg" alt="" width="32" height="32" />Africa Unveiled</Link>
      <nav aria-label="Primary navigation">
        <Link href="/live">Live @ UNGA</Link><Link href="/program/summit">Program</Link><Link href="/partners">Partners</Link><Link href="/events">Affiliate Events</Link><Link href="/engage/story">Submit Story</Link><Link href="/access/login">Login</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="footer"><p>© 2026 Africa Unveiled at UNGA · Cultural diplomacy, live from UNGA week.</p></footer>
  </>;
}
