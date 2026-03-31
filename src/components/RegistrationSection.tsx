import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/WNktxTbhl0MIORsBz8Jq/webhook-trigger/a5dd6860-64c4-4835-bcfe-197a5348d38f";

const HOW_OPTIONS = [
  "Select one (optional)",
  "LinkedIn",
  "Referral",
  "Google Search",
  "Podcast or Webinar",
  "Other",
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(196,155,60,0.2)",
  borderRadius: "10px",
  padding: "13px 16px",
  fontFamily: "inherit",
  fontSize: "14px",
  color: "#f5f0e8",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "rgba(245,240,232,0.75)",
  marginBottom: "6px",
};

const RegistrationSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    howHeard: "",
  });
  const [focused, setFocused] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const getFocusStyle = (name: string) => ({
    ...inputStyle,
    borderColor:
      focused === name ? "rgba(196,155,60,0.7)" : "rgba(196,155,60,0.2)",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.firstName) {
      setError("First name and email are required.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          format: "Virtual",
          source: "leading-with-ai-registration",
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      className="px-5 py-16 sm:px-8 sm:py-20"
      style={{
        background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)",
      }}
    >
      <div className="mx-auto max-w-[520px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C49B3C]" />
              <span className="font-serif text-[28px] font-medium text-white sm:text-[32px]">
                Reserve a Seat
              </span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C49B3C]" />
            </div>
            <p className="font-body text-[16px] text-white/60">
              Join a free Leading with AI session
            </p>
            <p className="mt-2 font-body text-[13px] text-white/40">
              Normally starting at $149, free this month. Limited to 20 participants.
            </p>
          </div>

          {/* Form card */}
          {submitted ? (
            <div className="rounded-2xl border border-[#C49B3C]/30 bg-white/5 p-10 text-center backdrop-blur-sm">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-[#C49B3C]" />
              <h3 className="mb-2 font-serif text-[22px] font-medium text-white">
                You're registered!
              </h3>
              <p className="font-body text-[14px] text-white/60">
                Check your email for session details and next steps.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-[#C49B3C]/20 bg-white/5 p-8 backdrop-blur-sm"
            >
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>First name *</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    onFocus={() => setFocused("firstName")}
                    onBlur={() => setFocused("")}
                    style={getFocusStyle("firstName")}
                    placeholder="First"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last name</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                    onFocus={() => setFocused("lastName")}
                    onBlur={() => setFocused("")}
                    style={getFocusStyle("lastName")}
                    placeholder="Last"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Work email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  style={getFocusStyle("email")}
                  placeholder="you@company.com"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused("")}
                  style={getFocusStyle("company")}
                  placeholder="Your organization"
                />
              </div>

              {/* Job title */}
              <div>
                <label style={labelStyle}>Job title</label>
                <input
                  type="text"
                  value={form.jobTitle}
                  onChange={(e) => set("jobTitle", e.target.value)}
                  onFocus={() => setFocused("jobTitle")}
                  onBlur={() => setFocused("")}
                  style={getFocusStyle("jobTitle")}
                  placeholder="Your role"
                />
              </div>

              {/* Format — virtual only */}
              <div>
                <label style={labelStyle}>Session format</label>
                <div className="flex items-center gap-3 rounded-[10px] border border-[#C49B3C]/20 bg-white/[0.06] px-4 py-3">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#C49B3C]" />
                  <span className="font-body text-[14px] text-[#f5f0e8]">Virtual</span>
                  <span className="ml-auto font-body text-[11px] text-white/30">
                    All sessions this month
                  </span>
                </div>
              </div>

              {/* How heard */}
              <div>
                <label style={labelStyle}>How did you hear about us?</label>
                <select
                  value={form.howHeard}
                  onChange={(e) => set("howHeard", e.target.value)}
                  onFocus={() => setFocused("howHeard")}
                  onBlur={() => setFocused("")}
                  style={{
                    ...getFocusStyle("howHeard"),
                    appearance: "none",
                    cursor: "pointer",
                  }}
                >
                  {HOW_OPTIONS.map((o) => (
                    <option key={o} value={o} style={{ background: "#1a2a4a" }}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-center font-body text-[13px] text-red-400">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-shimmer mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 font-body text-[15px] font-bold shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #C49B3C, #E8C97A)",
                  color: "#0f1f3d",
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Reserving your seat...
                  </>
                ) : (
                  <>
                    Reserve My Seat
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-center font-body text-[11px] text-white/30">
                No spam. Your information is kept confidential.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
