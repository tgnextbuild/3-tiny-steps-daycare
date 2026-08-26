import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import {
  dailySchedule,
  dailyScheduleGallery,
  dailyScheduleHeading,
} from "@/data/daily-schedule";
import { accentClasses } from "@/lib/accent";

export function DailySchedule() {
  return (
    <section id="daily-schedule" className="py-10 sm:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,44rem)_1fr]">
          <div className="rounded-[2rem] bg-cream-dark/60 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-h2 text-ink">{dailyScheduleHeading}</h2>
              <Icon name="sun" className="size-7 text-amber-500" />
            </div>

            <ol className="mt-5 flex flex-col gap-1">
              {dailySchedule.map((block) => {
                const colors = accentClasses[block.accent];
                return (
                  <li
                    key={block.time + block.title}
                    className={`border-l-4 ${colors.border} ${block.nested ? "ml-6 py-1 pl-4" : "py-1.5 pl-4"}`}
                  >
                    <p className={`font-heading text-h3 ${colors.text}`}>
                      {block.time}: {block.title}
                    </p>
                    {block.subtitle && (
                      <p className="mt-0.5 text-body font-semibold text-ink">{block.subtitle}</p>
                    )}
                    {block.description && (
                      <p className="text-body text-ink/70">{block.description}</p>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="relative hidden h-full min-h-[46rem] w-full lg:block">
            <div className="absolute top-0 left-0 h-[44%] w-[70%] overflow-hidden rounded-[1.5rem] shadow-lg">
              <Photo photo={dailyScheduleGallery[0]} sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
            <div className="absolute top-[38%] right-0 h-[30%] w-[62%] overflow-hidden rounded-[1.5rem] shadow-lg">
              <Photo photo={dailyScheduleGallery[1]} sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
            <div className="absolute bottom-0 left-4 h-[34%] w-[90%] overflow-hidden rounded-[1.5rem] shadow-lg">
              <Photo photo={dailyScheduleGallery[2]} sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
            <Icon
              name="sparkle"
              className="absolute -top-4 right-8 size-6 text-light-yellow"
            />
          </div>

          {/* Compact single-image version on mobile/tablet */}
          <div className="relative h-56 w-full overflow-hidden rounded-[1.5rem] sm:h-72 lg:hidden">
            <Photo photo={dailyScheduleGallery[0]} sizes="100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
