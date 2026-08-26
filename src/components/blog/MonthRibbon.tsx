import { Icon } from "@/components/ui/Icon";

/**
 * The date tab that names a recap's month. It's the one shape on the site
 * that isn't a rounded rectangle: a pennant with a notched tail, borrowed
 * from the ribbon a teacher pins to a classroom calendar. It marks every
 * recap — on the featured panel, on the Looking Back cards, and in the
 * modal — so a month is always identified the same way.
 */
export function MonthRibbon({
  month,
  bgClassName = "bg-white",
  className = "",
}: {
  month: string;
  /** Background class — white on a tinted panel, a tint on a white one. */
  bgClassName?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-l-full py-2 pr-9 pl-4 font-heading text-button text-azure ${bgClassName} ${className}`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 1.25rem) 0, 100% 50%, calc(100% - 1.25rem) 100%, 0 100%)",
      }}
    >
      <Icon name="calendar" className="size-5 shrink-0" strokeWidth={1.6} />
      {month}
    </span>
  );
}
