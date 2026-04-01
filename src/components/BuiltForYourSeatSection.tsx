import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["CEO/President", "COO", "CTO/CIO", "CFO", "CHRO"] as const;

type Role = (typeof ROLES)[number];

interface RoleData {
  headline: string;
  body: string;
  outputs: string[];
}

const ROLE_DATA: Record<Role, RoleData> = {
  "CEO/President": {
    headline:
      "A board-ready answer to 'what's your AI strategy?' — produced in 90 minutes, not months.",
    body: "Replace analysis paralysis with a structured session your leadership team drives. Walk out with ranked priorities, documented rationale, and a repeatable process for any strategic question — AI adoption, budget allocation, operational restructuring, or crisis response.",
    outputs: [
      "Prioritized strategic initiatives with documented rationale",
      "Board-ready executive summary — generated in the room",
      "Full decision audit trail with owner assignments",
      "Repeatable methodology for any future strategic question",
    ],
  },
  COO: {
    headline:
      "Protect operational reliability. Let your constraints shape the strategy — not fight it.",
    body: "Operations leaders skeptical of AI respond well because the tool starts with their constraints, not despite them. Surface operational realities as evaluation criteria and let the operations perspective compete fairly with technology.",
    outputs: [
      "Ranked shortlist of low-risk, immediate-return operational wins",
      "Safety guardrails that protect current delivery",
      "Clear decision criteria — ROI vs. feasibility",
      "Defined 30-day action plan with specific owners",
    ],
  },
  "CTO/CIO": {
    headline:
      "Translate technical possibilities into business priorities the rest of the leadership team can actually evaluate.",
    body: "Your ideas enter the same evaluation framework as everyone else's — scored against feasibility, ROI, readiness, and risk. This increases your influence because your ideas get fair evaluation instead of being dismissed as 'too technical.'",
    outputs: [
      "Alignment on what is allowed vs. restricted for AI use",
      "Framework for surfacing and managing shadow AI risks",
      "Security and architecture risk mitigation plan",
      "Foundation for an AI Governance Council",
    ],
  },
  CFO: {
    headline:
      "Hard numbers attached to priorities. Assumptions documented. 90-day accountability built in.",
    body: "Every option gets evaluation scores including ROI potential. The decision record documents the assumptions behind those estimates. The 30/60/90-day review cycle creates accountability for validating — or invalidating — them.",
    outputs: [
      "Vendor-neutral requirements framework before any spending",
      "Scoring mechanisms before budget discussions begin",
      "Value vs. feasibility mapping for each initiative",
      "Cost-to-serve reduction metrics with assumptions on record",
    ],
  },
  CHRO: {
    headline:
      "Turn employee anxiety into organizational AI capability — with trust built in by design.",
    body: "AI adoption fails when people avoid it out of fear or use it secretly. We align your leadership team on AI readiness from a people perspective — upskilling, clear communication, and psychological safety as first-class outcomes.",
    outputs: [
      "People-centered AI readiness snapshot",
      "Guidelines that protect employee dignity",
      "Skills gap identification and capability roadmap",
      "Change management foundation for sustained AI adoption",
    ],
  },
};

const BuiltForYourSeatSection = () => {
  const [activeRole, setActiveRole] = useState<Role>("CEO/President");
  const data = ROLE_DATA[activeRole];

  return (
    <section className="w-full border-b border-foreground/10 bg-hero">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-[64px]">
        {/* Header */}
        <p className="section-eyebrow-accent mb-3 font-body text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
          THE PRIORITY ACCELERATION WORKFLOW DELIVERS WHAT YOU NEED
        </p>
        <h2 className="max-w-[520px] font-serif text-[32px] font-medium leading-[1.2] text-foreground sm:text-[36px]">
          Every leader gets what they actually need
        </h2>

        {/* Role Tabs */}
        <div className="mt-8 mb-8 flex flex-wrap gap-2">
          {ROLES.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`rounded-lg px-4 py-2 font-body text-[12px] font-medium transition-colors ${
                activeRole === role
                  ? "bg-foreground text-card"
                  : "border border-foreground/20 bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-start"
          >
            {/* Left — headline + body */}
            <div>
              <h3 className="mb-3 font-body text-[22px] font-medium leading-[1.3] text-foreground">
                {data.headline}
              </h3>
              <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">
                {data.body}
              </p>
            </div>

            {/* Right — outputs list */}
            <div>
              <p className="mb-3 font-body text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                Session outputs for you
              </p>
              <ul>
                {data.outputs.map((output, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 py-2.5 ${
                      idx !== data.outputs.length - 1
                        ? "border-b border-foreground/10"
                        : ""
                    }`}
                  >
                    <span className="mt-0.5 font-body text-[13px] font-medium text-[hsl(142_72%_38%)]">
                      ✓
                    </span>
                    <span className="font-body text-[13px] leading-[1.4] text-foreground">
                      {output}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BuiltForYourSeatSection;
