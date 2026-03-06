import { motion, type Variants } from "framer-motion";
import { Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import founderFrancis from "@/assets/founder-francis.webp";
import founderBrian from "@/assets/founder-brian.webp";
import founderDolmar from "@/assets/founder-dolmar.webp";
import founderRichard from "@/assets/founder-richard.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface Credential {
  icon: LucideIcon;
  stat: string;
  sub?: string;
  desc: string;
}

const credentials: Credential[] = [
  { icon: Trophy, stat: "Inc. 5000", sub: "4 YEARS IN A ROW", desc: "Fastest-growing private companies in America" },
  { icon: Users, stat: "60,000+", sub: "BUSINESS OWNERS TRAINED", desc: "And growing every day" },
  { icon: Users, stat: "3,000+", sub: "ACTIVE MEMBERS", desc: "Pro members in our community" },
];

const founders = [
  { name: "Francis Ablola", photo: founderFrancis },
  { name: "Brian Hanson", photo: founderBrian },
  { name: "Dolmar Cross", photo: founderDolmar },
  { name: "Richard Dunn", photo: founderRichard },
];

const FoundersSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit2" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 0 40 L 30 40 L 30 10 L 50 10 L 50 40 L 80 40" fill="none" stroke="#fff" strokeWidth="0.5" />
              <path d="M 40 0 L 40 25 L 60 25 L 60 55 L 40 55 L 40 80" fill="none" stroke="#fff" strokeWidth="0.5" />
              <circle cx="30" cy="40" r="2" fill="#fff" opacity="0.3" />
              <circle cx="60" cy="55" r="2" fill="#fff" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit2)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-16 lg:py-20">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-6 flex justify-center sm:mb-8">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Meet Your Instructors
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[28px] font-bold text-primary-foreground sm:text-4xl lg:text-[42px]">
          Who's Teaching This?
        </motion.h2>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-xl font-normal text-primary-foreground sm:text-2xl lg:text-[28px]">
          Francis Ablola, Brian Hanson, Dolmar Cross, Richard Dunn
        </motion.p>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mb-10 max-w-[700px] text-center font-body text-base text-primary-foreground/60 sm:text-lg lg:mb-14 lg:text-xl">
          Not "AI educators" who teach theory. But founders who've built actual businesses using this stuff:
        </motion.p>

        {/* Credential cards */}
        <div className="mb-14 grid gap-5 sm:grid-cols-3 lg:mb-16 lg:gap-7">
          {credentials.map((cred, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className="flex flex-col items-center rounded-xl bg-primary-foreground/[0.06] p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-primary-foreground/[0.1] sm:p-8"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cta sm:h-20 sm:w-20">
                <cred.icon className="h-7 w-7 text-cta-foreground sm:h-9 sm:w-9" />
              </div>
              <p className="font-headline text-2xl font-bold text-primary-foreground sm:text-3xl">
                {cred.stat}
              </p>
              {cred.sub && (
                <p className="mt-1 font-headline text-sm font-bold text-cta sm:text-lg">
                  {cred.sub}
                </p>
              )}
              <p className="mt-2 font-body text-sm text-primary-foreground/65 sm:text-base">
                {cred.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder photos (initials) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="mb-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-10">
            {founders.map((f) => (
              <div key={f.name} className="flex flex-col items-center gap-3">
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-cta sm:h-36 sm:w-36 lg:h-[180px] lg:w-[180px]">
                  <img src={f.photo} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="font-headline text-base font-bold text-primary-foreground sm:text-lg lg:text-xl">
                  {f.name}
                </p>
                <p className="font-body text-sm text-primary-foreground/60 sm:text-base">
                  Co-Founder
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Inc 5000 badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-lg border-2 border-cta bg-primary-foreground px-6 py-4 shadow-lg sm:px-10 sm:py-5">
            <Trophy className="h-6 w-6 text-cta sm:h-7 sm:w-7" />
            <span className="font-headline text-base font-bold text-primary sm:text-lg">
              INC. 5000 | 4X HONOREE
            </span>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto max-w-[600px] text-center font-body text-xl italic text-primary-foreground/70 sm:text-2xl lg:text-[26px]">
          "They teach what they do. Not what they read in a book."
        </motion.p>
      </div>
    </section>
  );
};

export default FoundersSection;
