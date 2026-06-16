import AfricaNarrativeFilmLayer from './AfricaNarrativeFilmLayer';

export default function ExternalHeroVideo({ panelId = 'primary' }) {
  if (panelId !== 'primary') return null;

  return <AfricaNarrativeFilmLayer assetKey="culturalIdentity" />;
}
