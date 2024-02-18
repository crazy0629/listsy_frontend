/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        // hostname: "192.168.147.51",
        // hostname: "3.239.201.57",
        port: "8000",
      },
    ],
  },
};

module.exports = nextConfig;
