import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next doesn't auto-serve a directory's index.html for a static file
  // under `public/` the way some hosts do — "/admin" 404s on its own even
  // though "/admin/index.html" works. This is what lets the daycare owner
  // type the shorter, more natural URL for Decap CMS.
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
