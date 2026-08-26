import { EnrollmentTimeline } from "@/components/home/EnrollmentTimeline";
import { Hero } from "@/components/home/Hero";
import { MonthlyRecapBanner } from "@/components/home/MonthlyRecapBanner";
import { QuickAccessCards } from "@/components/home/QuickAccessCards";
import { SafetySection } from "@/components/home/SafetySection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <QuickAccessCards />
      <EnrollmentTimeline />
      <MonthlyRecapBanner />
      <SafetySection />
    </>
  );
}
