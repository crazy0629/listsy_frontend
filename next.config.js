/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "192.168.147.51",
        hostname: "3.89.134.159",
        port: "8000",
      },
    ],
  },
};

module.exports = nextConfig;
