import { motion, type Variants } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";
import CountdownTimer from "./CountdownTimer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Circuit pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <pattern id="final-circuit" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <path d="M10 10h50v50h50" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="110" cy="60" r="2" fill="currentColor" />
            <path d="M110 60v40h-60" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="100" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#final-circuit)" className="text-primary-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-7 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Make Your Decision
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-[800px] text-center font-headline text-[28px] font-bold leading-[1.3] text-primary-foreground sm:text-[38px]">
          Three Months From Now, One of Two Things Happens:
        </motion.h2>

        {/* Scenario cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Scenario 2 first on mobile (order) */}
          {/* Stuck */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="order-2 flex flex-col rounded-2xl border-2 border-cta bg-cta/10 p-7 sm:p-10 lg:order-1">
            <span className="text-[40px]">❌</span>
            <p className="mt-3 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta">Scenario 1</p>
            <h3 className="mt-1 font-headline text-[28px] font-bold text-primary-foreground">Still Stuck</h3>
            <p className="mt-2 font-body text-lg text-primary-foreground/70">Monday, June 2nd</p>
            <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              <p>It's Monday, June 2nd.</p>
              <p>You log into Pro. Stare at the dashboard. Still not sure where to start.</p>
              <p>Still watching videos. Still taking notes. Still thinking "I should really set that up."</p>
              <p className="font-bold text-primary-foreground">Still stuck.</p>
            </div>
            <div className="mt-auto pt-6">
              <TrendingDown className="h-10 w-10 text-cta" />
            </div>
          </motion.div>

          {/* Success */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="order-1 flex flex-col rounded-2xl border-2 border-[hsl(160_81%_38%)] bg-[hsl(160_81%_38%/0.1)] p-7 sm:p-10 lg:order-2">
            <span className="text-[40px]">✅</span>
            <p className="mt-3 font-headline text-sm font-bold uppercase tracking-[0.15em] text-[hsl(160_81%_38%)]">Scenario 2</p>
            <h3 className="mt-1 font-headline text-[28px] font-bold text-primary-foreground">Actually Doing It</h3>
            <p className="mt-2 font-body text-lg text-primary-foreground/70">Monday, June 2nd</p>
            <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              <p>It's Monday, June 2nd.</p>
              <p>Your chatbot just qualified 3 leads over the weekend. Your funnel is running. Your content calendar is scheduled through August.</p>
              <p>You're not "learning about AI."</p>
              <p>You're using it. Every day. In your business.</p>
              <p>Because you spent 3 days in March with the founders and got your roadmap.</p>
            </div>
            <div className="mt-auto pt-6">
              <TrendingUp className="h-10 w-10 text-[hsl(160_81%_38%)]" />
            </div>
          </motion.div>
        </div>

        {/* Decision statement */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-14 text-center">
          <p className="font-headline text-xl font-bold text-primary-foreground sm:text-[26px]">
            This workshop is how you get to Scenario 2.
          </p>
           <p className="mt-3 font-headline text-2xl font-bold text-cta sm:text-[32px]">
             But only if you secure your spot now.
           </p>
        </motion.div>

        {/* Main CTA box */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mt-14 max-w-[700px] rounded-2xl bg-primary-foreground/[0.05] p-8 text-center sm:p-12">
          <p className="font-headline text-2xl font-bold text-primary-foreground">We'll see you in Jacksonville.</p>
          <p className="mt-4 font-body text-lg italic text-primary-foreground/70">
            Francis, Brian, Dolmar, Richard<br />& The AI for Business Team
          </p>

          <div className="mt-8">
            <DualCTAButtons variant="dark" />
          </div>

          <p className="mt-5 font-headline text-base font-bold text-primary-foreground">Limited Seating — This Event Will Sell Out!</p>

          <div className="mt-6">
            <CountdownTimer />
          </div>
        </motion.div>

        {/* P.S. section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mt-14 max-w-[800px] space-y-3">
          {[
            "P.S. The seat deposit is fully refundable. The only risk is NOT registering and missing out. With 3,000+ members and 100 seats, these won't last.",
            "P.P.S. Hotel rate of $160/night available. Book now even if still deciding. You can always cancel later.",
            "P.P.S.S. Still unsure? Ask yourself: What happens in the next 90 days if you DON'T attend? More clarity? Easier implementation? Or same spot, still guessing? Three days could change everything. The question isn't whether you can afford to attend. It's whether you can afford NOT to.",
          ].map((text, i) => (
            <div key={i} className="rounded-lg bg-primary-foreground/[0.05] p-5">
              <p className="font-body text-base leading-relaxed text-primary-foreground/90">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* Secondary CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-10">
          <DualCTAButtons variant="dark" compact />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
