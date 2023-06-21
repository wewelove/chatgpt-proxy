/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:slug*',
          destination: `https://hub.docker.com/:slug*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
