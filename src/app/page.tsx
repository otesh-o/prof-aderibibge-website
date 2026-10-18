import HeroSection from "@/components/home/HeroSection";
import VideosRow from "@/components/home/VideosRow";
import CareerTimelineSection from "@/components/home/CareerTimelineSection";
import ResearchSection from "@/components/home/ResearchSection";
import SpeakingList from "@/components/home/SpeakingList";
import ArticlesSection from "@/components/home/ArticlesSection";
import GalleryStrip from "@/components/home/GalleryStrip";
import QuoteSection from "@/components/home/QuoteSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CareerTimelineSection />
      <ResearchSection />
      <div className="pattern-rings">
        <VideosRow />
        <GalleryStrip />
        <ArticlesSection />
      </div>
      <SpeakingList />
      <QuoteSection />
    </>
  );
}
