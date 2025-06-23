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
      <body
        className={`${switzer.className} antialiased font-normal`}
      >
        {children}
      </body>
    </html>
  );
}
