import AfricaNarrativeFilmLayer from './AfricaNarrativeFilmLayer';
import { heroVideoAssets } from '../lib/externalMediaAssets';

export default function ExternalHeroVideo({ panelId = 'primary' }) {
  if (panelId !== 'primary') return null;

  return <AfricaNarrativeFilmLayer assetKey={heroVideoAssets.primary.assetKey} />;
}
