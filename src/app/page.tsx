import HeroSection from "@/components/home/HeroSection";
import BentoGrid from "@/components/home/BentoGrid";
import CareerTimelineSection from "@/components/home/CareerTimelineSection";
import WhyIStayedBand from "@/components/home/WhyIStayedBand";
import QuoteSection from "@/components/home/QuoteSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CareerTimelineSection />
      <BentoGrid />
      <WhyIStayedBand />
      <QuoteSection />
    </div>
  );
}
