import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialBadge } from "@/components/ui/SocialBadge";
import { WaveConnectorHorizontal } from "@/components/ui/WaveConnector";
import { connectWithUsHeading, connectWithUsOrder } from "@/data/contact";
import { findSocialLink } from "@/data/site";

export function ConnectWithUs() {
  return (
    <section className="pb-10 sm:pb-14">
      <Container>
        <div className="rounded-[2.5rem] bg-pastel-azure-tint px-6 py-10 sm:px-10">
          <SectionHeading title={connectWithUsHeading} className="text-ink" />

          <ul className="relative mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-y-0">
            <WaveConnectorHorizontal className="absolute top-8 right-10 left-10 hidden h-6 w-[calc(100%-5rem)] sm:block" />
            {connectWithUsOrder.map((entry) => {
              const social = findSocialLink(entry.label);
              if (!social) return null;
              return (
                <li key={entry.label} className="relative flex flex-col items-center gap-2 text-center">
                  <SocialBadge social={social} size="lg" />
                  <p className="font-heading text-h3 text-ink">{entry.label}</p>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full bg-green px-4 py-1.5 font-heading text-button text-white transition-colors hover:bg-green-dark"
                  >
                    {entry.ctaLabel}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
