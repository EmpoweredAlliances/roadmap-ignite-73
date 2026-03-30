import HeroSection from "@/components/HeroSection";
import BuiltForYourSeatSection from "@/components/BuiltForYourSeatSection";
import DemoSection from "@/components/DemoSection";
import ExperienceHighlightsSection from "@/components/ExperienceHighlightsSection";
import WorkflowSection from "@/components/WorkflowSection";
import IntroducingSection from "@/components/IntroducingSection";
import AgendaSection from "@/components/AgendaSection";
import OutcomesSection from "@/components/OutcomesSection";
import WorkshopLeadSection from "@/components/WorkshopLeadSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const TrustStrip = () => (
  <div className="overflow-hidden border-b border-white/10 bg-[#0f1f3d] py-3">
    <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
      {[
        'Fortune 500 Validated',
        'Vendor-Neutral Methodology',
        'Human-First AI Design',
        'Board-Ready in 90 Minutes',
        'Confidential by Default',
        'No Account Required',
        'Fortune 500 Validated',
        'Vendor-Neutral Methodology',
        'Human-First AI Design',
        'Board-Ready in 90 Minutes',
        'Confidential by Default',
        'No Account Required',
      ].map((item, i) => (
        <span key={i} className="mx-6 flex items-center gap-2 font-body text-[13px] text-white/50">
          <span className="inline-block h-1 w-1 rounded-full bg-[#C49B3C]" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustStrip />
      <BuiltForYourSeatSection />
      <DemoSection />
      <WorkflowSection />
      
      <IntroducingSection />
      <AgendaSection />
      <OutcomesSection />
      <WhoIsForSection />
      <FAQSection />
      <section
        id="register"
        className="bg-background px-5 py-16 sm:px-8 sm:py-20 border-b border-foreground/10"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[560px] text-center mb-10">
            <p className="section-eyebrow-accent font-body text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3">
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
      <WorkshopLeadSection />
      <FooterSection />
    </div>
  );
};

export default Index;
