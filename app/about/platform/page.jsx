import Link from 'next/link';
import Header from '../../../components/Header';

const platformSections = [
  {
    title: 'Beyond Events',
    copy: 'Africa Unveiled is not a conference website. It is a year-round platform for African cultural diplomacy, designed to translate moments of global attention into durable relationships, credible storytelling, and institutional momentum.',
  },
  {
    title: 'Media + Convening + Intelligence',
    copy: 'The platform combines editorial storytelling, live UNGA programming, ecosystem engagement, partnership activation, and strategic intelligence into one calm operating layer for leaders, creators, investors, institutions, and development partners.',
  },
  {
    title: 'Technology Architecture',
    copy: 'ETL GIS Consulting LLC serves as the technology and platform partner behind Africa Unveiled, bringing enterprise GIS architecture, workflow automation, records modernization, AI-assisted operational systems, data integration, and location intelligence into the platform strategy.',
  },
  {
    title: 'Future Vision',
    copy: 'Africa Unveiled is evolving toward a continental intelligence and engagement ecosystem: a trusted map of people, institutions, investments, creative industries, delegations, foundations, and partnerships shaping Africa’s global influence.',
  },
];

export const metadata = {
  title: 'Why Africa Unveiled Is Different | Platform Architecture',
  description: 'Learn how Africa Unveiled operates as a premium African cultural diplomacy platform with technology and intelligence architecture by ETL GIS Consulting LLC.',
};

export default function PlatformPage() {
  return (
    <main className="platform-page">
      <Header />
      <section className="platform-page-hero" aria-labelledby="platform-page-title">
        <p className="eyebrow">About the Platform</p>
        <h1 id="platform-page-title">Why Africa Unveiled Is Different</h1>
        <p>Africa Unveiled brings together media, convening, ecosystem intelligence, and technology architecture to support a more strategic future for African cultural diplomacy.</p>
      </section>
      <section className="platform-story-grid" aria-label="Platform differentiators">
        {platformSections.map((section) => (
          <article className="platform-story-card reveal" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.copy}</p>
          </article>
        ))}
      </section>
      <section className="platform-page-cta" aria-labelledby="atlas-vision-title">
        <p className="eyebrow">Africa Intelligence Atlas™</p>
        <h2 id="atlas-vision-title">A future-facing ecosystem intelligence platform.</h2>
        <p>Explore the people, institutions, investments, creative industries, and partnerships shaping Africa’s global influence through a premium preview today and a real GIS-powered intelligence layer in the future.</p>
        <Link className="button primary" href="/#atlas">Explore the Atlas Preview</Link>
      </section>
    </main>
  );
}
