import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const CARDS = [
  { icon: "🔧", title: "Deepen your value", desc: "Enhance what you offer without building your own platform or methodology from scratch." },
  { icon: "📈", title: "Strengthen existing programs", desc: "Make the workshops you already sell more engaging, structured, and outcomes-focused." },
  { icon: "🎯", title: "Better prioritization", desc: "Gain a stronger structure for moving clients from discussion to ranked, defensible priorities." },
  { icon: "🤝", title: "Stay in the conversation", desc: "You remain present in the strategic dialogue. AI supports the process — it doesn't replace you." },
  { icon: "🔄", title: "Extend the engagement", desc: "Use session outputs to open follow-on advisory, implementation, or transformation support." },
  { icon: "📚", title: "Learn by doing", desc: "Master a repeatable methodology through real client use — not through theory alone." },
];

const ConsultantWhySection = () => (
  <section className="border-b border-foreground/10 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-[1200px]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="mb-10 text-center">
        <span className="section-eyebrow-accent mb-4 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C49B3C]">For your practice</span>
        <h2 className="font-serif text-[36px] font-medium leading-[1.2] text-foreground">Why this works for consultants and advisors</h2>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {CARDS.map((c) => (
          <motion.div key={c.title} variants={itemVariants} className="rounded-[14px] border border-foreground/6 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#C49B3C]/15 text-[18px]" style={{ background: "linear-gradient(135deg, rgba(196,155,60,0.1), rgba(196,155,60,0.05))" }}>
              {c.icon}
            </div>
            <h3 className="mb-2 font-serif text-[16px] font-medium text-foreground">{c.title}</h3>
            <p className="font-body text-[13px] leading-relaxed text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ConsultantWhySection;
