// External-only background registry for Africa Unveiled.
// Do not download these assets, import image files, or commit binary media.
// Source URLs intentionally remain remote so GitHub Pages and Vercel can render without image optimization or API keys.
export const backgroundAssets = {
  hero: {
    id: 'hero-africa-city-leadership',
    title: 'Africa-first city leadership atmosphere',
    theme: 'African city skyline, leadership, culture, and global convening',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/President_Biden_and_Secretary_Blinken_Participate_in_the_U.S.-Africa_Summit_Leaders_Session_%2852565976744%29.jpg',
    credit: 'Wikimedia Commons / U.S. Department of State',
    licenseNote: 'Public domain State Department photo via Wikimedia Commons; external Special:Redirect URL only.'
  },
  house: {
    id: 'house-diplomatic-hospitality',
    title: 'Diplomatic hospitality and executive gathering',
    theme: 'Premium hospitality, diplomacy, and executive gathering',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vice_President_Harris_at_the_2022_US-Africa_Leaders_Summit_Working_Lunch.jpg',
    credit: 'Wikimedia Commons / Office of the Vice President',
    licenseNote: 'Public domain U.S. government photo via Wikimedia Commons; external URL only.'
  },
  live: {
    id: 'live-broadcast-stage',
    title: 'Broadcast, newsroom, and live-stage coverage',
    theme: 'Newsroom, broadcast, speaker, and media-style imagery',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/President_Donald_J._Trump_at_a_working_lunch_with_African_leaders_at_the_United_Nations_General_Assembly_%2837425397882%29.jpg',
    credit: 'Wikimedia Commons / White House',
    licenseNote: 'Public domain White House photo via Wikimedia Commons; external URL only.'
  },
  voices: {
    id: 'voices-african-creatives',
    title: 'African creative economy and cultural voices',
    theme: 'Fashion, music, film, and cultural performance',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Waxprints_in_a_West_African_Shop.jpg',
    credit: 'Wikimedia Commons',
    licenseNote: 'Creative Commons licensed Wikimedia Commons file; attribution review required for final publication.'
  },
  program: {
    id: 'program-cultural-diplomacy',
    title: 'Program architecture for cultural diplomacy',
    theme: 'African art, textiles, architecture, and heritage',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/African_fabric.jpg',
    credit: 'Wikimedia Commons',
    licenseNote: 'Creative Commons licensed Wikimedia Commons textile file; attribution review required for final publication.'
  },
  atlas: {
    id: 'atlas-africa-map-corridors',
    title: 'Africa map, geography, and trade corridor intelligence',
    theme: 'Africa geography, city networks, map, and connected continent visuals',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lagos_skyline_with_marina.jpg',
    credit: 'Wikimedia Commons',
    licenseNote: 'Wikimedia Commons city image; external Special:Redirect URL only.'
  },
  partners: {
    id: 'partners-institutional-convening',
    title: 'Institutional delegation and coalition convening',
    theme: 'African leaders, institutions, delegations, and UNGA-level convening',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Africa_Adaptation_Summit_2022.jpg',
    credit: 'Wikimedia Commons / Teamresilience',
    licenseNote: 'Wikimedia Commons file documenting African leaders at the Africa Adaptation Summit; external URL only.'
  }
};

export const backgroundStoryAssets = [
  backgroundAssets.hero,
  backgroundAssets.house,
  backgroundAssets.live,
  backgroundAssets.voices,
  backgroundAssets.program,
  backgroundAssets.atlas,
  backgroundAssets.partners
];
