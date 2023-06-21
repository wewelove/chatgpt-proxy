/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: "https://github.com/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
