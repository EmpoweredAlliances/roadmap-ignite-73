import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eaLogo from "@/assets/ea-logo.png";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Programs", href: "#programs" },
  { label: "For consultants", to: "/for-consultants" },
  { label: "Results", href: "#results" },
];

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
            href="#final"
            className="shrink-0 rounded-lg bg-[#C49B3C] px-4 py-2 font-body text-[13px] font-medium text-white transition-opacity hover:bg-[#b08930]"
          >
            Schedule a Conversation
          </a>
        </div>
      </nav>

      {/* Hero placeholder */}
      <section className="px-5 py-16 text-center text-white" style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)" }}>
        <p>ConsultantHeroSection</p>
      </section>
    </>
  );
};

export default ConsultantHeroSection;
