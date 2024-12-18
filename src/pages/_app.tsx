import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import SectionProvider from "@/providers/SectionProvider";
import MouseProvider from "@/providers/MouseProvider";
import LoadingProvider from "@/providers/LoadingProvider";
import KeysProvider from "@/providers/KeysProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <KeysProvider>
        <LoadingProvider>
          <SectionProvider>
            <MouseProvider>
              <Toaster />
              <Analytics />
              <Component {...pageProps} />
            </MouseProvider>
          </SectionProvider>
        </LoadingProvider>
      </KeysProvider>
    </ThemeProvider>
  );
}
