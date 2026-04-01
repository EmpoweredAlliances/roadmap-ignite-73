import { motion } from "framer-motion";

const OUTCOMES = [
  {
    number: "01",
    title: "A repeatable AI-enabled decision method",
    body: "A practical approach to ideation, organization, evaluation, and prioritization that you can reuse in future leadership conversations.",
  },
  {
    number: "02",
    title: "Clear AI / human decision boundaries",
    body: "A better understanding of what AI should do versus what leaders must still own — so you avoid both hype and underuse.",
  },
  {
    number: "03",
    title: "A clearer view of your next three alignment priorities",
    body: "A practical introduction to readiness, workflow automation, and governance guardrails — so you know what your team needs to align on next.",
  },
  {
    number: "04",
    title: "1–2 next-right decisions",
    body: "Greater clarity on what needs to be decided, who should be involved, and what inputs are still missing.",
  },
  {
    number: "05",
    title: "A toolkit and session artifacts you can use right away",
    body: "Reusable prompts, facilitation patterns, and a short list of next steps so you leave with a path, not just ideas.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] },
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
    <div className="mx-auto max-w-[1100px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
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
            Session outcomes
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

      {/* Outcome cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {OUTCOMES.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(15,31,61,0.07)",
              borderRadius: "16px",
              padding: "28px 26px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px -8px rgba(15,31,61,0.12)";
              e.currentTarget.style.borderColor =
                "rgba(196,155,60,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "none";
              e.currentTarget.style.borderColor =
                "rgba(15,31,61,0.07)";
            }}
          >
            {/* Gold top accent */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "26px",
              width: "32px",
              height: "2px",
              background:
                "linear-gradient(90deg, #C49B3C, #E8C97A)",
              borderRadius: "0 0 2px 2px",
            }} />

            {/* Number */}
            <p style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "rgba(196,155,60,0.5)",
              marginBottom: "14px",
            }}>
              {item.number}
            </p>

            {/* Title */}
            <p style={{
              fontFamily: "Fraunces, serif",
              fontSize: "17px",
              fontWeight: 500,
              color: "#0f1f3d",
              lineHeight: 1.35,
              marginBottom: "10px",
            }}>
              {item.title}
            </p>

            {/* Body */}
            <p style={{
              fontSize: "13px",
              lineHeight: 1.75,
              color: "#4a5a6b",
            }}>
              {item.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default OutcomesSection;
