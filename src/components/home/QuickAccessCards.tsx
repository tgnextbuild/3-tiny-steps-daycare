import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { quickAccessCards } from "@/data/home";
import { accentClasses } from "@/lib/accent";

export function QuickAccessCards() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <ul className="grid gap-5 sm:grid-cols-3">
          {quickAccessCards.map((card) => {
            const colors = accentClasses[card.accent];
            const cardClasses = `group flex h-full items-start gap-4 rounded-[2rem] ${colors.bgTint} p-6 transition-transform duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(43,36,32,0.35)]`;

            const inner = (
              <>
                <Icon
                  name={card.icon}
                  className={`size-8 shrink-0 ${colors.text}`}
                  strokeWidth={1.6}
                />
                <div className="flex flex-col gap-1">
                  {card.eyebrow && (
                    <p
                      className={`font-heading text-button ${colors.text}`}
                    >
                      {card.eyebrow}
                    </p>
                  )}
                  <h3 className="font-heading text-h3 tracking-wide text-ink uppercase">
                    {card.title}
                  </h3>
                  <p className="text-body text-ink/70">{card.body}</p>
                </div>
              </>
            );

            return (
              <li key={card.title}>
                {card.action === "download" ? (
                  <div className="relative">
                    <a
                      href={card.href}
                      download
                      className={cardClasses}
                      aria-label={`${card.title} — download PDF`}
                    >
                      {inner}
                    </a>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${card.title} — preview PDF in a new tab`}
                      className={`absolute top-3 right-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-white/80 ${colors.text} shadow-sm transition-colors hover:bg-white`}
                    >
                      <Icon name="eye" className="size-4" />
                    </a>
                  </div>
                ) : (
                  <Link href={card.href} className={cardClasses}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
