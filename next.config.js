/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*/',
          destination: `https://github.com/:path*/`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
