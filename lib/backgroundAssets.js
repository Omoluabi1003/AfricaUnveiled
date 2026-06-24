// External-only background registry for Africa Unveiled.
// Do not download these assets, import image files, or commit binary media.
// Source URLs intentionally remain remote so GitHub Pages and Vercel can render without image optimization or API keys.
export const africaUnveiledLogoUrl = 'https://raw.githubusercontent.com/Omoluabi1003/AfricaUnveiled/main/Africa%20Unveiled%20logo.jpeg';

const commons = (fileName) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${fileName}`;

export const backgroundAssets = {
  hero: {
    id: 'hero-africa-diplomacy-unga',
    title: 'African diplomacy and UNGA-level convening',
    theme: 'African diplomacy, leadership, culture, and UNGA-level convening',
    url: commons('President_Biden_and_Secretary_Blinken_Participate_in_the_U.S.-Africa_Summit_Leaders_Session_%2852565976744%29.jpg'),
    credit: 'Wikimedia Commons / U.S. Department of State',
    licenseNote: 'Public domain U.S. Department of State photo via Wikimedia Commons; external Special:Redirect URL only.'
  },
  house: {
    id: 'house-diplomatic-hospitality',
    title: 'Diplomatic hospitality and executive gathering',
    theme: 'Premium diplomatic hospitality, executive convening, African presence in New York',
    url: commons('Vice_President_Harris_at_the_2022_US-Africa_Leaders_Summit_Working_Lunch.jpg'),
    credit: 'Wikimedia Commons / Office of the Vice President',
    licenseNote: 'Public domain U.S. government photo via Wikimedia Commons; external URL only.'
  },
  live: {
    id: 'live-unga-media-coverage',
    title: 'UNGA press and live media coverage',
    theme: 'Press, broadcast, newsroom, interview, live coverage, and UNGA media energy',
    url: commons('President_Donald_J._Trump_at_a_working_lunch_with_African_leaders_at_the_United_Nations_General_Assembly_%2837425397882%29.jpg'),
    credit: 'Wikimedia Commons / White House',
    licenseNote: 'Public domain White House photo via Wikimedia Commons; external URL only.'
  },
  voices: {
    id: 'voices-african-creatives',
    title: 'African creative economy and cultural voices',
    theme: 'African leaders, creators, policymakers, business voices, and diaspora influence',
    url: commons('Waxprints_in_a_West_African_Shop.jpg'),
    credit: 'Wikimedia Commons',
    licenseNote: 'Creative Commons licensed Wikimedia Commons file; external URL only with attribution note.'
  },
  program: {
    id: 'program-government-creative-economy',
    title: 'Government, policy, and creative economy programming',
    theme: 'African government, policy, creative economy, and summit programming',
    url: commons('African_fabric.jpg'),
    credit: 'Wikimedia Commons',
    licenseNote: 'Creative Commons licensed Wikimedia Commons textile file; external URL only with attribution note.'
  },
  atlas: {
    id: 'atlas-africa-map-corridors',
    title: 'Africa map, geography, and trade corridor intelligence',
    theme: 'Africa geography, city networks, maps, innovation, and connected continent visuals',
    url: commons('Lagos_skyline_with_marina.jpg'),
    credit: 'Wikimedia Commons',
    licenseNote: 'Wikimedia Commons city image; external Special:Redirect URL only.'
  },
  partners: {
    id: 'partners-institutional-convening',
    title: 'Institutional delegation and coalition convening',
    theme: 'African institutional coalition, diplomatic rooms, government and private sector partnership',
    url: commons('Africa_Adaptation_Summit_2022.jpg'),
    credit: 'Wikimedia Commons / Teamresilience',
    licenseNote: 'Wikimedia Commons file documenting African leaders at the Africa Adaptation Summit; external URL only.'
  },
  culture: {
    id: 'culture-diplomacy-identity',
    title: 'African cultural diplomacy and institutional identity',
    theme: 'African cultural diplomacy, identity, heritage, and institutional trust',
    url: commons('Festival_Timitar_2016_-_Amazigh_culture.jpg'),
    credit: 'Wikimedia Commons',
    licenseNote: 'Wikimedia Commons cultural image; external URL only with attribution note.'
  },
  enterprise: {
    id: 'enterprise-african-innovation',
    title: 'African entrepreneurs, SMEs, and innovation',
    theme: 'African entrepreneurs, youth innovation, SMEs, creative industries, and investment',
    url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1800&q=80',
    credit: 'Unsplash',
    licenseNote: 'Unsplash-hosted external URL used without download; verify final visual selection before publication.'
  },
  marketplace: {
    id: 'marketplace-african-trade-culture',
    title: 'African trade, culture, and creative marketplace',
    theme: 'African trade, culture, creative marketplace, fashion, art, design, food, and innovation',
    url: commons('Makola_Market_Accra_Ghana.jpg'),
    credit: 'Wikimedia Commons',
    licenseNote: 'Wikimedia Commons marketplace image; external URL only with attribution note.'
  },
  excellence: {
    id: 'excellence-african-achievement',
    title: 'African excellence and achievement',
    theme: 'African excellence, leadership, culture, innovation, and achievement',
    url: commons('African_Union_Conference_Center_and_Office_Complex.jpg'),
    credit: 'Wikimedia Commons',
    licenseNote: 'Wikimedia Commons institutional image; external URL only with attribution note.'
  }
};

export const pageBackgroundAssets = {
  '/': backgroundAssets.hero,
  about: backgroundAssets.culture,
  programme: backgroundAssets.program,
  speakers: backgroundAssets.voices,
  partners: backgroundAssets.partners,
  exhibitors: backgroundAssets.marketplace,
  'creative-enterprise-challenge': backgroundAssets.enterprise,
  awards: backgroundAssets.excellence,
  house: backgroundAssets.house,
  'media-centre': backgroundAssets.live,
  news: backgroundAssets.live,
  gallery: backgroundAssets.marketplace,
  registration: backgroundAssets.partners,
  contact: backgroundAssets.partners,
  'get-involved': backgroundAssets.voices,
  convener: backgroundAssets.excellence
};

export const backgroundStoryAssets = Object.values(backgroundAssets);
