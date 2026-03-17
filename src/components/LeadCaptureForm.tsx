import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface LeadCaptureFormProps {
  source?: string;
  onSuccess?: () => void;
}

const LeadCaptureForm = ({ source = "website-form", onSuccess }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("ghl-webhook", {
        body: { ...formData, source },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("You're registered! Check your email for details.");
      onSuccess?.();
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-xl bg-card p-8 text-center shadow-lg"
      >
        <CheckCircle className="h-12 w-12 text-cta" />
        <h3 className="font-headline text-xl font-bold text-foreground">You're In!</h3>
        <p className="font-body text-sm text-muted-foreground">
          We've received your information. Check your email for next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mx-auto w-full max-w-md space-y-4 rounded-xl bg-card p-6 shadow-lg sm:p-8"
    >
      <h3 className="text-center font-headline text-xl font-bold text-foreground sm:text-2xl">
        Reserve Your Spot
      </h3>
      <p className="text-center font-body text-sm text-muted-foreground">
        <span className="line-through opacity-60">$99</span> FREE · Limited seats available
      </p>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (optional)"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3.5 font-body text-base font-bold text-cta-foreground shadow-md transition-all duration-200 hover:bg-cta-hover hover:shadow-lg disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Register Now
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-center font-body text-xs text-muted-foreground">
        No spam. Your info is sent securely.
      </p>
    </motion.form>
  );
};

export default LeadCaptureForm;
