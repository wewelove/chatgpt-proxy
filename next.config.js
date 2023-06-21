/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/github/:slug*",
        destination: "https://github.com/:slug*",
      },
      {
        source: "/proxy/:slug*",
        destination: "https://api.openai.com/:slug*",
      },
      {
        source: "/proxy-sse/:slug*",
        destination: "/api/proxy-sse?path=:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
