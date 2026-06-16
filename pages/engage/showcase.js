import Layout from '../../components/Layout';
import { readJson } from '../../lib/data';
export async function getServerSideProps(){return{props:{stories:readJson('stories.json').filter(s=>s.approved)}}}
export default function Showcase({stories}){ return <Layout title="Story Showcase | Africa Unveiled"><section className="section"><p className="eyebrow">Selected stories</p><h1>Audience questions shaping the conversation</h1><div className="cards">{stories.map(s=><article className="card" key={s.id}><h2>{s.name}</h2><p>{s.story}</p></article>)}</div></section></Layout> }
