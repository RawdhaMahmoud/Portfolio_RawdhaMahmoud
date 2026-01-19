import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readme-typing-svg.herokuapp.com',
      },
    ],
  },
};

export default nextConfig;
