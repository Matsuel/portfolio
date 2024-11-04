import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Toaster />
      <Analytics />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
