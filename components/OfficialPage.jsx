import Link from 'next/link';
import Header from './Header';
import { brand, convener, externalAssets, mediaCentre, officialContent, pageContent, programmeDays, registrationPortals, sponsorshipItems } from '../lib/officialContent';

const slugify = (label) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function StaticForm({ title = 'Expression of interest' }) {
  return (
    <form className="static-form" action="mailto:access@africaunveiled.org" method="post" encType="text/plain">
      <h2>{title}</h2>
      <p>No database persistence is active yet. Connect this form to Supabase, Airtable, Firebase, Formspree, HubSpot, or a custom API when credentials are available.</p>
      <label>Full name<input name="name" placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
      <label>Organization<input name="organization" placeholder="Organization / company" /></label>
      <label>Pathway<select name="pathway">{registrationPortals.map((portal) => <option key={portal}>{portal}</option>)}</select></label>
      <label>Message<textarea name="message" placeholder="Tell us how you would like to participate" rows="5" /></label>
      <label>Secure file upload placeholder<input name="fileUploadPlaceholder" placeholder="Paste external file link; uploads connect later" /></label>
      <button type="submit">Submit static enquiry</button>
    </form>
  );
}

function ContentBlocks({ page }) {
  if (page.type === 'programme') return <div className="official-grid">{programmeDays.map((item) => <article className="official-card" key={item.day}><span>{item.day}</span><h2>{item.title}</h2><ul>{item.components.map((component) => <li key={component}>{component}</li>)}</ul></article>)}</div>;
  if (page.type === 'registration') return <><div className="official-grid compact">{registrationPortals.map((portal) => <article className="official-card" key={portal}><span>{portal}</span><h2>{portal} Portal</h2><p>Register interest for the {portal.toLowerCase()} pathway. Formal approvals, credentials, and database workflows can connect when the backend is selected.</p><a href={`#${slugify(portal)}`}>Start pathway</a></article>)}</div><StaticForm title="Registration pathway form" /></>;
  if (page.type === 'media') return <><div className="official-grid compact">{mediaCentre.map((item) => <article className="official-card" key={item}><span>Media Centre</span><h2>{item}</h2><p>Production-ready static module with external asset links and future integration hooks.</p></article>)}</div><div className="official-actions"><a href={externalAssets.mediaKit}>Download media kit placeholder</a><Link href="/gallery">View gallery</Link></div><StaticForm title="Media accreditation and newsletter form" /></>;
  if (page.type === 'sponsors') return <><div className="official-grid compact">{sponsorshipItems.map((item) => <article className="official-card" key={item}><span>Partnership</span><h2>{item}</h2><p>Sponsorship and partnership workflows use static enquiry modules until an approved CRM or database is connected.</p></article>)}</div><div className="official-actions"><a href={externalAssets.sponsorshipDeck}>Partnership proposal download CTA</a><Link href="/registration">Sponsor enquiry form</Link></div></>;
  if (page.type === 'gallery') return <div className="external-gallery">{externalAssets.gallery.map((url) => <article style={{ '--gallery-image': `url(${url})` }} key={url}><span>External approved image URL</span></article>)}<a className="video-link" href={externalAssets.video}>External video gallery placeholder</a></div>;
  if (page.type === 'convener') return <article className="official-card convener-card"><span>{convener.title}</span><h2>{convener.name}</h2><p>{convener.role}</p><p>{convener.organization}</p><p><a href={`mailto:${convener.email}`}>{convener.email}</a> · <a href={`tel:${convener.phone.replace(/\s/g, '')}`}>{convener.phone}</a></p></article>;
  if (page.type === 'speakers') return <div className="official-grid compact">{['Government & Institutional Leaders', 'Creative Economy Builders', 'Investors & Development Partners', 'Media & Diaspora Voices'].map((title) => <article className="speaker-profile" key={title}><div>{title.split(' ').map((word) => word[0]).slice(0, 2).join('')}</div><h2>{title}</h2><p>Profile card placeholder for confirmed Africa Unveiled 2026 speakers.</p></article>)}</div>;
  if (page.type === 'news') return <div className="official-grid compact">{['Launch announcement', 'Programme update', 'Partner bulletin'].map((title) => <article className="official-card" key={title}><span>Coming soon</span><h2>{title}</h2><p>Official news will publish here when approved for release.</p></article>)}</div>;
  return <><div className="official-grid compact">{officialContent.pillars.map((pillar) => <article className="official-card" key={pillar}><span>Pillar</span><h2>{pillar}</h2><p>{brand.theme}</p></article>)}</div><StaticForm /></>;
}

export default function OfficialPage({ slug }) {
  const page = pageContent[slug];
  return (
    <main className="platform-shell official-page">
      <Header />
      <section className="official-hero">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.copy}</p>
        <div className="announcement-ribbon inline"><strong>{brand.unga}</strong><span>{brand.dateLine}</span></div>
      </section>
      <ContentBlocks page={page} />
      <section className="official-footer-cta"><h2>{brand.tagline}</h2><p>{brand.theme}</p><Link className="button primary" href="/registration">Register Interest</Link></section>
    </main>
  );
}
