import './globals.css';

export const metadata = {
  title: 'Africa Unveiled @ UNGA',
  description: 'A cultural diplomacy and African soft-power platform for UNGA week.',
  openGraph: {
    title: 'Africa Unveiled @ UNGA',
    description: 'Live programming, partners, and affiliate events for Africa Unveiled during UNGA week.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
