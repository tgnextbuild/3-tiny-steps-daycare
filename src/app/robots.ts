import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

/**
 * Generates /robots.txt. Everything on this site is meant to be public and
 * indexed — the only thing kept out is /admin (the Decap CMS editor, not a
 * real page — see src/data/README.md).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
