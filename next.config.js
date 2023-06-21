/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: "https://hub.docker.com/:slug*",
      }
    ];
  },
};

module.exports = nextConfig;
