import { motion } from "framer-motion";

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

const PROGRAM_STRIP = [
  {
    title: "Leading with AI",
    desc: "Experience the workflow with your leadership team",
    num: "01",
    highlight: true,
  },
  {
    title: "AI Readiness",
    desc: "Align on people, culture, support, and adoption conditions",
    num: "02",
    highlight: false,
  },
  {
    title: "Workflow Automation",
    desc: "Choose where AI can reduce handoffs, rework, and delays",
    num: "03",
    highlight: false,
  },
  {
    title: "Governance Guardrails",
    desc: "Set decision rights, risk tiers, and escalation paths",
    num: "04",
    highlight: false,
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
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const JourneySection = () => (
  <section
    id="programs"
    className="relative overflow-hidden py-20 sm:py-28"
    style={{
      background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)",
      borderTop: "0.5px solid rgba(255,255,255,0.06)",
      borderBottom: "0.5px solid rgba(255,255,255,0.06)",
    }}
  >
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
            <span
              className="font-body text-[11px] uppercase tracking-[0.15em]"
              style={{ color: "#C49B3C" }}
            >
              The bigger picture
            </span>
            <span className="h-px w-8 bg-[#C49B3C]/40" />
          </div>



          <p
            className="mx-auto mt-6 max-w-[600px] font-body text-[17px] leading-relaxed"
            style={{ color: "rgba(245,240,232,0.55)" }}
          >
            Leading with AI gives leaders a live, low-risk way to experience how
            better AI-enabled decisions get made. For companies, it also serves
            as the front door to our 4-session AI Leadership Alignment
            Accelerator — where leadership teams align on readiness, workflow
            priorities, and governance guardrails, and build the internal
            capability to keep using the method after the workshops end.
          </p>
        </motion.div>

        {/* Program strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ marginTop: "64px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(196,155,60,0.3))",
            }} />
            <p style={{
              fontSize: "10px",
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
              color: "rgba(245,240,232,0.3)",
              whiteSpace: "nowrap" as const,
            }}>
              The full accelerator
            </p>
            <div style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, rgba(196,155,60,0.3), transparent)",
            }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(196,155,60,0.12)",
          }}>
            {PROGRAM_STRIP.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                style={{
                  padding: "28px 24px",
                  background: prog.highlight
                    ? "rgba(196,155,60,0.08)"
                    : "rgba(255,255,255,0.03)",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  position: "relative" as const,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = prog.highlight
                    ? "rgba(196,155,60,0.08)"
                    : "rgba(255,255,255,0.03)";
                }}
              >
                <p style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: prog.highlight ? "#C49B3C" : "rgba(245,240,232,0.2)",
                  marginBottom: "12px",
                }}>
                  {prog.num}
                </p>

                {prog.highlight && (
                  <div style={{
                    position: "absolute" as const,
                    top: 0,
                    left: "24px",
                    right: "24px",
                    height: "2px",
                    background: "linear-gradient(90deg, #C49B3C, #E8C97A)",
                    borderRadius: "0 0 2px 2px",
                  }} />
                )}

                <p style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: prog.highlight ? "#f5f0e8" : "rgba(245,240,232,0.7)",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}>
                  {prog.title}
                </p>

                <p style={{
                  fontSize: "12px",
                  lineHeight: 1.6,
                  color: prog.highlight ? "rgba(245,240,232,0.55)" : "rgba(245,240,232,0.35)",
                }}>
                  {prog.desc}
                </p>

                {prog.highlight && (
                  <div style={{
                    marginTop: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    color: "#C49B3C",
                    background: "rgba(196,155,60,0.1)",
                    border: "1px solid rgba(196,155,60,0.3)",
                    borderRadius: "100px",
                    padding: "3px 10px",
                  }}>
                    <span style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#C49B3C",
                      display: "inline-block",
                    }} />
                    You are here
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default JourneySection;
