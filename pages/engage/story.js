import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const emptyForm = { name: '', email: '', story: '' };

export default function Story() {
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState('');

  function submit(event) {
    event.preventDefault();
    setMessage('Thank you. Your story is queued for curation by the Africa Unveiled editorial team.');
    setForm(emptyForm);
  }

  return <Layout title="Submit Your Story | Africa Unveiled"><section className="section"><p className="eyebrow">Digital Engagement</p><h1>Submit your question or story</h1>{message && <p className="notice">{message}</p>}<form className="form" onSubmit={submit}><label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label><label>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label><label>Question or story<textarea required rows="6" value={form.story} onChange={(e) => setForm({ ...form, story: e.target.value })} /></label><button>Submit story</button></form><p><Link href="/engage/showcase">View selected stories</Link></p></section></Layout>;
}
