import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreValues } from "@/data/about";

export function CoreValues() {
  return (
    <section id="core-values" className="py-4 sm:py-6">
      <Container>
        <div className="rounded-[2.5rem] bg-green/20 px-6 py-10 sm:px-10">
          <SectionHeading title={coreValues.heading} className="text-azure" />

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:flex sm:flex-row sm:flex-nowrap sm:justify-between sm:divide-x sm:divide-ink/15">
            {coreValues.items.map((value) => (
              <li
                key={value.label}
                className="flex flex-col items-center gap-3 text-center sm:flex-1 sm:px-4"
              >
                <IconBadge icon={value.icon} accent="crimson" size="lg" />
                <span className="font-heading text-h3 text-ink">
                  {value.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
