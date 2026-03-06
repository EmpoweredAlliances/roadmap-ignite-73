import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const DepositExplainerSection = () => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[800px] px-5 py-[70px] sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(160_81%_38%)]">
            <ShieldCheck className="h-8 w-8 text-white" />
          </div>

          <h2 className="mb-8 font-headline text-[28px] font-bold text-primary sm:text-4xl">
            How Registration Works
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="space-y-5 font-body text-base leading-relaxed text-card-foreground/80 sm:text-lg">
          <p>
            There are <strong className="text-primary">two ways to attend</strong> the 3-Day Workshop:
          </p>
          <div className="rounded-xl bg-card p-5 shadow-sm sm:p-6">
            <h3 className="mb-2 font-headline text-lg font-bold text-primary">🎟️ Pro Members</h3>
            <p>
              Place a <strong className="text-primary">$100 refundable deposit</strong> per seat. When you attend, you receive the deposit back at the door. If you can't make it, just let us know for a full refund.
            </p>
          </div>
          <div className="rounded-xl bg-card p-5 shadow-sm sm:p-6">
            <h3 className="mb-2 font-headline text-lg font-bold text-primary">🌐 General Admission</h3>
            <p>
              Not a Pro member? No problem. General Admission tickets are <strong className="text-cta">$297 Early Bird</strong> (normally $997). Your ticket includes <strong className="text-primary">2 months free</strong> of Pro membership so you can experience the full platform.
            </p>
          </div>
          <p>
            Seating is limited to <strong className="text-primary">100 people</strong>, so we want to make sure we accommodate as many people as we can.
          </p>
        </motion.div>

        {/* Quick summary */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-8 rounded-xl bg-card p-5 shadow-sm sm:p-6">
          <div className="space-y-3">
            {[
              "Pro Members: $100 refundable deposit per seat — you get it back at the door",
              "General Admission: $297 Early Bird (normally $997)",
              "GA includes 2 months free Pro membership",
              "Cancel anytime for a full refund",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(160_81%_38%)]">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <p className="font-body text-sm text-card-foreground sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepositExplainerSection;
