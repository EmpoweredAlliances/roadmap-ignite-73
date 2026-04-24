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
        href="#register"
        className="btn-shimmer flex w-full max-w-[480px] items-center justify-center gap-3 rounded-lg px-8 py-4 font-body text-base font-bold shadow-lg transition-all duration-200 hover:shadow-xl sm:text-lg"
        style={{
          background: "linear-gradient(135deg, #C49B3C, #E8C97A)",
          color: "#0f1f3d",
        }}
      >
        Schedule a Conversation
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
};

export default DualCTAButtons;
