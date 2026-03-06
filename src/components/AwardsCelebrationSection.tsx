import { motion, type Variants } from "framer-motion";
import { Trophy } from "lucide-react";
import awardsHero from "@/assets/awards-hero.webp";
import awards1 from "@/assets/awards-1.webp";
import awards2 from "@/assets/awards-2.webp";
import awards3 from "@/assets/awards-3.webp";
import awards4 from "@/assets/awards-4.webp";
import awards5 from "@/assets/awards-5.webp";
import awards6 from "@/assets/awards-6.webp";
import awards7 from "@/assets/awards-7.webp";
import awards8 from "@/assets/awards-8.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const photos = [awards1, awards2, awards3, awards4, awards5, awards6, awards7, awards8];

const AwardsCelebrationSection = () => {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[1200px] px-5 py-[70px] sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            <Trophy className="h-4 w-4" />
            Celebration
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[32px] font-bold text-primary-foreground sm:text-[42px]">
          Awards &amp; Celebration
        </motion.h2>

        {/* Description */}
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-10 max-w-2xl text-center font-body text-lg leading-relaxed text-primary-foreground/80">
          At the end of our three days together, we'll celebrate your achievements at our awards ceremony. Because this isn't just about learning — it's about implementing. It's about results.
        </motion.p>

        {/* Hero image */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <img
            src={awardsHero}
            alt="Awards celebration on stage"
            className="w-full rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
        </motion.div>

        {/* Photo grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4"
        >
          {photos.map((src, i) => (
            <motion.div key={i} variants={imageReveal} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Awards celebration photo ${i + 1}`}
                className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsCelebrationSection;
