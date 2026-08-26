import type { Metadata } from "next";
import { CoreValues } from "@/components/about/CoreValues";
import { FacilityOverview } from "@/components/about/FacilityOverview";
import { MissionSection } from "@/components/about/MissionSection";
import { ProviderSection } from "@/components/about/ProviderSection";
import { StaffGrid } from "@/components/about/StaffGrid";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the provider and staff behind 3 Tiny Steps Home Daycare, our mission, core values, and facility.",
};

export default function AboutPage() {
  return (
    <>
      <MissionSection />
      <ProviderSection />
      <CoreValues />
      <FacilityOverview />
      <StaffGrid />
    </>
  );
}
