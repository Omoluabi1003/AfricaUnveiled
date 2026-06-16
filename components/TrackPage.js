import Head from 'next/head';
import events from '../data/events.json';

export default function TrackPage({ category, title, purpose }) {
  const sessions = events.filter((event) => event.category === category);
  return (
    <main className="section">
      <Head><title>{title} | Africa Unveiled Program</title></Head>
      <p className="eyebrow">Program Track</p>
      <h1>{title}</h1>
      <p className="lede">{purpose}</p>
      <h2>Sample sessions</h2>
      <div className="agenda">
        {sessions.map((session) => (
          <article className="agendaItem" key={session.title}>
            <time>{session.date} · {session.time}</time>
            <h3>{session.title}</h3>
            <p>{session.description}</p>
            <p><strong>Speaker:</strong> {session.speaker}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
