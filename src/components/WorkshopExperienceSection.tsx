import { motion, type Variants } from "framer-motion";
import { Calendar, Wrench, Trophy, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const TimeLabel = ({ children }: {children: string;}) =>
<p className="mb-2 mt-6 font-headline text-xs font-bold uppercase tracking-[0.15em] text-cta sm:text-sm">
    {children}
  </p>;


const P = ({ children, className = "" }: {children: React.ReactNode;className?: string;}) =>
<p className={`mb-4 font-body text-[15px] leading-[1.65] text-card-foreground/80 sm:text-base ${className}`}>{children}</p>;


const Q = ({ children }: {children: React.ReactNode;}) =>
<p className="mb-4 font-body text-[15px] italic leading-[1.65] text-card-foreground/70 sm:text-base">{children}</p>;


interface DayCardProps {
  icon: LucideIcon;
  day: string;
  title: string;
  children: React.ReactNode;
  index: number;
}

const DayCard = ({ icon: Icon, day, title, children, index }: DayCardProps) =>
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-40px" }}
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  }}
  className="flex flex-col rounded-2xl bg-card p-6 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

    {/* Icon badge */}
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cta sm:h-20 sm:w-20">
      <Icon className="h-7 w-7 text-cta-foreground sm:h-8 sm:w-8" />
    </div>

    {/* Day pill */}
    <span className="mb-3 w-fit rounded-full bg-cta px-4 py-1 font-headline text-xs font-bold uppercase tracking-wider text-cta-foreground">
      {day}
    </span>

    {/* Title */}
    <h3 className="mb-5 font-headline text-xl font-bold text-primary sm:text-2xl">
      {title}
    </h3>

    {/* Content */}
    <div className="flex-1">{children}</div>
  </motion.div>;


const CheckItem = ({ children }: {children: string;}) =>
<div className="mb-2 flex items-start gap-3">
    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta">
      <Check className="h-3 w-3 text-cta-foreground" strokeWidth={3} />
    </div>
    <span className="font-body text-[15px] font-medium text-card-foreground/85 sm:text-base">{children}</span>
  </div>;


const WorkshopExperienceSection = () => {
  return (
    <section className="bg-secondary py-10 sm:py-[60px] lg:py-[70px]">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            What To Expect
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-4 text-center font-headline text-[28px] font-bold text-primary sm:text-4xl lg:text-[44px]">

          What 3 Days In Jacksonville Actually Looks Like
        </motion.h2>

        



        {/* Day cards */}
        <div className="mx-auto flex max-w-4xl flex-col gap-6 lg:gap-8">
          {/* DAY 1 */}
          <DayCard icon={Calendar} day="Day 1" title="Tuesday, March 24th" index={0}>
            <P>You walk into the workshop room at the Aloft Hotel.</P>
            <P>You see about 100 other Pro members. Real estate agents. Coaches. Marketing agencies. IT consultants. All dealing with the same thing you are.</P>
            <P>The lead instructor takes the stage.</P>
            <Q>"Okay, today we're building your roadmap. By 5pm, you'll know exactly what to do first, second, third. No more guessing."</Q>

            <TimeLabel>Hour 2:</TimeLabel>
            <P>You're watching a live demonstration of AI prompting. Not a pre-recorded video. <strong>Live.</strong></P>
            <P>The instructor types a prompt. Shows you the result. It's terrible.</P>
            <Q>"See that? That's what most people get. Now watch this..."</Q>
            <P>Three words get tweaked. The output is <strong>perfect.</strong></P>
            <P>You think: <em>"Oh. THAT'S what I've been doing wrong."</em></P>
            <P>You write it down. You'll use that Monday.</P>

            <TimeLabel>Hour 4:</TimeLabel>
            <P>Someone raises their hand. <em>"But I'm in real estate. Does this work for property descriptions?"</em></P>
            <Q>"Great question. Let's do it right now."</Q>
            <P>Five minutes later, you're watching a complete property listing get written. With the exact prompt. The exact process.</P>
            <P>The real estate agent in the front row is frantically taking notes.</P>
            <P>You are too. Because you just realized this works for <strong>YOUR</strong> industry too.</P>

            <TimeLabel>End of Day 1:</TimeLabel>
            <P>You leave with your AI tool stack mapped out. You know which tools to focus on first. You have specific prompts that work. You have a roadmap.</P>
            <P>Not <em>"someday I'll figure this out."</em></P>
            <P className="font-semibold">But <em>"Monday I do this. Tuesday I do that."</em></P>
          </DayCard>

          {/* DAY 2 */}
          <DayCard icon={Wrench} day="Day 2" title="Wednesday, March 25th" index={1}>
            <P>You watch a complete funnel get built in GoHighLevel. <strong>Live. From scratch.</strong></P>
            <P>Every click. Every setting. Every integration.</P>
            <P>When the instructor gets to the chatbot part, you raise your hand.</P>
            <Q>"How do I make it sound like me and not like a robot?"</Q>
            <Q>"Great question. Here's how..."</Q>
            <P>Ten minutes later, you have the exact framework. The exact tone. The exact questions to ask.</P>
            <P>You'll set this up next week. And you know <strong>EXACTLY</strong> how to do it now.</P>

            <TimeLabel>A Hot Seat Happens:</TimeLabel>
            <P>Sarah from Austin gets pulled up. She runs a marketing agency.</P>
            <P>The team asks about her business. Her goals. Her current situation.</P>
            <P>Then they map out her entire 90-day plan. <strong>Right there.</strong></P>
            <Q>"Week 1, set up your chatbot. Week 2, build your funnel. Week 3, start your content system. By week 12, you should be generating 15-20 qualified leads per month."</Q>
            <P>Sarah's taking notes.</P>
            <P>So are you.</P>
            <P className="font-semibold">Because they just gave you the same roadmap you need.</P>
          </DayCard>

          {/* DAY 3 */}
          <DayCard icon={Trophy} day="Day 3" title="Thursday, March 26th" index={2}>
            <P>You're building your content calendar. <strong>90 days of social posts. In two hours.</strong></P>
            <P>You're watching the exact prompts. The exact workflow. The exact systems.</P>
            <P>Then the final session.</P>
            <Q>"Okay, everyone open your workbook to page 47. This is your 90-day implementation plan. We're filling this out together. Right now."</Q>
            <P>By 4pm, it's done.</P>
            <P>You know what you're doing Monday. What you're doing in April. What you're doing in June.</P>
            <P>You're not guessing anymore.</P>
            <P>You're not <em>"trying to figure it out."</em></P>
            <P className="font-semibold">You have a plan. A real plan. Built with the founders. Specific to your business.</P>

            <TimeLabel>5PM, March 26th:</TimeLabel>
            <P>You walk out of that hotel with:</P>
            <div className="my-4 space-y-1">
              <CheckItem>Your 90-day roadmap in your hand</CheckItem>
              <CheckItem>Your workbooks filled out</CheckItem>
              <CheckItem>Recordings of everything to reference</CheckItem>
              <CheckItem>Specific prompts that work for your business</CheckItem>
              <CheckItem>Clarity on what to do first</CheckItem>
            </div>
            <P>That Sunday night when you log into Pro membership?</P>
            <P>You're not staring at the dashboard wondering where to start.</P>
            <P className="font-semibold">You're opening your roadmap and executing. Because you know exactly what to do.</P>
          </DayCard>
        </div>

        {/* Closing statement */}
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-12 text-center font-headline text-2xl font-bold text-primary sm:text-3xl lg:mt-16 lg:text-[32px]">

          "That's what 3 days in Jacksonville gives you."
        </motion.p>
      </div>
    </section>);

};

export default WorkshopExperienceSection;