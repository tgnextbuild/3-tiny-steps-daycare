import { coreValues, facility, mission } from "@/data/about";
import { currentPost, previousPosts } from "@/data/blog";
import { contactDetails, parking } from "@/data/contact";
import { dailyScheduleHeading } from "@/data/daily-schedule";
import { safety, timelineHeading, whyChooseHeading } from "@/data/home";
import { curriculum, programs } from "@/data/programs";
import { provider } from "@/data/provider";
import { downloadableForms, financialResources, quickResources } from "@/data/resources";
import { faqItems } from "@/data/faqs";
import { staffMembers } from "@/data/staff";
import { slugify } from "@/lib/slugify";
import type { SearchEntry } from "@/lib/search";

/* ==================================================================== *
 * SITE SEARCH INDEX
 * ==================================================================== *
 * Nothing here should ever need hand-editing — every entry is built from
 * content that already lives in the other `src/data/*.ts` files, so adding
 * a staff member, an FAQ, a resource, or a recap automatically makes it
 * searchable. If you add a whole new section of content and want it
 * findable too, add one more entry below following the same pattern.
 * ==================================================================== */

export const searchIndex: SearchEntry[] = [
  // ---- Pages ----
  { title: "Home", section: "Page", url: "/" },
  { title: "About Us", section: "Page", url: "/about" },
  { title: "Programs", section: "Page", url: "/programs" },
  { title: "Blog", section: "Page", url: "/blog" },
  { title: "Gallery", section: "Page", url: "/blog/gallery" },
  { title: "Parent Resources", section: "Page", url: "/parent-resources" },
  { title: "Contact Us", section: "Page", url: "/contact" },

  // ---- About Us ----
  { title: mission.heading, section: "About Us", keywords: mission.body, url: "/about#mission" },
  {
    title: coreValues.heading,
    section: "About Us",
    keywords: coreValues.items.map((item) => item.label).join(" "),
    url: "/about#core-values",
  },
  {
    title: facility.heading,
    section: "About Us",
    keywords: `${facility.body} ${facility.features.join(" ")}`,
    url: "/about#facility",
  },
  {
    title: provider.name,
    section: "Our Provider",
    keywords: `${provider.role} ${provider.bio.join(" ")}`,
    url: "/about#provider",
  },
  ...staffMembers.map(
    (member): SearchEntry => ({
      title: member.name,
      section: "Meet the Staff",
      keywords: `${member.credentials} ${member.favorite}`,
      url: `/about#staff-${slugify(member.name)}`,
    }),
  ),

  // ---- Programs ----
  ...programs.map(
    (program): SearchEntry => ({
      title: program.name,
      section: "Programs",
      keywords: `${program.ageRange} ${program.description} ${program.bullets.join(" ")}`,
      url: `/programs#program-${slugify(program.name)}`,
    }),
  ),
  {
    title: curriculum.heading,
    section: "Programs",
    keywords: curriculum.areas.map((area) => area.label).join(" "),
    url: "/programs#curriculum",
  },
  {
    title: dailyScheduleHeading,
    section: "Programs",
    keywords: "daily schedule routine nap time lunch snack breakfast drop-off pick-up",
    url: "/programs#daily-schedule",
  },

  // ---- Parent Resources ----
  ...quickResources.map(
    (resource): SearchEntry => ({
      title: resource.title,
      section: "Quick Resources",
      keywords: resource.body,
      url: `/parent-resources?open=resource-${slugify(resource.title)}`,
    }),
  ),
  ...downloadableForms.map(
    (resource): SearchEntry => ({
      title: resource.title,
      section: "Downloadable Forms",
      keywords: resource.body,
      url: `/parent-resources?open=resource-${slugify(resource.title)}`,
    }),
  ),
  ...faqItems.map(
    (faq): SearchEntry => ({
      title: faq.question,
      section: "Frequently Asked Questions",
      keywords: faq.answer,
      url: `/parent-resources?open=faq-${slugify(faq.question)}`,
    }),
  ),
  {
    title: financialResources.heading,
    section: "Parent Resources",
    keywords: `${financialResources.intro} ${financialResources.body} Care4Kids`,
    url: "/parent-resources#financial-resources",
  },

  // ---- Blog ----
  ...(currentPost
    ? [
        {
          title: `${currentPost.month} Recap`,
          section: "Blog",
          keywords: currentPost.description,
          url: "/blog#recap",
        } satisfies SearchEntry,
      ]
    : []),
  ...previousPosts.map(
    (post): SearchEntry => ({
      title: `${post.month} Recap`,
      section: "Looking Back",
      keywords: post.description,
      url: `/blog?open=recap-${post.id}`,
    }),
  ),

  // ---- Contact ----
  ...contactDetails.map(
    (detail): SearchEntry => ({
      title: detail.label,
      section: "Contact Us",
      keywords: detail.lines.join(" "),
      url: `/contact#${slugify(detail.label)}`,
    }),
  ),
  { title: parking.heading, section: "Contact Us", keywords: parking.body, url: "/contact#find-us" },

  // ---- Home ----
  { title: whyChooseHeading, section: "Home", url: "/#why-choose-us" },
  { title: timelineHeading, section: "Home", url: "/#timeline" },
  {
    title: `${safety.headingPrefix} ${safety.headingAccent}`,
    section: "Home",
    keywords: safety.body,
    url: "/#safety",
  },
];
