import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'], 
  // choose what you need 
}) 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monstercat-like example page",
  description: "Monstercat-like example page created using Next.JS, TypeScript and Tailwind",
  icons: { 
    icon: "/icon.png", 
  },
  openGraph: {
    title: "Monstercat-like example page",
    description: "Monstercat-like example page created using Next.JS, TypeScript and Tailwind",
    images: [
      {
        url: "/images/1200x1200bf-60.jpg",
        width: 200,
        height: 200,
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/images/1200x1200bf-60.jpg"],
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
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
