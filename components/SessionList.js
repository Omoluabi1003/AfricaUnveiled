export default function SessionList({ sessions }) {
  return <div className="cards">{sessions.map((session) => <article className="card" key={session.title}>
    <time>{session.time}</time><h3>{session.title}</h3><p>{session.description}</p>
    <p><strong>Speakers:</strong> {session.speakers.join(', ')}</p>
    <a className="button" href={session.registrationLink}>Register</a>
  </article>)}</div>;
}
