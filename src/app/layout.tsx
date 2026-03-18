import type { Metadata } from "next";
import { Bebas_Neue, Oswald, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://odubrewery.com"),
  title: "ODU Brewery | Craft Beer",
  description: "Craft beer brewers from Latvia. Handcrafted beers with passion.",
  openGraph: {
    title: "ODU Brewery | Craft Beer",
    description: "Craft beer brewers from Latvia. Handcrafted beers with passion.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${oswald.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
