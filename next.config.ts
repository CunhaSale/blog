import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['us-west-2.graphassets.com']
  }
};

export default nextConfig;
