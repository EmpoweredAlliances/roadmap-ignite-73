import { ArrowRight } from "lucide-react";

interface DualCTAButtonsProps {
  /** "light" for light backgrounds, "dark" for dark/navy backgrounds */
  variant?: "light" | "dark";
  /** Show compact version (no subtexts) */
  compact?: boolean;
}

const PRO_URL = "https://aiforbusinesslive.com/3-day-workshop-checkout-page";
const GA_URL = "https://aiforbusinesslive.com/3-day-workshop-checkout";

const DualCTAButtons = ({ variant = "light", compact = false }: DualCTAButtonsProps) => {
  const isDark = variant === "dark";

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* Pro Member Button */}
      <div className="w-full max-w-[420px] text-center">
        <a
          href={PRO_URL}
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-btn px-8 py-5 font-headline text-base font-bold uppercase tracking-wide text-btn-foreground shadow-lg transition-all duration-200 animate-pulse-glow hover:bg-btn-hover hover:shadow-xl sm:text-lg"
        >
          Pro Members — Secure my Seat(s)
          <ArrowRight className="h-5 w-5" />
        </a>
        {!compact && (
          <p className={`mt-2 font-body text-xs sm:text-sm ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
            $100 Refundable Seat Deposit · We will verify your membership
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="flex w-full max-w-[420px] items-center gap-3">
        <div className={`h-px flex-1 ${isDark ? "bg-primary-foreground/20" : "bg-border"}`} />
        <span className={`font-headline text-xs font-bold uppercase tracking-wider ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
          or
        </span>
        <div className={`h-px flex-1 ${isDark ? "bg-primary-foreground/20" : "bg-border"}`} />
      </div>

      {/* General Admission Button */}
      <div className="w-full max-w-[420px] text-center">
        <a
          href={GA_URL}
          className={`flex w-full items-center justify-center gap-3 rounded-lg border-2 px-8 py-4 font-headline text-base font-bold uppercase tracking-wide transition-all duration-200 sm:text-lg ${
            isDark
              ? "border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
              : "border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5"
          }`}
        >
          Not A Pro Member — Reserve Your Seat Here
          <ArrowRight className="h-5 w-5" />
        </a>
        {!compact && (
          <div className={`mt-2 ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
            <p className="font-body text-xs sm:text-sm">
              <span className="font-bold text-cta">$297 Early Bird</span>
              <span className="mx-1.5">·</span>
              <span className="line-through">$997</span>
            </p>
            <p className="mt-0.5 font-body text-[11px] sm:text-xs">
              Includes 2 months free Pro membership
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DualCTAButtons;
