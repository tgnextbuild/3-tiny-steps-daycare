import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentClasses } from "@/lib/accent";
import { whyChooseHeading, whyChooseItems } from "@/data/home";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-4 sm:py-6">
      <Container>
        <div className="rounded-[2.5rem] bg-white px-6 py-10 shadow-[0_10px_40px_-20px_rgba(43,36,32,0.25)] sm:px-10">
          <SectionHeading title={whyChooseHeading} className="text-pastel-red" />

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:divide-x lg:divide-ink/10">
            {whyChooseItems.map((item) => (
              <li
                key={item.label}
                className="flex flex-col items-center gap-3 text-center lg:flex-1 lg:px-4"
              >
                <IconBadge icon={item.icon} accent={item.accent} size="lg" />
                <span
                  className={`font-heading text-h3 leading-snug ${accentClasses[item.accent].text}`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
