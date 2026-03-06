import { motion, type Variants } from "framer-motion";
import { Check, Users, Ticket, BarChart3, Armchair } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";
import CountdownTimer from "./CountdownTimer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const ScarcitySection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Circuit pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <pattern id="scarcity-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <path d="M10 10h40v40h40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="90" cy="50" r="2" fill="currentColor" />
            <path d="M90 50v30h-50" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="80" r="1.5" fill="currentColor" />
            <circle cx="60" cy="20" r="1" fill="currentColor" />
            <path d="M60 20h30v60" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#scarcity-circuit)" className="text-primary-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1000px] px-5 py-[70px] sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Limited Availability
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-10 max-w-[800px] text-center font-headline text-[28px] font-bold leading-[1.3] text-primary-foreground sm:text-[36px]">
          There Are Only 100 Seats. Over 3,000 Pro Members. Don't Miss Out.
        </motion.h2>


        {/* Two stats */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-4 flex max-w-[500px] justify-center gap-10 sm:gap-16">
          <div className="text-center">
            <Users className="mx-auto mb-2 h-8 w-8 text-primary-foreground/70" />
            <p className="font-headline text-[40px] font-bold text-primary-foreground">3,000+</p>
            <p className="font-body text-sm text-primary-foreground/70">Pro Members Eligible</p>
          </div>
          <div className="text-center">
            <Ticket className="mx-auto mb-2 h-8 w-8 text-primary-foreground/70" />
            <p className="font-headline text-[40px] font-bold text-primary-foreground">100</p>
            <p className="font-body text-sm text-primary-foreground/70">Total Seats Available</p>
          </div>
        </motion.div>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 text-center font-headline text-xl font-bold text-cta sm:text-2xl">
          That's only 3% of Pro members
        </motion.p>

        {/* Body copy */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-10 max-w-[800px] space-y-5 text-center font-body text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
          <p>We physically cannot accommodate more than 100 people in the workshop room at the Aloft Hotel.</p>
          <p>We COULD hold this at a bigger venue with 500 people like our summit events.</p>
          <p>But then we're back to the same problem you're trying to solve: We can't give you the personal attention you need. We can't work on your business specifically. We can't answer your questions in the detail you deserve.</p>
        </motion.div>

        {/* Callout box */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-[800px] rounded-xl bg-primary-foreground/10 p-6 text-center sm:p-8">
          <p className="font-headline text-lg font-bold text-primary-foreground sm:text-[22px]">
            This workshop is intentionally small so it can be intensely personal.
          </p>
        </motion.div>

        {/* Three fact boxes */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 grid max-w-[500px] gap-5 sm:grid-cols-2">
          {[
            { Icon: BarChart3, stat: "3,000+", label: "Active Pro Members" },
            { Icon: Armchair, stat: "100", label: "Available Seats" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center rounded-xl bg-primary-foreground/[0.06] p-6">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-cta">
                <item.Icon className="h-6 w-6 text-cta-foreground" />
              </div>
              <p className="font-headline text-[32px] font-bold text-primary-foreground">{item.stat}</p>
              <p className="font-body text-sm text-primary-foreground/70">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Urgency text */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-10 max-w-[800px] text-center">
          <h3 className="mb-5 font-headline text-xl font-bold text-primary-foreground sm:text-2xl">
            When these 100 seats are gone, they're gone.
          </h3>
          <div className="space-y-5 font-body text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            <p>We're not adding more seats. We're not holding a second session in March.</p>
            <p>(Yes, we plan to hold more of these workshops in the future. But if you're serious about accelerating your AI implementation NOW, waiting 4-6 months for the next one means you're still stuck in the same place while your competitors move ahead.)</p>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-[600px] rounded-xl border-2 border-cta bg-cta/20 p-6 sm:p-8">
          <CountdownTimer />
        </motion.div>

        {/* Final CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="flex flex-col items-center gap-5">
          <p className="max-w-[600px] text-center font-headline text-xl font-bold text-primary-foreground sm:text-[26px]">
            If you're reading this and registration is still open, you need to act immediately.
          </p>
          <DualCTAButtons variant="dark" />
          <p className="font-body text-sm text-primary-foreground/70">Only takes 2 minutes to register</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScarcitySection;
