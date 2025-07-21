import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "matheolang.fr",
            protocol: "http",
          }
        ],
        destination: "https://www.matheolang.fr/:path*",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
