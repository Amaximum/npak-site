import type { NextConfig } from "next";
import { legacyRewrites } from "./src/data/locations";

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRewrites.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
