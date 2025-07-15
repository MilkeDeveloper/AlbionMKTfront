import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'render.albiononline.com',
        pathname: '/**', // permite qualquer path
      },
    ],
  },
};

export default nextConfig;
