import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { businessEmail, businessPhone } from "@/data/contact";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What information this website collects, how it's used, and who it's shared with.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-h1 font-heading text-azure">{privacyPolicy.heading}</h1>
          <p className="mt-2 text-body text-ink/55">Last updated: {privacyPolicy.lastUpdated}</p>
          <p className="mt-6 text-body text-ink/75">{privacyPolicy.intro}</p>

          <div className="mt-10 flex flex-col gap-8">
            {privacyPolicy.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-h3 text-ink">{section.heading}</h2>
                <div className="mt-2 flex flex-col gap-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-body text-ink/75">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="font-heading text-h3 text-ink">Contact Us</h2>
              <p className="mt-2 text-body text-ink/75">
                Questions about this policy, or want to review, correct, or delete information
                you&rsquo;ve submitted? Reach us at{" "}
                <a href={`mailto:${businessEmail}`} className="text-azure underline">
                  {businessEmail}
                </a>{" "}
                or{" "}
                <a href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`} className="text-azure underline">
                  {businessPhone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
