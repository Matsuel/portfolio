import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import NavbarProvider from "@/providers/NavbarProvider";

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
    <html lang="fr">
      <body>
        <NavbarProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NavbarProvider>
      </body>
    </html>
  );
}
