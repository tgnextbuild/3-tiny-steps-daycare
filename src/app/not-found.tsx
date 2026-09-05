import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Page Not Found",
  // Keeps a dead/mistyped URL out of search results — there's nothing
  // here worth indexing, and it isn't a real page to link to.
  robots: { index: false },
};

/**
 * Next's catch-all for any URL that doesn't match a real route — shown
 * automatically, no wiring needed elsewhere. Styled to match `ComingSoon`
 * (the other "there's nothing here yet" state) rather than a bare error
 * page, since both are the same kind of moment for a visitor.
 */
export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <Icon name="search" className="size-8 text-azure" />
          <h1 className="text-h1 font-heading text-azure">Page Not Found</h1>
          <p className="text-body text-ink/70">
            We couldn&rsquo;t find the page you were looking for — it may have moved, or the link
            might be outdated.
          </p>
          <Button href="/" variant="outline" className="mt-2">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
