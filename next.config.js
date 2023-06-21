/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/',
          destination: `https://github.com`,
        },
        {
          source: '/:path*',
          destination: `https://github.com/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
