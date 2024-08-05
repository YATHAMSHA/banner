/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/banner',
  assetPrefix: '/banner/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
