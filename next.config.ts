// Import the Next.js configuration type
import type { NextConfig } from "next";

// Define the Next.js configuration
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add your allowed image domain here
  },
};

export default nextConfig;

