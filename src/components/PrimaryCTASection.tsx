import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PrimaryCTASection = () => (
  <section
    className="border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20"
    style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)" }}
  >
    <div className="mx-auto max-w-[1200px] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[600px] font-serif text-[32px] font-medium leading-[1.2] text-white sm:text-[40px]"
      >
        Your next AI decision deserves a process.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-5 max-w-[520px] font-body text-[16px] leading-relaxed text-white/60"
      >
        Join a free Leading with AI session and leave with your team's priorities ranked,
        documented, and ready to act on.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-col items-center gap-4"
      >
        <a
          href="#register"
          className="btn-shimmer mb-4 inline-flex items-center gap-3 rounded-lg px-10 py-4 font-body text-[16px] font-bold shadow-lg transition-all duration-200 hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #C49B3C, #E8C97A)",
            color: "#0f1f3d",
          }}
        >
          Reserve a Seat
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="https://api.aiforbusiness.com/widget/booking/4fA8ynDeW5IRfskSEjQ6"
          className="font-body text-[13px] transition-colors duration-200"
          style={{ color: "rgba(245,240,232,0.4)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(245,240,232,0.75)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(245,240,232,0.4)")
          }
        >
          Prefer to talk first? Schedule a conversation →
        </a>
        <p className="font-body text-[13px] text-white/30">
          Normally starting at $149, free this month.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PrimaryCTASection;
