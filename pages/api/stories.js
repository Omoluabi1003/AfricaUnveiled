import { readJson, writeJson } from '../../lib/data';

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(readJson('stories.json').filter((s) => s.approved));
  if (req.method === 'POST') { const stories = readJson('stories.json'); const story = { id:`story-${Date.now()}`, approved:false, ...req.body }; stories.push(story); writeJson('stories.json', stories); return res.status(201).json(story); }
  res.setHeader('Allow', ['GET','POST']); return res.status(405).end();
}
