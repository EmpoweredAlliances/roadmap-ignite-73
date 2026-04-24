import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PrimaryCTASection = () => (
  <section
    className="border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20"
    style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)" }}
  >
    <div className="mx-auto max-w-[1200px] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[600px] font-serif text-[32px] font-medium leading-[1.2] text-white sm:text-[40px]"
      >
        Your next AI decision deserves a workflow that delivers results
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-col items-center gap-4"
      >
        <a
          href="https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg"
          className="btn-shimmer mb-4 inline-flex items-center gap-3 rounded-lg px-10 py-4 font-body text-[16px] font-bold shadow-lg transition-all duration-200 hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #C49B3C, #E8C97A)",
            color: "#0f1f3d",
          }}
        >
          Schedule a Conversation
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default PrimaryCTASection;
