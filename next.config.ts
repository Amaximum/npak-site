import type { NextConfig } from "next";
import { legacyRedirects } from "./src/data/locations";

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((redirect) => ({
      ...redirect,
      permanent: true,
    }));
  },
};

export default nextConfig;
