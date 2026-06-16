'use client';

import dynamic from 'next/dynamic';

const AfricaIntelligenceAtlas = dynamic(() => import('./AfricaIntelligenceAtlas'), {
  ssr: false,
  loading: () => <div className="atlas-map-loading" role="status">Loading Africa Intelligence Atlas™…</div>,
});

export default function AfricaIntelligenceAtlasLoader() {
  return <AfricaIntelligenceAtlas />;
}
