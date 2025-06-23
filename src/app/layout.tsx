import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
  src: "../fonts/Switzer.ttf",
});

export const metadata: Metadata = {
  title: "Mathéo Lang",
  description: "Portfolio de Mathéo Lang, développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="WTHCIE4nxxDGFC4n0qKV7xWd6bz5OMbZTBI_1X9AN_U" />
      </head>
      <body
        className={`${switzer.className} antialiased font-normal`}
      >
        {children}
      </body>
    </html>
  );
}
