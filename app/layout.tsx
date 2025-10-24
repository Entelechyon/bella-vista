import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bella Vista Italian Restaurant | Authentic Italian Dining in Melbourne",
  description: "Experience authentic Italian cuisine at Bella Vista. Traditional recipes, finest ingredients, and warm hospitality in the heart of Melbourne.",
  keywords: "Italian restaurant, Melbourne dining, authentic Italian food, fine dining, Italian cuisine",
  metadataBase: new URL('https://bella-vista.xyz'),
  openGraph: {
    title: "Bella Vista Italian Restaurant",
    description: "Authentic Italian Flavours in the Heart of Melbourne",
    url: 'https://bella-vista.xyz',
    siteName: 'Bella Vista',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
