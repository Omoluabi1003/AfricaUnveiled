import Head from 'next/head';
import Link from 'next/link';

const tracks = [
  { name: 'Summit', href: '/program/summit', description: 'Policy dialogues on culture, trade, diplomacy, and investment.' },
  { name: 'Exhibition', href: '/program/exhibition', description: 'Public showcases of visual art, music, film, design, and heritage.' },
  { name: 'Creative Economy Challenge', href: '/program/creative', description: 'Pitch opportunities for founders and creative startups.' },
  { name: 'Awards', href: '/program/awards', description: 'Recognition for artists, partners, and diplomacy champions.' },
];

export default function Program() {
  return <main className="section"><Head><title>Program | Africa Unveiled</title></Head><h1>Program</h1><div className="cards">{tracks.map((track) => <article className="card" key={track.name}><h2>{track.name}</h2><p>{track.description}</p><Link className="button" href={track.href}>Explore {track.name}</Link></article>)}</div></main>;
}
