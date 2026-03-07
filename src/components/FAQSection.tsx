import { motion, type Variants } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const faqs = [
  { q: "Do I need AI expertise to attend?", a: "No. This workshop is designed for leaders at all levels of AI familiarity. The focus is on decision-making methodology, not technical implementation." },
  { q: "What's the format - virtual or in-person?", a: "The default format is a 2-hour virtual session. An optional 4-hour in-person format is also available. Both deliver the same core experience and outcomes." },
  { q: "How is this different from other AI workshops?", a: "This is a decision container, not an AI demo. It's vendor-neutral and focused on leadership alignment and decision clarity - not tool implementation. You'll practice a repeatable workflow, not watch a presentation." },
  { q: "What do I need to prepare?", a: "You'll complete a brief prework assignment (1-2 questions via Google Form) to seed the live demonstration. This ensures the session is directly relevant to your challenges." },
  { q: "What do I walk away with?", a: "A repeatable meeting workflow, reusable AI prompts, session artifacts (priorities, decision log, and next steps), and a leader-ready guide for engaging your leadership team on AI priorities." },
  { q: "Is this for individual leaders or teams?", a: "Leading with AI is an open-enrollment session for individual leaders. For teams, we offer the AI Leadership Alignment Accelerator - a customized version that kicks off with a private Leading with AI session for your leadership team." },
  { q: "What's the AI Leadership Alignment Accelerator?", a: "It's our 3-pillar leadership-team workshop series (Readiness, Workflow Automation, Governance Guardrails) designed to create shared clarity and accelerate decisions on AI direction. Leading with AI previews how the workflow powers those sessions." },
  { q: "How much does it cost?", a: "Introductory sessions are FREE (regularly $99 per person). Team packages for the AI Leadership Alignment Accelerator use a sliding scale based on company size, with package discounts available." },
];

const FAQSection = () => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[800px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
            Questions Answered
          </span>
        </motion.div>

         <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
           className="mb-10 text-center font-headline text-[28px] font-bold text-white sm:text-[36px] lg:text-[42px]">
           Frequently Asked Questions
         </motion.h2>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border-none bg-card shadow-sm transition-shadow hover:shadow-md data-[state=open]:shadow-md"
              >
                <AccordionTrigger
                  className="px-5 py-5 font-headline text-base font-bold text-foreground hover:no-underline data-[state=open]:text-cta sm:px-6 sm:text-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-cta"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="border-t border-border px-5 pb-5 pt-4 font-body text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
