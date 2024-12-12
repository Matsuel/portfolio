import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import SectionProvider from "@/providers/SectionProvider";
import MouseProvider from "@/providers/MouseProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SectionProvider>
        <MouseProvider>
          <Toaster />
          <Analytics />
          <Component {...pageProps} />
        </MouseProvider>
      </SectionProvider>
    </ThemeProvider>
  );
}
