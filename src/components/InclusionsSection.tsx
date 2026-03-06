import { motion, type Variants } from "framer-motion";
import { Check, ArrowDown, Calendar, Users, Video } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import DualCTAButtons from "@/components/DualCTAButtons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

type CheckItem = { icon?: React.ReactNode; text: string };

const mainItems: CheckItem[] = [
  { icon: <Calendar className="h-4 w-4" />, text: "3 Full Days (9am-5pm, March 24-26, 2026)" },
  { icon: <Users className="h-4 w-4" />, text: "2 Seats (each seat requires a seat deposit)" },
  { text: "Direct access to all four founders" },
  { text: "Live hot seats throughout all 3 days" },
  
  { icon: <Video className="h-4 w-4" />, text: "Workshop recordings" },
  { text: "Notes and key takeaways from every session" },
  { text: "Small group environment (100 people vs. our usual 500+ events)" },
];

const bonusLeft = [
  "Access to workshop recordings",
  "Private workshop chat group during the event to stay connected",
];

const bonusRight = [
  "Priority support during the event",
  "Bonus templates and swipe files",
  "Certificate of completion",
];

const InclusionsSection = () => {
  return (
    <section className="bg-[hsl(0_0%_96%)]">
      <div className="mx-auto max-w-[1200px] px-5 py-[70px] sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Everything Included
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 text-center font-headline text-[32px] font-bold text-primary sm:text-[42px] lg:mb-[50px]">
          What You Get:
        </motion.h2>

        {/* Two-column */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:gap-12">
          {/* LEFT — Checklist */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-2 lg:order-1">
            <div className="space-y-3">
              {mainItems.map((item, i) => (
                <motion.div key={i} variants={itemFade}
                  className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta">
                    <Check className="h-3.5 w-3.5 text-cta-foreground" strokeWidth={3} />
                  </div>
                  <div className="flex items-center gap-2">
                    {item.icon && <span className="text-cta">{item.icon}</span>}
                    <p className="font-headline text-[15px] text-card-foreground sm:text-base">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Pricing box */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-8">
              <div className="rounded-2xl border-[3px] border-cta bg-card p-8 text-center shadow-[0_8px_24px_hsl(355_86%_55%/0.15)] sm:p-10">
                {/* Retail value */}
                <p className="font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta">Retail Value:</p>
                <p className="mt-2 font-headline text-[56px] font-bold leading-none text-primary line-through decoration-cta decoration-[3px]">
                  $997
                </p>
                <p className="mt-1 font-body text-base text-muted-foreground">Per Seat</p>

                {/* Divider */}
                <div className="my-5 flex justify-center">
                  <ArrowDown className="h-8 w-8 text-cta" />
                </div>

                {/* Dual pricing */}
                <div className="mt-4 space-y-4">
                  {/* Pro Member price */}
                  <div className="rounded-lg bg-[hsl(160_81%_38%/0.1)] p-4">
                    <p className="font-headline text-xs font-bold uppercase tracking-[0.15em] text-[hsl(160_81%_38%)]">Pro Members</p>
                    <p className="mt-1 font-headline text-[36px] font-bold leading-none text-cta">$100</p>
                    <p className="mt-1 font-headline text-sm text-primary">Refundable Deposit Per Seat</p>
                    <p className="mt-0.5 font-body text-xs italic text-muted-foreground">You get it back at the door</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-[hsl(160_81%_38%)] px-3 py-1.5 font-headline text-[11px] font-bold uppercase tracking-wider text-white">
                      <Check className="h-3 w-3" strokeWidth={3} /> 100% Refundable
                    </span>
                  </div>

                  {/* General Admission price */}
                  <div className="rounded-lg bg-cta/5 p-4">
                    <p className="font-headline text-xs font-bold uppercase tracking-[0.15em] text-cta">General Admission</p>
                    <div className="mt-1 flex items-baseline justify-center gap-2">
                      <p className="font-headline text-[36px] font-bold leading-none text-cta">$297</p>
                      <p className="font-headline text-lg text-muted-foreground line-through">$997</p>
                    </div>
                    <p className="mt-1 font-headline text-sm font-bold text-primary">Early Bird Price</p>
                    <p className="mt-0.5 font-body text-xs text-muted-foreground">+ 2 months free Pro membership included</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary benefits */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mt-14 max-w-[900px] rounded-2xl bg-card p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:p-8">
          <h3 className="mb-6 text-center font-headline text-xl font-bold text-primary">Plus, As Part of This Workshop:</h3>
          <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {[...bonusLeft, ...bonusRight].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-cta" strokeWidth={3} />
                <p className="font-body text-base text-card-foreground">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 flex flex-col items-center gap-5">
          <DualCTAButtons />
          <div className="text-center">
            <p className="font-headline text-base font-bold text-primary">Limited Seating — This Event Will Sell Out!</p>
            <p className="mt-1 font-body text-sm text-muted-foreground">Secure your spot today</p>
          </div>
          <CountdownTimer />
        </motion.div>
      </div>
    </section>
  );
};

export default InclusionsSection;
