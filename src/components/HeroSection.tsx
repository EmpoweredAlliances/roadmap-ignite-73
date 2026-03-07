import { motion, type Variants } from "framer-motion";
import { ArrowRight, Calendar, Clock, Monitor } from "lucide-react";
import logo from "@/assets/ea-logo.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const BOOKING_URL = "https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg";

const HeroSection = () => {
  return (
    <>
      {/* Sticky top bar */}
       <div className="sticky top-0 z-50 w-full bg-primary px-3 py-2.5 sm:px-5">
         <div className="mx-auto flex max-w-[1200px] items-center justify-between">
           <img src={logo} alt="Empowered Alliances" className="h-8 sm:h-10" />
          <a
            href={BOOKING_URL}
            className="shrink-0 rounded-md bg-cta px-4 py-1.5 font-body text-xs font-bold text-cta-foreground transition-all duration-200 hover:bg-cta-hover sm:px-5 sm:py-2 sm:text-sm"
          >
            Schedule a Conversation
          </a>
        </div>
      </div>

      <section className="relative overflow-hidden bg-hero">
        {/* Soft gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(200_60%_92%)] via-[hsl(210_40%_96%)] to-[hsl(220_30%_94%)]" />

        {/* Subtle grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[900px] px-5 py-16 sm:px-8 md:py-20 lg:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="mb-5 inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta sm:text-sm">
                Open Enrollment Workshop
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 mt-4 max-w-3xl font-headline text-[36px] font-bold leading-[1.15] text-foreground sm:text-[48px] md:text-[56px]"
            >
              Leading with AI
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4 max-w-2xl font-headline text-lg font-medium leading-relaxed text-foreground/80 sm:text-xl md:text-2xl"
            >
              Experience a faster, clearer way to make AI decisions
               - without overbuilding or overcommitting.
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-10 max-w-xl font-body text-base leading-relaxed text-muted-foreground"
            >
              A focused, experiential workshop where leaders learn - and practice - the AI Priority Acceleration Workflow to turn messy inputs into sharper decisions.
            </motion.p>

            {/* Event details pills */}
            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Clock, label: "2 Hours" },
                { icon: Monitor, label: "Virtual or In-Person" },
                { icon: Calendar, label: "Upcoming Sessions" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
                  <d.icon className="h-4 w-4 text-cta" />
                  <span className="font-body text-sm font-medium text-foreground">{d.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center gap-4">
              <a
                href={BOOKING_URL}
                className="flex items-center gap-3 rounded-lg bg-cta px-8 py-4 font-body text-base font-bold text-cta-foreground shadow-lg transition-all duration-200 hover:bg-cta-hover hover:shadow-xl sm:text-lg"
              >
                Register for an Upcoming Session
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="font-body text-sm text-muted-foreground">
                <span className="line-through opacity-60">$99</span> FREE per person · No prior AI expertise required
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
