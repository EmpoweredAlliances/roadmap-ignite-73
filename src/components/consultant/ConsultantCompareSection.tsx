import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const TABS = ["Fast Ramp Partner", "White Label for Firms"];

const PANELS = [
  {
    cards: [
      { title: "Best for", items: ["Independent consultants", "Boutique firms", "Experts testing demand", "Partners who want to co-deliver or enhance current offers"] },
      { title: "Best when", items: ["You want to start quickly", "You want live support from EA", "You want to use the methodology in an existing event", "You're growing toward independent delivery"] },
    ],
  },
  {
    cards: [
      { title: "Best for", items: ["Firms with multiple consultants or facilitators", "Firms building a repeatable client-facing capability", "Firms that want branded delivery at scale"] },
      { title: "Best when", items: ["You want broader internal use", "You want a longer-term practice asset", "You want a branded version for repeated deployment", "You want to train internal facilitators"] },
    ],
  },
];

const ConsultantCompareSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="whitelabel"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)", borderTop: "0.5px solid rgba(255,255,255,0.06)", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ opacity: 0.035, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative mx-auto max-w-[800px]">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8 text-center font-serif text-[36px] font-medium leading-[1.2] text-white">
          Which partnership path fits you best?
        </motion.h2>

        {/* Toggle */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto mb-10 flex max-w-[480px] rounded-xl bg-white/4 p-1">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`flex-1 rounded-lg px-4 py-2.5 font-body text-[14px] font-semibold transition-all duration-200 ${
                active === i
                  ? "bg-[#C49B3C]/15 text-[#E8C97A] shadow-md"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {PANELS[active].cards.map((card) => (
              <div key={card.title} className="rounded-[14px] border border-white/8 bg-white/4 p-6">
                <h3 className="mb-4 font-serif text-[18px] font-medium text-white">{card.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 shrink-0 font-body text-[13px] text-[#5eead4]">✓</span>
                      <span className="font-body text-[14px] text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ConsultantCompareSection;
