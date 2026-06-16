import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Login() {
  const [message, setMessage] = useState('');

  function submit(event) {
    event.preventDefault();
    setMessage('Access requests are reviewed by the Africa Unveiled team. Qualified delegates receive partner or VIP instructions directly.');
  }

  return <Layout title="Access Request | Africa Unveiled"><section className="section"><h1>Invitation and partner access</h1><p>Request access for partner briefings, VIP convenings, media interviews, and accredited UNGA-week programming.</p>{message && <p className="notice">{message}</p>}<form className="form" onSubmit={submit}><label>Work email<input type="email" required placeholder="name@organization.org" /></label><label>Organization<input required placeholder="Organization or institution" /></label><label>Access interest<select defaultValue="Partner Access"><option>Partner Access</option><option>VIP Access</option><option>Media / Accredited Access</option><option>Public Access</option></select></label><button>Request access</button></form><p><Link href="/access/lounge">View access overview</Link>.</p></section></Layout>;
}
