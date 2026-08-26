import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { care4KidsUrl } from "@/data/site";
import { financialResources } from "@/data/resources";

export function FinancialResources() {
  return (
    <div id="financial-resources" className="rounded-[2rem] bg-pastel-azure-tint p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.8fr] lg:items-center">
        <div className="flex items-center gap-4 lg:border-r lg:border-ink/10 lg:pr-8">
          <div className="flex shrink-0 flex-col items-center text-azure">
            <Icon name="heart-dollar" className="size-10" strokeWidth={1.5} />
            <Icon name="hand-helping" className="-mt-4.5 size-11" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="font-heading text-h3 text-ink">{financialResources.heading}</h2>
            <p className="mt-2 text-body text-ink/70">{financialResources.intro}</p>
            <Image
              src="/images/care4kids-logo.png"
              alt="Care4Kids"
              width={220}
              height={70}
              className="mt-3 h-20 w-auto object-contain"
            />
          </div>
        </div>

        <div>
          <p className="text-body text-ink/70">{financialResources.body}</p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {financialResources.points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-body text-ink/80">
                <Icon name="check" className="size-4 shrink-0 text-green-dark" />
                {point}
              </li>
            ))}
          </ul>
          <Button href={care4KidsUrl} variant="outline" className="mt-4">
            {financialResources.ctaLabel}
          </Button>
        </div>

        <div className="relative hidden aspect-square w-full overflow-hidden rounded-[1.5rem] lg:block">
          <Photo
            photo={financialResources.image}
            className="rounded-[1.5rem]"
            sizes="(min-width: 1024px) 20vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
