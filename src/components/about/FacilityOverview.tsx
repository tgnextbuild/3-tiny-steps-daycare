import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facility } from "@/data/about";

export function FacilityOverview() {
  return (
    <section id="facility" className="py-10 sm:py-14">
      <Container>
        <div className="rounded-[2.5rem] bg-crimson/20 px-6 py-10 sm:px-10">
          <SectionHeading
            title={facility.heading}
            className="text-azure"
            subtitle={facility.body}
          />

          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-[2rem] sm:h-80">
            <Photo photo={facility.image} />
          </div>

          <ul className="mt-8 flex flex-col divide-y divide-ink/15 sm:flex-row sm:flex-nowrap sm:justify-between sm:divide-x sm:divide-y-0">
            {facility.features.map((feature) => (
              <li
                key={feature}
                className="py-3 text-center font-heading text-h3 text-azure sm:flex-1 sm:px-3 sm:py-0"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
