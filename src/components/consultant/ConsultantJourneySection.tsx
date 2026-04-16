import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const STAGES = [
  { title: "Co-delivery + Sandbox", desc: "Partner on live client work with sandbox access" },
  { title: "Event-Based Access", desc: "Use methodology in workshops you already lead" },
  { title: "Annual License", desc: "Independent delivery with ongoing enablement" },
  { title: "White Label", desc: "Branded practice for broader organizational use" },
];

const DETAILS = [
  { text: "Begin by partnering with Empowered Alliances on live client work. You participate in the session, contribute your expertise, and gain access to a sandbox environment for rehearsal and familiarity with the workflow. Zero risk, full learning.", tag: "Start here", tagStyle: "border-[#C49B3C]/40 bg-[#C49B3C]/12 text-[#E8C97A]" },
  { text: "For partners who want to use the methodology in a specific client workshop, assessment, or event they are already leading. Event-based access creates a practical bridge between co-delivery and broader licensing.", tag: "Build confidence", tagStyle: "border-[rgba(94,234,212,0.3)] bg-[rgba(94,234,212,0.1)] text-[#5eead4]" },
  { text: "Partners who have successfully co-led sessions and demonstrated readiness can move into an annual named-facilitator license. This supports more independent delivery while preserving quality and consistency.", tag: "Grow independently", tagStyle: "border-[rgba(94,234,212,0.3)] bg-[rgba(94,234,212,0.1)] text-[#5eead4]" },
  { text: "Consulting firms that want a repeatable, branded practice can move into a white-label model designed for broader internal use. This is the long-term play for firms building a scalable capability.", tag: "Scale your practice", tagStyle: "border-[rgba(94,234,212,0.3)] bg-[rgba(94,234,212,0.1)] text-[#5eead4]" },
];

const FILL_WIDTHS = ["12%", "37%", "62%", "87%"];

const ConsultantJourneySection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const detail = DETAILS[activeStage];

  return (
    <section
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.035, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
          <span className="section-eyebrow-accent mb-4 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C49B3C]">
            Partnership progression
          </span>
          <h2 className="mb-4 font-serif text-[36px] font-medium leading-[1.2] text-white">
            Start by partnering. Grow into independent delivery.
          </h2>
          <p className="mx-auto max-w-[520px] font-body text-[17px] leading-relaxed text-white/60">
            A natural progression that builds trust at every stage.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mx-auto max-w-[900px]">
          <div className="pointer-events-none absolute left-[5%] right-[5%] top-[13px] hidden h-[2px] bg-white/10 lg:block">
            <div className="h-full rounded-full transition-all duration-500" style={{ width: FILL_WIDTHS[activeStage], background: "linear-gradient(90deg, #C49B3C, #E8C97A)" }} />
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0">
            {STAGES.map((stage, i) => {
              const isCompleted = i < activeStage;
              const isActive = i === activeStage;
              return (
                <div key={stage.title} className="flex cursor-pointer flex-col items-center text-center" onClick={() => setActiveStage(i)}>
                  <div
                    className={`mb-4 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 font-body text-[11px] font-bold transition-all duration-300 ${
                      isCompleted ? "border-[#C49B3C] bg-[#C49B3C] text-[#0f1f3d]" : isActive ? "border-[#C49B3C] bg-[#C49B3C]/15 text-[#C49B3C]" : "border-white/20 bg-[#0f1f3d] text-white/50"
                    }`}
                    style={isActive ? { boxShadow: "0 0 16px rgba(196,155,60,0.3)" } : undefined}
                  >
                    {isCompleted ? "✓" : i + 1}
                  </div>
                  <span className={`font-serif text-[16px] font-medium transition-colors duration-300 ${isActive || isCompleted ? "text-[#f5f0e8]" : "text-[#f5f0e8]/35"}`}>{stage.title}</span>
                  <span className={`mt-1 max-w-[180px] font-body text-[12px] transition-colors duration-300 ${isActive ? "text-[#f5f0e8]/55" : "text-[#f5f0e8]/20"}`}>{stage.desc}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="mx-auto max-w-[900px] mt-8 rounded-2xl border border-white/8 bg-white/4 p-7">
          <AnimatePresence mode="wait">
            <motion.div key={activeStage} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <span className={`mb-4 inline-block rounded-full border px-4 py-1 font-body text-[11px] font-semibold ${detail.tagStyle}`}>{detail.tag}</span>
              <p className="max-w-[680px] font-body text-[16px] leading-[1.75] text-white/65">{detail.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ConsultantJourneySection;
