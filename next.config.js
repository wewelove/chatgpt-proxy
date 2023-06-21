/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://github.com/:path*`,
        },
        {
          source: '/authorize?:slug*',
          destination: `https://login.docker.com/authorize?:slug*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
