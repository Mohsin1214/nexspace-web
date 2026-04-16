/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compress:       true,
  generateEtags:  true,
  poweredByHeader: false,
};

module.exports = nextConfig;
