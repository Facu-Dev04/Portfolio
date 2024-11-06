import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: process.env.NODE_ENV === "production", // Solo habilitar en producción
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === "production", // Ignorar en producción
  },
  images: {
    domains: ['assets.aceternity.com'],
  },
};

export default nextConfig;
