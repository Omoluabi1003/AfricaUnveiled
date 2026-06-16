// Live hub: renders JSON agenda chronologically with day navigation and video modules.
import Layout from '../components/Layout';
import VideoGrid from '../components/VideoGrid';
import { readJson, sortByDateTime } from '../lib/data';

export async function getStaticProps(){ return { props: { agenda: sortByDateTime(readJson('agenda.json')) } }; }

export default function Live({ agenda }) {
  const days = [...new Set(agenda.map((item) => item.day))];
  return <Layout title="Live @ UNGA | Africa Unveiled 2026">
    <section className="section"><p className="eyebrow">Live @ UNGA Hub</p><h1>Daily agenda, livestream, and replays</h1>
      <nav className="actions" aria-label="Agenda days">{days.map((day) => <a className="button alt" href={`#${day}`} key={day}>{new Date(day).toLocaleDateString('en-US',{weekday:'long',month:'short',day:'numeric'})}</a>)}</nav>
      <div className="videoFrame" aria-label="Africa Unveiled livestream player"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig" title="Africa Unveiled livestream" allowFullScreen /></div>
      {days.map((day) => <section id={day} key={day} className="section"><h2>{day}</h2><div className="agenda">{agenda.filter((i)=>i.day===day).map((item)=><article className="agendaItem" key={item.id}><time>{item.time}</time><h3>{item.title}</h3><p>{item.description}</p><p><strong>Location:</strong> {item.location} · <strong>Speakers:</strong> {item.speakers.join(', ')}</p></article>)}</div></section>)}
      <VideoGrid />
    </section>
  </Layout>;
}
