import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export", // Enables static exports
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.4"],
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
