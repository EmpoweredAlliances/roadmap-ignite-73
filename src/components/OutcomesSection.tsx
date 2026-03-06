import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const outcomes = [
{
  title: "Your 90-Day AI Implementation Roadmap",
  desc: "Monday you do this. Tuesday you do that. No more guessing what comes next."
},
{
  title: "Step-by-Step Walkthroughs",
  desc: "On how to get the most out of your AI For Business Pro access. Every feature. Every workflow."
},
{
  title: "Your Lead Generation Blueprint",
  desc: "The exact funnel structure. The email sequences. All mapped out for your business."
},
{
  title: "Content Creation Process",
  desc: "The prompts that produce weeks of content in hours. The exact workflow. The exact tools."
},
{
  title: "Session Notes & Key Takeaways",
  desc: "Everything documented. Key frameworks and strategies captured. Ready to reference when you're back home."
}];


const fascinations = [
["The 3 AI tools most Pro members ignore", "(but generate the fastest results)"],
["Why 80% of chatbots fail in the first month", "(and the 5-minute fix)"],
["The exact prompt framework Francis uses", "for sales copy"],
["The biggest GoHighLevel mistake", "costing you 10+ hours per week"],
["How to clone your voice", "so AI sounds like you"],
["The funnel structure working NOW", "for coaches, agents, and consultants"],
["Which traffic source to focus on first", "based on your business"],
["The automation that turns cold leads", "into booked appointments"]];


const OutcomesSection = () => {
  return (
    <section className="border-t-4 border-cta bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-16 lg:py-20">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Your Transformation
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[28px] font-bold text-primary sm:text-4xl lg:text-[42px]">

          Here's What You'll Walk Away With:
        </motion.h2>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto mb-10 max-w-[600px] text-center font-body text-lg text-muted-foreground sm:text-xl lg:mb-12">
          By 5pm on March 26th, you'll have:
        </motion.p>

        {/* Two-column grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-10">
          {/* LEFT - Outcome cards */}
          <div className="flex flex-col gap-5">
            {outcomes.map((item, i) =>
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
              className="flex gap-4 rounded-xl border-l-4 border-cta bg-secondary p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-0.5 sm:p-7">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta sm:h-12 sm:w-12">
                  <Check className="h-5 w-5 text-cta-foreground sm:h-6 sm:w-6" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="mb-1.5 font-headline text-base font-bold text-primary sm:text-lg lg:text-xl">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-card-foreground/70 sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT - Fascinations box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:sticky lg:top-8 lg:self-start">

            <div className="rounded-2xl bg-primary p-6 shadow-xl sm:p-8 lg:p-10">
              <h3 className="mb-6 font-headline text-xl font-bold text-primary-foreground sm:text-2xl">
                Plus, you'll discover:
              </h3>
              <ul className="space-y-4">
                {fascinations.map(([bold, rest], i) =>
                <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-cta" />
                    <p className="font-body text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
                      <strong className="text-primary-foreground">{bold}</strong>{" "}
                      {rest}
                    </p>
                  </li>
                )}
              </ul>
              <div className="mt-8 flex justify-center">
                <span className="inline-block rounded-md bg-cta px-4 py-2 font-headline text-xs font-bold uppercase tracking-[0.12em] text-cta-foreground">
                  Implementation Focused
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Callout + CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 lg:mt-16">
          <div className="mx-auto max-w-2xl rounded-xl bg-secondary p-6 text-center sm:p-8">
            <p className="mb-2 font-body text-base text-card-foreground/70 sm:text-lg">
              This isn't information overload.
            </p>
            <p className="font-headline text-2xl font-bold text-primary sm:text-[28px]">
              This is focused implementation.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <DualCTAButtons />
          </div>
        </motion.div>
      </div>
    </section>);

};

export default OutcomesSection;