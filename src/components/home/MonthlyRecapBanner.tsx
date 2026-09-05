import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { currentPost } from "@/data/blog-posts";
import { monthlyRecap } from "@/data/home";

/** Always shows the newest recap's photo — see the comment on `monthlyRecap` in home.ts. */
export function MonthlyRecapBanner() {
  if (!currentPost) return null;

  return (
    <section className="pt-4 pb-14 sm:pt-6 sm:pb-20">
      <Container>
        <div className="relative">
          <div className="relative h-56 w-full overflow-hidden rounded-[2rem] sm:h-120">
            <Photo photo={currentPost.image} sizes="100vw" />
          </div>
          <div className="absolute inset-x-0 -bottom-6 flex justify-center">
            <Button href={monthlyRecap.ctaHref} variant="secondary">
              {monthlyRecap.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
