import { motion, type Variants } from "framer-motion";
import DualCTAButtons from "@/components/DualCTAButtons";
import workshopBg from "@/assets/workshop-team.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stats = [
  { big: "90 Minutes", sub: "Focused & Experiential" },
  { big: "FREE", sub: "Intro sessions (regular $149)" },
  { big: "Virtual", sub: "All initial sessions" },
];

const IntroducingSection = () => {
  return (
    <section id="programs" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopBg})` }}
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 rounded-2xl bg-primary/75 px-6 py-8 text-center backdrop-blur-sm sm:px-10 sm:py-10">
          <h2 className="mb-4 font-headline text-[24px] font-bold text-primary-foreground sm:text-[32px] lg:text-[38px]">
            About the Workshop
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-white sm:text-lg">
            Leading with AI is an interactive workshop built around a live decision walkthrough that shows how leaders move from complexity to clarity. Through a shared decision process, experience how a team works through the moments that matter most, focuses on meaningful conversations to build alignment, and arrives at a defensible decision everyone can support.
          </p>
        </motion.div>

        {/* Stat pills */}
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10 flex flex-wrap justify-center gap-4">
           {stats.map((s, i) => (
             <div key={i} className="min-w-[140px] rounded-xl bg-primary/70 px-5 py-4 text-center backdrop-blur-sm">
               <p className="font-headline text-lg font-bold text-cta sm:text-xl">{s.big}</p>
               <p className="font-body text-xs text-white sm:text-sm">{s.sub}</p>
             </div>
           ))}
         </motion.div>

        {/* Key differentiators */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 space-y-4 font-body text-base leading-relaxed text-white sm:text-lg">
           <div className="card-hover rounded-xl bg-primary/70 p-5 backdrop-blur-sm sm:p-6">
             <h3 className="mb-2 font-headline text-lg font-bold text-primary-foreground">It's a decision container, not an AI demo</h3>
            <p>Vendor-neutral and scope-bounded - focused on leadership alignment and decision clarity, not tool implementation.</p>
          </div>
           <div className="card-hover rounded-xl bg-primary/70 p-5 backdrop-blur-sm sm:p-6">
             <h3 className="mb-2 font-headline text-lg font-bold text-primary-foreground">Culture impact handled upfront</h3>
            <p>Shared language, reduced AI anxiety, and responsible experimentation - all modeled in-session.</p>
          </div>
           <div className="card-hover rounded-xl bg-primary/70 p-5 backdrop-blur-sm sm:p-6">
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
