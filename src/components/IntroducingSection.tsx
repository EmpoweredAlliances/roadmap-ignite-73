import { motion, type Variants } from "framer-motion";
import DualCTAButtons from "@/components/DualCTAButtons";
import workshopBg from "@/assets/workshop-bg.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stats = [
  { big: "2 Hours", sub: "Focused & Experiential" },
  { big: "FREE", sub: "Intro sessions (regular $99)" },
  { big: "Virtual", sub: "All initial sessions" },
];

const IntroducingSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopBg})` }}
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 rounded-2xl bg-primary/75 px-6 py-8 text-center backdrop-blur-sm sm:px-10 sm:py-10">
          <h2 className="mb-4 font-headline text-[28px] font-bold text-primary-foreground sm:text-[36px] lg:text-[42px]">
            About the Workshop
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Leading with AI is an interactive workshop built around a live decision walkthrough. You'll work through the AI Priority Acceleration Workflow in a shared workspace — experiencing how AI can compress leadership decision cycle time while improving decision quality, alignment, and follow-through.
          </p>
        </motion.div>

        {/* Stat pills */}
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10 flex flex-wrap justify-center gap-4">
           {stats.map((s, i) => (
             <div key={i} className="min-w-[140px] rounded-xl bg-primary/70 px-5 py-4 text-center backdrop-blur-sm">
               <p className="font-headline text-lg font-bold text-cta sm:text-xl">{s.big}</p>
               <p className="font-body text-xs text-primary-foreground/60 sm:text-sm">{s.sub}</p>
             </div>
           ))}
         </motion.div>

        {/* Key differentiators */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 space-y-4 font-body text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          <div className="rounded-xl bg-primary-foreground/[0.06] p-5 sm:p-6">
            <h3 className="mb-2 font-headline text-lg font-bold text-primary-foreground">It's a decision container, not an AI demo</h3>
            <p>Vendor-neutral and scope-bounded — focused on leadership alignment and decision clarity, not tool implementation.</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/[0.06] p-5 sm:p-6">
            <h3 className="mb-2 font-headline text-lg font-bold text-primary-foreground">Culture impact handled upfront</h3>
            <p>Shared language, reduced AI anxiety, and responsible experimentation — all modeled in-session.</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/[0.06] p-5 sm:p-6">
            <h3 className="mb-2 font-headline text-lg font-bold text-primary-foreground">Gateway to deeper alignment</h3>
            <p>Preview how the same workflow powers the AI Leadership Alignment Accelerator working sessions: Readiness, Workflow Automation, and Governance Guardrails.</p>
          </div>
        </motion.div>

        <DualCTAButtons variant="dark" />
      </div>
    </section>
  );
};

export default IntroducingSection;
