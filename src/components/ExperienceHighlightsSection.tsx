import { motion, type Variants } from "framer-motion";
import { Lightbulb, Layers, BarChart3, Target } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const cards = [
  {
    icon: Lightbulb,
    title: "Ideation",
    desc: "Leverage AI + human intelligence to generate options and alternative approaches you'd never surface alone.",
    bg: "bg-[hsl(28_60%_94%)]",
  },
  {
    icon: Layers,
    title: "Organization",
    desc: "Group ideas by themes and decision frames, identify gaps, and create 'How Might We' questions.",
    bg: "bg-[hsl(200_50%_93%)]",
  },
  {
    icon: BarChart3,
    title: "Evaluation",
    desc: "Apply criteria-based prompts to visualize analysis, detect bias, and pressure-test options.",
    bg: "bg-[hsl(150_40%_93%)]",
  },
  {
    icon: Target,
    title: "Prioritization",
    desc: "Combine AI synthesis with leader judgment to rank, assign owners, and define clear next steps.",
    bg: "bg-[hsl(270_35%_94%)]",
  },
];

const ExperienceHighlightsSection = () => {
  return (
    <section id="for-consultants" className="bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            The AI Priority Acceleration Workflow
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[28px] font-bold text-foreground sm:text-[36px] lg:text-[42px]">
          Four Stages of Better Decisions
        </motion.h2>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-2xl text-center font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          Learn and practice a repeatable workflow that uses AI to accelerate synthesis and expand options, while leaders supply judgment, context, and accountability.
        </motion.p>

        {/* 4-column cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className={`rounded-2xl ${card.bg} p-6 sm:p-7`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cta">
                <card.icon className="h-6 w-6 text-cta-foreground" />
              </div>
              <h3 className="mb-2 font-headline text-lg font-bold text-foreground">{card.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlightsSection;
