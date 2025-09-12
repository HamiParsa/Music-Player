import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // important for exporting to static HTML
  basePath: isProd ? "/Music-Player" : "", // GitHub repo name in production
  assetPrefix: isProd ? "/Music-Player/" : "", // prefix for static files in production
};

export default nextConfig;
