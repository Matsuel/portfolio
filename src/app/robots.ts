import { MetadataRoute } from "next";
import { BASE_URL, paths } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: paths,
                disallow: [
                    '/api',
                    '/_next',
                ],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    }
}