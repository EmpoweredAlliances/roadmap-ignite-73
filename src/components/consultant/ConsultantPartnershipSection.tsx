import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const YOU_BRING = [
  "The client relationship",
  "Industry or functional expertise",
  "Strategic context",
  "Credibility and continuity",
];

const WE_BRING = [
  "Priority Acceleration methodology",
  "Facilitation support & decision flow",
  "Priority Acceleration platform",
  "Structured outputs & artifacts",
];

const CLIENT_GETS = [
  "Faster alignment",
  "Better-organized decision-making",
  "More engaging working sessions",
  "Documented rationale behind priorities",
  "Clearer next steps after every workshop",
];

const Dot = ({ color }: { color: string }) => (
  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
);

const ConsultantPartnershipSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[1060px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C49B3C]">
            How it works together
          </span>
          <h2 className="font-serif text-[36px] font-medium leading-[1.2] text-foreground">
            A partnership model built for real client work
          </h2>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr_1fr]">
          {/* LEFT — You bring */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="rounded-2xl border border-foreground/6 bg-card p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 border-b-2 border-[#4EB8A0] pb-2">
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-[#4EB8A0]">
                You bring
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {YOU_BRING.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Dot color="#4EB8A0" />
                  <span className="font-body text-[14px] text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CENTER — We bring */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6, ease }}
            className="rounded-2xl border border-[#C49B3C]/20 p-7 transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #0f1f3d, #1a3a5c)",
              boxShadow: "0 12px 40px rgba(15,31,61,0.35)",
            }}
          >
            <div className="mb-5 border-b-2 border-[#C49B3C] pb-2">
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8C97A]">
                We bring
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {WE_BRING.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Dot color="#C49B3C" />
                  <span className="font-body text-[14px] text-white/70">{item}</span>
                </li>
              ))}
            </ul>

            {/* Mini platform preview */}
            <div className="mt-6 overflow-hidden rounded-lg border border-white/10">
              {/* Toolbar */}
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5">
                <div className="flex gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFBD2E]" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="flex-1 text-center font-body text-[9px] text-white/50">
                  lead.empoweredalliances.com
                </span>
              </div>
              {/* Body */}
              <div className="bg-[#0a1628] p-3">
                {/* Progress bars */}
                <div className="mb-2.5 flex gap-1">
                  {[100, 100, 45, 0, 0].map((pct, i) => (
                    <div key={i} className="h-[3px] flex-1 rounded-full bg-white/10">
                      {pct > 0 && (
                        <div
                          className="h-full rounded-full bg-[#C49B3C]"
                          style={{ width: `${pct}%` }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {/* Cluster card */}
                <div className="mb-2 rounded-md border border-[rgba(196,155,60,0.15)] bg-[rgba(196,155,60,0.08)] p-2">
                  <p className="font-body text-[8px] font-bold uppercase tracking-wider text-[#E8C97A]">
                    Cluster 1 — Operational efficiency
                  </p>
                  <p className="mt-1 font-body text-[9px] text-white/50">
                    Process automation · Resource allocation · Workflow gaps
                  </p>
                </div>
                {/* Score bars */}
                <div className="flex gap-2">
                  {[75, 60, 45].map((w, i) => (
                    <div key={i} className="flex-1">
                      <div className="h-[3px] rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#4EB8A0]/60"
                          style={{ width: `${w}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Client gets */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6, ease }}
            className="rounded-2xl border border-foreground/6 bg-card p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 border-b-2 border-[hsl(142,72%,38%)] pb-2">
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-[hsl(142,72%,38%)]">
                Your client gets
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {CLIENT_GETS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Dot color="hsl(142, 72%, 38%)" />
                  <span className="font-body text-[14px] text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantPartnershipSection;
