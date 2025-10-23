import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bella Vista Italian Restaurant | Authentic Italian Dining in Melbourne",
  description: "Experience authentic Italian cuisine at Bella Vista. Traditional recipes, finest ingredients, and warm hospitality in the heart of Melbourne.",
  keywords: "Italian restaurant, Melbourne dining, authentic Italian food, fine dining, Italian cuisine",
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
