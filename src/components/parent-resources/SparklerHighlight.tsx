import { Icon } from "@/components/ui/Icon";
import { accentClasses } from "@/lib/accent";
import { sparklerHighlight } from "@/data/resources";

/**
 * Small decorative sunny-hillside illustration next to the intro copy —
 * purely presentational chrome (not a real photo), so it's hand-built here
 * rather than going through the `Photo` placeholder system.
 */
function HillsideIllustration() {
  return (
    <div className="float-right mb-2 ml-4 flex size-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-white to-pastel-azure sm:size-36">
      <svg viewBox="0 0 100 100" className="size-full" aria-hidden="true">
        {/* cloud: one base ellipse plus three puffs on top */}
        <ellipse cx="52" cy="34" rx="20" ry="8" fill="white" />
        <circle cx="40" cy="30" r="9" fill="white" />
        <circle cx="55" cy="24" r="11" fill="white" />
        <circle cx="68" cy="30" r="8" fill="white" />
        {/* far hill (lighter, sits behind) */}
        <ellipse cx="28" cy="98" rx="48" ry="24" fill="var(--color-green)" opacity="0.55" />
        {/* near hill (darker, overlaps in front) */}
        <ellipse cx="72" cy="104" rx="58" ry="28" fill="var(--color-green-dark)" />
      </svg>
    </div>
  );
}

export function SparklerHighlight() {
  return (
    <div id="sparkler" className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div>
        <span className="inline-block rounded-full bg-green-tint px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wide text-green-dark">
          {sparklerHighlight.badge}
        </span>
        <h2 className="mt-3 font-heading text-h3 text-azure">{sparklerHighlight.heading}</h2>

        {/* `flow-root` keeps the floated illustration contained to this
            block, so the intro/body text wraps around it but the note box
            below starts fresh instead of also flowing around any leftover
            float height. */}
        <div className="mt-4 flow-root">
          <HillsideIllustration />
          <p className="text-body text-ink/70">{sparklerHighlight.intro}</p>
          <p className="mt-4 text-body text-ink/70">{sparklerHighlight.body}</p>
        </div>

        <div className="mt-5 rounded-2xl bg-green-tint p-4">
          <p className="text-body font-semibold text-ink">{sparklerHighlight.noteHeading}</p>
          <p className="mt-1 text-body text-ink/70">{sparklerHighlight.noteBody}</p>
        </div>

        <a
          href={sparklerHighlight.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-1.5 py-2 text-body font-semibold text-azure underline decoration-azure/40 underline-offset-4 hover:decoration-azure"
        >
          {sparklerHighlight.ctaLabel}
          <Icon name="external-link" className="size-4" strokeWidth={1.8} />
        </a>
      </div>

      <div className="rounded-[1.5rem] bg-green-tint p-6 sm:p-8">
        <h3 className="text-center font-heading text-h3 text-ink">{sparklerHighlight.asqHeading}</h3>
        <ul className="mt-6 flex flex-col gap-5">
          {sparklerHighlight.areas.map((area) => {
            const colors = accentClasses[area.accent];
            return (
              <li key={area.title} className="flex items-start gap-4">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full ${colors.bgTint}`}
                >
                  <Icon name={area.icon} className={`size-5 ${colors.text}`} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-semibold text-body text-ink">{area.title}</p>
                  <p className="text-body text-ink/70">{area.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
