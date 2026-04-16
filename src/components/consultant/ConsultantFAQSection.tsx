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
  { q: "How does the Fast Ramp Partner Program work?", a: "You start by co-delivering with Empowered Alliances on live client engagements. You gain access to a sandbox for practice, then expand into event-based or independent delivery as fit is proven." },
  { q: "Can I use this inside a workshop I already sell?", a: "Yes. The Adapt pathway is designed for this. We help integrate Priority Acceleration into your existing programs — no need to sell something completely new." },
  { q: "What role does Empowered Alliances play during delivery?", a: "In co-delivery, EA leads facilitation and platform operation. In event-based and licensed models, EA provides enablement and support while you take a larger facilitation role." },
  { q: "When can a partner deliver independently?", a: "After successfully co-leading sessions and demonstrating readiness, partners move into an annual named-facilitator license for independent delivery with ongoing access." },
  { q: "Do I need deep AI expertise?", a: "No. The methodology is designed for consultants at all levels of AI familiarity. Your expertise is in client relationships and strategy — the platform handles the AI-accelerated decision flow." },
  { q: "Can we adapt the methodology to our industry?", a: "Absolutely. Priority Acceleration is context-flexible. Whether your clients are in healthcare, financial services, manufacturing, or technology, the process adapts to the challenge." },
  { q: "How do you handle confidentiality?", a: "Client confidentiality is a core design principle. All session data stays within the engagement workspace. Specific security requirements can be discussed during the partnership conversation." },
];

const ConsultantFAQSection = () => (
  <section className="bg-secondary">
    <div className="mx-auto max-w-[800px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
        <span className="section-eyebrow-accent inline-block rounded-full bg-cta/10 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cta">
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

export default ConsultantFAQSection;
