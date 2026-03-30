import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

import testimonialSherry from "@/assets/testimonial-sherry.webp";
import testimonialOz from "@/assets/testimonial-oz.webp";
import testimonialStacey from "@/assets/testimonial-stacey.webp";
import testimonialRichard from "@/assets/testimonial-richard.webp";
import testimonialMark from "@/assets/testimonial-mark.webp";
import testimonialMerrik from "@/assets/testimonial-merrik.webp";
import testimonialIngrid from "@/assets/testimonial-ingrid.webp";
import testimonialMelissa from "@/assets/testimonial-melissa.webp";
import testimonialAlicia from "@/assets/testimonial-alicia.webp";
import testimonialEliseo from "@/assets/testimonial-eliseo.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const testimonials = [
  {
    photo: testimonialSherry,
    name: "Sherry English",
    quote: "I'm 68 years old and I am like loving this technology. I'm not scared of it at all. I'm digging it. This is the place to learn about it. This is where you can ask the questions that you think may be too elementary.",
  },
  {
    photo: testimonialOz,
    name: "Oz Konar",
    quote: "One thing that stood out with them is how authentic they are. Like, they're so giving with what they teach. I personally flew from New Jersey to come here to meet them in person.",
  },
  {
    photo: testimonialStacey,
    name: "Stacey Morris",
    quote: "What attracted me to Brian and Francis was not only their knowledge or their depth of knowledge for AI, but it was their passion for AI and their authenticity.",
  },
  {
    photo: testimonialRichard,
    name: "Richard Jack",
    quote: "My goal for my life is to add AI in every facet of my life, to make my life more efficient, to grow, and to make me a better person through AI. And when you have Brian and Francis giving you the information to help you gain momentum and the support.",
  },
  {
    photo: testimonialMark,
    name: "Mark Eldridge",
    quote: "What we used to do with 200 employees, we could literally do with a handful of employees. These guys with AI for business, they not only going out there and walking their talk, but they don't even have to do what they're doing right now.",
  },
  {
    photo: testimonialMerrik,
    name: "Merrik Leo Neanover",
    quote: "I'm mind blown! I originally came for moral support for my wife to support her business, and now here we are discussing starting up our own business with all the tools we've been learning from this weekend! It's insane!",
  },
  {
    photo: testimonialIngrid,
    name: "Ingrid Horn",
    quote: "The live Event in Jacksonville was awesome. Can recommend to book the one in Orlando!",
  },
  {
    photo: testimonialMelissa,
    name: "Melissa Jordan",
    quote: "Everyone who isn't here is simply missing out. I'm mind blown!!! Well worth the time.",
  },
  {
    photo: testimonialAlicia,
    name: "Alicia Whitman",
    quote: "All I can say is WOW! I had the best time in Jacksonville at the 1st AI for Business Live summit in 5 years! I feel very privileged to be part of this group. When they say they over deliver… that's exactly what they mean.",
  },
  {
    photo: testimonialEliseo,
    name: "Eliseo Manzanilla",
    quote: "What a weekend in Jacksonville! I had the absolute privilege of attending the very first AI for Business LIVE event, and let me tell you… it was next-level. Game-changing insights. Epic connections.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-[70px] sm:px-8">
        {/* Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-5 flex justify-center">
          <span className="inline-block rounded-lg bg-cta px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-[0.15em] text-cta-foreground">
            Testimonials
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 text-center font-headline text-[32px] font-bold text-primary sm:text-[42px]">
          What People Say About Us
        </motion.h2>

        {/* Testimonial grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              className="card-hover mb-5 break-inside-avoid rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <Quote className="mb-3 h-6 w-6 text-cta opacity-60" />
              <p className="mb-5 font-body text-[15px] leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="font-headline text-sm font-bold text-card-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
