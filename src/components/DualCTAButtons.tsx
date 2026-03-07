import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

const BOOKING_URL = "https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg";

const DualCTAButtons = ({ variant = "light", compact = false }: CTAButtonProps) => {
  const isDark = variant === "dark";

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <a
        href={BOOKING_URL}
        className="flex w-full max-w-[420px] items-center justify-center gap-3 rounded-lg bg-cta px-8 py-4 font-body text-base font-bold text-cta-foreground shadow-lg transition-all duration-200 hover:bg-cta-hover hover:shadow-xl sm:text-lg"
      >
        Register Now - <span className="line-through opacity-70">$99</span> FREE
        <ArrowRight className="h-5 w-5" />
      </a>
      {!compact && (
        <p className={`font-body text-sm ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
          Schedule a conversation or register for an upcoming session
        </p>
      )}
    </div>
  );
};

export default DualCTAButtons;
