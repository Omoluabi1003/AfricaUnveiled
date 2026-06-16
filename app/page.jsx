import Header from '../components/Header';
import { accessTiers, atlasFilters, featuredVoices, footerColumns, heroPanels, houseExperiences, liveDays, metrics, partnerCategories, premiumCards, programs } from '../lib/platformData';

const SectionIntro = ({ eyebrow, title, copy }) => (
  <div className="section-intro reveal">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy ? <p>{copy}</p> : null}
  </div>
);

const Card = ({ eyebrow, title, copy }) => (
  <article className="premium-card reveal">
    <span>{eyebrow}</span>
    <h3>{title}</h3>
    <p>{copy}</p>
  </article>
);

export default function HomePage() {
  return (
    <main className="platform-shell">
      <Header />

      <section className="hero-sequence" aria-label="Africa Unveiled platform introduction">
        {heroPanels.map((hero, index) => (
          <article className={`cinematic-hero hero-${hero.id}`} key={hero.id} aria-labelledby={`${hero.id}-title`}>
            <div className="hero-orb" aria-hidden="true" />
            <div className="hero-copy reveal">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id={`${hero.id}-title`}>{hero.headline}</h1>
              <p className="hero-lede">{hero.copy}</p>
              <div className="hero-actions" aria-label={`${hero.eyebrow} calls to action`}>
                <a className="button primary" href={hero.primaryHref}>{hero.primary}</a>
                <a className="button secondary" href={hero.secondaryHref}>{hero.secondary}</a>
              </div>
            </div>
            <aside className="hero-badge reveal" aria-label="Platform signal">
              <small>0{index + 1}</small>
              <strong>{hero.stat}</strong>
            </aside>
          </article>
        ))}
      </section>

      <section className="section ivory" id="why" aria-labelledby="why-title">
        <SectionIntro eyebrow="Premium cultural diplomacy" title="Built for the week when diplomacy, capital, culture, and media converge." copy="Minimal by design. Strategic by default. Africa Unveiled gives African soft power an executive-grade platform during UN General Assembly Week." />
        <div className="premium-grid">{premiumCards.map((card) => <Card key={card.eyebrow} {...card} />)}</div>
      </section>

      <section className="section house" id="house" aria-labelledby="house-title">
        <SectionIntro eyebrow="Africa Unveiled House @ UNGA" title="A flagship New York destination for cultural diplomacy, investment dialogue, and African soft power." />
        <div className="house-grid">{houseExperiences.map((item) => <article className="house-card reveal" key={item}><span /> <h3>{item}</h3><p>Curated programming, executive hospitality, and partner visibility shaped for UNGA-level audiences.</p></article>)}</div>
      </section>

      <section className="section ivory" id="live" aria-labelledby="live-title">
        <SectionIntro eyebrow="Africa Unveiled Live" title="Daily updates, interviews, session replays, and editorial coverage from the center of UNGA Week." />
        <div className="live-console">{liveDays.map((day) => <article className="day-card reveal" key={day.day}><b>{day.day}</b><h3>{day.theme}</h3><ul>{day.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="section" id="voices" aria-labelledby="voices-title">
        <SectionIntro eyebrow="Featured Voices" title="A calm, credible stage for the people shaping Africa’s global narrative." />
        <div className="card-grid three">{featuredVoices.map((voice) => <article className="voice-card reveal" key={voice.name}><div className="video-surface" aria-hidden="true"><span>▶</span></div><h3>{voice.name}</h3><p>{voice.role}</p><small>{voice.topic}</small></article>)}</div>
      </section>

      <section className="section ivory" id="program" aria-labelledby="program-title">
        <SectionIntro eyebrow="Program Architecture" title="A modular diplomatic platform, designed as a premium guest journey." />
        <div className="card-grid three">{programs.map((program) => <article className="program-card reveal" key={program.title}><h3>{program.title}</h3><p>{program.copy}</p></article>)}</div>
      </section>

      <section className="section atlas" id="atlas" aria-labelledby="atlas-title">
        <SectionIntro eyebrow="Africa Unveiled Atlas" title="A geospatial soft-power layer for future data, discovery, and diplomacy." copy="Platform strategy, geospatial intelligence, and digital experience architecture by ETL GIS Consulting LLC." />
        <div className="atlas-panel reveal"><div className="map-orbit" aria-hidden="true"><span /><span /><span /></div><div className="atlas-filters">{atlasFilters.map((filter) => <button type="button" key={filter}>{filter}</button>)}</div></div>
      </section>

      <section className="section ivory" id="partners" aria-labelledby="partners-title">
        <SectionIntro eyebrow="Partner Ecosystem" title="An institutional coalition for African cultural diplomacy at global scale." />
        <div className="logo-wall">{partnerCategories.map((partner) => <div className="logo-tile reveal" key={partner}><span>{partner.slice(0, 2)}</span><small>{partner}</small></div>)}</div>
      </section>

      <section className="section" id="access" aria-labelledby="access-title">
        <SectionIntro eyebrow="Invitation Access" title="Clear pathways for partners, delegates, VIP guests, and accredited media." />
        <div className="card-grid four">{accessTiers.map((tier) => <article className="access-card reveal" key={tier.title}><h3>{tier.title}</h3><p>{tier.copy}</p><a href="mailto:access@africaunveiled.org">{tier.cta}</a></article>)}</div>
      </section>

      <section className="section metrics" aria-labelledby="metrics-title">
        <SectionIntro eyebrow="Impact Dashboard" title="Designed to be legible to funders, policymakers, media, and institutions." />
        <div className="metrics-grid">{metrics.map(([value, label]) => <article className="reveal" key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className="final-cta" aria-labelledby="final-title"><p className="eyebrow">Join the platform</p><h2 id="final-title">Shape Africa’s global narrative during UNGA Week.</h2><div><a className="button primary" href="#access">Request Invitation</a><a className="button secondary" href="#partners">Become a Partner</a></div></section>
      <footer className="platform-footer">
        <div className="footer-brand"><strong>Africa Unveiled</strong><p>Premium African cultural diplomacy, media, and convening platform for UN General Assembly Week.</p><small>Developed by ETL GIS Consulting LLC</small></div>
        <nav className="footer-columns" aria-label="Footer navigation">{footerColumns.map((column) => <div key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <a href={link === 'Developed by ETL GIS Consulting LLC' ? 'https://etlgis.com' : '#'} key={link}>{link}</a>)}</div>)}</nav>
        <p className="technology-note">Platform strategy, geospatial intelligence, and digital experience architecture by ETL GIS Consulting LLC.</p>
      </footer>
    </main>
  );
}
