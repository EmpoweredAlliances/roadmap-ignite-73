import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const OpeningLetterSection = () => {
  return (
    <section className="relative bg-secondary">
      <div className="mx-auto max-w-[800px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-8 flex justify-center"
        >
          <span className="inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            The Challenge
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="space-y-6 font-body text-base leading-[1.75] text-foreground/80 sm:text-lg"
        >
          <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
            If everything is a pilot, nothing is a strategy.
          </h2>

          <p>
            Most leaders are already experimenting with AI. But it hasn't changed how decisions get made — so the promise is there, but the payoff isn't.
          </p>

          <p>
            AI efforts stall because leadership teams haven't agreed on a <strong className="text-foreground">shared way to use AI for better decisions</strong> — so experimentation stays scattered and results stay thin.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-cta bg-card p-6 sm:p-8">
            <p className="italic text-foreground/70">
              "Your team is having the same circular conversation. Everyone agrees AI matters. Nobody agrees on what to do next. Weeks pass. Nothing changes. The window of opportunity narrows."
            </p>
          </div>

          <p>
            The missing step isn't more information about AI. It's a <strong className="text-foreground">shared decision-making methodology</strong> that uses AI to accelerate synthesis while keeping leaders in control of judgment, context, and accountability.
          </p>

          <p className="text-center font-headline text-xl font-bold text-cta sm:text-2xl">
            That's exactly what Leading with AI delivers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OpeningLetterSection;
