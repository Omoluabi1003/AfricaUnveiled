import { readJson } from '../../lib/data';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const user = readJson('users.json').find((u) => u.email === req.body.email && u.password === req.body.password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  return res.status(200).json({ name: user.name, email: user.email, role: user.role });
}
