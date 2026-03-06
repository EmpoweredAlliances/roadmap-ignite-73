import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const outcomes = [
  {
    title: "A Repeatable AI-Enabled Decision Workflow",
    desc: "The AI Priority Acceleration Workflow for ideation, organization, evaluation, and prioritization - ready to use in your next leadership meeting."
  },
  {
    title: "Clear AI / Human Boundaries",
    desc: "A practical distinction between what AI should do vs. what leaders must do - avoiding both hype and underuse."
  },
  {
    title: "Three Alignment Priorities Identified",
    desc: "A practical view of your team's next steps across AI Readiness, Workflow Automation, and Governance Guardrails."
  },
  {
    title: "1–2 Next-Right Decisions Defined",
    desc: "What to decide, who must be involved, and what inputs are still missing — so you leave with a path, not just ideas."
  },
  {
    title: "AI Priority Acceleration Toolkit",
    desc: "Reusable prompts, facilitation patterns for all 4 stages, and a leader-ready guide for engaging your leadership team."
  },
];

const OutcomesSection = () => {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-[900px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            What You Leave With
          </span>
        </motion.div>

        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[28px] font-bold text-foreground sm:text-[36px] lg:text-[42px]">
          Outcomes You Can Act On Immediately
        </motion.h2>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-10 max-w-[650px] text-center font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          By the end of the session, you'll have tangible tools, clarity, and a defined path forward.
        </motion.p>

        <div className="flex flex-col gap-4">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
              className="flex gap-4 rounded-xl border-l-4 border-cta bg-secondary p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta">
                <Check className="h-5 w-5 text-cta-foreground" strokeWidth={3} />
              </div>
              <div>
                <h3 className="mb-1 font-headline text-base font-bold text-white sm:text-lg">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-white/75 sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 flex flex-col items-center">
          <DualCTAButtons />
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;
