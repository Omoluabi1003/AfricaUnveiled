const videos = [
  { title: 'Interview: Culture Ministers on Soft Power', type: 'Interview', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Replay: Creative Economy Challenge', type: 'Replay', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Studio Briefing: Media and Movement', type: 'Session', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
];

export default function VideoGrid({ items = videos }) {
  return <section aria-labelledby="video-grid-title">
    <h2 id="video-grid-title">Interviews & Session Replays</h2>
    <div className="videoGrid">{items.map((video) => <article className="card" key={video.title}>
      <div className="videoFrame"><iframe src={video.src} title={video.title} allowFullScreen /></div>
      <p className="eyebrow">{video.type}</p><h3>{video.title}</h3>
    </article>)}</div>
  </section>;
}
