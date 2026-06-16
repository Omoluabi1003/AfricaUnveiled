import fs from 'fs';
import path from 'path';

const dataPath = (file) => path.join(process.cwd(), 'data', file);

export function readJson(file) {
  return JSON.parse(fs.readFileSync(dataPath(file), 'utf8'));
}

export function writeJson(file, value) {
  fs.writeFileSync(dataPath(file), JSON.stringify(value, null, 2));
}

export function sortByDateTime(items) {
  return [...items].sort((a, b) => `${a.date || a.day} ${a.time}`.localeCompare(`${b.date || b.day} ${b.time}`));
}
