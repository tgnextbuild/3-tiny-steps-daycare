import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProgramCards } from "@/components/programs/ProgramCards";
import { CurriculumAreas } from "@/components/programs/CurriculumAreas";
import { DailySchedule } from "@/components/programs/DailySchedule";
import { programsHero } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs & Curriculum",
  description:
    "Infant, toddler, and preschooler programs, curriculum focus areas, and a sample daily schedule at 3 Tiny Steps Home Daycare.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        heading={programsHero.heading}
        body={programsHero.body}
        image={programsHero.image}
        headingClassName="text-azure"
        uppercase
      />
      <ProgramCards />
      <CurriculumAreas />
      <DailySchedule />
      <WhyChooseUs />
    </>
  );
}
