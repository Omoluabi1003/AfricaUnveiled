import Layout from '../../components/Layout';
import { readJson } from '../../lib/data';

export async function getStaticProps() {
  return { props: { stories: readJson('stories.json').filter((story) => story.approved) } };
}

export default function Showcase({ stories }) {
  return <Layout title="Story Showcase | Africa Unveiled"><section className="section"><p className="eyebrow">Selected stories</p><h1>Audience questions shaping the conversation</h1><div className="cards">{stories.map((story) => <article className="card" key={story.id}><h2>{story.name}</h2><p>{story.story}</p></article>)}</div></section></Layout>;
}
