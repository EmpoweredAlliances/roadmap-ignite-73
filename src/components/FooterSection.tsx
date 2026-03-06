import { motion, type Variants } from "framer-motion";
import { Calendar, MapPin, Users, Hotel, Check } from "lucide-react";
import DualCTAButtons from "@/components/DualCTAButtons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const infoCards = [
  { Icon: Calendar, label: "When", info: "March 24-26, 2026", sub: "Tuesday - Thursday | 9am - 5pm daily" },
  { Icon: MapPin, label: "Where", info: "Aloft Hotel Jacksonville", sub: "Southside, Jacksonville, FL" },
  { Icon: Users, label: "Capacity", info: "Limited to 100 Attendees", sub: "Limited Seating — This Event Will Sell Out!", subRed: true },
  { Icon: Hotel, label: "Hotel", info: "Special Rate: $160/night", sub: "Book your room today", subRed: true, link: "Book Hotel Now →" },
];

const bringList = [
  "Your laptop",
  "Business questions and challenges",
  "Note-taking materials (or use provided workbooks)",
  "Positive attitude and readiness to implement",
];

const FooterSection = () => {
  return (
    <>
      <section className="border-t-4 border-cta bg-card">
        <div className="mx-auto max-w-[1200px] px-5 py-[60px] sm:px-8">
          {/* Badge */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-7 flex justify-center">
            <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
              Event Details
            </span>
          </motion.div>

          {/* Two columns */}
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.45fr]">
            {/* Event details */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full">
              <h2 className="mb-6 font-headline text-[28px] font-bold text-primary">Workshop Details:</h2>

              <div className="space-y-4">
                {infoCards.map((card) => (
                  <div key={card.label} className="flex items-start gap-4 rounded-xl bg-[hsl(0_0%_97%)] p-5 sm:p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cta">
                      <card.Icon className="h-5 w-5 text-cta-foreground" />
                    </div>
                    <div>
                      <p className="font-headline text-xs font-bold uppercase tracking-[0.15em] text-primary">{card.label}</p>
                      <p className="mt-1 font-headline text-lg font-bold text-primary sm:text-xl">{card.info}</p>
                      <p className={`mt-0.5 font-body text-sm sm:text-base ${card.subRed ? "font-bold text-cta" : "text-muted-foreground"}`}>
                        {card.sub}
                      </p>
                      {card.link && (
                        <a href="#" className="mt-1 inline-block font-body text-sm text-cta underline transition-colors hover:text-cta-hover sm:text-base">
                          {card.link}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What to bring */}
              <div className="mt-8">
                <h3 className="mb-3 font-headline text-xl font-bold text-primary">What to Bring:</h3>
                <div className="space-y-2">
                  {bringList.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-cta" strokeWidth={3} />
                      <p className="font-body text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Registration box */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full lg:sticky lg:top-8">
              <div className="rounded-2xl bg-primary p-7 text-center sm:p-10">
                <h3 className="font-headline text-2xl font-bold text-primary-foreground">Ready to Register?</h3>
                <div className="mt-5">
                  <DualCTAButtons variant="dark" compact />
                </div>
                <p className="mt-3 font-body text-sm text-primary-foreground/50">Takes less than 2 minutes</p>

                <hr className="my-6 border-primary-foreground/20" />

                <h4 className="font-headline text-lg font-bold text-primary-foreground">Questions?</h4>
                <a href="mailto:support@aiforbusiness.com" className="mt-2 block font-body text-base text-primary-foreground underline">
                  support@aiforbusiness.com
                </a>
                

                <div className="mt-6 flex flex-col gap-2">
                  {[
                    { text: "100% Refundable Deposit (Pro)", bg: "bg-[hsl(160_81%_38%)]" },
                    { text: "Open to Everyone", bg: "bg-primary-foreground/20" },
                    { text: "Limited to 100 Seats", bg: "bg-cta" },
                  ].map((badge) => (
                    <span key={badge.text} className={`inline-flex items-center justify-center gap-2 rounded-md ${badge.bg} px-4 py-2 font-headline text-xs font-bold uppercase tracking-wider text-white`}>
                      <Check className="h-3 w-3" strokeWidth={3} /> {badge.text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer bottom */}
      <footer className="bg-primary px-5 py-10 text-center sm:px-8">
        <p className="font-headline text-xl font-bold text-primary-foreground">AI for Business</p>
        <p className="mx-auto mt-3 max-w-[500px] font-body text-base text-primary-foreground/70">
          Trusted by 3,000+ entrepreneurs | Inc. 5000 Company 4x
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-4 font-body text-sm text-primary-foreground/50">
          <a href="#" className="transition-colors hover:text-primary-foreground">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="transition-colors hover:text-primary-foreground">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="transition-colors hover:text-primary-foreground">Contact Us</a>
        </div>
        <p className="mt-4 font-body text-xs text-primary-foreground/40">© 2026 AI for Business. All rights reserved.</p>
      </footer>
    </>
  );
};

export default FooterSection;
