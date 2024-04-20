/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asterix.com",
      },
    ],
  },
};

module.exports = nextConfig;
