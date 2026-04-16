import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const BOOKING_URL = "https://api.aiforbusiness.com/widget/booking/YT4jENzU1MfAIwCe7l4X";

const ConsultantFinalCTASection = () => (
  <section id="final" className="relative overflow-hidden bg-primary">
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        opacity: 0.04,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    <div className="relative mx-auto max-w-[700px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-6 font-serif text-[36px] font-medium leading-[1.2] text-white sm:text-[42px]"
      >
        Two ways to partner.
        <br />
        One shared goal: better client decisions.
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mx-auto mb-10 max-w-[560px] font-body text-[17px] leading-relaxed text-white/70"
      >
        Whether you want to co-deliver with Empowered Alliances, strengthen an event you're already leading, or build a repeatable branded capability — we'd love to explore fit.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-flex items-center gap-3 rounded-lg px-8 py-4 font-body text-[15px] font-bold shadow-lg transition-all duration-200 hover:shadow-xl"
          style={{ background: "linear-gradient(135deg, #C49B3C, #E8C97A)", color: "#0f1f3d" }}
        >
          Start a Fast Ramp Conversation →
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg border-2 border-white/30 px-8 py-4 font-body text-[15px] font-bold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
        >
          Talk with Us About White Label
        </a>
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10 font-body text-[15px] italic text-white/70"
      >
        — The Empowered Alliances Team
      </motion.p>
    </div>
  </section>
);

export default ConsultantFinalCTASection;
