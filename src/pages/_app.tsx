import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import SectionProvider from "@/providers/Section";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SectionProvider>
        <Toaster />
        <Analytics />
        <Component {...pageProps} />
      </SectionProvider>
    </ThemeProvider>
  );
}
