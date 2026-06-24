export const brand = {
  name: 'Africa Unveiled',
  tagline: 'Culture. Creativity. Commerce. Diplomacy.',
  theme: "Cultural Diplomacy as Africa's Soft Power for Sustainable Development",
  unga: 'Africa Unveiled 2026',
  dateLine: 'September 2026 | New York City | On the Sidelines of the 81st United Nations General Assembly (UNGA 81)',
};

export const officialContent = {
  about: "Africa Unveiled is a premier global platform convened on the sidelines of the United Nations General Assembly to showcase Africa's culture, creativity, innovation, investment opportunities and development aspirations.",
  vision: "To become the leading global platform positioning Africa's culture and creativity as drivers of diplomacy, economic transformation and sustainable development.",
  mission: "To convene governments, institutions, investors, creatives, entrepreneurs and global stakeholders in promoting cultural diplomacy, investment partnerships and sustainable development initiatives that unlock Africa's potential.",
  pillars: ['Voice', 'Vision', 'Vibrance'],
};

export const programmeDays = [
  { day: 'Day One', title: 'Global Forum on Cultural Diplomacy and Sustainable Development', components: ['Opening diplomatic forum', 'Ministerial and institutional dialogue', 'Sustainable development partnership roundtables', 'Cultural diplomacy policy briefings'] },
  { day: 'Day Two', title: 'Africa Unveiled Creative Economy Summit', components: ['Creative economy keynotes', 'Founder and investor sessions', 'Film, fashion, music, food, and design showcases', 'Creative Enterprise Challenge pitch track'] },
  { day: 'Day Three', title: 'Africa Unveiled Cultural Experience', components: ['Cultural performances', 'Awards and recognition moments', 'Exhibition walk-throughs', 'VIP reception and closing commitments'] },
];

export const registrationPortals = ['Delegates', 'Speakers', 'Exhibitors', 'Media Accreditation', 'Volunteers', 'Sponsors and Partners', 'VIP Guests'];

export const mediaCentre = ['Press Releases', 'Media Accreditation', 'Downloadable Media Kit', 'Photo Gallery', 'Video Gallery', 'Newsletter Subscription'];

export const sponsorshipItems = ['Sponsorship Packages', 'Partnership Proposal Download CTA', 'Online Enquiry Forms', 'Secure File Upload placeholder'];

export const convener = {
  title: 'About the Convener',
  organization: 'PRINCEWOOD GLOBAL ASSOCIATES LTD',
  name: 'Stephen Adedolapo Haastrup',
  role: 'President/CEO',
  email: 'shaastrup73@gmail.com',
  phone: '+234 806 572 0037',
};

export const externalAssets = {
  sponsorshipDeck: 'https://africaunveiled.org/assets/africa-unveiled-sponsorship-deck.pdf',
  mediaKit: 'https://africaunveiled.org/assets/africa-unveiled-media-kit.pdf',
  gallery: [
    'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1400&q=80',
  ],
  video: 'https://www.youtube.com/@UnitedNations',
};

export const pageContent = {
  about: { eyebrow: 'About', title: 'A premier global platform for African cultural diplomacy.', copy: officialContent.about, items: ['Vision', officialContent.vision, 'Mission', officialContent.mission] },
  programme: { eyebrow: 'Programme', title: 'Three days of diplomacy, creative economy, and culture.', copy: 'The official UNGA 81 programme architecture is designed as a premium guest journey for governments, institutions, investors, creatives, entrepreneurs, and media.', type: 'programme' },
  speakers: { eyebrow: 'Speakers', title: 'Voices shaping Africa’s global narrative.', copy: 'Speaker cards are structured for ministers, institutional leaders, investors, creatives, entrepreneurs, diaspora leaders, and media voices. Official speaker confirmations can be connected as they are approved.', type: 'speakers' },
  partners: { eyebrow: 'Partners', title: 'A coalition for cultural diplomacy at global scale.', copy: 'Partner pathways support governments, multilateral institutions, foundations, media, universities, corporate sponsors, and cultural organizations.', type: 'sponsors' },
  exhibitors: { eyebrow: 'Exhibitors', title: 'Premium exhibition pathways for African creativity and commerce.', copy: 'Exhibitors can register interest for curated showcases across design, food, film, music, heritage, tourism, innovation, and investment-ready enterprises.', type: 'form' },
  'creative-enterprise-challenge': { eyebrow: 'Challenge', title: 'Creative Enterprise Challenge.', copy: 'A pitch and showcase pathway for creators and founders connecting African intellectual property, cultural enterprise, and innovation to partners, markets, and capital.', type: 'form' },
  awards: { eyebrow: 'Awards', title: 'Voice, Vision, Vibrance Awards.', copy: 'Honoring cultural leaders and institutions advancing Africa’s global imagination, sustainable development aspirations, and creative economy leadership.', type: 'cards' },
  house: { eyebrow: 'Africa Unveiled House', title: 'A New York destination for UNGA 81 week.', copy: 'The House brings together executive hospitality, diplomatic roundtables, cultural pavilions, creator studios, investment lounges, and partner-hosted sessions.', type: 'cards' },
  'media-centre': { eyebrow: 'Media Centre', title: 'Press, accreditation, media kit, galleries, and newsletter access.', copy: 'A production-ready static media centre with integration placeholders for accreditation workflows, downloadable kits, photo galleries, video galleries, and newsletter systems.', type: 'media' },
  news: { eyebrow: 'News', title: 'Announcements and editorial updates.', copy: 'Press releases, partner announcements, programme updates, and daily UNGA 81 dispatches will publish here as official content is released.', type: 'news' },
  gallery: { eyebrow: 'Gallery', title: 'External media gallery.', copy: 'Gallery modules use external approved URLs only and do not commit photo or video binaries to the repository.', type: 'gallery' },
  registration: { eyebrow: 'Registration', title: 'Choose your Africa Unveiled 2026 pathway.', copy: 'Static forms collect structured intent without faking database persistence. They are ready to connect to Supabase, Airtable, Firebase, Formspree, HubSpot, or a custom API.', type: 'registration' },
  contact: { eyebrow: 'Contact', title: 'Reach the Africa Unveiled team.', copy: 'Use the enquiry architecture below for partnership, media, delegate, sponsor, exhibitor, VIP, and general requests.', type: 'form' },
  'get-involved': { eyebrow: 'Get Involved', title: 'Participate as a delegate, speaker, exhibitor, volunteer, sponsor, or media partner.', copy: 'Every pathway is intentionally structured to protect protocol, editorial quality, sponsor clarity, and a premium guest experience.', type: 'registration' },
  convener: { eyebrow: convener.title, title: `${convener.organization}`, copy: `${convener.name}, ${convener.role}, convenes Africa Unveiled through PRINCEWOOD GLOBAL ASSOCIATES LTD.`, type: 'convener' },
};
