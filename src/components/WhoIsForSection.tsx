import { motion, type Variants } from "framer-motion";
import { Check, X } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";
import whoIsForBg from "@/assets/who-is-for-bg.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const perfectFor = [
  "Executives or functional/business VPs from small and midsized companies",
  "Leaders experimenting with AI or ready to start",
  "Internal AI initiative leads responsible for building clarity and a decision path",
  "Leadership teams stuck between AI urgency and AI confusion",
  "Anyone who wants faster, clearer decisions without losing accountability",
];

const notFor = [
  "Looking for a specific AI tool demo or implementation tutorial",
  "Seeking technical training on coding or data science",
  "Not in a leadership or decision-making role",
  "Wanting someone else to make your AI decisions for you",
];

const WhoIsForSection = () => {
  return (
    <section
      className="relative bg-card"
      style={{
        backgroundImage: `url(${whoIsForBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-card/85" />
      <div className="relative z-10 mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="section-eyebrow-accent inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            Is This For You?
          </span>
        </motion.div>

        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 text-center font-headline text-[28px] font-bold text-foreground sm:text-[36px] lg:text-[42px]">
          Who This Workshop Is For
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Perfect For */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="card-hover rounded-2xl border-2 border-accent bg-[hsl(172_40%_96%)] p-7 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <h3 className="font-headline text-xl font-bold text-foreground sm:text-2xl">Perfect If You:</h3>
            </div>
            <div className="space-y-4">
              {perfectFor.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="h-3 w-3 text-accent-foreground" strokeWidth={3} />
                  </div>
                  <p className="font-body text-sm leading-relaxed text-foreground/85 sm:text-base">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center font-body text-sm italic text-muted-foreground">No prior AI expertise required.</p>
          </motion.div>

           {/* Not For */}
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
             className="card-hover rounded-2xl border-2 border-border bg-secondary p-7 sm:p-8">
             <div className="mb-6 flex items-center gap-3">
               <span className="text-2xl">🚫</span>
               <h3 className="font-headline text-xl font-bold text-white sm:text-2xl">Not the Right Fit If You're:</h3>
             </div>
             <div className="space-y-4">
               {notFor.map((text, i) => (
                 <div key={i} className="flex items-start gap-3">
                   <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                     <X className="h-3 w-3 text-white" strokeWidth={3} />
                   </div>
                   <p className="font-body text-sm leading-relaxed text-white sm:text-base">{text}</p>
                 </div>
               ))}
             </div>
           </motion.div>
        </div>


      </div>
    </section>
  );
};

export default WhoIsForSection;
