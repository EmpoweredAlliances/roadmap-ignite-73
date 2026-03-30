import HeroSection from "@/components/HeroSection";
import BuiltForYourSeatSection from "@/components/BuiltForYourSeatSection";
import ExperienceHighlightsSection from "@/components/ExperienceHighlightsSection";
import IntroducingSection from "@/components/IntroducingSection";
import AgendaSection from "@/components/AgendaSection";
import OutcomesSection from "@/components/OutcomesSection";
import WorkshopLeadSection from "@/components/WorkshopLeadSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceHighlightsSection />
      <IntroducingSection />
      <AgendaSection />
      <OutcomesSection />
      <WorkshopLeadSection />
      <WhoIsForSection />
      <FAQSection />
      <section className="bg-background px-5 py-16 sm:px-8 sm:py-20">
        <LeadCaptureForm source="main-page-form" />
      </section>
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
