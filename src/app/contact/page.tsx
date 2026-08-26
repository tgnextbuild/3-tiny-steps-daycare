import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { EnrollmentTimeline } from "@/components/home/EnrollmentTimeline";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { FindUsSection } from "@/components/contact/FindUsSection";
import { ConnectWithUs } from "@/components/contact/ConnectWithUs";
import { contactHero } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with 3 Tiny Steps Home Daycare — contact info, enrollment timeline, and how to find us.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        heading={contactHero.heading}
        body={contactHero.body}
        image={contactHero.image}
        headingClassName="text-green-dark"
        uppercase
      />
      <EnrollmentTimeline />
      <ContactFormSection />
      <FindUsSection />
      <ConnectWithUs />
    </>
  );
}
