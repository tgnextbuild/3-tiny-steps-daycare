import { PageHero } from "@/components/ui/PageHero";
import { mission } from "@/data/about";

export function MissionSection() {
  return (
    <PageHero
      id="mission"
      heading={mission.heading}
      body={mission.body}
      image={mission.image}
      headingClassName="text-green-dark"
      uppercase
    />
  );
}
