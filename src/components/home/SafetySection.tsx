import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { accentClasses } from "@/lib/accent";
import { safety } from "@/data/home";

export function SafetySection() {
  return (
    <section id="safety" className="pb-14 sm:pb-20">
      <Container>
        <div className="grid gap-8 rounded-[2.5rem] bg-light-yellow/45 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-h2 font-heading leading-snug text-ink">
              {safety.headingPrefix}
              <br />
              <span className="text-green-dark">{safety.headingAccent}</span>
            </h2>
            <p className="mt-4 max-w-md text-body text-ink/75">
              {safety.body}
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6">
            {safety.features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2 sm:gap-3">
                <Icon
                  name={feature.icon}
                  className={`size-7 shrink-0 sm:size-9 ${accentClasses[feature.accent].text}`}
                  strokeWidth={1.8}
                />
                <span className="text-body font-medium text-ink/85">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
