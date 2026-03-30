import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const BOOKING_URL = "https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg";

const NAV_LINKS = ["How it works", "Programs", "For consultants", "Results"];

const HeroSection = () => {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-card">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8">
          {/* Left: logomark + wordmark */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="font-body text-xs font-bold text-card">LW</span>
            </div>
            <span className="font-body text-[15px] font-medium text-foreground">
              Leading with AI
            </span>
          </div>

          {/* Center: links (hidden on mobile) */}
          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <a
            href={BOOKING_URL}
            className="shrink-0 rounded-lg bg-foreground px-4 py-2 font-body text-[13px] font-medium text-card transition-opacity hover:opacity-90"
          >
            Book a session
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20 lg:py-24">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Left column */}
            <div className="max-w-[560px]">
              {/* Badge pill */}
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card px-4 py-1.5 font-body text-[13px] text-muted-foreground">
                  <span className="inline-block h-2 w-2 rounded-full bg-[hsl(142_72%_48%)]" />
                  Live sessions running now · 140+ leadership teams served
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 font-serif text-[44px] font-medium leading-[1.1] text-foreground sm:text-[52px]"
              >
                You decide.
                <br />
                <span className="text-muted-foreground">AI accelerates.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 max-w-[520px] font-body text-[17px] leading-relaxed text-muted-foreground"
              >
                90 minutes. Scattered leadership team → ranked priorities, documented reasoning,
                board-ready summary. Every call stays human. Every result is traceable.
              </motion.p>

              {/* Buttons */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href={BOOKING_URL}
                  className="rounded-lg bg-foreground px-6 py-3 font-body text-[15px] font-medium text-card transition-opacity hover:opacity-90"
                >
                  Experience a live demo →
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-lg border border-foreground/20 bg-transparent px-6 py-3 font-body text-[15px] font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  See how it works
                </a>
              </motion.div>

              {/* Proof stats */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-10 flex items-start gap-0"
              >
                {[
                  { num: "90 min", label: "vs. 4–8 weeks of strategy cycles" },
                  { num: "$75K", label: "of consulting work, in one session" },
                  { num: "100%", label: "human decisions, AI-accelerated" },
                ].map((stat, idx) => (
                  <div
                    key={stat.num}
                    className={`flex flex-col gap-1 px-5 ${
                      idx !== 0 ? "border-l border-foreground/10" : ""
                    } ${idx === 0 ? "pl-0" : ""}`}
                  >
                    <span className="font-body text-[28px] font-medium text-foreground">
                      {stat.num}
                    </span>
                    <span className="font-body text-[12px] leading-snug text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right column — floating cards (hidden on mobile) */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative hidden w-[300px] shrink-0 flex-col gap-3 lg:flex"
            >
              {/* Card 1 — Live Session */}
              <div className="rounded-[14px] border border-foreground/10 bg-card p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-body text-[12px] font-medium text-foreground">
                    Step 3 — Organizing ideas
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(142_72%_48%/0.1)] px-2.5 py-0.5 font-body text-[11px] font-medium text-[hsl(142_72%_38%)]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(142_72%_48%)]" />
                    Live
                  </span>
                </div>

                {/* Progress */}
                <p className="mt-4 font-body text-[10px] uppercase tracking-wider text-muted-foreground">
                  Session progress
                </p>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i < 3
                          ? "bg-foreground"
                          : i === 3
                          ? "bg-foreground/30"
                          : "bg-foreground/10"
                      }`}
                    />
                  ))}
                </div>

                {/* Idea tags */}
                <div className="mt-4 flex flex-col gap-2">
                  {[
                    { text: "Operational accountability gap", accent: true },
                    { text: "Data readiness deficit", accent: true },
                    { text: "Governance & risk controls", accent: false },
                  ].map((tag) => (
                    <span
                      key={tag.text}
                      className={`rounded-lg px-3 py-1.5 font-body text-[12px] font-medium ${
                        tag.accent
                          ? "bg-primary/10 text-primary"
                          : "bg-foreground/5 text-muted-foreground"
                      }`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>

                {/* Participant bar */}
                <div className="mt-4 flex items-center justify-between rounded-lg bg-foreground/5 px-3 py-2">
                  <span className="font-body text-[11px] text-muted-foreground">
                    Participants submitted{" "}
                    <span className="font-medium text-foreground">14 of 16</span>
                  </span>
                  <div className="flex -space-x-2">
                    {["JR", "KM", "ST", "+11"].map((initials) => (
                      <div
                        key={initials}
                        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-card bg-foreground/10 font-body text-[9px] font-medium text-foreground"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2 — Stats summary */}
              <div className="rounded-[10px] border border-foreground/10 bg-card px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <p className="font-body text-[11px] leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">24</span> ideas generated in{" "}
                  <span className="font-semibold text-foreground">8</span> minutes ·{" "}
                  <span className="font-semibold text-foreground">3</span> clusters proposed by AI ·
                  facilitator selecting framework
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
