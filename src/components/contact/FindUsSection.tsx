import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { mapAddress, parking } from "@/data/contact";

export function FindUsSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`;

  return (
    <section id="find-us" className="pb-10 sm:pb-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="font-heading text-h3 text-green-dark">Find Us</p>
            <div className="mt-3 h-56 w-full overflow-hidden rounded-[1.5rem] border border-ink/10 sm:h-64">
              <iframe
                title="Map to 3 Tiny Steps Home Daycare"
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon name="parking" className="mt-1 size-8 shrink-0 text-azure" strokeWidth={1.5} />
            <div>
              <p className="font-heading text-h3 text-azure">{parking.heading}</p>
              <p className="mt-1 max-w-xs text-body text-ink/70">{parking.body}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
