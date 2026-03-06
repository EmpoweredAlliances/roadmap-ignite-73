import { motion, type Variants } from "framer-motion";
import { Target, Wrench, Users, Sparkles } from "lucide-react";
import experienceFocus from "@/assets/experience-focus.webp";
import experienceWorkshops from "@/assets/experience-workshops.webp";
import experienceNetworking from "@/assets/experience-networking.webp";
import experienceTransformation from "@/assets/experience-transformation.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const cards = [
  {
    image: experienceFocus,
    icon: Target,
    title: "Deep Focus & Immersion",
    desc: "Complete focus for three days with no distractions. You'll accomplish more in 72 hours than most people do in months of online learning.",
    bg: "bg-[hsl(48_100%_90%)]",
  },
  {
    image: experienceWorkshops,
    icon: Wrench,
    title: "Implementation Workshops",
    desc: "You actually build your 90-day AI roadmap during the workshop with expert guidance. You leave with a working plan, not just notes.",
    bg: "bg-[hsl(120_40%_90%)]",
  },
  {
    image: experienceNetworking,
    icon: Users,
    title: "Networking & Partnerships",
    desc: "Natural conversations that lead to real relationships, business partnerships, and lasting connections with 100 ambitious Pro members.",
    bg: "bg-[hsl(0_70%_92%)]",
  },
  {
    image: experienceTransformation,
    icon: Sparkles,
    title: "Lasting Transformation",
    desc: "An experience that changes how you think, work, and approach your business for years to come.",
    bg: "bg-[hsl(270_60%_92%)]",
  },
];

const ExperienceHighlightsSection = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-[70px]">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Learn. Apply. Grow
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[32px] font-bold text-foreground sm:text-[42px]">
          The Workshop Experience
        </motion.h2>

        {/* Subheading */}
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-12 max-w-2xl text-center font-body text-lg leading-relaxed text-muted-foreground">
          If you're a Pro member ready to finally implement AI in your business, this workshop is YOUR event. Welcome home.
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
              className={`overflow-hidden rounded-2xl ${card.bg}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-cta">
                  <card.icon className="h-5 w-5 text-cta-foreground" />
                </div>
                <h3 className="mb-1.5 font-headline text-[17px] font-bold leading-tight text-foreground">{card.title}</h3>
                <p className="font-body text-[13px] leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlightsSection;
