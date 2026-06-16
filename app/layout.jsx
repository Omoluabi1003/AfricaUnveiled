import './globals.css';

export const metadata = {
  metadataBase: new URL('https://africaunveiled.org'),
  title: 'Africa Unveiled | UNGA Cultural Diplomacy Platform',
  description: 'Africa Unveiled is a premium cultural diplomacy, media, investment, and creative economy platform convening leaders in New York during UN General Assembly Week.',
  keywords: ['UNGA', 'Africa Unveiled', 'cultural diplomacy', 'Africa investment', 'creative economy', 'New York', 'UN General Assembly Week', 'African soft power', 'diaspora leaders'],
  openGraph: {
    title: 'Africa Unveiled | Africa’s Voice. Culture. Investment. Diplomacy.',
    description: 'A premium UNGA-facing platform for African cultural diplomacy, live programming, partner ecosystems, media, and investment conversations in New York.',
    url: 'https://africaunveiled.org',
    siteName: 'Africa Unveiled',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Africa Unveiled | UNGA Cultural Diplomacy Platform',
    description: 'Convening leaders, creators, policymakers, investors, and institutions shaping Africa’s global future during UN General Assembly Week.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
