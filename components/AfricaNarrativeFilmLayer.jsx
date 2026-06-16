import { africaNarrativeVideoPlaylist } from '../lib/externalMediaAssets';

export default function AfricaNarrativeFilmLayer({ assetKey = 'culturalIdentity', compact = false, label }) {
  const asset = africaNarrativeVideoPlaylist[assetKey] || africaNarrativeVideoPlaylist.culturalIdentity;

  return (
    <div
      className={compact ? 'africa-film-layer africa-film-layer--compact' : 'africa-film-layer'}
      data-source={asset.id}
      aria-hidden="true"
    >
      <video
        className="africa-film-layer__media"
        autoPlay={!compact}
        muted
        loop
        playsInline
        preload={compact ? 'none' : 'metadata'}
        title={label || asset.title}
      >
        <source src={asset.url} type={asset.mimeType} />
      </video>
      <div className="africa-film-layer__fallback" />
      <div className="africa-film-layer__overlay" />
    </div>
  );
}
