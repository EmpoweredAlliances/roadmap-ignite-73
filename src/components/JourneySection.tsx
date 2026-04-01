import { motion } from "framer-motion";
import journeyDiagram from "@/assets/journey-diagram.png";

const LADDER_STEPS = [
  {
    number: "01",
    name: "Leading with AI",
    desc: "Experience the method live — and with your team",
    color: "#C49B3C",
    active: true,
  },
  {
    number: "02",
    name: "AI Readiness",
    desc: "Align on people, culture, support, and adoption conditions",
    color: "#4EB8A0",
    active: false,
  },
  {
    number: "03",
    name: "Workflow Automation",
    desc: "Choose where AI can reduce handoffs, rework, and delays",
    color: "#4EB8A0",
    active: false,
  },
  {
    number: "04",
    name: "Governance Guardrails",
    desc: "Set decision rights, risk tiers, and escalation paths",
    color: "#4EB8A0",
    active: false,
  },
];

const PROGRAMS = [
  {
    label: "AI Governance",
    icon: "⚖",
    desc: "Decision rights, risk tiers & escalation paths",
  },
  {
    label: "AI Operational Readiness",
    icon: "◎",
    desc: "People, culture, support & adoption conditions",
  },
  {
    label: "AI Workflow Automation",
    icon: "⟳",
    desc: "Reduce handoffs, rework & delays",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const JourneySection = () => (
  <section id="programs" className="relative overflow-hidden bg-[#0a1628] py-20 sm:py-28">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C49B3C]/40" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#C49B3C]">
              The bigger picture
            </span>
            <span className="h-px w-8 bg-[#C49B3C]/40" />
          </div>

          <p className="mx-auto max-w-[540px] font-body text-[15px] leading-relaxed text-white/70">
            Experience the workflow live first.
            Then bring its full value to your
            leadership team when the time is right.
          </p>

          <p className="mx-auto mt-4 max-w-[540px] font-body text-[13px] italic leading-relaxed text-white/50">
            This workshop is the starting point —
            not the whole journey.
          </p>

          <p className="mx-auto mt-6 max-w-[600px] font-body text-[13px] leading-relaxed text-white/45">
            Leading with AI gives leaders a live,
            low-risk way to experience how better
            AI-enabled decisions get made. For
            companies, it also serves as the front
            door to our 4-session AI Leadership
            Alignment Accelerator — where leadership
            teams align on readiness, workflow
            priorities, and governance guardrails,
            and build the internal capability to keep
            using the method after the workshops end.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT — 4-step ladder */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-heading text-[15px] font-semibold tracking-wide text-white/80">
              The 4-session journey
            </h3>

            <div className="relative space-y-0">
              {/* Vertical connector line */}
              <div className="absolute left-[18px] top-[40px] bottom-[40px] w-px bg-white/10" />

              {LADDER_STEPS.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 py-4">
                  {/* Step circle */}
                  <div
                    className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{
                      background: step.active ? `${step.color}20` : "rgba(255,255,255,0.05)",
                      border: `1.5px solid ${step.active ? step.color : "rgba(255,255,255,0.12)"}`,
                      color: step.active ? step.color : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-heading text-[14px] font-semibold"
                        style={{ color: step.active ? step.color : "rgba(255,255,255,0.7)" }}
                      >
                        {step.name}
                      </span>
                      {step.active && (
                        <span className="rounded-full bg-[#C49B3C]/15 px-2 py-0.5 text-[10px] font-semibold text-[#C49B3C]">
                          You are here
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-body text-[12px] leading-relaxed text-white/45">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — program cluster */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-heading text-[15px] font-semibold tracking-wide text-white/80">
              What you're building toward
            </h3>

            {/* Outer container */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <p className="font-heading text-[13px] font-semibold tracking-wide text-[#C49B3C]">
                AI Leadership Alignment Accelerator
              </p>
              <p className="mt-1 font-body text-[12px] text-white/50">
                Build AI Foundations together
              </p>

              {/* Journey arrow row */}
              <div className="mt-5 flex items-center gap-2">
                {[
                  "Experience it live",
                  "Share with your team",
                  "Build AI Foundations",
                ].map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-white/50">
                      {label}
                    </span>
                    {i < 2 && (
                      <span className="text-[12px] text-white/20">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Three program cards */}
              <div className="mt-6 space-y-3">
                {PROGRAMS.map((prog, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/5 p-4 transition-all duration-200 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.borderColor = "rgba(196,155,60,0.3)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {/* Icon */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4EB8A0]/10 text-[16px] text-[#4EB8A0]">
                      {prog.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <p className="font-heading text-[13px] font-semibold text-white/80">
                        {prog.label}
                      </p>
                      <p className="mt-0.5 font-body text-[11px] text-white/40">
                        {prog.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 border-t border-white/8 pt-5 text-center">
                <p className="mb-3 font-body text-[12px] text-white/50">
                  Ready to bring this to your leadership team?
                </p>
                <a
                  href="https://api.aiforbusiness.com/widget/booking/4fA8ynDeW5IRfskSEjQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#C49B3C",
                    textDecoration: "none",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "1px solid rgba(196,155,60,0.3)",
                    background: "rgba(196,155,60,0.08)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(196,155,60,0.15)";
                    e.currentTarget.style.borderColor = "rgba(196,155,60,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(196,155,60,0.08)";
                    e.currentTarget.style.borderColor = "rgba(196,155,60,0.3)";
                  }}
                >
                  Schedule a conversation →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default JourneySection;
