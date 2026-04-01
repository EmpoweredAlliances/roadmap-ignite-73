import { motion } from "framer-motion";

const items = [
  "No prep or AI experience required",
  "No account needed",
  "Explore a current AI challenge with peers",
  "Leave with a clearer next step",
];

const LowFrictionBlock = () => (
  <section className="border-b border-foreground/10 bg-background px-5 py-16 sm:px-8 sm:py-20">
    <div className="mx-auto max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[800px] rounded-2xl border border-foreground/10 bg-card p-8"
      >
        <h3 className="mb-6 text-center font-serif text-[24px] font-medium text-foreground">
          What to expect
        </h3>
        <ul className="grid grid-cols-2 gap-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C49B3C]/20 font-body text-[12px] text-[#C49B3C]">
                ✓
              </span>
              <span className="font-body text-[15px] text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default LowFrictionBlock;
