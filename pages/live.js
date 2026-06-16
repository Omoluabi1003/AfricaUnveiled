import Head from 'next/head';
import events from '../data/events.json';

const sortedEvents = [...events].sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));

export default function Live() {
  return (
    <>
      <Head><title>Live @ UNGA | Africa Unveiled</title></Head>
      <main className="section">
        <h1>Live @ UNGA</h1>
        <p className="lede">Watch the placeholder livestream and browse the latest scheduled sessions and replays.</p>
        <video className="videoFrame" controls poster="/logo.svg">
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
        <h2>Schedule</h2>
        <div className="agenda">
          {sortedEvents.map((event) => (
            <article className="agendaItem" key={`${event.date}-${event.time}-${event.title}`}>
              <time dateTime={`${event.date}T${event.time}`}>{event.date} · {event.time}</time>
              <h3>{event.title}</h3>
              <p><strong>Speaker:</strong> {event.speaker}</p>
            </article>
          ))}
        </div>
        <h2>Replays</h2>
        <div className="videoGrid">
          {sortedEvents.map((event) => (
            <article className="card" key={`replay-${event.title}`}>
              <div className="thumb">▶</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
