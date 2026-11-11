import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The project was renamed Interleave → Interleaf. Keep the old path
        // working for anything already linking to it.
        source: "/portfolio/interleave",
        destination: "/portfolio/interleaf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
