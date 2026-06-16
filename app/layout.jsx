import './globals.css';
import './external-media.css';

export const metadata = {
  metadataBase: new URL('https://africaunveiled.org'),
  title: 'Africa Unveiled | UNGA Cultural Diplomacy Platform',
  description: 'Africa Unveiled is the premium African cultural diplomacy, media, and convening platform for UN General Assembly Week, with platform strategy and digital experience architecture by ETL GIS Consulting LLC.',
  keywords: ['UNGA', 'Africa Unveiled', 'cultural diplomacy', 'Africa investment', 'creative economy', 'New York', 'UN General Assembly Week', 'African soft power', 'diaspora leaders', 'ETL GIS Consulting LLC'],
  openGraph: {
    title: 'Africa Unveiled | Africa’s Voice. Culture. Investment. Diplomacy.',
    description: 'The premium African cultural diplomacy, media, and convening platform for UNGA Week in New York. Developed with ETL GIS Consulting LLC.',
    url: 'https://africaunveiled.org',
    siteName: 'Africa Unveiled',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Africa Unveiled | UNGA Cultural Diplomacy Platform',
    description: 'A premium UNGA platform convening leaders, creators, policymakers, investors, and institutions shaping Africa’s global future.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
