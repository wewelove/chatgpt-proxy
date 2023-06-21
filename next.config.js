/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/support/:slug*",
        destination: "https://hub.docker.com/support/:slug*",
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
