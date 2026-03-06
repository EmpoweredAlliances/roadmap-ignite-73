import { motion, type Variants } from "framer-motion";
import { Check, ArrowDown } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const thirtyDayResults = [
{ text: "First AI chatbot live (now qualifies ", highlight: "15-20", rest: " leads/month)" },
{ text: "Complete funnel built in GoHighLevel", highlight: "", rest: "" },
{ text: "60-day content calendar created using workshop prompts", highlight: "", rest: "" }];


const ninetyDayResults = [
{ text: "Added ", highlight: "2", rest: " new clients because of AI positioning" },
{ text: "Cut content creation from ", highlight: "12 hours/week → 2 hours/week", rest: "" },
{ text: "Stopped saying \"I need to learn AI\" and started saying \"Here's what I built\"", highlight: "", rest: "" }];


const CaseStudySection = () => {
  return (
    <section className="border-t-4 border-cta bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-16 lg:py-20">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Real People. Real Results
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="mb-10 text-center font-headline text-[26px] font-bold text-primary sm:text-[34px] lg:mb-12 lg:text-[38px]">
          A Real Pro Member Success Story:
        </motion.h2>

        {/* Two-column */}
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:gap-12">
          {/* LEFT - Before/After timeline */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col">
            {/* Before */}
            <div className="rounded-xl border-l-4 border-cta bg-[hsl(0_100%_97%)] p-5 sm:p-7">
              <span className="text-3xl">❌</span>
              <p className="mb-3 mt-2 font-headline text-xs font-bold uppercase tracking-[0.15em] text-cta">Before</p>
              <p className="mb-4 font-body text-sm leading-relaxed text-card-foreground/80 sm:text-base">
                Six months ago, Sarah joined Pro. Watched every video. Downloaded every resource. Attended calls.
              </p>
              <p className="mb-5 font-body text-sm font-semibold text-card-foreground sm:text-base">
                But when it came time to implement? She froze.
              </p>
              {/* Pull quote */}
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <span className="font-headline text-4xl leading-none text-cta">"</span>
                <p className="mt-1 font-body text-sm italic leading-relaxed text-card-foreground/75 sm:text-base lg:text-lg">
                  I had all this knowledge but didn't know where to start. Chatbot first? Content system? GoHighLevel setup? I was paralyzed by options.
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1 py-4">
              <ArrowDown className="h-8 w-8 text-cta" />
              <p className="font-body text-xs text-muted-foreground sm:text-sm">
                After attending our November workshop, everything changed.
              </p>
            </div>

            {/* After */}
            <div className="rounded-xl border-l-4 border-accent bg-[hsl(172_60%_96%)] p-5 sm:p-7">
              <span className="text-3xl">✅</span>
              <p className="mb-3 mt-2 font-headline text-xs font-bold uppercase tracking-[0.15em] text-accent">After</p>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <span className="font-headline text-4xl leading-none text-accent">"</span>
                <p className="mt-1 font-body text-sm italic leading-relaxed text-card-foreground/75 sm:text-base lg:text-lg">
                  By the end of Day 1, I had a clear roadmap. Day 2, I understood exactly how my funnel would work. Day 3, I left with my 90-day plan mapped out step by step.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Person + Results */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {/* Person info */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent/20 sm:h-[120px] sm:w-[120px]">
                <span className="font-headline text-3xl font-bold text-accent sm:text-5xl">S</span>
              </div>
              <div>
                <p className="font-headline text-xl font-bold text-primary sm:text-2xl lg:text-[28px]">Sarah</p>
                <p className="font-body text-sm italic text-muted-foreground sm:text-lg">Marketing Agency Owner, Austin</p>
              </div>
            </div>

            {/* 30 days card */}
            <div className="mb-5 overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="bg-cta px-5 py-3 sm:px-6 sm:py-4">
                <p className="font-headline text-sm font-bold uppercase tracking-wider text-cta-foreground">30 Days After</p>
              </div>
              <div className="space-y-3 bg-card p-5 sm:p-6">
                {thirtyDayResults.map((r, i) =>
                <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta">
                      <Check className="h-3 w-3 text-cta-foreground" strokeWidth={3} />
                    </div>
                    <p className="font-body text-sm text-card-foreground/80 sm:text-base">
                      {r.text}{r.highlight && <strong className="text-cta">{r.highlight}</strong>}{r.rest}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 90 days card */}
            <div className="mb-8 overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="bg-primary px-5 py-3 sm:px-6 sm:py-4">
                <p className="font-headline text-sm font-bold uppercase tracking-wider text-primary-foreground">90 Days After</p>
              </div>
              <div className="space-y-3 bg-card p-5 sm:p-6">
                {ninetyDayResults.map((r, i) =>
                <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                    </div>
                    <p className="font-body text-sm text-card-foreground/80 sm:text-base">
                      {r.text}{r.highlight && <strong className="text-cta">{r.highlight}</strong>}{r.rest}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Final quote */}
            <div className="rounded-xl border-2 border-border bg-card p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:p-7">
              <span className="font-headline text-5xl leading-none text-cta sm:text-6xl">"</span>
              <p className="mt-2 text-center font-body text-lg italic leading-relaxed text-primary sm:text-xl lg:text-2xl">
                The workshop was the accelerator I needed. I went from having resources to actually using them.
              </p>
              <p className="mt-4 text-right font-headline text-base font-bold text-primary sm:text-lg">
                — Sarah, Austin TX
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing + CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 flex flex-col items-center gap-6 lg:mt-16">
          <p className="text-center font-headline text-2xl font-bold text-cta sm:text-[28px]">
            That could be you in 90 days.
          </p>
          <DualCTAButtons />
          <span className="font-body text-sm text-muted-foreground">Limited Seats - This Event Will Sell Out!</span>
        </motion.div>
      </div>
    </section>);

};

export default CaseStudySection;