import { motion } from "framer-motion";

const ProofSection = () => (
  <section className="border-b border-foreground/10 bg-background px-5 py-16 sm:px-8 sm:py-20">
    <div className="mx-auto max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[600px] text-center"
      >
        <p className="section-eyebrow-accent font-body text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3">
          &nbsp;
        </p>
        <h2 className="font-serif text-[32px] sm:text-[36px] font-medium leading-[1.2] text-foreground mb-4">
          What leaders say
        </h2>
        <p className="mb-10">&nbsp;</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mx-auto max-w-[560px] rounded-2xl border border-foreground/10 bg-card p-8"
      >
        <p className="font-body text-[17px] italic leading-relaxed text-foreground/80 mb-6">
          "Jeff brings together diverse IT and business stakeholders to foster ideation and drive innovation."
        </p>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C49B3C]/20 font-body text-[13px] font-semibold text-[#C49B3C]">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-body text-[14px] font-medium text-foreground">
              Rajan
            </span>
            <span className="font-body text-[12px] text-muted-foreground">
              Partner at IBM
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProofSection;
