/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? 'export' : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
  },
  basePath: isGithubPages ? '/AfricaUnveiled' : '',
  assetPrefix: isGithubPages ? '/AfricaUnveiled/' : '',
};

module.exports = nextConfig;
