import Layout from '../../components/Layout';
import SessionList from '../../components/SessionList';
import { readJson } from '../../lib/data';

const labels = { summit:'Summit', exhibition:'Exhibition', challenge:'Creative-Economy Challenge', awards:'Awards' };
export async function getStaticPaths(){ return { paths:Object.keys(labels).map((slug)=>({params:{slug}})), fallback:false }; }
export async function getStaticProps({params}){ const programs = readJson('programs.json'); return { props:{ slug:params.slug, sessions:programs[params.slug] } }; }

export default function ProgramPage({ slug, sessions }) { return <Layout title={`${labels[slug]} | Africa Unveiled at UNGA`}>
  <section className="section"><p className="eyebrow">Program Architecture</p><h1>{labels[slug]}</h1><div className="actions">{Object.entries(labels).map(([key,label])=><a className="button alt" href={`/program/${key}`} key={key}>{label}</a>)}</div><SessionList sessions={sessions}/></section>
</Layout>; }
