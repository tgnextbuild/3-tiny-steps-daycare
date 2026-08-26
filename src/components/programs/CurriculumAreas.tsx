import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaveConnectorHorizontal, WaveConnectorShort } from "@/components/ui/WaveConnector";
import { curriculum, type CurriculumArea } from "@/data/programs";
import { iconTextColor } from "@/lib/accent";

function Tile({ area, compact }: { area: CurriculumArea; compact?: boolean }) {
  const iconColor = iconTextColor[area.accent];

  if (compact) {
    return (
      <div className="flex size-18 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl bg-green-tint p-1 text-center">
        <Icon name={area.icon} className={`size-7 ${iconColor}`} strokeWidth={1.5} />
        <span className="font-heading text-[10px] leading-tight font-semibold text-green-dark">
          {area.label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex size-36 shrink-0 flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-green-tint p-4 text-center sm:size-40">
      <Icon name={area.icon} className={`size-9 ${iconColor}`} strokeWidth={1.5} />
      <span className="font-heading text-h3 leading-snug font-semibold text-green-dark">
        {area.label}
      </span>
    </div>
  );
}

function Connector() {
  return <WaveConnectorShort className="hidden h-6 w-10 shrink-0 self-center sm:block" />;
}

export function CurriculumAreas() {
  return (
    <section id="curriculum" className="py-10 sm:py-14">
      <Container>
        <SectionHeading
          title={curriculum.heading}
          className="text-green-dark"
          subtitle={curriculum.subheading}
          subtitleClassName="mt-2"
        />

        {/* Desktop: full-size tiles with dotted connectors between them */}
        <ul className="mt-8 hidden items-center justify-between lg:flex">
          {curriculum.areas.map((area, i) => (
            <Fragment key={area.label}>
              <li>
                <Tile area={area} />
              </li>
              {i < curriculum.areas.length - 1 && <Connector />}
            </Fragment>
          ))}
        </ul>

        {/* Mobile / tablet: the same single row, scaled down to fit without
            wrapping or scrolling. */}
        <ul className="relative mt-8 -mx-4 flex items-center justify-between gap-0.5 lg:hidden">
          <WaveConnectorHorizontal
            className="absolute top-9 right-3 left-3 h-4 w-[calc(100%-1.5rem)]"
            colorClassName="text-green-dark/40"
          />
          {curriculum.areas.map((area) => (
            <li key={area.label} className="relative">
              <Tile area={area} compact />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
