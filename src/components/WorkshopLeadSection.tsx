import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Users } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const highlights = [
  {
    icon: Briefcase,
    title: "AI Strategy & Innovation",
    desc: "Developed the AI Opportunity Assessment methodology at TCS, leading executive innovation programs across North American centers and guiding senior leaders through AI strategy decisions.",
  },
  {
    icon: Users,
    title: "Executive Facilitation",
    desc: "Over 15 years facilitating senior executive workshops - from Kaiser Permanente SVPs to Fortune 500 leadership teams - specializing in alignment, decision-making, and organizational transformation.",
  },
  {
    icon: Globe,
    title: "Global Leadership Experience",
    desc: "70+ workshops for multicultural leaders across Japan, Singapore, China, and North America — partnering with organizations like Yamaha, Hitachi, Stanford, and Toshiba.",
  },
  {
    icon: GraduationCap,
    title: "Organizational Development Expert",
    desc: "Master's in Organizational Development. 10-year president of the Silicon Valley OD Network. Designed award-winning leadership programs at Stanford and UC Santa Cruz.",
  },
];

const WorkshopLeadSection = () => {
  return (
    <section className="bg-card border-t border-border">
      <div className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            Your Workshop Lead
          </span>
        </motion.div>

        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[28px] font-bold text-foreground sm:text-[36px] lg:text-[42px]">
          Jeff Richardson
        </motion.h2>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-2xl text-center font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          From mechanical engineer to AI strategy consultant — Jeff brings 30+ years of leadership development, design thinking, and executive facilitation to every session. He founded Empowered Alliances to help leadership teams turn AI complexity into clear business priorities.
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className="rounded-xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cta/10">
                <item.icon className="h-5 w-5 text-cta" />
              </div>
              <h3 className="mb-2 font-headline text-lg font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopLeadSection;
