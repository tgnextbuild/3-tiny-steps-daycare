import type { NavLink, SocialLink } from "@/types/content";

/* ------------------------------------------------------------------ *
 * SITE BASICS — name, tagline, and the description search engines show.
 * ------------------------------------------------------------------ */
export const siteConfig = {
  name: "3 Tiny Steps Home Daycare",
  shortName: "3 Tiny Steps",
  tagline: "Grow · Learn · Play",
  description:
    "Licensed home daycare in Norwalk, CT offering a bilingual, home-based learning environment for infants and toddlers.",
  location: "Norwalk, CT",
};

/**
 * The production URL, with no trailing slash — used anywhere an absolute
 * URL is required (robots.txt, sitemap.xml, and eventually Open Graph
 * tags). This is currently the Vercel-issued domain; update this ONE line
 * once a custom domain is live, and robots.txt/sitemap.xml pick it up
 * automatically.
 */
export const siteUrl = "https://3-tiny-steps-daycare.vercel.app";

/* ------------------------------------------------------------------ *
 * NAVIGATION — the links in the top menu, in order.
 * ------------------------------------------------------------------ */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Blog", href: "/blog" },
  { label: "Parent Resources", href: "/parent-resources" },
  { label: "Contact Us", href: "/contact" },
];

/**
 * The footer's "Explore" column — same as the header nav, minus Contact
 * (which gets its own "Let's Connect" treatment in the footer), plus
 * Gallery, which isn't in the main header nav but is still a real page.
 */
export const footerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/blog/gallery" },
  { label: "Parent Resources", href: "/parent-resources" },
];

/* ------------------------------------------------------------------ *
 * SOCIAL LINKS — used by the footer and the Contact page.
 * `bg` is the badge color, kept close to each platform's brand color.
 * ------------------------------------------------------------------ */
export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/3tinystepsnorwalk/",
    icon: "instagram",
    bg: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@3tinystepshomedaycare",
    icon: "tiktok",
    bg: "#010101",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/3TinyStepsHomeDaycare",
    icon: "facebook",
    bg: "#1877F2",
  },
  {
    label: "Winnie",
    href: "https://winnie.com/place/3-tiny-steps-home-daycare-norwalk",
    icon: "winnie",
    bg: "#8FD3F4",
  },
  {
    // Their tr.ee short link (Linktree's own domain) resolves to
    // linktr.ee/3tinystepshomedaycare — a hub page, not Google Reviews directly.
    label: "Linktree",
    href: "https://tr.ee/7wjAIAnnp0",
    icon: "linktree",
    bg: "#43E660",
  },
];

/** Look a social link up by label, so pages can reference them by name. */
export function findSocialLink(label: string): SocialLink | undefined {
  return socialLinks.find((social) => social.label === label);
}

export const care4KidsUrl = "https://www.ctcare4kids.com/";
