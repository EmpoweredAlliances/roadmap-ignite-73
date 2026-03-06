import { motion, type Variants } from "framer-motion";
import { Check, X } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const perfectFor = [
  "Are a Pro member wanting to implement (not just learn)",
  "Feel overwhelmed by information and need clear direction",
  "Have a business and want AI-powered lead gen and systems",
  "Are an employee wanting to accelerate your career",
  "Are starting a business and want a clear AI roadmap",
  "Are a coach/consultant wanting to build authority",
  "Learn better by seeing and asking vs. watching alone",
  "Value small groups and personal access",
  "Are ready to invest 3 days to transform the next 12 months",
];

const skipIf = [
  "Think AI is just hype",
  "Want to figure it out alone",
  "Can't commit to 3 days in Jacksonville",
  "Want a magic button with no work",
  "Aren't a Pro member",
  "Expect us to build everything for you",
  "Won't implement what you learn",
];

const WhoIsForSection = () => {
  return (
    <section className="border-t-4 border-cta bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-[70px] sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Is This For You?
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 text-center font-headline text-[32px] font-bold text-primary sm:text-[42px] lg:mb-[50px]">
          Who This Workshop Is For:
        </motion.h2>

        {/* Two columns */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Perfect For */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-2xl border-2 border-[hsl(160_81%_38%)] bg-[hsl(172_60%_96%)] p-7 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <h3 className="font-headline text-2xl font-bold text-primary">Perfect If You:</h3>
            </div>
            <div className="space-y-4">
              {perfectFor.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(160_81%_38%)]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[17px] leading-relaxed text-card-foreground">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skip This If */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-2xl border-2 border-cta bg-[hsl(0_100%_97%)] p-7 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">❌</span>
              <h3 className="font-headline text-2xl font-bold text-primary">Skip This If You:</h3>
            </div>
            <div className="space-y-4">
              {skipIf.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta">
                    <X className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[17px] leading-relaxed text-card-foreground">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decision box */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mt-12 max-w-[800px] rounded-2xl bg-primary p-8 text-center sm:p-10">
          <h3 className="mb-4 font-headline text-2xl font-bold text-primary-foreground sm:text-[28px]">
            The Question Is Simple:
          </h3>
          <p className="mx-auto mb-8 max-w-[600px] font-body text-lg leading-relaxed text-primary-foreground/90 sm:text-2xl">
            Are you ready to go from "I need to learn AI" to "Here's what I built with AI" in the next 90 days?
          </p>
          <DualCTAButtons variant="dark" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
