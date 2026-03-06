import HeroSection from "@/components/HeroSection";
import ExperienceHighlightsSection from "@/components/ExperienceHighlightsSection";
import OpeningLetterSection from "@/components/OpeningLetterSection";
import IntroducingSection from "@/components/IntroducingSection";
import AgendaSection from "@/components/AgendaSection";
import OutcomesSection from "@/components/OutcomesSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceHighlightsSection />
      <OpeningLetterSection />
      <IntroducingSection />
      <AgendaSection />
      <OutcomesSection />
      <WhoIsForSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
