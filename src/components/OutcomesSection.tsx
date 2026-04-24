import { motion } from "framer-motion";

const OUTCOMES = [
  {
    title: "A Repeatable AI-Enabled Decision Method",
    body: "A practical approach to ideation, organization, evaluation, and prioritization that you can reuse in future leadership conversations.",
  },
  {
    title: "Clear AI / Human Decision Boundaries",
    body: "A better understanding of what AI should do versus what leaders must still own — so you avoid both hype and underuse.",
  },
  {
    title: "A Clearer View of Your Next Three Alignment Priorities",
    body: "A practical introduction to readiness, workflow automation, and governance guardrails — so you know what your team needs to align on next.",
  },
  {
    title: "1–2 Next-Right Decisions",
    body: "Greater clarity on what needs to be decided, who should be involved, and what inputs are still missing — so you leave with a path, not just ideas.",
  },
  {
    title: "A Toolkit and Session Artifacts You Can Use Right Away",
    body: "Reusable prompts, facilitation patterns, and a short list of next steps so you leave with a path, not just ideas.",
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

const OutcomesSection = () => (
  <section
    id="results"
    style={{
      background: "#f9f7f4",
      padding: "80px 24px",
      borderTop: "0.5px solid rgba(15,31,61,0.08)",
    }}
  >
    <div className="mx-auto max-w-[760px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "48px" }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}>
          <div style={{
            height: "1px",
            width: "40px",
            background:
              "linear-gradient(90deg, #C49B3C, transparent)",
          }} />
          <p style={{
            fontSize: "11px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#C49B3C",
          }}>
            What you leave with
          </p>
        </div>

        <h2 style={{
          fontFamily: "Fraunces, serif",
          fontSize: "clamp(28px, 3.5vw, 40px)",
          fontWeight: 500,
          lineHeight: 1.15,
          color: "#0f1f3d",
        }}>
          What You'll Leave With
        </h2>
      </motion.div>

      {/* Stacked cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {OUTCOMES.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              background:
                "linear-gradient(135deg, #1a2f4a 0%, #162540 100%)",
              borderRadius: "14px",
              padding: "24px 28px",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #1e3654 0%, #1a2f4a 100%)";
              e.currentTarget.style.borderColor =
                "rgba(196,155,60,0.25)";
              e.currentTarget.style.transform =
                "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #1a2f4a 0%, #162540 100%)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.06)";
              e.currentTarget.style.transform =
                "translateX(0)";
            }}
          >
            {/* Gold check circle */}
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              flexShrink: 0,
              background:
                "linear-gradient(135deg, #C49B3C, #E8C97A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2px",
              boxShadow:
                "0 4px 12px rgba(196,155,60,0.3)",
            }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8l3.5 3.5L13 4.5"
                  stroke="#0f1f3d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: "Fraunces, serif",
                fontSize: "17px",
                fontWeight: 500,
                color: "#f5f0e8",
                marginBottom: "6px",
                lineHeight: 1.35,
              }}>
                {item.title}
              </p>
              <p style={{
                fontSize: "13px",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.55)",
              }}>
                {item.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA below cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          marginTop: "36px",
          textAlign: "center",
        }}
      >
        <a
          href="https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 32px",
            borderRadius: "10px",
            background:
              "linear-gradient(135deg, #C49B3C, #E8C97A)",
            color: "#0f1f3d",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow:
              "0 4px 20px rgba(196,155,60,0.3)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 8px 32px rgba(196,155,60,0.45)";
            e.currentTarget.style.transform =
              "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 20px rgba(196,155,60,0.3)";
            e.currentTarget.style.transform =
              "translateY(0)";
          }}
        >
          Schedule a Conversation →
        </a>
      </motion.div>
    </div>
  </section>
);

export default OutcomesSection;
