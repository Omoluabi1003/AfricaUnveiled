import { readJson, writeJson } from '../../lib/data';

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(readJson('events.json'));
  if (req.method === 'POST') {
    const events = readJson('events.json');
    const event = { id: `event-${Date.now()}`, approved: false, ...req.body };
    events.push(event); writeJson('events.json', events);
    return res.status(201).json(event);
  }
  res.setHeader('Allow', ['GET','POST']); return res.status(405).end();
}
