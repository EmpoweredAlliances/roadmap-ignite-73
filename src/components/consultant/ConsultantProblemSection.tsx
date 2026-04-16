import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const POINTS = [
  "You stay in the trusted advisor role",
  "AI doesn't replace your expertise",
  "Methodology strengthens your sessions",
  "Clients leave with clearer priorities",
];

const ConsultantProblemSection = () => (
  <section className="border-b border-foreground/10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-[800px]">
      {/* Eyebrow */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-5 flex items-center justify-center gap-4"
      >
        <div className="h-px w-8 bg-[#C49B3C]/40" />
        <span className="section-eyebrow-accent font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C49B3C]">
          The opportunity
        </span>
        <div className="h-px w-8 bg-[#C49B3C]/40" />
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-5 text-center font-serif text-[36px] font-medium leading-[1.2] text-foreground"
      >
        Your clients don't need more AI hype.
        <br />
        They need better decisions.
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-10 text-center font-body text-[17px] leading-[1.75] text-muted-foreground"
      >
        Many consultants already have strong expertise, trusted relationships, and valuable programs in market. What's often missing is a structured way to help clients move from discussion to aligned priorities, documented rationale, and clear next steps. That's where Empowered Alliances fits.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[640px] grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {POINTS.map((point) => (
          <motion.div
            key={point}
            variants={fadeUp}
            className="flex items-center gap-3 rounded-lg bg-background px-4 py-3"
          >
            <Check className="h-4 w-4 shrink-0 text-[#5eead4]" strokeWidth={2.5} />
            <span className="font-body text-[14px] font-medium text-foreground">{point}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ConsultantProblemSection;
