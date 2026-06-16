/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: '/AfricaUnveiled',
        assetPrefix: '/AfricaUnveiled/',
      }
    : {}),
};

module.exports = nextConfig;
