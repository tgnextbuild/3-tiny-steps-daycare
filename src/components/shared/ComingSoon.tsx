import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function ComingSoon({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <Icon name="sparkle" className="size-8 text-azure" />
          <h1 className="text-h1 font-heading text-azure">{title}</h1>
          <p className="text-body text-ink/70">{body}</p>
          <p className="rounded-full bg-light-yellow/50 px-4 py-1.5 text-body text-ink/70">
            This page is on the way — check back soon!
          </p>
          <Button href="/" variant="outline" className="mt-2">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
