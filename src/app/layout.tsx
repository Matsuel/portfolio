import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BASE_URL } from "./sitemap";

const switzer = localFont({
  src: "../fonts/Switzer.ttf",
});

export const metadata: Metadata = {
  title: "Mathéo Lang",
  applicationName: "Mathéo Lang - Portfolio",
  description: "Portfolio de Mathéo Lang, développeur web",
  keywords: ["Mathéo Lang", "portfolio", "développeur web", "web developer", "Bordeaux", "freelance"],
  authors: [{ name: "Mathéo Lang", url: BASE_URL }],
  creator: "Mathéo Lang",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Mathéo Lang",
    description: "Portfolio de Mathéo Lang, développeur web",
    url: BASE_URL,
    siteName: "Mathéo Lang",
    images: [
      {
        url: `${BASE_URL}/favicon.ico`,
        width: 1200,
        height: 630,
        alt: "Mathéo Lang - Portfolio de Mathéo Lang, développeur web",
      },
    ],
    locale: "fr_FR",
    type: "website",
    countryName: "France",
  },
  icons: {
    icon: `${BASE_URL}/favicon.ico`,
    shortcut: `${BASE_URL}/favicon.ico`,
    apple: `${BASE_URL}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${switzer.className} antialiased font-normal`}
      >
        {children}
      </body>
    </html>
  );
}
