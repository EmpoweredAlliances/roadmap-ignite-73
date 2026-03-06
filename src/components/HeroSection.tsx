import { motion, type Variants } from "framer-motion";
import DualCTAButtons from "@/components/DualCTAButtons";
import EventInfoBox from "@/components/EventInfoBox";
import TrustIndicators from "@/components/TrustIndicators";
import heroImage from "@/assets/hero-workshop.jpg";
import heroCrowd from "@/assets/hero-crowd.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const HeroSection = () => {
  return (
    <>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 w-full bg-cta px-3 py-2 sm:px-5">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-between">
          <p className="hidden font-headline text-sm font-bold uppercase tracking-wide text-cta-foreground sm:block sm:whitespace-nowrap">
            🔒 Exclusive Limited Seating for 100 PRO Members
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="https://aiforbusinesslive.com/3-day-workshop-checkout" className="shrink-0 rounded-md border border-white/30 px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-wide text-cta-foreground transition-all duration-200 hover:bg-white/10 sm:px-5 sm:py-2 sm:text-xs">
              General Admission
            </a>
          </div>
        </div>
      </div>

    <section className="relative overflow-hidden bg-hero">

      {/* Background crowd image */}
      <div className="pointer-events-none absolute inset-0">
        <img src={heroCrowd} alt="" className="h-full w-full object-cover opacity-[0.25]" />
        <div className="absolute inset-0 bg-hero/40" />
      </div>

      {/* Circuit board pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 0 40 L 30 40 L 30 10 L 50 10 L 50 40 L 80 40" fill="none" stroke="#4a7cff" strokeWidth="0.5" />
              <path d="M 40 0 L 40 25 L 60 25 L 60 55 L 40 55 L 40 80" fill="none" stroke="#4a7cff" strokeWidth="0.5" />
              <circle cx="30" cy="40" r="2" fill="#4a7cff" opacity="0.4" />
              <circle cx="50" cy="10" r="2" fill="#4a7cff" opacity="0.4" />
              <circle cx="60" cy="55" r="2" fill="#4a7cff" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Glow effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-cta/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full bg-[hsl(220_60%_50%/0.06)] blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-10 sm:px-8 md:py-16 lg:py-[60px] lg:pb-[80px]">
        <div className="flex flex-col items-center text-center">
          {/* Red badge */}
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <span className="mb-5 inline-block rounded-md bg-cta px-5 py-2 font-headline text-xs font-bold uppercase tracking-[0.15em] text-cta-foreground sm:text-sm">
              Exclusive 3-Day Workshop
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 mt-4 max-w-4xl font-headline text-[32px] font-extrabold leading-[1.1] text-primary-foreground sm:text-[42px] md:text-[52px] lg:text-[58px]">

            Leading with AI{" "}
            <span className="text-cta">Together</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/70 sm:text-lg md:text-xl">

            So You Finally Know Exactly What to Do First, Second, and Third... Instead of Staring at Your Dashboard Wondering <em>"Where Do I Even Start?"</em>
          </motion.p>

          {/* Supporting text */}
          <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8 max-w-2xl font-body text-sm leading-relaxed text-primary-foreground/50 sm:text-base">

            Join <strong className="text-primary-foreground/80">Francis, Brian, Dolmar &amp; Richard</strong> in Jacksonville for Live Demonstrations, Hot Seats, and Step-by-Step Plans That Turn Your Pro Membership Into Working Systems
          </motion.p>

          {/* Image */}
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="relative mb-10 w-full max-w-2xl">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-[hsl(220_60%_50%/0.15)] blur-2xl" />
              




              <div className="absolute -right-3 -top-3 flex h-20 w-20 items-center justify-center rounded-full bg-cta shadow-lg">
                <span className="font-headline text-xs font-bold uppercase leading-tight text-cta-foreground text-center">
                  LIVE<br />EVENT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Event info box */}
          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="mb-8 w-full max-w-md">
            <EventInfoBox />
          </motion.div>

          {/* CTA */}
          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="mb-4 w-full max-w-md">
            <DualCTAButtons variant="dark" />
          </motion.div>

          {/* Trust indicators */}
          <motion.div custom={6} initial="hidden" animate="visible" variants={fadeUp} className="mt-2">
            <TrustIndicators />
          </motion.div>
        </div>

      </div>
    </section>
    </>);

};

export default HeroSection;