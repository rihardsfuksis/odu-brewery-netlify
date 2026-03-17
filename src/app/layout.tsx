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
  title: "ODU Brewery | Craft Beer",
  description: "Small craft beer brewery. Handcrafted beers with passion.",
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
