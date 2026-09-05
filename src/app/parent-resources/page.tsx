import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/parent-resources/FAQSection";
import { FinancialResources } from "@/components/parent-resources/FinancialResources";
import { ResourceCardGrid } from "@/components/parent-resources/ResourceCardGrid";
import { SparklerHighlight } from "@/components/parent-resources/SparklerHighlight";
import { Testimonials } from "@/components/parent-resources/Testimonials";
import {
  downloadableForms,
  downloadableFormsHeading,
  quickResources,
  quickResourcesHeading,
  resourcesHero,
} from "@/data/resources";

export const metadata: Metadata = {
  title: "Parent Resources",
  description:
    "Forms, FAQs, testimonials, and financial resources for 3 Tiny Steps Home Daycare families.",
};

export default function ParentResourcesPage() {
  return (
    <>
      <PageHero
        heading={resourcesHero.heading}
        body={resourcesHero.body}
        image={resourcesHero.image}
        headingClassName="text-azure"
        uppercase
      />

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            title={quickResourcesHeading}
            className="text-azure uppercase"
            ornament={{
              icon: "sparkle",
              className: "size-5 text-light-yellow",
              placement: "trailing",
              gap: "gap-2",
            }}
          />
          <div className="mt-8">
            <ResourceCardGrid cards={quickResources} columns={3} />
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <FinancialResources />
        </Container>
      </section>

      <section className="pb-10 sm:pb-14">
        <Container>
          <SparklerHighlight />
        </Container>
      </section>

      <section className="py-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <FAQSection />
            <Testimonials />
          </div>
        </Container>
      </section>

      <section className="pb-10 sm:pb-14">
        <Container>
          <SectionHeading title={downloadableFormsHeading} className="text-ink" />
          <div className="mt-8">
            <ResourceCardGrid cards={downloadableForms} columns={2} />
          </div>
        </Container>
      </section>
    </>
  );
}
