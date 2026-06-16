import Link from 'next/link';
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

const AfricaMapMotif = ({ className = '' }) => (
  <svg className={`africa-map-motif ${className}`} viewBox="0 0 420 520" role="img" aria-hidden="true" focusable="false">
    <path d="M219 18c-24 4-44 16-58 34l-31 1-21 25 11 32-32 30 4 37-31 28 14 39 42 11 8 38 38 29 8 51 42 24 18 67 47 32 27-36-9-58 42-58-13-50 35-47-15-54 20-32-27-36-3-43-36-18-21-49-48-24Z" />
    <path d="M151 70c41 16 75 37 101 64 35 36 54 79 58 131M118 253c74-21 145-13 215 25M207 386c21-42 60-77 118-106" />
  </svg>
);

const CulturalPatternOverlay = ({ className = '' }) => <div className={`cultural-pattern-overlay ${className}`} aria-hidden="true" />;

const DiasporaArcGrid = () => (
  <svg className="diaspora-arc-grid" viewBox="0 0 900 520" aria-hidden="true" focusable="false">
    <path d="M190 333C302 176 523 91 764 112" />
    <path d="M205 365C352 260 548 210 774 235" />
    <path d="M233 292C370 114 603 40 827 75" />
    <circle cx="210" cy="333" r="5" />
    <circle cx="764" cy="112" r="5" />
    <circle cx="774" cy="235" r="4" />
  </svg>
);

const AfricanIdentityBackdrop = () => (
  <div className="african-identity-backdrop" aria-hidden="true">
    <AfricaMapMotif />
    <DiasporaArcGrid />
    <CulturalPatternOverlay />
  </div>
);

const AtlasPreview = () => (
  <div className="atlas-preview-map" aria-hidden="true">
    <AfricaMapMotif className="atlas-africa" />
    <div className="atlas-coordinate-grid" />
    <span className="atlas-node node-accra">Accra</span>
    <span className="atlas-node node-lagos">Lagos</span>
    <span className="atlas-node node-nairobi">Nairobi</span>
    <span className="atlas-node node-joburg">Johannesburg</span>
    <span className="atlas-node node-newyork">New York</span>
  </div>
);

export default function HomePage() {
  return (
    <main className="platform-shell">
      <Header />

      <section className="hero-sequence" aria-label="Africa Unveiled platform introduction">
        {heroPanels.map((hero, index) => (
          <article className={`cinematic-hero hero-${hero.id}`} key={hero.id} aria-labelledby={`${hero.id}-title`}>
            <AfricanIdentityBackdrop />
            <div className="hero-orb" aria-hidden="true" />
            <div className="hero-copy reveal">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id={`${hero.id}-title`}>{hero.headline}</h1>
              <p className="hero-lede">{hero.copy}</p>
              {index === 0 ? <p className="identity-statement">Africa is not a backdrop. Africa is the thesis.</p> : null}
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
        <SectionIntro eyebrow="Africa Unveiled House @ UNGA" title="A flagship New York destination for cultural diplomacy, investment dialogue, and African soft power." copy="A refined house system for delegations, creators, investors, and institutions—rooted in African heritage and built for global rooms." />
        <div className="motif-divider" aria-hidden="true" />
        <div className="house-grid">{houseExperiences.map((item) => <article className="house-card reveal" key={item}><span /> <h3>{item}</h3><p>Curated programming, executive hospitality, and partner visibility shaped for UNGA-level audiences across African diplomacy, creative economy, and global presence.</p></article>)}</div>
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
        <SectionIntro eyebrow="Africa Intelligence Atlas™" title="A future-facing ecosystem intelligence platform." copy="Mapping the people, institutions, markets, and cultural forces shaping Africa's global influence." />
        <div className="atlas-panel reveal">
          <AtlasPreview />
          <div className="atlas-content">
            <span className="partner-badge">Powered by ETL GIS Consulting LLC</span>
            <p>Current implementation: a premium interactive preview experience. Future implementation: a real GIS-powered intelligence layer for diplomatic discovery, ecosystem mapping, and strategic engagement.</p>
            <div className="atlas-filters">{atlasFilters.map((filter) => <button type="button" key={filter}>{filter}</button>)}</div>
          </div>
        </div>
      </section>

      <section className="section ivory" id="partners" aria-labelledby="partners-title">
        <SectionIntro eyebrow="Partner Ecosystem" title="An institutional coalition for African cultural diplomacy at global scale." />
        <div className="logo-wall">{partnerCategories.map((partner) => <div className="logo-tile reveal" key={partner}><span>{partner.slice(0, 2)}</span><small>{partner}</small></div>)}</div>
      </section>

      <section className="section intelligence" id="intelligence" aria-labelledby="intelligence-title">
        <SectionIntro eyebrow="Built on Intelligence" title="Connecting Culture, Policy, Investment, and Influence" copy="Africa Unveiled leverages modern digital architecture, ecosystem intelligence, and strategic engagement design to support meaningful collaboration across governments, institutions, investors, creators, and development partners." />
        <p className="supporting-statement reveal">Platform strategy, geospatial intelligence, and digital experience architecture by ETL GIS Consulting LLC.</p>
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
      <section className="section tech-partner" aria-labelledby="tech-partner-title">
        <div className="tech-partner-card reveal">
          <p className="eyebrow">Technology & Intelligence Partner</p>
          <h2 id="tech-partner-title">Built for the Future of African Diplomacy</h2>
          <p>Africa Unveiled is powered by ETL GIS Consulting LLC, a Florida-based modernization and geospatial intelligence firm specializing in enterprise GIS architecture, workflow automation, records modernization, AI-assisted operational systems, data integration, and location intelligence solutions.</p>
          <p>By combining cultural diplomacy, strategic storytelling, ecosystem intelligence, and digital engagement, the platform helps governments, institutions, creators, investors, and development partners build meaningful connections during UN General Assembly Week.</p>
          <div className="tech-partner-footer"><strong>Developed by ETL GIS Consulting LLC</strong><Link className="button secondary" href="/about/platform">Learn About the Platform Architecture</Link></div>
        </div>
      </section>

      <footer className="platform-footer">
        <div className="footer-brand"><strong>Africa Unveiled</strong><p>Premium African cultural diplomacy, media, and convening platform for UN General Assembly Week.</p><small>Developed by ETL GIS Consulting LLC</small></div>
        <nav className="footer-columns" aria-label="Footer navigation">{footerColumns.map((column) => <div key={column.title}><h3>{column.title}</h3>{column.links.map((link) => link === 'About the Platform' ? <Link href="/about/platform" key={link}>{link}</Link> : <a href={link === 'Developed by ETL GIS Consulting LLC' ? 'https://etlgis.com' : link === 'Africa Intelligence Atlas™' ? '#atlas' : '#'} key={link}>{link}</a>)}</div>)}</nav>
        <p className="technology-note">Enterprise GIS • AI Integration • Workflow Modernization • Location Intelligence</p>
      </footer>
    </main>
  );
}
