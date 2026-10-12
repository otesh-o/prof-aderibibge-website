import HeroSection from "@/components/home/HeroSection";
import CareerTimelineSection from "@/components/home/CareerTimelineSection";
import FeaturedResearchSection from "@/components/home/FeaturedResearchSection";
import BentoGrid from "@/components/home/BentoGrid";
import WhyIStayedBand from "@/components/home/WhyIStayedBand";
import QuoteSection from "@/components/home/QuoteSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CareerTimelineSection />
      <FeaturedResearchSection />
      <BentoGrid />
      <WhyIStayedBand />
      <QuoteSection />
    </div>
  );
}
