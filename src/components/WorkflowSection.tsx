import { motion, type Variants } from "framer-motion";
import workflowImage from "@/assets/APAW_image_1.png";

const stages = [
  {
    number: "01",
    name: "Every voice gets heard",
    color: "#4EB8A0",
    description:
      "Your team contributes ideas from their own expertise — no groupthink, no dominant voices. AI generates personalized prompts by role and captures 18–40 ideas in under 10 minutes. You surface perspectives that never make it into a typical meeting.",
  },
  {
    number: "02",
    name: "Stop debating. Start seeing patterns.",
    color: "#C49B3C",
    description:
      "Your team chooses how to frame the problem. AI proposes three different clustering frameworks, each revealing a different strategic angle. You stop debating how to organize the conversation and start making sense of the ideas shared and what actually matters.",
  },
  {
    number: "03",
    name: "Every assumption on the table",
    color: "#E8A838",
    description:
      "Your team scores what matters. AI generates criteria tailored to your context, scores each option, and shows its reasoning. Your team overrides any score they disagree with — every override is documented. Weeks of analysis happen in minutes.",
  },
  {
    number: "04",
    name: "A decision your whole team can stand behind",
    color: "#6AAF7A",
    description:
      "Your senior leader makes the call with full visibility into what the team thinks. Every vote recorded. Every dissenting view captured. You leave with ranked priorities, clear owners, and a decision record that survives Monday morning.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const WorkflowSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f1f3d 0%, #132a4a 50%, #0f1f3d 100%)",
      }}
    >
      {/* Top fade from previous section */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.025,
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <div className="section-eyebrow-accent mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[13px] text-white/80">
              The methodology
            </span>
          </div>
          <h2 className="mb-4 font-serif text-[32px] font-medium leading-[1.2] text-white sm:text-[40px]">
            Four stages of better decisions
          </h2>
          <p className="mx-auto max-w-[560px] font-body text-[16px] leading-relaxed text-white/60">
            From scattered thinking to a ranked, documented, board-ready
            outcome — in a single 90-minute session.
          </p>
        </motion.div>

        {/* Workflow image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mb-14"
        >
          <img
            src={workflowImage}
            alt="AI Priority Acceleration Workflow — Ideation, Organization, Evaluation, Prioritization"
            className="mx-auto w-full max-w-[900px] rounded-2xl"
            loading="lazy"
          />
          {/* Subtle bottom gradient to blend into stage cards */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
            style={{
              background: "linear-gradient(to top, #132a4a, transparent)",
            }}
          />
        </motion.div>

        {/* Stage description cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2"
        >
          {stages.map((stage) => (
            <motion.div
              key={stage.number}
              variants={itemVariants}
              className="rounded-2xl border border-white/[0.08] p-6 sm:p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = `${stage.color}40`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 40px -8px rgba(0,0,0,0.4), 0 0 0 1px ${stage.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Number + name header */}
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="font-body text-[13px] font-bold"
                  style={{ color: stage.color }}
                >
                  {stage.number}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: `${stage.color}30` }}
                />
              </div>

              <h3
                className="mb-3 font-serif text-[22px] font-medium"
                style={{ color: stage.color }}
              >
                {stage.name}
              </h3>

              {/* Description */}
              <p className="font-body text-[14px] leading-relaxed text-white/60">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom connector to next section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-14 text-center"
        >
          <p className="mx-auto max-w-none font-body text-[23px] italic text-white/50">
            The entire workflow — from first idea to final ranking —
            takes 90 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
