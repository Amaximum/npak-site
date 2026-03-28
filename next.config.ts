import type { NextConfig } from "next";
import { legacyRewrites } from "./src/data/locations";

const nextConfig: NextConfig = {
  async rewrites() {
    return legacyRewrites;
  },
};

export default nextConfig;
