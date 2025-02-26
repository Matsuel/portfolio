import type { Metadata } from "next";
import "./globals.css";
import NavbarProvider from "@/providers/NavbarProvider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Languages } from "@/types";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NotFound from "@/components/sections/NotFound";

export const metadata: Metadata = {
  title: "Matheo Lang",
  description: "Portfolio de Matheo Lang",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {


  const { locale } = await params

  if (!routing.locales.includes(locale as Languages)) {
    return (
      <html lang={locale}>
        <body>
          <NotFound />
        </body>
      </html>
    )
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavbarProvider>
            {children}
          </NavbarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
