import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface AgendaItem {
  time: string;
  title: string;
  desc: string;
  details?: string[];
}

const agenda: AgendaItem[] = [
  {
    time: "0:00 – 0:20",
    title: "Welcome & Program Overview",
    desc: "Brief introductions, program overview, and operating agreements to set the stage.",
  },
  {
    time: "0:20 – 1:05",
    title: "AI Priority Acceleration Workflow — Interactive Walkthrough",
    desc: "Work through the full workflow using participant prework inputs in a shared Mural workspace.",
    details: [
      "Ideation — AI + human intelligence generating options and alternative approaches",
      "Organization — Grouping by themes, identifying gaps, summaries & HMW questions",
      "Evaluation — Criteria-based prompts, visualizing analysis & bias detection",
      "Prioritization — AI synthesis + leader judgment, ranking, owners + next steps",
    ],
  },
  {
    time: "1:05 – 1:35",
    title: "Adaptation Exploration",
    desc: "See how the workflow adapts to different leadership use cases.",
    details: [
      "AI Readiness — people, culture, support, tools & data",
      "Workflow Automation — operational system assessment",
      "Governance Guardrails — who decides, guardrails that grow",
      "Strategy — long-term vision, short-term goals & plans",
    ],
  },
  {
    time: "1:35 – 1:50",
    title: "Reflections & Insights",
    desc: "Capture key learnings, discuss applications to your organization, and identify your next-right decisions.",
  },
  {
    time: "1:50 – 2:00",
    title: "Wrap Up & Next Steps",
    desc: "Receive your takeaways and learn about the AI Leadership Alignment Accelerator series.",
  },
];

const AgendaSection = () => {
  return (
    <section className="bg-secondary py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            Workshop Agenda
          </span>
        </motion.div>

         <motion.h2
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
           className="mb-4 text-center font-headline text-[28px] font-bold text-white sm:text-[36px] lg:text-[42px]"
         >
           What Happens in 2 Hours
         </motion.h2>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-[700px] text-center font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          Every minute is designed to move you from complexity to clarity. You'll participate, not just observe.
        </motion.p>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-4 hidden h-[calc(100%-2rem)] w-0.5 bg-border sm:block" />

          {agenda.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className="flex gap-5"
            >
              {/* Timeline dot */}
              <div className="relative hidden shrink-0 sm:flex">
                <div className="relative z-10 mt-1 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-cta font-body text-xs font-bold text-cta-foreground">
                  {i + 1}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-xl bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                <p className="mb-1 font-body text-xs font-semibold uppercase tracking-wider text-cta">{item.time}</p>
                <h3 className="mb-2 font-headline text-lg font-bold text-foreground sm:text-xl">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">{item.desc}</p>
                {item.details && (
                  <ul className="mt-3 space-y-1.5">
                    {item.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                        <span className="font-body text-sm text-muted-foreground">{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prework note */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-10 rounded-xl bg-card p-6 text-center shadow-sm sm:p-8">
          <p className="font-headline text-lg font-bold text-foreground sm:text-xl">Before the Workshop</p>
          <p className="mt-2 font-body text-sm text-muted-foreground sm:text-base">
            You'll complete a brief prework assignment (1–2 questions) to seed the live demonstration and ensure the session is directly relevant to your business challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
