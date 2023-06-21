/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:slug*',
          destination: `https://login.docker.com/:slug*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
