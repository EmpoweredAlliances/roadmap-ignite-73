import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const tabContent = [
  {
    title: "Co-deliver EA programs",
    description:
      "You introduce clients to an Empowered Alliances session and co-facilitate alongside our methodology. Your domain expertise shapes the conversation. The platform handles structure, AI synthesis, and documentation. Clients get a premium decision experience — and you stay in the trusted advisor seat throughout.",
    steps: [
      { num: "01", label: "Introduce", text: "Schedule an intro conversation with your client" },
      { num: "02", label: "Co-facilitate", text: "Contribute your domain expertise live" },
      { num: "03", label: "Deliver outputs", text: "Client gets ranked priorities + decision record" },
      { num: "04", label: "Extend", text: "Follow up with advisory or implementation work" },
    ],
  },
  {
    title: "Adapt the methodology into your programs",
    description:
      "You have existing workshops, offsites, or advisory programs that would benefit from a structured decision layer. We help you integrate Priority Acceleration into your flow — with platform access, facilitation guidance, and co-design support. Your brand stays front and center.",
    steps: [
      { num: "01", label: "Identify", text: "Choose an existing program or event to enhance" },
      { num: "02", label: "Design", text: "We help integrate Priority Acceleration into your flow" },
      { num: "03", label: "Deliver", text: "Run the enhanced session with platform support" },
      { num: "04", label: "Scale", text: "Repeat across clients as fit is proven" },
    ],
  },
];

const ConsultantFastRampSection = () => {
  const [activePathway, setActivePathway] = useState(0);
  const current = tabContent[activePathway];

  return (
    <section
      id="fastramp"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #0f1f3d 0%, #132a4a 50%, #0f1f3d 100%)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.035,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-center"
        >
          <span className="section-eyebrow-accent mb-4 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C49B3C]">
            Fast Ramp Partner Program
          </span>
          <h2 className="mb-4 font-serif text-[36px] font-medium leading-[1.2] text-white">
            Two ways to partner fast
          </h2>
          <p className="mx-auto max-w-[560px] font-body text-[17px] leading-relaxed text-white/60">
            The fastest way to bring Priority Acceleration into the work you already do with clients.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 flex justify-center gap-3"
        >
          {["Co-deliver EA programs", "Adapt into your programs"].map((label, i) => (
            <button
              key={label}
              onClick={() => setActivePathway(i)}
              className={`rounded-lg border px-6 py-3 font-body text-[14px] font-semibold transition-all duration-200 ${
                activePathway === i
                  ? "border-[#C49B3C]/40 bg-[#C49B3C]/12 text-[#E8C97A]"
                  : "border-white/20 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/80"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePathway}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-auto max-w-[960px] grid grid-cols-1 gap-10 lg:grid-cols-2"
          >
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 font-serif text-[26px] font-medium leading-[1.2] text-[#E8C97A]">
                {current.title}
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-white/60">
                {current.description}
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="rounded-[14px] border border-white/8 bg-white/4 p-6"
            >
              <div className="flex flex-col gap-4">
                {current.steps.map((step) => (
                  <motion.div key={step.num} variants={fadeUp} className="flex items-start gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#C49B3C]/40 bg-[#C49B3C]/15 font-body text-[11px] font-bold text-[#E8C97A]">
                      {step.num}
                    </div>
                    <div>
                      <span className="font-body text-[14px] font-semibold text-white">{step.label}</span>
                      <span className="font-body text-[14px] text-white/60">{" — "}{step.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mx-auto max-w-[960px] mt-10 border-t border-white/10 pt-8 text-center">
          <p className="mx-auto max-w-[640px] font-body text-[15px] italic text-white/50">
            In both models, your expertise stays visible. Empowered Alliances helps power the structure, facilitation, and decision flow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultantFastRampSection;
