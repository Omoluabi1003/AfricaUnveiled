import Head from 'next/head';
import { useState } from 'react';

const submissions = [];
const initialForm = { eventName: '', organizer: '', date: '', time: '', location: '', category: '', description: '', contactEmail: '' };

export default function SubmitEvent() {
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function validate() {
    const nextErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) nextErrors[key] = 'Required';
    });
    if (form.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) {
      nextErrors.contactEmail = 'Enter a valid email address';
    }
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    submissions.push({ ...form, submittedAt: new Date().toISOString() });
    setSuccess(`Thank you. ${form.eventName} has been added to the temporary in-memory submission list.`);
    setForm(initialForm);
  }

  return (
    <main className="section">
      <Head><title>Submit Event | Africa Unveiled</title></Head>
      <h1>Submit an Affiliate Event</h1>
      <p className="lede">Share aligned programming for review. This demo stores submissions in a temporary in-memory array.</p>
      {success && <p className="notice" role="status">{success}</p>}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>Event name<input name="eventName" value={form.eventName} onChange={updateField} />{errors.eventName && <span>{errors.eventName}</span>}</label>
        <label>Organizer<input name="organizer" value={form.organizer} onChange={updateField} />{errors.organizer && <span>{errors.organizer}</span>}</label>
        <label>Date<input type="date" name="date" value={form.date} onChange={updateField} />{errors.date && <span>{errors.date}</span>}</label>
        <label>Time<input type="time" name="time" value={form.time} onChange={updateField} />{errors.time && <span>{errors.time}</span>}</label>
        <label>Location<input name="location" value={form.location} onChange={updateField} />{errors.location && <span>{errors.location}</span>}</label>
        <label>Category<select name="category" value={form.category} onChange={updateField}><option value="">Select category</option><option>Summit</option><option>Exhibition</option><option>Creative</option><option>Awards</option></select>{errors.category && <span>{errors.category}</span>}</label>
        <label>Description<textarea name="description" rows="5" value={form.description} onChange={updateField} />{errors.description && <span>{errors.description}</span>}</label>
        <label>Contact email<input type="email" name="contactEmail" value={form.contactEmail} onChange={updateField} />{errors.contactEmail && <span>{errors.contactEmail}</span>}</label>
        <button type="submit">Submit Event</button>
      </form>
    </main>
  );
}
