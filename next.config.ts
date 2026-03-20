import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSiteRepo = repoName.endsWith(".github.io");
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

const computedBasePath = isProd
  ? process.env.GITHUB_ACTIONS === "true"
    ? isUserSiteRepo
      ? ""
      : `/${repoName}`
    : ""
  : "";

const basePath = envBasePath ?? computedBasePath;

const nextConfig: NextConfig = {
  output: "export", // Enables static exports
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.4"],
  basePath,
  assetPrefix: isProd && basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
