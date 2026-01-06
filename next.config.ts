import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // ✅ Siempre habilitado para detectar problemas
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // ✅ Eliminar console.logs en producción
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"], // ✅ Formatos modernos optimizados
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
