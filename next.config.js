/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensure you are using the static export mode
    exportTrailingSlash: true,
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/banner/' : '',
  }
  
  module.exports = nextConfig
  