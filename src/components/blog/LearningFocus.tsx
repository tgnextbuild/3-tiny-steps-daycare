import { learningFocus } from "@/data/blog";

/** The themes this month's activities were planned around. */
export function LearningFocus({
  focus,
  /** Stacks in a single column instead of splitting into two on wide
   *  screens — used inside the Looking Back modal, whose panel stays
   *  narrower than the viewport no matter how wide the browser window is. */
  compact = false,
}: {
  focus: string[];
  compact?: boolean;
}) {
  if (focus.length === 0) return null;

  return (
    <section
      className={`rounded-[2.5rem] bg-crimson/25 ${
        compact ? "px-5 py-6 sm:px-6 sm:py-7" : "px-6 py-9 sm:px-10 sm:py-10"
      }`}
    >
      <div
        className={`grid gap-5 ${compact ? "" : "lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12"}`}
      >
        <div>
          <h2
            className={`font-heading leading-snug text-ink ${compact ? "text-h3" : "text-h2"}`}
          >
            {learningFocus.headingPrefix}
            {compact ? " " : <br />}
            <span className="text-green-dark">{learningFocus.headingAccent}</span>
          </h2>
          {!compact && (
            <p className="mt-3 max-w-sm text-body text-ink/70">{learningFocus.body}</p>
          )}
        </div>

        <ul className="flex flex-col gap-3">
          {focus.map((theme) => (
            <li
              key={theme}
              className="rounded-full bg-white/80 px-6 py-2.5 text-center font-heading text-h3 text-pastel-red"
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
