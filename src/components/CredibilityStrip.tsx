import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import jeffPhoto from "@/assets/jeff-profile.png";

const ROTATING_STATEMENTS = [
  "30+ years facilitating executive alignment",
  "Fortune 500 experience",
  "Cross-functional innovation and OD background",
  "Human-centered AI adoption focus",
];

const CredibilityStrip = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = ROTATING_STATEMENTS[currentIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 45);
    } else if (!isDeleting && charIdx > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, 25);
    } else {
      setIsDeleting(false);
      setCurrentIdx((i) => (i + 1) % ROTATING_STATEMENTS.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, currentIdx]);

  return (
    <section className="border-b border-foreground/10 bg-card px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[720px]">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
            {/* Left — photo */}
            <div className="shrink-0">
              <div className="h-28 w-28 overflow-hidden rounded-2xl border-2 border-[#C49B3C]/30 shadow-lg">
                <img
                  src={jeffPhoto}
                  alt="Jeff Richardson"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right — content */}
            <div className="flex flex-col gap-3">
              {/* Name + title */}
              <p className="font-body text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Your facilitator
              </p>
              <p className="font-serif text-[22px] font-medium text-foreground">
                Jeff Richardson
              </p>

              {/* Rotating typewriter */}
              <p className="font-body text-[15px] text-[#C49B3C]">
                {displayed}
                <span className="inline-block w-[2px] h-[1em] bg-[#C49B3C] ml-0.5 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
              </p>

              {/* Rajan testimonial */}
              <div className="mt-2 flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C49B3C]/20 font-body text-[11px] font-semibold text-[#C49B3C]">
                  RK
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-body text-[13px] italic leading-relaxed text-muted-foreground">
                    "Jeff brings together diverse IT and business stakeholders to foster ideation and drive innovation."
                  </p>
                  <p className="font-body text-[11px] text-muted-foreground/70">
                    — Rajan, Partner at IBM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
