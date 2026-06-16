import Head from 'next/head';
import partners from '../data/partners.json';

const groups = ['Government', 'UN Agencies', 'Foundations', 'Media'];

export default function Partners() {
  return (
    <main className="section">
      <Head><title>Partners | Africa Unveiled</title></Head>
      <h1>Partners</h1>
      {groups.map((group) => (
        <section key={group}>
          <h2>{group}</h2>
          <div className="cards">
            {partners.filter((partner) => partner.category === group).map((partner) => (
              <article className="card" key={partner.name}>
                <img src={partner.logo} alt="" width="88" height="88" />
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
