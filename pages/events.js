import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import { readJson, sortByDateTime } from '../lib/data';

export async function getStaticProps() {
  return { props: { initialEvents: sortByDateTime(readJson('events.json').filter((event) => event.approved)) } };
}

const emptyForm = { title: '', organizer: '', date: '', time: '', venue: '', category: 'Culture' };

export default function Events({ initialEvents }) {
  const [form, setForm] = useState(emptyForm);
  const [category, setCategory] = useState('All');
  const [message, setMessage] = useState('');
  const cats = ['All', ...new Set(initialEvents.map((event) => event.category))];
  const filtered = useMemo(() => initialEvents.filter((event) => category === 'All' || event.category === category), [initialEvents, category]);

  function submit(event) {
    event.preventDefault();
    setMessage('Thank you. Event submissions are reviewed by the Africa Unveiled programming team.');
    setForm(emptyForm);
  }

  return <Layout title="Affiliate Event Calendar | Africa Unveiled"><section className="section"><p className="eyebrow">Affiliate Event Submission</p><h1>Submit and discover affiliate events</h1>{message && <p className="notice">{message}</p>}<form className="form" onSubmit={submit}>{['title', 'organizer', 'date', 'time', 'venue', 'category'].map((field) => <label key={field}>{field}<input required type={field === 'date' ? 'date' : field === 'time' ? 'time' : 'text'} value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} /></label>)}<button>Submit event</button></form><h2>Approved calendar</h2><select aria-label="Filter events by category" value={category} onChange={(e) => setCategory(e.target.value)}>{cats.map((cat) => <option key={cat}>{cat}</option>)}</select><div className="cards">{filtered.map((event) => <article className="card" key={event.id}><time>{event.date} {event.time}</time><h3>{event.title}</h3><p>{event.organizer} · {event.venue}</p><p className="eyebrow">{event.category}</p></article>)}</div></section></Layout>;
}
