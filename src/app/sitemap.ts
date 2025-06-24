export const BASE_URL = 'https://matheolang.fr';

export default async function sitemap() {
    const paths = [
        '/',
        '/mentions-legales',
    ];
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
        case '/mentions-legales':
            return 0.9;
        default:
            return 0.5;
    }
}