import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const OpeningLetterSection = () => {
  return (
    <section className="relative bg-card border-t-4 border-cta">
      <div className="mx-auto max-w-[900px] px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
        {/* Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-8 flex justify-center"
        >
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            The Problem
          </span>
        </motion.div>

        {/* Letter body */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="space-y-6 font-body text-base leading-[1.7] text-card-foreground/85 sm:text-lg"
        >
          {/* Salutation */}
          <p className="font-headline text-xl font-semibold text-card-foreground sm:text-[22px]">
            Dear Fellow AI for Business Pro Member,
          </p>

          {/* Opening */}
          <p className="font-semibold text-card-foreground">We have a problem.</p>
          <p>And honestly? It's <strong>our fault.</strong></p>
          <p>
            When we launched AI for Business Pro, we built something incredible. World-class training. Powerful tools. An active community. Everything you need to transform your business with AI.
          </p>
          <p className="font-semibold text-card-foreground">But here's what we discovered...</p>
          <p className="font-headline text-xl font-bold text-card-foreground sm:text-2xl">It's not enough.</p>
          <p>Look, here's what's really happening:</p>

          {/* Scenario box */}
          <div className="my-8 rounded-xl border-l-4 border-cta bg-secondary p-6 sm:p-8">
            <div className="space-y-5 italic text-card-foreground/80">
              <p>
                You log into the dashboard Sunday night. Full of energy. Ready to finally tackle AI.
              </p>
              <p>
                You click on the chatbot training. Watch 20 minutes. Think <span className="font-semibold">"Okay, this makes sense."</span>
              </p>
              <p>
                Then you open GoHighLevel. Stare at the screen.
              </p>
              <p className="font-semibold text-card-foreground">
                "Wait... where do I click first? What do I say in the bot? Will this even work for my industry?"
              </p>
              <p>
                You close the laptop. <span className="font-semibold">"I'll figure it out tomorrow."</span>
              </p>
              <p>
                Except tomorrow, you're answering client emails. Putting out fires. Running your business.
              </p>
              <p>
                And next Sunday? You're back in the same spot. Same dashboard. Same confusion. Same <span className="font-semibold">"I'll get to it later."</span>
              </p>
            </div>
          </div>

          {/* Sound familiar */}
          <p className="py-4 text-center font-headline text-2xl font-bold text-cta">
            "Sound familiar?"
          </p>

          {/* Continuation */}
          <p className="font-semibold text-card-foreground">Here's the thing...</p>
          <p>
            You're not lazy. You're not dumb. You're not "bad at tech."
          </p>
          <p>
            You're stuck because <strong>virtual learning can only take you so far.</strong>
          </p>

          {/* Callout box */}
          <div className="my-8 flex gap-4 rounded-xl border-2 border-primary bg-card p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:p-8">
            <span className="shrink-0 text-3xl text-cta">💡</span>
            <p className="italic text-card-foreground/80">
              "Think about it. When you're watching a video alone at your desk and you have a question... what happens? You pause it. Google something. Try to find the answer. Get distracted. <strong>Never come back.</strong>"
            </p>
          </div>

          {/* Closing */}
          <p className="py-4 text-center font-headline text-2xl font-bold text-primary sm:text-[26px]">
            "That stops today."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OpeningLetterSection;
