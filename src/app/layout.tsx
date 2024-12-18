import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheo Lang",
  description: "Portfolio de Matheo Lang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
