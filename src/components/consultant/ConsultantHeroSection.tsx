import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import eaLogo from "@/assets/ea-logo.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const BOOKING_URL = "https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg";

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Programs", href: "/#programs" },
  { label: "For consultants", to: "/for-consultants" },
  { label: "Results", href: "/#results" },
];

const IDEAS = [
  { type: "partner", initials: "YU", text: "Data governance gaps blocking adoption", delay: 0.3 },
  { type: "client", initials: "LM", text: "Need cross-dept alignment on priorities", delay: 0.8 },
  { type: "ai", initials: "AI", text: "Synthesizing 12 ideas into themes...", delay: 1.3 },
  { type: "partner", initials: "YU", text: "Similar pattern at last client - vendor lock-in risk", delay: 1.8 },
  { type: "client", initials: "DP", text: "Operational team not consulted yet", delay: 2.3 },
];

const getIdeaStyles = (type: string) => {
  switch (type) {
    case "partner":
      return {
        row: "bg-[rgba(94,234,212,0.08)] border border-[rgba(94,234,212,0.2)]",
        avatar: "bg-[rgba(94,234,212,0.2)] text-[#5eead4]",
      };
    case "ai":
      return {
        row: "bg-[rgba(196,155,60,0.06)] border border-[rgba(196,155,60,0.15)]",
        avatar: "bg-[rgba(196,155,60,0.15)] text-[#E8C97A]",
      };
    default:
      return {
        row: "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)]",
        avatar: "bg-[rgba(255,255,255,0.1)] text-white/70",
      };
  }
};

const ConsultantHeroSection = () => {
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

      {/* Nav */}
      <nav className="sticky top-[3px] z-50 w-full border-b border-white/10 bg-[#0f1f3d]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={eaLogo} alt="Empowered Alliances" className="h-8 w-8 rounded-lg object-contain" />
            <span className="font-body text-[15px] font-medium text-white">
              Empowered Alliances
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-body text-[13px] text-white transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-[13px] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <a
            href={BOOKING_URL}
            className="shrink-0 rounded-lg bg-[#C49B3C] px-4 py-2 font-body text-[13px] font-medium text-white transition-opacity hover:bg-[#b08930]"
          >
            Schedule a Conversation
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)",
        }}
      >
        {/* Gold radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 60%, rgba(196,155,60,0.12) 0%, transparent 55%)",
          }}
        />
        {/* Dot texture */}
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
              {/* Eyebrow */}
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[12px] text-white/80">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[#5eead4]"
                    style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
                  />
                  For consultants &amp; advisory firms
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
                <span className="text-white">Bring sharper decisions</span>
                <br />
                <span className="bg-gradient-to-r from-[#C49B3C] to-[#E8C97A] bg-clip-text text-transparent">
                  to every client engagement.
                </span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 max-w-[520px] font-body text-[17px] font-normal leading-relaxed text-white/70"
              >
                Empowered Alliances partners with consultants and advisory firms to bring a structured, AI-enabled decision process into client workshops, strategy sessions, and leadership programs. You bring the client relationship and expertise. We bring the methodology, facilitation support, and Priority Acceleration platform.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <a
                  href="#fastramp"
                  onClick={(e) => { e.preventDefault(); document.getElementById("fastramp")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-shimmer inline-flex items-center gap-3 rounded-lg px-8 py-4 font-body text-[15px] font-bold shadow-lg transition-all duration-200 hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #C49B3C, #E8C97A)",
                    color: "#0f1f3d",
                  }}
                >
                  Explore the Fast Ramp Partner Program →
                </a>
                <a
                  href="#whitelabel"
                  onClick={(e) => { e.preventDefault(); window.history.replaceState(null, "", "#whitelabel"); window.dispatchEvent(new HashChangeEvent("hashchange")); document.getElementById("whitelabel")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-3 rounded-lg border-2 border-white/30 px-8 py-4 font-body text-[15px] font-bold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
                >
                  Ask About White Label
                </a>
              </motion.div>

              {/* Tagline */}
              <motion.p
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 font-body text-[15px] italic text-white/50"
              >
                Leaders decide. AI accelerates.
              </motion.p>
            </div>

            {/* Right column — Live Platform Preview */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative hidden w-[420px] shrink-0 flex-col gap-3 lg:flex"
            >
              {/* Main card */}
              <div
                className="rounded-[14px] border border-white/20 bg-white/10 backdrop-blur-md p-5"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span className="font-body text-[12px] font-medium text-white">
                    Step 2 — Ideation in progress
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-body text-[11px] font-medium text-[#5eead4]">
                      Co-delivering
                    </span>
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-[#5eead4]"
                      style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
                    />
                  </div>
                </div>

                {/* Session progress */}
                <p className="mt-4 font-body text-[10px] uppercase tracking-wider text-white/70">
                  Session progress
                </p>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i === 0
                          ? "bg-[#C49B3C]"
                          : i === 1
                          ? "overflow-hidden bg-white/10"
                          : "bg-white/10"
                      }`}
                    >
                      {i === 1 && (
                        <div
                          className="h-full rounded-full bg-[#C49B3C]"
                          style={{
                            animation: "progressFill 3s ease-in-out infinite",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Idea stream */}
                <div className="mt-4 flex flex-col gap-2">
                  {IDEAS.map((idea) => {
                    const styles = getIdeaStyles(idea.type);
                    return (
                      <div
                        key={idea.text}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${styles.row}`}
                        style={{
                          animation: `ideaSlideIn 0.5s ease-out ${idea.delay}s both`,
                        }}
                      >
                        <div
                          className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md font-body text-[9px] font-semibold ${styles.avatar}`}
                        >
                          {idea.initials}
                        </div>
                        <span className="font-body text-[11px] text-white/80">
                          {idea.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* AI clustering box */}
                <div className="mt-4 rounded-lg border border-[rgba(196,155,60,0.15)] bg-[rgba(196,155,60,0.06)] p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-[11px] font-medium text-[#E8C97A]">
                      AI clustering
                    </span>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="inline-block h-1.5 w-1.5 rounded-full bg-[#E8C97A]"
                          style={{
                            animation: `typing-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    <span className="rounded-md border border-[#C49B3C]/40 bg-[#C49B3C]/20 px-2.5 py-1 font-body text-[10px] font-medium text-[#E8C97A]">
                      Governance gaps
                    </span>
                    <span className="rounded-md border border-[rgba(94,234,212,0.3)] bg-[rgba(94,234,212,0.1)] px-2.5 py-1 font-body text-[10px] font-medium text-[#5eead4]">
                      Operational readiness
                    </span>
                    <span className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 font-body text-[10px] font-medium text-white/80">
                      Stakeholder alignment
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini stats card */}
              <div
                className="rounded-[10px] border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
              >
                <p className="font-body text-[11px] leading-relaxed text-white/70">
                  <span className="font-semibold text-white">12</span> ideas captured →{" "}
                  <span className="font-semibold text-white">3</span> clusters emerging →
                  Partner expertise + AI acceleration working together
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keyframes */}
      <style>{`
        @keyframes progressFill {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        @keyframes ideaSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes typing-dot {
          0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
          30% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default ConsultantHeroSection;
