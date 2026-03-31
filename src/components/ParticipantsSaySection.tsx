import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The session gave our team clarity we'd been chasing for months. In 90 minutes we had ranked priorities and a clear action plan.",
    name: "Leadership Team Lead",
    role: "Fortune 500 Tech Company",
  },
  {
    quote: "I was skeptical about AI-assisted facilitation, but the human-first approach made all the difference. Every decision was ours.",
    name: "VP of Strategy",
    role: "Healthcare Organization",
  },
  {
    quote: "We left with a board-ready summary that would have taken weeks to produce through traditional consulting.",
    name: "Chief Innovation Officer",
    role: "Financial Services",
  },
];

const ParticipantsSaySection = () => (
  <section className="border-b border-foreground/10 bg-background px-5 py-16 sm:px-8 sm:py-20">
    <div className="mx-auto max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[600px] text-center mb-12"
      >
        <p className="section-eyebrow-accent font-body text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3">
          &nbsp;
        </p>
        <h2 className="font-serif text-[32px] sm:text-[36px] font-medium leading-[1.2] text-foreground mb-4">
          What participants say
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-foreground/10 bg-card p-6"
          >
            <p className="mb-4 font-body text-[15px] italic leading-relaxed text-foreground/80">
              "{t.quote}"
            </p>
            <div className="flex flex-col">
              <span className="font-body text-[13px] font-medium text-foreground">
                {t.name}
              </span>
              <span className="font-body text-[11px] text-muted-foreground">
                {t.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ParticipantsSaySection;
