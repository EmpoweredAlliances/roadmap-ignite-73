import { motion, type Variants } from "framer-motion";
import { Check, Star } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface DayData {
  title: string;
  date: string;
  winIcon: string;
  winText: string;
  col1: string[];
  col2: string[];
  footerLines: string[];
}

const days: DayData[] = [
  {
    title: "DAY ONE: Your Foundation & Roadmap",
    date: "Tuesday, March 24 | 9am – 5pm",
    winIcon: "🎯",
    winText: "Leave with your personalized AI tool stack identified and your strategic implementation roadmap mapped out.",
    col1: ["Master AI Prompting", "AI Business Opportunities", "Business Ideation & Optimization", "Thinking like an \"AI CEO\"", "Reven Tool Suite"],
    col2: ["AI Marketing & Copywriting", "Video & Image Generation", "AI Cloning", "Content Creation Systems"],
    footerLines: ["LIVE HOT SEAT: Real business. Real solutions. Real-time."],
  },
  {
    title: "DAY TWO: Lead Generation & Automation",
    date: "Wednesday, March 25 | 9am – 5pm",
    winIcon: "🚀",
    winText: "Leave with your complete lead gen blueprint and automation roadmap.",
    col1: ["Lead Magnets That Convert", "Funnel Building in GoHighLevel", "Landing Pages & Sales Funnels", "Email Marketing Systems", "Traffic Generation"],
    col2: ["AI Chatbots", "SMS/Text Bots", "AI Voice Bots", "Marketing Automation", "Zapier Integrations"],
    footerLines: ["LIVE HOT SEAT: Another member gets the deep dive."],
  },
  {
    title: "DAY THREE: Social, Sales & Your 90-Day Plan",
    date: "Thursday, March 26 | 9am – 5pm",
    winIcon: "✅",
    winText: "Leave with your social strategy, sales roadmap, and complete 90-day implementation plan.",
    col1: ["Social Media Strategy", "Content Calendar Creation", "Social Growth Tactics", "Authority Building", "AI-Enhanced Sales Process"],
    col2: ["Productivity & Efficiency", "Working with Virtual Assistants", "Your 90-Day Roadmap", "Accountability & Next Steps"],
    footerLines: [
      "LIVE HOT SEAT: Final implementation deep dive.",
      "BONUS: Open Q&A — Any question. Any business. Answered.",
    ],
  },
];

const throughoutLeft = [
  "Live hot seats with real businesses",
  "Interactive Q&A whenever you have questions",
  "Live demonstrations of every tool",
];
const throughoutRight = [
  "Detailed workbooks for each section",
  "Small group (only 100 people)",
  "Direct access to Francis, Brian, Dolmar, Richard & team",
];

const Bullet = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2.5">
    <span className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
    <span className="font-body text-sm text-card-foreground/80 sm:text-[15px]">{text}</span>
  </li>
);

const CheckRow = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta">
      <Check className="h-3 w-3 text-cta-foreground" strokeWidth={3} />
    </div>
    <span className="font-body text-sm text-card-foreground/80 sm:text-base">{text}</span>
  </div>
);

const AgendaSection = () => {
  return (
    <section className="bg-secondary py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            The Complete Agenda
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-6 text-center font-headline text-[28px] font-bold text-primary sm:text-4xl lg:text-[42px]"
        >
          Here's What Happens Over The 3 Days:
        </motion.h2>

        {/* Intro */}
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto mb-10 max-w-[800px] text-center font-body text-base leading-relaxed text-muted-foreground sm:text-lg lg:mb-14">
          Over 3 intensive days, we'll walk you through the complete AI for Business system, showing you exactly what to do, how to do it, and what to implement first.
          <br /><br />
          This is interactive teaching with live demonstrations, hot seats, and Q&amp;A throughout. Every section comes with workbooks so you capture your action steps and have a clear implementation guide.
        </motion.p>

        {/* Day cards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
          {days.map((day, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Navy header */}
              <div className="bg-primary px-6 py-6 sm:px-8 sm:py-7">
                <h3 className="mb-1.5 font-headline text-lg font-bold text-primary-foreground sm:text-xl lg:text-2xl">
                  {day.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/70">{day.date}</p>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col px-6 py-6 sm:px-8 sm:py-7">
                {/* Big win box */}
                <div className="mb-6 flex gap-3 rounded-lg border-l-4 border-cta bg-[hsl(30_100%_96%)] p-4">
                  <span className="shrink-0 text-[20px]">{day.winIcon}</span>
                  <p className="font-headline text-[13px] font-bold leading-snug text-primary sm:text-[14px]">{day.winText}</p>
                </div>

                {/* What we cover */}
                <p className="mb-4 font-headline text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  What We Cover
                </p>
                <ul className="flex-1 space-y-2.5">
                    {day.col1.map((t) => <Bullet key={t} text={t} />)}
                    {day.col2.map((t) => <Bullet key={t} text={t} />)}
                  </ul>
              </div>

              {/* Red footer */}
              <div className="flex items-start gap-2.5 bg-cta px-6 py-4 sm:px-8 sm:py-5">
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-cta-foreground" fill="currentColor" />
                <div>
                  {day.footerLines.map((line, j) => (
                    <p key={j} className="font-headline text-xs font-bold text-cta-foreground sm:text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Throughout box */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 lg:mt-16">
          <div className="mx-auto max-w-[900px] rounded-2xl bg-card p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-10">
            <h3 className="mb-6 text-center font-headline text-xl font-bold text-primary sm:text-2xl">
              Throughout All 3 Days:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4">
              <div className="space-y-3">
                {throughoutLeft.map((t) => <CheckRow key={t} text={t} />)}
              </div>
              <div className="space-y-3">
                {throughoutRight.map((t) => <CheckRow key={t} text={t} />)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
