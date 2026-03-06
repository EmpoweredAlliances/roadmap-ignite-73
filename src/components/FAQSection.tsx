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
  { q: "I'm not tech-savvy. Can I keep up?", a: "This is designed for all skill levels. The small group means personal help when you're stuck. Nobody gets left behind." },
  { q: "What if I can't bring a guest?", a: "Fine! Just pay $100 deposit for your seat. Add someone later if you want (if seats available)." },
  { q: "What if my plans change?", a: "Tell us before the event. Immediate refund. No hassle." },
  { q: "What happens if I can't attend?", a: "If you're a PRO member, just let us know at support@aiforbusiness.com before the event. We use this deposit simply to keep track of attendees, as the room is limited to 100 only. We don't want the seats to go to waste because there will be a wait list of people who want to attend. This allows us to make sure that all those who can't attend and want to attend will have seats." },
  { q: "Will this be recorded?", a: "Yes. All attendees get recordings but the session will not be recorded in it's entirety. The real value is interaction and being there to ask questions." },
  { q: "What's different from your other events?", a: "Summits are 500+ people, presentation-style, broad topics. This is 100 max, workshop-style, focused on Pro system implementation. Learning vs. roadmap building." },
  { q: "I don't have a business yet. Should I come?", a: "Absolutely. We cover what AI skills to develop, how to position yourself, how to build from scratch. For employees, aspiring entrepreneurs, and established owners." },
  { q: "What if I'm in a unique industry?", a: "That's why we do hot seats and keep it small. We work through specific businesses regardless of industry. Principles are universal. Application is customized." },
  
  { q: "What happens after the workshop?", a: "You keep all Pro benefits for as long as you're an active member. Plus recordings and materials forever. And as a special bonus, we'll have a follow-up virtual mastermind call to hold you accountable and help you implement the plan." },
  { q: "What should I bring?", a: "Your laptop, questions, and business challenges. We provide workbooks, materials, and everything else." },
  
];

const FAQSection = () => {
  return (
    <section className="bg-[hsl(0_0%_96%)]">
      <div className="mx-auto max-w-[900px] px-5 py-[70px] sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Your Questions Answered
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-10 text-center font-headline text-[32px] font-bold text-primary sm:text-[42px]">
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border-none bg-card shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] data-[state=open]:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              >
                <AccordionTrigger
                  className="px-5 py-5 font-headline text-base font-bold text-primary hover:no-underline data-[state=open]:text-cta sm:px-7 sm:text-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-cta"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="border-t-2 border-border px-5 pb-6 pt-4 font-body text-base leading-relaxed text-card-foreground/80 sm:px-7">
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
