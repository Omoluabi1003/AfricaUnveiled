'use client';

import { DivIcon } from 'leaflet';
import { MapContainer, Marker, Popup, Polyline, TileLayer, ZoomControl } from 'react-leaflet';

const africaBounds = [
  [-37.8, -26.5],
  [39.8, 59.8],
];

const hubMarkers = [
  { name: 'New York UNGA Hub', type: 'UNGA Activation', coordinates: [40.7128, -74.006], relevance: 'Global convening node connecting African delegations, media rooms, funders, and invitation-only UNGA programming.', isAnchor: true },
  { name: 'Lagos', type: 'Creative Economy', coordinates: [6.5244, 3.3792], relevance: 'A creative-industry powerhouse for music, film, fashion, media, and African cultural exports.' },
  { name: 'Accra', type: 'Diaspora and Culture', coordinates: [5.6037, -0.187], relevance: 'A diaspora gateway linking heritage travel, cultural diplomacy, and transatlantic relationship-building.' },
  { name: 'Nairobi', type: 'Innovation', coordinates: [-1.2921, 36.8219], relevance: 'An East African innovation hub for startups, technology partnerships, and impact storytelling.' },
  { name: 'Kigali', type: 'Governance and Technology', coordinates: [-1.9441, 30.0619], relevance: 'A governance and convening center associated with digital modernization and institutional credibility.' },
  { name: 'Johannesburg', type: 'Investment', coordinates: [-26.2041, 28.0473], relevance: 'A capital-market and corporate gateway for investment, production infrastructure, and regional scale.' },
  { name: 'Addis Ababa', type: 'African Union', coordinates: [9.03, 38.74], relevance: 'The African Union diplomatic center anchoring continental policy, multilateral engagement, and coalition legitimacy.' },
  { name: 'Dakar', type: 'Arts and Policy', coordinates: [14.7167, -17.4677], relevance: 'A francophone cultural and policy corridor for arts, civil society, and Atlantic-facing diplomacy.' },
  { name: 'Cairo', type: 'Civilization and Diplomacy', coordinates: [30.0444, 31.2357], relevance: 'A historic diplomatic and civilization corridor linking North Africa, the Mediterranean, and global institutions.' },
  { name: 'Casablanca', type: 'Finance and Connectivity', coordinates: [33.5731, -7.5898], relevance: 'A finance and air-connectivity node linking African markets to Europe, the Middle East, and the Atlantic.' },
];

const routeOrigins = ['Lagos', 'Accra', 'Nairobi', 'Johannesburg', 'Addis Ababa', 'Dakar', 'Cairo', 'Casablanca'];
const newYork = hubMarkers[0].coordinates;
const connectionRoutes = hubMarkers
  .filter((marker) => routeOrigins.includes(marker.name))
  .map((marker) => [marker.coordinates, newYork]);

const createHubIcon = (isAnchor = false) => new DivIcon({
  className: isAnchor ? 'atlas-div-icon atlas-div-icon-anchor' : 'atlas-div-icon',
  html: `<span aria-hidden="true"><i></i></span>`,
  iconSize: isAnchor ? [30, 30] : [24, 24],
  iconAnchor: isAnchor ? [15, 15] : [12, 12],
  popupAnchor: [0, -14],
});

export default function AfricaIntelligenceAtlas() {
  return (
    <div className="atlas-map-shell" aria-label="Interactive Africa Intelligence Atlas map">
      <MapContainer
        center={[1.6508, 17.6791]}
        zoom={3}
        minZoom={2}
        maxZoom={8}
        maxBounds={africaBounds}
        maxBoundsViscosity={0.65}
        scrollWheelZoom={false}
        zoomControl={false}
        className="atlas-leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {connectionRoutes.map((route) => (
          <Polyline key={`${route[0].join(',')}-nyc`} positions={route} pathOptions={{ color: '#f1d99d', weight: 1.35, opacity: 0.54, dashArray: '7 10' }} />
        ))}
        {hubMarkers.map((marker) => (
          <Marker key={marker.name} position={marker.coordinates} icon={createHubIcon(marker.isAnchor)}>
            <Popup className="atlas-popup">
              <div className="atlas-popup-card">
                <strong>{marker.name}</strong>
                <span>{marker.type}</span>
                <p>{marker.relevance}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="atlas-map-label top-left">Live Hub</div>
      <div className="atlas-map-label bottom-left">Cultural Corridors</div>
      <div className="atlas-map-label top-right">Coalition Layer</div>
    </div>
  );
}
