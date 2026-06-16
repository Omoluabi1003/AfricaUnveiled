import { heroVideoAssets } from '../lib/externalMediaAssets';

export default function ExternalHeroVideo({ panelId = 'primary' }) {
  if (panelId !== 'primary') return null;

  const asset = heroVideoAssets.primary;

  return (
    <div className="external-hero-video" aria-hidden="true" data-source={asset.id}>
      <video
        className="external-hero-video__media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={asset.url} type="video/mp4" />
      </video>
      <div className="external-hero-video__veil" />
    </div>
  );
}
