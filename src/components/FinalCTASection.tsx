import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const CLIENT_BOOKING_URL =
  "https://api.aiforbusiness.com/widget/booking/4fA8ynDeW5IRfskSEjQ6";

const CONSULTANT_BOOKING_URL =
  "https://api.aiforbusiness.com/widget/booking/YT4jENzU1MfAIwCe7l4X";

const FinalCTASection = () => {
  const [activeCalendar, setActiveCalendar] = useState<
    "client" | "consultant" | null
  >(null);

  const toggleCalendar = (type: "client" | "consultant") => {
    setActiveCalendar((prev) => (prev === type ? null : type));
  };

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="final-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#final-grid)"
            className="text-primary-foreground"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[860px] px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="mb-6 font-headline text-[28px] font-bold text-primary-foreground sm:text-[36px] lg:text-[42px]">
            Stop Circling. Start Deciding.
          </h2>

          <p className="mx-auto mb-10 max-w-[600px] font-body text-base leading-relaxed text-white sm:text-lg">
            Reserve a free seat in an upcoming Leading with AI
            session — or schedule a conversation to explore
            the full AI Leadership Alignment Accelerator.
          </p>

          {/* CLIENT BUTTONS */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#register"
              className="btn-shimmer flex items-center gap-3 rounded-lg px-8 py-4 font-body text-base font-bold shadow-lg transition-all duration-200 hover:shadow-xl sm:text-lg"
              style={{
                background: "linear-gradient(135deg, #C49B3C, #E8C97A)",
                color: "#0f1f3d",
              }}
            >
              Reserve a Seat – <span className="line-through opacity-70">$149</span>{" "}Free
              <ArrowRight className="h-5 w-5" />
            </a>

            <button
              onClick={() => toggleCalendar("client")}
              className="flex items-center gap-3 rounded-lg border-2 border-primary-foreground/30 px-8 py-4 font-body text-base font-semibold text-primary-foreground transition-all duration-200 hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
            >
              {activeCalendar === "client"
                ? "Hide Calendar"
                : "Schedule a Conversation"}
            </button>
          </div>

          {/* Client calendar */}
          {activeCalendar === "client" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-8 w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm"
            >
              <iframe
                src={CLIENT_BOOKING_URL}
                style={{ width: "100%", height: "700px", border: "none" }}
                title="Schedule a conversation — AI Leadership"
              />
            </motion.div>
          )}

          {/* Divider */}
          <div className="my-12 border-t border-primary-foreground/20" />

          {/* CONSULTANT CTA */}
          <p className="mb-3 font-body text-xs uppercase tracking-widest text-primary-foreground/60">
            For Consultants
          </p>

          <p className="mx-auto mb-6 max-w-[480px] font-body text-base text-white">
            Interested in licensing Priority Acceleration for your
            consulting practice? Let's talk about subscriptions.
          </p>

          <button
            onClick={() => toggleCalendar("consultant")}
            className="mx-auto flex items-center gap-3 rounded-lg border border-primary-foreground/30 px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-all duration-200 hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
          >
            {activeCalendar === "consultant"
              ? "Hide Calendar"
              : "Explore Consultant Subscriptions →"}
          </button>

          {/* Consultant calendar */}
          {activeCalendar === "consultant" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-8 w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm"
            >
              <iframe
                src={CONSULTANT_BOOKING_URL}
                style={{ width: "100%", height: "700px", border: "none" }}
                title="Consultant subscription conversation"
              />
            </motion.div>
          )}

          <p className="mt-10 font-body text-sm italic text-white/70">
            — The Empowered Alliances Team
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
