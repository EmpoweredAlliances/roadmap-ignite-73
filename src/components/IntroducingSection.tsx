import { motion, type Variants } from "framer-motion";
import introducingGrid from "@/assets/introducing-grid.webp";
import DualCTAButtons from "@/components/DualCTAButtons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stats = [
  { big: "3 DAYS", sub: "Of Deep Implementation" },
  { big: "100", sub: "Pro Members Only" },
  { big: "Hands-On", sub: "Workshop Sessions" },
];

const IntroducingSection = () => {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-[70px]">
        {/* Heading */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 text-center font-headline text-[32px] font-bold text-primary-foreground sm:text-[42px] lg:text-[48px]">
          The AI For Business Workshop
        </motion.h2>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — photo grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img
              src={introducingGrid}
              alt="Highlights from past AI For Business live events"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right — stats + copy + CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-6">
            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {stats.map((s, i) => (
                <div key={i} className="flex-1 min-w-[120px] rounded-lg bg-cta px-4 py-3 text-center">
                  <p className="font-headline text-[16px] font-extrabold text-cta-foreground sm:text-[18px]">{s.big}</p>
                  <p className="font-body text-[11px] font-medium text-cta-foreground/80 sm:text-[13px]">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Copy */}
            <div className="space-y-4 font-body text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              <p>
                AI implementation changes FAST… and it's more complicated than ever before.
              </p>
              <p>
                Right now, you have an advantage because most of your competition is still figuring this out. This window of opportunity won't stay open forever.
              </p>
              <p>
                The Pro members who master AI implementation now will have a significant competitive edge.
              </p>
              <p>
                This exclusive 3-day workshop will be JAM-PACKED with proven, actionable content delivered by Francis, Brian, Dolmar &amp; Richard. You're guaranteed to leave with a working 90-day AI roadmap that improves your business immediately.
              </p>
            </div>

            {/* CTA */}
            <DualCTAButtons variant="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;
