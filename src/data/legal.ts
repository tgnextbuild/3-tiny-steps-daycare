/* ------------------------------------------------------------------ *
 * PRIVACY POLICY page (/privacy-policy).
 *
 * Every claim in `sections` below should stay TRUE to how the site
 * actually works — if a new third-party tool or form field is ever added
 * that touches a visitor's personal information, update this page in the
 * same change, not as an afterthought.
 *
 * Anything in "quotes" is text you can change freely, same as every other
 * file in this folder. `lastUpdated` is just a plain string — update it by
 * hand whenever this page's wording changes.
 * ------------------------------------------------------------------ */

export interface LegalSection {
  heading: string;
  body: string[];
}

export const privacyPolicy = {
  heading: "Privacy Policy",
  lastUpdated: "September 2026",
  intro:
    "This page explains what information 3 Tiny Steps Home Daycare collects through this website, how it's used, and who it's shared with. We keep this simple on purpose. This site doesn't have accounts, purchases, or advertising, so there isn't much to explain.",
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "The only information this site collects is what you choose to type into our Contact form: your name, phone number, and email address; your child's name and date of birth, if you provide them; your desired start date; and your message.",
        "We don't require an account to use this site, and we don't collect any information about you just from browsing. There's nothing tracking your activity page-to-page.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "We use the information you submit only to respond to your inquiry, schedule a tour, and answer questions about enrollment. We do not sell, rent, or share your information with anyone for marketing purposes.",
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "Our Contact form is delivered by Web3Forms, a third-party form-processing service. When you submit the form, your message is sent through Web3Forms directly to our email inbox.",
        "We use Vercel Web Analytics to see overall traffic trends (like how many people visit each page). This tool doesn't use cookies and doesn't collect anything that identifies you personally. It only counts anonymous page views.",
      ],
    },
    {
      heading: "Cookies",
      body: ["This website does not use cookies to track visitors."],
    },
    {
      heading: "Children's Privacy",
      body: [
        "Our Contact form asks for a child's name and date of birth so we can respond to enrollment inquiries. This information is provided by a parent or guardian, not collected directly from a child, and is used only to respond to that inquiry.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "We keep the information you submit only as long as needed to respond to your inquiry and, if you enroll, as part of your family's enrollment records. If you'd like us to delete information you've submitted through this site, contact us using the information below.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You can contact us at any time to ask what information we have on file for you, request a correction, or request that it be deleted.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "If this policy changes, we'll update the wording on this page. The date at the top reflects the most recent revision.",
      ],
    },
  ] as LegalSection[],
};
