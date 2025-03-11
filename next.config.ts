import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'node-loader'
    })

    return config
  },
};

export default withNextIntl(nextConfig);
