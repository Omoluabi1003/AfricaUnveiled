import './globals.css';
import './external-media.css';
import { africaUnveiledLogoUrl } from '../lib/backgroundAssets';

export const metadata = {
  metadataBase: new URL('https://africaunveiled.org'),
  title: 'Africa Unveiled | UNGA Cultural Diplomacy Platform',
  description: 'Africa Unveiled is the premium African cultural diplomacy, media, and convening platform for UN General Assembly Week. Developed by ETL GIS Consulting LLC in Florida, USA.',
  keywords: ['UNGA', 'Africa Unveiled', 'cultural diplomacy', 'Africa investment', 'creative economy', 'New York', 'UN General Assembly Week', 'African soft power', 'diaspora leaders', 'ETL GIS Consulting LLC in Florida, USA.'],
  openGraph: {
    title: 'Africa Unveiled | Africa’s Voice. Culture. Investment. Diplomacy.',
    description: 'The premium African cultural diplomacy, media, and convening platform for UNGA Week in New York. Developed by ETL GIS Consulting LLC in Florida, USA.',
    images: [{ url: africaUnveiledLogoUrl, width: 1200, height: 630, alt: 'Africa Unveiled logo' }],
    url: 'https://africaunveiled.org',
    siteName: 'Africa Unveiled',
    type: 'website',
    locale: 'en_US',
  },
  icons: { icon: africaUnveiledLogoUrl, apple: africaUnveiledLogoUrl },
  twitter: {
    card: 'summary_large_image',
    title: 'Africa Unveiled | UNGA Cultural Diplomacy Platform',
    description: 'A premium UNGA platform convening leaders, creators, policymakers, investors, and institutions shaping Africa’s global future. Developed by ETL GIS Consulting LLC in Florida, USA.',
    images: [africaUnveiledLogoUrl],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
