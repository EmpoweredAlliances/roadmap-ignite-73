import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const NOTES = [
  { text: "We need an AI strategy → but what does that mean?", rot: "-0.5deg" },
  { text: "Ops team says we're not ready. CTO says we're behind.", rot: "0.8deg" },
  { text: "Vendor pitched us something last week — should we buy it?", rot: "-1.2deg" },
  { text: "Budget unclear. Who owns this?", rot: "0.8deg" },
  { text: "CEO wants a plan by Q3 but nobody aligned on scope", rot: "0.3deg" },
  { text: "Need to 'do something with AI' — but what?", rot: "-0.5deg" },
];

const noteStyle = (i: number) =>
  i % 2 === 0
    ? "bg-[rgba(255,235,150,0.08)] border-[rgba(255,235,150,0.12)] text-[rgba(255,235,150,0.6)]"
    : "bg-[rgba(180,200,255,0.06)] border-[rgba(180,200,255,0.1)] text-[rgba(180,200,255,0.5)]";

const PRIORITIES = [
  "Strategic bets — demand forecasting + root cause AI",
  "Proven wins — predictive maintenance + quality inspection",
  "Capability building — data platform + governance",
];

const ConsultantProofSection = () => (
  <section
    className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    style={{ background: "linear-gradient(180deg, #0f1f3d 0%, #132a4a 50%, #0f1f3d 100%)", borderTop: "0.5px solid rgba(255,255,255,0.06)", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
  >
    <div
      className="pointer-events-none absolute inset-0"
      style={{ opacity: 0.035, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
    />

    <div className="relative mx-auto max-w-[1060px]">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12 text-center">
        <span className="mb-4 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C49B3C]">What this looks like in practice</span>
        <h2 className="mb-4 font-serif text-[36px] font-medium leading-[1.2] text-white">From scattered discussion to structured decisions</h2>
        <p className="mx-auto max-w-[560px] font-body text-[17px] leading-relaxed text-white/60">The same leadership conversation — before and after Priority Acceleration.</p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_60px_1fr]">
        {/* BEFORE */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="rounded-2xl border p-6" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,80,80,0.15)" }}>
          <p className="mb-4 font-body text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: "rgba(255,120,100,0.8)" }}>✕ Before — typical strategy session</p>
          <div className="flex flex-col gap-2">
            {NOTES.map((n, i) => (
              <div key={i} className={`rounded-md border px-3 py-2 font-body text-[12px] leading-[1.5] ${noteStyle(i)}`} style={{ transform: `rotate(${n.rot})` }}>
                {n.text}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="rounded-md border border-dashed border-white/15 px-3 py-2 font-body text-[11px] italic text-white/30">
              Action items: "circle back on this" / "set up a follow-up" / "need more data"
            </div>
            <div className="rounded-md border border-dashed border-white/15 px-3 py-2 font-body text-[11px] italic text-white/30">
              Follow-up meeting → same conversation, 3 weeks later
            </div>
          </div>
        </motion.div>

        {/* CENTER ARROW */}
        <div className="flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full font-body text-[20px] font-bold text-[#0f1f3d] rotate-90 lg:rotate-0" style={{ background: "linear-gradient(135deg, #C49B3C, #E8C97A)" }}>
            →
          </div>
        </div>

        {/* AFTER */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="rounded-2xl border p-6" style={{ background: "rgba(78,184,160,0.04)", borderColor: "rgba(78,184,160,0.2)" }}>
          <p className="mb-4 font-body text-[10px] font-bold uppercase tracking-[0.12em] text-[#5eead4]">✓ After — Priority Acceleration session</p>

          {/* Ranked priorities */}
          <p className="mb-2 font-body text-[9px] font-bold uppercase tracking-[0.12em] text-[#5eead4]">Ranked priorities with documented rationale</p>
          <div className="mb-4 flex flex-col gap-1.5">
            {PRIORITIES.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 rounded-md border px-3 py-2" style={{ background: "rgba(94,234,212,0.06)", borderColor: "rgba(94,234,212,0.12)" }}>
                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#5eead4]/20 font-body text-[9px] font-bold text-[#5eead4]">{i + 1}</span>
                <span className="font-body text-[12px] text-white/70">{p}</span>
              </div>
            ))}
          </div>

          {/* Override */}
          <p className="mb-2 font-body text-[9px] font-bold uppercase tracking-[0.12em] text-[#5eead4]">Every score and override documented</p>
          <div className="mb-4 rounded-md border px-3 py-2" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
            <p className="font-body text-[11px] text-white/50">CTO override recorded: Readiness raised 6.4 → 8.1 — telematics data confirmed.</p>
          </div>

          {/* Owners */}
          <p className="mb-2 font-body text-[9px] font-bold uppercase tracking-[0.12em] text-[#5eead4]">Clear owners and next steps</p>
          <div className="mb-4 rounded-md border px-3 py-2" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
            <p className="font-body text-[11px] text-white/50">CTO owns #1 · COO owns #2 · CFO + CIO own #3 · 30/60/90 milestones set · Board summary generated</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "90 minutes", teal: true },
              { label: "Board-ready", teal: true },
              { label: "Full audit trail", teal: false },
              { label: "Repeatable", teal: false },
            ].map((b) => (
              <span
                key={b.label}
                className={`rounded-full border px-3 py-1 font-body text-[10px] font-medium ${
                  b.teal
                    ? "border-[rgba(94,234,212,0.25)] bg-[rgba(94,234,212,0.08)] text-[#5eead4]"
                    : "border-white/10 bg-white/5 text-white/50"
                }`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ConsultantProofSection;
