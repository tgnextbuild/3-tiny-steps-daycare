import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { programs } from "@/data/programs";
import { slugify } from "@/lib/slugify";

export function ProgramCards() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <ul className="grid gap-6 sm:grid-cols-3">
          {programs.map((program) => (
            <li
              key={program.name}
              id={`program-${slugify(program.name)}`}
              className="flex flex-col items-center gap-3 rounded-[2rem] bg-pastel-azure-tint p-6 text-center"
            >
              <div className="relative size-28 overflow-hidden rounded-full border-4 border-white shadow-sm">
                <Photo photo={program.photo} shape="circle" sizes="7rem" />
              </div>
              <h3 className="font-heading text-h3 text-ink">{program.name}</h3>
              <p className="text-body font-medium text-azure">{program.ageRange}</p>
              {/* `min-h-[3lh]` reserves space for up to 3 lines regardless of
                  how long a given program's description text is, so the
                  bullet list below always starts at the same height across
                  all three cards instead of shifting with word wrap. */}
              <p className="min-h-[3lh] text-body text-ink/70">{program.description}</p>
              <ul className="mt-1 flex w-full flex-col gap-1.5 text-left">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-body text-ink/80">
                    <Icon name="heart" className="size-3.5 shrink-0 text-azure" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
