import Header from '../components/Header';
import { accessTiers, atlasFilters, featuredVoices, houseExperiences, liveDays, mediaCards, metrics, partnerCategories, programs } from '../lib/platformData';

const SectionIntro = ({ eyebrow, title, copy }) => (
  <div className="section-intro">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy ? <p>{copy}</p> : null}
  </div>
);

const PlaceholderLogo = ({ name }) => <div className="logo-tile" aria-label={`${name} partner placeholder logo`}><span>{name.split(' ').map((w) => w[0]).join('').slice(0, 3)}</span><small>{name}</small></div>;

export default function HomePage() {
  return (
    <main className="platform-shell">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">UN General Assembly Week · New York</p>
          <h1 id="hero-title">Africa’s Voice. Culture. Investment. Diplomacy.</h1>
          <p className="hero-lede">Convening leaders, creators, policymakers, investors, and institutions shaping Africa’s global future during UN General Assembly Week.</p>
          <div className="hero-actions" aria-label="Primary calls to action">
            <a className="button primary" href="#access">Request Invitation</a>
            <a className="button secondary" href="#partners">Become a Partner</a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Platform overview">
          <span>Premium platform</span>
          <strong>Media house + invitation-only convening + cultural storytelling operating system.</strong>
          <div className="hero-card-grid"><b>UNGA</b><b>NYC</b><b>Live</b><b>VIP</b></div>
        </aside>
      </section>

      <section className="section light" id="why" aria-labelledby="why-title">
        <SectionIntro eyebrow="Why this matters" title="Africa’s demographic rise, creative economy, diaspora influence, and investment future now belong at the center of global decision-making." copy="Africa Unveiled turns UNGA Week attention into durable cultural diplomacy: editorial intelligence, high-trust rooms, media moments, and partner ecosystems designed to move narratives, capital, and institutional collaboration." />
      </section>

      <section className="section" id="media" aria-labelledby="media-title">
        <SectionIntro eyebrow="Africa Unveiled Media" title="A newsroom-style engine for cultural diplomacy and African soft power." copy="Featured stories, interviews, insights, speaker spotlights, and video-first coverage built for leaders who need context before they enter the room." />
        <div className="media-layout">
          <article className="feature-story"><p>Featured Dispatch</p><h3>Africa’s creative economy is no longer a side conversation.</h3><span>Watch the editorial briefing →</span></article>
          <div className="card-grid three">{mediaCards.map((card) => <article className="editorial-card" key={card.title}><small>{card.type}</small><h3>{card.title}</h3><p>{card.copy}</p><span>{card.meta}</span></article>)}</div>
        </div>
      </section>

      <section className="section house" id="house" aria-labelledby="house-title">
        <SectionIntro eyebrow="Africa Unveiled House @ UNGA" title="A high-level, invitation-only house experience in New York." copy="Designed as a premium diplomatic destination: part broadcast studio, part hospitality environment, part investment salon, and part cultural pavilion." />
        <div className="house-grid">{houseExperiences.map((item) => <article className="house-card" key={item}><span /> <h3>{item}</h3><p>Curated programming, executive hospitality, and partner visibility shaped for UNGA-level audiences.</p></article>)}</div>
        <div className="venue-band"><strong>Venue storytelling:</strong> a cinematic New York home base for African culture, private dialogue, press moments, and global coalition building.<div><a className="button primary" href="#access">Request Invitation</a><a className="button ghost" href="#partners">Become a Partner</a></div></div>
      </section>

      <section className="section light" id="live" aria-labelledby="live-title">
        <SectionIntro eyebrow="Africa Unveiled Live" title="Daily UNGA updates, speaker clips, session replays, broadcasts, and press recaps." />
        <div className="live-console">{liveDays.map((day) => <article className="day-card" key={day.day}><b>{day.day}</b><h3>{day.theme}</h3><ul>{day.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="section" id="voices" aria-labelledby="voices-title">
        <SectionIntro eyebrow="Featured Voices" title="Video-first conversations with the people shaping Africa’s global narrative." />
        <div className="card-grid three">{featuredVoices.map((voice) => <article className="voice-card" key={voice.name}><div className="video-placeholder" aria-label={`Video placeholder for ${voice.name}`}><span>▶</span></div><h3>{voice.name}</h3><p>{voice.role}</p><small>{voice.topic}</small></article>)}</div>
      </section>

      <section className="section light" id="program" aria-labelledby="program-title">
        <SectionIntro eyebrow="Program Architecture" title="A modular platform for summits, showcases, awards, salons, and partner-hosted sessions." />
        <div className="card-grid four">{programs.map((program) => <article className="program-card" key={program.title}><h3>{program.title}</h3><p>{program.copy}</p></article>)}</div>
      </section>

      <section className="section atlas" id="atlas" aria-labelledby="atlas-title">
        <SectionIntro eyebrow="Africa Unveiled Atlas" title="A map-inspired soft-power ecosystem layer, ready for real data integration." copy="The Atlas is architected as a future interactive directory for countries, creators, startups, investors, cultural institutions, and diaspora leaders." />
        <div className="atlas-panel"><div className="map-orbit" aria-hidden="true"><span /><span /><span /></div><div className="atlas-filters">{atlasFilters.map((filter) => <button type="button" key={filter}>{filter}</button>)}</div></div>
      </section>

      <section className="section light" id="partners" aria-labelledby="partners-title">
        <SectionIntro eyebrow="Partner Ecosystem" title="A coalition for governments, institutions, funders, media, universities, brands, and cultural leaders." />
        <div className="logo-wall">{partnerCategories.map((partner) => <PlaceholderLogo key={partner} name={partner} />)}</div>
      </section>

      <section className="section" id="access" aria-labelledby="access-title">
        <SectionIntro eyebrow="Invitation & Access" title="Tiered access for public audiences, partners, VIP delegates, and accredited media." />
        <div className="card-grid four">{accessTiers.map((tier) => <article className="access-card" key={tier.title}><h3>{tier.title}</h3><p>{tier.copy}</p><a href="mailto:access@africaunveiled.org">{tier.cta}</a></article>)}</div>
      </section>

      <section className="section metrics" aria-labelledby="metrics-title">
        <SectionIntro eyebrow="Impact Dashboard" title="High-level proof points for an UNGA-facing cultural diplomacy platform." />
        <div className="metrics-grid">{metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className="final-cta" aria-labelledby="final-title"><p className="eyebrow">Join the platform</p><h2 id="final-title">Join the platform shaping Africa’s global narrative during UNGA Week.</h2><div><a className="button primary" href="#access">Request Invitation</a><a className="button secondary" href="#partners">Become a Partner</a></div></section>
    </main>
  );
}
