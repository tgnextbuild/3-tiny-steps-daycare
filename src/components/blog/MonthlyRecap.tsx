import { MonthRibbon } from "./MonthRibbon";
import { Photo } from "@/components/ui/Photo";
import type { AccentedBlogPost } from "@/data/blog-posts";
import { accentClasses } from "@/lib/accent";

/** The featured recap panel at the top of the Blog page. */
export function MonthlyRecap({ post }: { post: AccentedBlogPost }) {
  const colors = accentClasses[post.accent];

  return (
    <article id="recap" className={`overflow-hidden rounded-[2rem] ${colors.bgTint}`}>
      {/* pt-8 matches the panel's rounded-[2rem] corner radius exactly, so
          the ribbon's square left edge starts right where the curve ends —
          flush against the straight part of the panel's edge, not bled
          outside it or clipped by the corner. */}
      <div className="pt-8">
        <MonthRibbon month={post.month} className="shadow-sm" />
      </div>

      <div className="grid gap-6 px-6 pt-5 pb-8 sm:px-10 sm:pb-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-10">
        <div>
          <h2 className={`font-heading text-h2 leading-snug ${colors.text}`}>
            {post.title}
            <span className="mt-1 block font-medium">{post.subtitle}</span>
          </h2>
          <p className="mt-4 text-body text-ink/75">{post.description}</p>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1.5rem] shadow-[0_18px_36px_-24px_rgba(43,36,32,0.55)] sm:aspect-16/10">
          <Photo photo={post.image} sizes="(min-width: 1024px) 50vw, 100vw" priority />
        </div>
      </div>
    </article>
  );
}
