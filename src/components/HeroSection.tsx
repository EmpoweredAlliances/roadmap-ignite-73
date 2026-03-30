import { useState, useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const useCountUp = (target: number, duration = 1200, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
};

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

const STATS = [
  { target: 90, prefix: "", suffix: " min", label: "vs. 4–8 weeks of strategy cycles" },
  { target: 75, prefix: "$", suffix: "K", label: "of consulting work, in one session" },
  { target: 100, prefix: "", suffix: "%", label: "human decisions, AI-accelerated" },
];

const ProofStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count0 = useCountUp(STATS[0].target, 1200, inView);
  const count1 = useCountUp(STATS[1].target, 1200, inView);
  const count2 = useCountUp(STATS[2].target, 1200, inView);
  const counts = [count0, count1, count2];

  return (
    <motion.div
      ref={ref}
      custom={4}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="mt-10 flex items-start gap-0"
    >
      {STATS.map((stat, idx) => (
        <div
          key={stat.suffix}
          className={`flex flex-col gap-1 px-5 ${
            idx !== 0 ? "border-l border-white/20" : ""
          } ${idx === 0 ? "pl-0" : ""}`}
        >
          <span className="font-body text-[28px] font-medium text-white">
            {stat.prefix}{counts[idx]}{stat.suffix}
          </span>
          <span className="font-body text-[12px] leading-snug text-white/60">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Gold top border */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #C49B3C, #E8C97A, #C49B3C)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      />

      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: "3px",
          left: 0,
          zIndex: 99,
          height: "2px",
          background: "rgba(196,155,60,0.4)",
          width: `${scrollPct}%`,
          transition: "width 0.1s linear",
        }}
      />

      {/* ── Nav ── */}
      <nav className="sticky top-[3px] z-50 w-full border-b border-white/10 bg-[#0f1f3d]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8">
          {/* Left: logomark + wordmark */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 border border-white/20">
              <span className="font-body text-xs font-bold text-white">LW</span>
            </div>
            <span className="font-body text-[15px] font-medium text-white">
              Leading with AI
            </span>
          </div>

          {/* Center: links (hidden on mobile) */}
          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-[13px] text-white/70 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <a
            href={BOOKING_URL}
            className="shrink-0 rounded-lg bg-[#C49B3C] px-4 py-2 font-body text-[13px] font-medium text-white transition-opacity hover:bg-[#b08930]"
          >
            Book a session
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)",
        }}
      >
        {/* Overlay 1 — gold radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 60%, rgba(196,155,60,0.12) 0%, transparent 55%)",
          }}
        />
        {/* Overlay 2 — dot texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.035,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20 lg:py-24">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Left column */}
            <div className="max-w-[560px]">
              {/* Badge pill */}
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[13px] text-white/80">
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
                className="mt-6 font-serif text-[44px] font-medium leading-[1.1] sm:text-[52px]"
              >
                <span className="text-white">You decide.</span>
                <br />
                <span className="bg-gradient-to-r from-[#C49B3C] to-[#E8C97A] bg-clip-text text-transparent">
                  AI accelerates.
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 max-w-[520px] font-body text-[17px] leading-relaxed text-white/70"
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
                  className="btn-shimmer rounded-lg bg-[#C49B3C] px-6 py-3 font-body text-[15px] font-medium text-white transition-opacity hover:bg-[#b08930]"
                >
                  Experience a live demo →
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-lg border border-white/30 bg-transparent px-6 py-3 font-body text-[15px] font-medium text-white transition-colors hover:bg-white/10"
                >
                  See how it works
                </a>
              </motion.div>

              {/* Proof stats */}
              <ProofStats />
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
              <div className="rounded-[14px] border border-white/20 bg-white/10 backdrop-blur-md p-5" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-body text-[12px] font-medium text-white">
                    Step 3 — Organizing ideas
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(142_72%_48%/0.1)] px-2.5 py-0.5 font-body text-[11px] font-medium text-[hsl(142_72%_38%)]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(142_72%_48%)]" />
                    Live
                  </span>
                </div>

                {/* Progress */}
                <p className="mt-4 font-body text-[10px] uppercase tracking-wider text-white/70">
                  Session progress
                </p>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i < 3
                          ? "bg-[#C49B3C]"
                          : i === 3
                          ? "bg-[#C49B3C]/30"
                          : "bg-white/10"
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
                          ? "bg-[#C49B3C]/20 text-[#E8C97A] border border-[#C49B3C]/40"
                          : "bg-white/15 text-white/90 border border-white/20"
                      }`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>

                {/* Participant bar */}
                <div className="mt-4 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
                  <span className="font-body text-[11px] text-white/70">
                    Participants submitted{" "}
                    <span className="font-medium text-white">14 of 16</span>
                  </span>
                  <div className="flex -space-x-2">
                    {["JR", "KM", "ST", "+11"].map((initials) => (
                      <div
                        key={initials}
                        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/30 bg-white/20 font-body text-[9px] font-medium text-white"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2 — Stats summary */}
              <div className="rounded-[10px] border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[11px] leading-relaxed text-white/70">
                  <span className="font-semibold text-white">24</span> ideas generated in{" "}
                  <span className="font-semibold text-white">8</span> minutes ·{" "}
                  <span className="font-semibold text-white">3</span> clusters proposed by AI ·
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
