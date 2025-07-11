import type { Metadata } from "next";
import "../globals.css";
import { BASE_URL } from "../sitemap";
import {metadata as globalMetadata} from "../layout";
import { switzer } from "@/fonts/switzer";

export const metadata: Metadata = {
    ...globalMetadata,
    title: "Mathéo Lang - Mentions Légales",
    description: "Mentions Légales du site de Mathéo Lang, développeur web",
    openGraph: {
        ...globalMetadata.openGraph,
        title: "Mathéo Lang - Mentions Légales",
        description: "Mentions Légales du site de Mathéo Lang, développeur web",
        url: `${BASE_URL}/mentions-legales`,
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
