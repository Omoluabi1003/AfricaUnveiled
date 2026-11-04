# Africa Unveiled at UNGA

## Project at a glance

**Category:** Africa Unveiled at UNGA 2026 media and events hub  
**Purpose:** Present agenda, partner activity and story contributions in an event-focused web experience  
**Audience:** Users, engineers, reviewers and potential partners  
**Repository:** https://github.com/Omoluabi1003/AfricaUnveiled

**Implementation and evidence:** Documented roles use mock access; local JSON submissions and demo credentials are not production authentication or durable storage.

Use the sections below for the detailed product description, engineering workflow and any available setup instructions. Roadmap statements are not guarantees of deployed functionality.

---


A modern, responsive Next.js media hub for **Africa Unveiled at UNGA 2026**. The app includes a homepage, Live @ UNGA agenda hub, program architecture pages, partner search, affiliate event submissions, mock role-based access, and a story submission showcase.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Demo accounts

- Public: `public@example.com` / `public123`
- Partner: `partner@example.com` / `partner123`
- VIP: `vip@example.com` / `vip123`

## Data sources

Sample JSON data lives in `data/`. API routes persist event and story submissions back to JSON files for local development.

## GeoAware OS Governance

This repository follows GeoAware OS v1.0.0, a design and engineering philosophy founded by Paul Iyogun for calm, geography-first digital experiences where technology quietly guides discovery. Governance details are maintained in `.geoaware/constitution.json`.

