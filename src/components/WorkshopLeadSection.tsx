import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Users } from "lucide-react";
import jeffProfile from "@/assets/jeff-profile.png";

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
    desc: "70+ workshops for multicultural leaders across Japan, Singapore, China, and North America - partnering with organizations like Yamaha, Hitachi, Stanford, and Toshiba.",
  },
  {
    icon: GraduationCap,
    title: "Organizational Development Expert",
    desc: "Master's in Organizational Development. 10-year president of the Silicon Valley OD Network. Designed award-winning leadership programs at Stanford and UC Santa Cruz.",
  },
];

const WorkshopLeadSection = () => {
  return (
    <section id="for-consultants" className="bg-card border-t border-border">
      <div className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="section-eyebrow-accent inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            Your Workshop Lead
          </span>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8 flex justify-center">
          <img src={jeffProfile} alt="Jeff Richardson" className="h-36 w-36 rounded-full object-cover shadow-lg sm:h-44 sm:w-44" />
        </motion.div>

        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[28px] font-bold text-foreground sm:text-[36px] lg:text-[42px]">
          Jeff Richardson
        </motion.h2>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-2xl text-center font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          Jeff brings 30 years of facilitation experience that started with launching the first cross-functional product development program in defense industry, 10 years of strategic planning work at KP and dozens of Fortune 500 clients that included 3 years fine-tuning this interactive process for TCS Innovation group, 6 months of blending AI with human intelligence for collaborative projects and now an inspired app developer who aspires to change the world!
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
