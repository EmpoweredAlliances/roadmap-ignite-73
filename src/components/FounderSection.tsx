import { motion } from "framer-motion";
import jeffPhoto from "@/assets/jeff-profile.png";

const FounderSection = () => (
  <section className="border-b border-foreground/10 bg-background px-5 py-16 sm:px-8 sm:py-20">
    <div className="mx-auto max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[800px] flex-col items-center gap-10 md:flex-row md:items-start"
      >
        {/* Photo */}
        <div className="shrink-0">
          <div className="h-48 w-48 overflow-hidden rounded-2xl border-2 border-[#C49B3C]/30 shadow-lg">
            <img
              src={jeffPhoto}
              alt="Jeff Richardson"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            About your facilitator
          </p>
          <h2 className="font-serif text-[28px] font-medium text-foreground sm:text-[32px]">
            Jeff Richardson
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
            Jeff Richardson is the founder of Empowered Alliances and a trusted facilitator for
            leaders navigating complex change. Over the past 30+ years, he has designed and led
            strategy, innovation, and transformation workshops for Fortune 500 companies and global
            organizations — helping teams move from scattered input to clear decisions, aligned
            priorities, and practical next steps.
          </p>
          <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
            His background spans process improvement, organizational development, design thinking,
            and change management, including innovation strategy leadership at Tata Consultancy
            Services and 100+ workshops and launches across industries. What clients value most is
            Jeff's ability to bring business and technology leaders together, make sense of
            complexity quickly, and use AI as a disciplined collaborator that strengthens judgment
            rather than replacing it.
          </p>

          {/* Final testimonial */}
          <div className="mt-4 flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C49B3C]/20 font-body text-[11px] font-semibold text-[#C49B3C]">
              RK
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-body text-[13px] italic leading-relaxed text-muted-foreground">
                "An outstanding lead facilitator and co-facilitator, highly skilled in strategy and
                change management."
              </p>
              <p className="font-body text-[11px] text-muted-foreground/70">
                — Rajan, Partner at IBM
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
