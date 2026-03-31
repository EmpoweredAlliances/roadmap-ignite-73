import HeroSection from "@/components/HeroSection";
import LogoTickerSection from "@/components/LogoTickerSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import IntroducingSection from "@/components/IntroducingSection";
import WorkflowSection from "@/components/WorkflowSection";
import OutcomesSection from "@/components/OutcomesSection";
import LowFrictionBlock from "@/components/LowFrictionBlock";
import PrimaryCTASection from "@/components/PrimaryCTASection";
import WhoIsForSection from "@/components/WhoIsForSection";
import BuiltForYourSeatSection from "@/components/BuiltForYourSeatSection";
import ProofSection from "@/components/ProofSection";

import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
import FounderSection from "@/components/FounderSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LogoTickerSection />
      <CredibilityStrip />
      <IntroducingSection />
      <WorkflowSection />
      <OutcomesSection />
      <LowFrictionBlock />
      <PrimaryCTASection />
      <WhoIsForSection />
      <BuiltForYourSeatSection />
      <ProofSection />
      {/* Testimonials removed */}
      <FAQSection />
      <RegistrationSection />
      <FounderSection />
      <FooterSection />
    </div>
  );
};

export default Index;
