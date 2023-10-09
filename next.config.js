/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supimage.storage.iran.liara.space',
      },
    ],
  },
};

module.exports = nextConfig;
