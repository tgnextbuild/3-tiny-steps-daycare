import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaveConnectorHorizontal } from "@/components/ui/WaveConnector";
import { timelineHeading, timelineSteps } from "@/data/home";
import { accentClasses } from "@/lib/accent";

type TimelineStepT = (typeof timelineSteps)[number];

function StepBadge({ step, compact }: { step: TimelineStepT; compact?: boolean }) {
  const colors = accentClasses[step.accent];

  if (compact) {
    return (
      <span className="relative inline-flex">
        <span
          className={`inline-flex size-10 items-center justify-center rounded-full border-2 border-dashed ${colors.border} bg-white`}
        >
          <Icon name={step.icon} className={`size-7 ${colors.text}`} />
        </span>
        <span
          className={`absolute -top-1 -left-1 inline-flex size-4 items-center justify-center rounded-full ${colors.bgSolid} font-heading text-[10px] text-white`}
        >
          {step.step}
        </span>
      </span>
    );
  }

  return (
    <span className="relative inline-flex">
      <span
        className={`inline-flex size-16 items-center justify-center rounded-full border-2 border-dashed ${colors.border} bg-white`}
      >
        <Icon name={step.icon} className={`size-9 ${colors.text}`} />
      </span>
      <span
        className={`absolute -top-1.5 -left-1.5 inline-flex size-7 items-center justify-center rounded-full ${colors.bgSolid} font-heading text-[13px] text-white`}
      >
        {step.step}
      </span>
    </span>
  );
}

export function EnrollmentTimeline() {
  return (
    <section id="timeline" className="py-10 sm:py-14">
      <Container>
        <SectionHeading
          title={timelineHeading}
          className="text-azure"
          ornament={{ icon: "leaf", className: "size-5 text-green" }}
        />

        {/* Desktop: full-size single row with a curvy connecting line */}
        <ol className="relative mt-12 hidden lg:flex lg:items-start lg:justify-between">
          <WaveConnectorHorizontal />
          {timelineSteps.map((step) => (
            <li
              key={step.step}
              className="relative flex flex-1 flex-col items-center gap-3 px-2 text-center"
            >
              <StepBadge step={step} />
              <span
                className={`font-heading text-h3 leading-snug ${accentClasses[step.accent].text}`}
              >
                {step.label}
              </span>
            </li>
          ))}
        </ol>

        {/* Mobile / tablet: the same single row, scaled down to fit without
            scrolling or wrapping. */}
        <ol className="relative mt-10 flex items-start justify-between gap-0.5 pt-1 lg:hidden">
          <WaveConnectorHorizontal className="absolute top-5 right-5 left-5 h-4 w-[calc(100%-2.5rem)]" />
          {timelineSteps.map((step) => (
            <li
              key={step.step}
              className="relative flex flex-1 flex-col items-center gap-1.5 text-center"
            >
              <StepBadge step={step} compact />
              <span
                className={`font-heading text-[10px] leading-tight ${accentClasses[step.accent].text}`}
              >
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
