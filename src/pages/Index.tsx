import HeroSection from "@/components/HeroSection";
import BuiltForYourSeatSection from "@/components/BuiltForYourSeatSection";
import DemoSection from "@/components/DemoSection";
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
      <BuiltForYourSeatSection />
      <DemoSection />
      <ExperienceHighlightsSection />
      <IntroducingSection />
      <AgendaSection />
      <OutcomesSection />
      <WorkshopLeadSection />
      <WhoIsForSection />
      <FAQSection />
      <section
        id="register"
        className="bg-background px-5 py-16 sm:px-8 sm:py-20 border-b border-foreground/10"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[560px] text-center mb-10">
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3">
              REGISTER NOW
            </p>
            <h2 className="font-serif text-[32px] sm:text-[36px] font-medium leading-[1.2] text-foreground mb-4">
              Reserve your seat
            </h2>
            <p className="font-body text-[16px] leading-[1.6] text-muted-foreground">
              Free intro sessions are available now. Limited to 20 participants per session.
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
