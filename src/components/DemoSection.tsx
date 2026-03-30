import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["Ideation", "Clusters", "Evaluation", "Priorities"] as const;

const IdeationPanel = () => {
  const [selected, setSelected] = useState<Set<number>>(new Set([0, 2, 5]));

  const ideas = [
    "Predictive maintenance for Line 3",
    "Automate supplier invoice processing",
    "Quality defect detection via vision AI",
    "Demand forecasting accuracy improvement",
    "Shift scheduling optimization",
    "AI-assisted root cause analysis",
  ];

  const toggle = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else if (next.size < 3) next.add(i);
      return next;
    });
  };

  return (
    <div>
      <p className="font-body text-[11px] font-bold uppercase text-muted-foreground">
        This session's challenge
      </p>
      <p className="mt-1 mb-6 font-body text-[16px] font-medium leading-[1.4] text-foreground">
        How might we identify which AI initiatives will generate the most operational ROI in the next 12 months?
      </p>

      <p className="mb-3 font-body text-[11px] font-bold uppercase text-muted-foreground">
        AI-generated ideas tailored to your role — select your top 3
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {ideas.map((idea, i) => {
          const isSelected = selected.has(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`cursor-pointer rounded-lg border px-3 py-2 text-left font-body text-[11px] leading-[1.4] transition-colors ${
                isSelected
                  ? "border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8]"
                  : "border-border bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {idea}
            </button>
          );
        })}
      </div>

      <p className="mt-4 font-body text-[11px] text-muted-foreground">
        {selected.size} of 3 selected ·{" "}
        {selected.size >= 1 ? (
          <span className="font-bold text-[hsl(142_72%_38%)]">Ready to submit</span>
        ) : (
          <span>Select up to 3</span>
        )}
      </p>
    </div>
  );
};

const ClustersPanel = () => {
  const clusters = [
    {
      title: "Proven, low-risk wins",
      hmw: "How might we deploy AI where data and process maturity already exists?",
      ideas: "Predictive maintenance · Invoice automation · Quality inspection",
      featured: false,
    },
    {
      title: "Strategic bets",
      hmw: "How might we pilot higher-value use cases before full commitment?",
      ideas: "Demand forecasting · Root cause AI · Supplier intelligence",
      featured: true,
    },
    {
      title: "Future capability building",
      hmw: "How might we build the AI infrastructure to enable scale?",
      ideas: "Data platform · AI literacy program · Governance framework",
      featured: false,
    },
  ];

  return (
    <div>
      <p className="font-body text-[11px] font-bold uppercase text-muted-foreground">
        AI organized 27 ideas into 3 strategic clusters
      </p>
      <p className="mt-1 mb-4 font-body text-[14px] font-medium text-foreground">
        Framework selected: By risk and operational readiness
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {clusters.map((c, i) => (
          <div
            key={i}
            className={`rounded-[10px] border p-4 ${
              c.featured
                ? "border-[#93C5FD] bg-[#EFF6FF]"
                : "border-border bg-card"
            }`}
          >
            {c.featured && (
              <span className="mb-1 inline-block font-body text-[10px] font-bold uppercase text-[#1D4ED8]">
                ⬆ Strategic bets
              </span>
            )}
            <p
              className={`mb-1 font-body text-[12px] font-medium ${
                c.featured ? "text-[#1D4ED8]" : "text-foreground"
              }`}
            >
              {c.title}
            </p>
            <p className="mb-2 font-body text-[11px] italic text-[#3B82F6]">
              {c.hmw}
            </p>
            <p className="font-body text-[11px] leading-[1.5] text-muted-foreground">
              {c.ideas}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const EvaluationPanel = () => {
  const columns = [
    {
      header: "Proven wins",
      headerClass: "text-foreground",
      borderClass: "border-border",
      barColor: "bg-foreground",
      scores: [
        { label: "ROI potential", value: 7.2, pct: 72 },
        { label: "Feasibility", value: 8.8, pct: 88 },
        { label: "Readiness", value: 9.0, pct: 90 },
      ],
    },
    {
      header: "Strategic bets ✦",
      headerClass: "text-[#1D4ED8]",
      borderClass: "border-[#93C5FD]",
      barColor: "bg-[#3B82F6]",
      scores: [
        { label: "ROI potential", value: 9.2, pct: 92 },
        { label: "Feasibility", value: 6.8, pct: 68 },
        { label: "Readiness", value: 8.1, pct: 81, override: true },
      ],
    },
    {
      header: "Capability building",
      headerClass: "text-foreground",
      borderClass: "border-border",
      barColor: "bg-foreground",
      scores: [
        { label: "ROI potential", value: 5.8, pct: 58 },
        { label: "Feasibility", value: 5.5, pct: 55 },
        { label: "Readiness", value: 6.2, pct: 62 },
      ],
    },
  ];

  return (
    <div>
      <p className="font-body text-[11px] font-bold uppercase text-muted-foreground">
        AI evaluation scores — human overrides tracked
      </p>

      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {columns.map((col, ci) => (
          <div key={ci}>
            <p
              className={`mb-2.5 border-b pb-1.5 font-body text-[12px] font-medium ${col.headerClass} ${col.borderClass}`}
            >
              {col.header}
            </p>
            {col.scores.map((s, si) => (
              <div key={si} className="mb-2 flex items-center gap-2">
                <span className="flex-1 font-body text-[12px] text-muted-foreground">
                  {s.label}
                </span>
                <div className="h-1.5 w-20 rounded-sm bg-muted">
                  <div
                    className={`h-full rounded-sm ${col.barColor}`}
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
                <span
                  className={`min-w-[28px] text-right font-body text-[11px] font-medium ${
                    s.override
                      ? "text-[hsl(142_72%_38%)]"
                      : "text-foreground"
                  }`}
                >
                  {s.value}
                  {s.override && "↑"}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3.5 rounded-r-lg border-l-2 border-[#3B82F6] bg-[#EFF6FF] px-3.5 py-2.5">
        <p className="font-body text-[11px]">
          <span className="font-bold text-[#1D4ED8]">CTO override: </span>
          <span className="text-muted-foreground">
            Readiness for 'Strategic bets' raised from 6.4 → 8.1 — telematics data already in data lake, AI estimate corrected. Override documented in decision record.
          </span>
        </p>
      </div>
    </div>
  );
};

const PrioritiesPanel = () => {
  const rows = [
    {
      rank: 1,
      name: "Strategic bets — demand forecasting + root cause AI",
      meta: "Score 8.1 · 11 votes · ROI est. $1.2M annual",
      owner: "Owner: CTO",
    },
    {
      rank: 2,
      name: "Proven wins — predictive maintenance + quality inspection",
      meta: "Score 8.3 · 9 votes · 90-day pilot feasible",
      owner: "Owner: COO",
    },
    {
      rank: 3,
      name: "Capability building — data platform + governance",
      meta: "Score 5.8 · 4 votes · Concern: resourcing",
      owner: "Owner: CFO + CIO",
    },
  ];

  const badges = [
    { label: "Board summary", sub: "Generated instantly ✓", green: true },
    { label: "Decision record", sub: "Full audit trail", green: false },
    { label: "90-day tracker", sub: "Auto-reminders set", green: false },
  ];

  return (
    <div>
      <p className="mb-2.5 font-body text-[11px] font-bold uppercase text-muted-foreground">
        Final priority ranking — CEO assigned after vote matrix
      </p>

      <div className="flex flex-col gap-2.5">
        {rows.map((r) => (
          <div
            key={r.rank}
            className="flex items-center gap-3 rounded-lg bg-muted px-4 py-3"
          >
            <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-foreground font-body text-[10px] font-medium text-card">
              {r.rank}
            </span>
            <div className="flex-1">
              <p className="font-body text-[12px] font-medium text-foreground">
                {r.name}
              </p>
              <p className="mt-0.5 font-body text-[11px] text-muted-foreground">
                {r.meta}
              </p>
            </div>
            <span className="flex-shrink-0 font-body text-[10px] font-bold text-[hsl(142_72%_38%)]">
              {r.owner}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {badges.map((b, i) => (
          <div
            key={i}
            className={`rounded-lg p-3 text-center ${
              b.green ? "bg-[#DCFCE7]" : "bg-muted"
            }`}
          >
            <p
              className={`font-body text-[11px] font-bold ${
                b.green ? "text-[hsl(142_72%_38%)]" : "text-foreground"
              }`}
            >
              {b.label}
            </p>
            <p
              className={`font-body text-[11px] ${
                b.green ? "text-[hsl(142_72%_38%)]" : "text-muted-foreground"
              }`}
            >
              {b.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PANELS = [IdeationPanel, ClustersPanel, EvaluationPanel, PrioritiesPanel];

const DemoSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ActivePanel = PANELS[activeStep];

  return (
    <section
      id="demo-section"
      className="w-full border-b border-foreground/10 bg-hero"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-[60px] sm:py-[64px]">
        {/* Header */}
        <p className="mb-3 font-body text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
          Experience it yourself
        </p>
        <h2 className="max-w-[540px] font-serif text-[32px] font-medium leading-[1.2] text-foreground sm:text-[36px]">
          Step inside a live Priority Acceleration session
        </h2>
        <p className="mt-3 max-w-[500px] font-body text-[16px] leading-[1.6] text-muted-foreground">
          Click through 4 moments from a real manufacturing company session. No account. No download.
        </p>

        {/* Demo Frame */}
        <div className="mt-8 overflow-hidden rounded-[14px] border border-foreground/10 bg-card shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
          {/* Toolbar */}
          <div className="flex items-center gap-3 border-b border-foreground/10 bg-muted px-5 py-3">
            {/* macOS dots */}
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
              <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
              <span className="h-2 w-2 rounded-full bg-[#28C840]" />
            </div>

            {/* Center label */}
            <span className="hidden flex-1 text-center font-body text-[12px] font-medium text-muted-foreground sm:block">
              Priority Acceleration — Demo session · Acme Manufacturing Co.
            </span>

            {/* Mobile select */}
            <div className="flex-1 sm:hidden">
              <select
                value={activeStep}
                onChange={(e) => setActiveStep(Number(e.target.value))}
                className="w-full rounded-md border border-foreground/10 bg-card px-2 py-1 font-body text-[11px] text-foreground"
              >
                {STEPS.map((s, i) => (
                  <option key={i} value={i}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Segmented control — desktop */}
            <div className="hidden sm:flex">
              {STEPS.map((step, i) => (
                <button
                  key={step}
                  onClick={() => setActiveStep(i)}
                  className={`px-3 py-[5px] font-body text-[11px] font-medium transition-colors ${
                    activeStep === i
                      ? "bg-foreground text-card border border-foreground"
                      : "border border-foreground/10 bg-card text-muted-foreground hover:text-foreground"
                  } ${i === 0 ? "rounded-l-[6px]" : ""} ${
                    i === STEPS.length - 1 ? "rounded-r-[6px]" : ""
                  } ${i > 0 && activeStep !== i ? "-ml-px" : ""}`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          {/* Demo body */}
          <div className="min-h-[240px] p-5 sm:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <ActivePanel />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
