import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const BOOKING_URL = "https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="final-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#final-grid)" className="text-primary-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[800px] px-5 py-20 sm:px-8 sm:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <h2 className="mb-6 font-headline text-[28px] font-bold text-primary-foreground sm:text-[36px] lg:text-[42px]">
            Stop Circling. Start Deciding.
          </h2>

          <p className="mx-auto mb-4 max-w-[600px] font-body text-base leading-relaxed text-white sm:text-lg">
            If your team is stuck between AI urgency and AI confusion, this is the fastest way to make better next decisions - without wasting cycles.
          </p>

          <p className="mx-auto mb-10 max-w-[500px] font-body text-sm text-primary-foreground/60">
            Join an open-enrollment session - or schedule a conversation to explore how the AI Leadership Alignment Accelerator can align your leadership team.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={BOOKING_URL}
              className="flex items-center gap-3 rounded-lg bg-cta px-8 py-4 font-body text-base font-bold text-cta-foreground shadow-lg transition-all duration-200 hover:bg-cta-hover hover:shadow-xl sm:text-lg"
            >
              Register Now - <span className="line-through opacity-70">$99</span> FREE
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={BOOKING_URL}
              className="flex items-center gap-3 rounded-lg border-2 border-primary-foreground/30 px-8 py-4 font-body text-base font-semibold text-primary-foreground transition-all duration-200 hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
            >
              Schedule a Conversation
            </a>
          </div>

          <p className="mt-8 font-body text-sm italic text-primary-foreground/50">
            - The Empowered Alliances Team
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
