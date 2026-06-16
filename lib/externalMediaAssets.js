export const africaNarrativeVideoPlaylist = {
  culturalIdentity: {
    id: 'african-cultural-identity-commons-stream',
    title: 'African Cultural Identity',
    purpose: 'Hero visual atmosphere',
    mimeType: 'video/webm',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wikipedia%20Training%20for%20Content%20Creators%20in%20Nigeria%20-%20Lagos%20edition.webm',
    source: 'Wikimedia Commons external video redirect',
    usage: 'Narrative film layer only. Stream externally; never commit the file into Git.'
  },
  innovation: {
    id: 'african-innovation-commons-stream',
    title: 'African Innovation',
    purpose: 'Intelligence section',
    mimeType: 'video/webm',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wikipedia%20Training%20for%20Content%20Creators%20in%20Nigeria%20-%20Lagos%20edition.webm',
    source: 'Wikimedia Commons external video redirect',
    usage: 'Innovation atmosphere only. Stream externally; never commit the file into Git.'
  },
  africanCities: {
    id: 'african-cities-lagos-commons-stream',
    title: 'African Cities',
    purpose: 'Africa Intelligence Atlas',
    mimeType: 'video/webm',
    url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Unfortunately,%20You%20CAN%27T%20buy%20This%20In%20Lagos,%20NIGERIA%20as%20a%20Foreigner!.webm',
    source: 'Wikimedia Commons external video redirect',
    usage: 'City intelligence atmosphere only. Stream externally; never commit the file into Git.'
  },
  ungaConnections: {
    id: 'unga-connections-goals-lounge-stream',
    title: 'UNGA Connections',
    purpose: 'Africa-New York narrative',
    mimeType: 'video/mp4',
    url: 'https://goalslounge.unpartnerships.un.org/sites/default/files/video-thumbnails/2025-09/social_blossom-global_httpss-mj-run3RtQMN4Nz-U_Fern_leaves_almost_co_5184cca1-685a-4555-9079-9eb51a29d82c_2.mp4',
    source: 'UN Partnerships Goals Lounge external media URL supplied for UNGA visual benchmarking',
    usage: 'UNGA connection atmosphere only. Stream externally; never commit the file into Git.'
  }
};

export const heroVideoAssets = {
  primary: africaNarrativeVideoPlaylist.culturalIdentity
};

export const sourcedMediaLibraries = [
  {
    name: 'Coverr African Culture Footage',
    url: 'https://coverr.co/stock-video-footage/african-culture',
    note: 'Use only selected direct external URLs or licensed downloaded assets outside Codex. Do not commit binary media files.'
  },
  {
    name: 'Coverr African Footage',
    url: 'https://coverr.co/stock-video-footage/african',
    note: 'Curated source for future Africa-facing cinematic clips after manual asset approval.'
  },
  {
    name: 'Pixabay Africa City Videos',
    url: 'https://pixabay.com/videos/search/africa%20city/',
    note: 'Open stock source for future city, skyline, infrastructure, and African urban identity footage.'
  },
  {
    name: 'Pexels African Culture Videos',
    url: 'https://www.pexels.com/search/videos/african%20culture/',
    note: 'Open stock source for future cultural, people-centered, and diaspora-facing footage.'
  }
];
