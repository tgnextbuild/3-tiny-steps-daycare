import { PageHero } from "@/components/ui/PageHero";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <PageHero
      heading={hero.heading}
      body={hero.body}
      image={hero.image}
      headingClassName="text-azure"
      cta={{ label: hero.ctaLabel, href: hero.ctaHref }}
    />
  );
}
