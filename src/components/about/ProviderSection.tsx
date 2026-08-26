import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { provider } from "@/data/provider";

export function ProviderSection() {
  return (
    <section id="provider" className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="relative size-32 shrink-0 overflow-hidden rounded-full sm:size-36">
            <Photo photo={provider.photo} shape="circle" sizes="9rem" />
          </div>
          <div className="text-center sm:pt-2 sm:text-left">
            <h2 className="text-h2 font-heading text-pastel-red">
              {provider.heading}
            </h2>
            <p className="mt-2 font-heading text-h3 text-green-dark">
              {provider.name}
            </p>
            <p className="text-body text-ink/70">{provider.role}</p>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-5">
          {provider.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-body leading-relaxed text-ink/75 sm:text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
