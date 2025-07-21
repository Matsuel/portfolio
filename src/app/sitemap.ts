import { MetadataRoute } from "next";

export const BASE_URL = 'https://www.matheolang.fr';

export const paths = [
    '/',
    '/matheolang.pdf',
    '/mentions-legales',
    '/favicon.ico',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const urls = paths.map(path => `${BASE_URL}${path}`);
    return urls.map(url => {
        const path = paths.find(path => url.endsWith(path)) as string;
        return {
            url,
            lastModified: new Date().toISOString(),
            priority: getPriority(path)
        };
    });
}

function getPriority(path: string): number {
    switch (path) {
        case '/':
            return 1;
        case '/cv.pdf':
            return 0.9;
        case '/mentions-legales':
            return 0.8;
        default:
            return 0.5;
    }
}