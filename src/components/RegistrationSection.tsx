import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, X, Calendar, Share2 } from "lucide-react";
import {
  getUpcomingSessions,
  formatSessionDate,
  getSeatsRemaining,
  buildGoogleCalendarUrl,
  buildAppleCalendarUrl,
  type Session,
} from "@/config/sessions";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/" +
  "WNktxTbhl0MIORsBz8Jq/webhook-trigger/" +
  "a5dd6860-64c4-4835-bcfe-197a5348d38f";

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
  fontFamily: "DM Sans, sans-serif",
  fontSize: "14px",
  color: "#f5f0e8",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "rgba(245,240,232,0.5)",
  marginBottom: "6px",
};

const RegistrationSection = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [sessionsLoading, setSessionsLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    howHeard: "",
    referralCode: "",
  });
  const [focused, setFocused] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setSessions(getUpcomingSessions());
    setSessionsLoading(false);
  }, []);

  const set = (k: string, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const getFocusStyle = (name: string) => ({
    ...inputStyle,
    borderColor:
      focused === name
        ? "rgba(196,155,60,0.7)"
        : "rgba(196,155,60,0.2)",
  });

  const handleSessionChange = (id: string) => {
    const s = sessions.find((s) => s.id === id) || null;
    setSelectedSession(s);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.firstName) {
      setError("First name and email are required.");
      return;
    }
    if (!selectedSession) {
      setError("Please select a session.");
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
          sessionId: selectedSession.id,
          sessionTitle: selectedSession.title,
          sessionDate: formatSessionDate(
            selectedSession.date,
            selectedSession.timezone
          ),
        }),
      });
      
      setConfirmed(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const seatsLeft = selectedSession
    ? getSeatsRemaining(selectedSession)
    : null;

  const linkedInShareUrl = selectedSession
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://empoweredalliances.com/#register")}&summary=${encodeURIComponent("Just registered for the Leading with AI workshop with Empowered Alliances — a live session on AI-enabled decision-making for leadership teams. Worth checking out.")}`
    : "";

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
            <p className="mt-2 font-body text-[13px] text-white/60">
              2 min to complete · Virtual · Normally $149, free this month
            </p>
          </div>

          {/* Form card */}
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

            {/* Session selector */}
            <div>
              <label style={labelStyle}>Select a session *</label>
              {sessionsLoading ? (
                <div className="flex items-center gap-2 rounded-[10px] border border-[#C49B3C]/20 bg-white/[0.06] px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-[#C49B3C]" />
                  <span className="font-body text-[14px] text-white/50">Loading sessions...</span>
                </div>
              ) : sessions.length === 0 ? (
                <div className="rounded-[10px] border border-[#C49B3C]/20 bg-white/[0.06] px-4 py-3">
                  <span className="font-body text-[14px] text-white/50">
                    No upcoming sessions scheduled. Check back soon.
                  </span>
                </div>
              ) : (
                <select
                  value={selectedSession?.id || ""}
                  onChange={(e) => handleSessionChange(e.target.value)}
                  onFocus={() => setFocused("session")}
                  onBlur={() => setFocused("")}
                  style={{
                    ...getFocusStyle("session"),
                    appearance: "none",
                    cursor: "pointer",
                  }}
                  required
                >
                  <option value="" style={{ background: "#1a2a4a" }}>
                    Choose a date that works for you
                  </option>
                  {sessions.map((s) => {
                    const seats = getSeatsRemaining(s);
                    return (
                      <option key={s.id} value={s.id} disabled={seats === 0} style={{ background: "#1a2a4a" }}>
                        {(() => {
                          const start = new Date(s.date);
                          const end = new Date(start.getTime() + s.duration_hours * 60 * 60 * 1000);
                          const startStr = start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
                          const endStr = end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
                          const timeRange = `${startStr} – ${endStr} ${s.timezone}`;
                          const seatsLabel = seats === 0 ? " — Full" : seats <= 5 ? ` — ${seats} seats left` : "";
                          return `${s.title} · ${timeRange}${seatsLabel}`;
                        })()}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>

            {/* Session preview card */}
            <AnimatePresence>
              {selectedSession && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between rounded-xl border border-[#C49B3C]/15 bg-[#C49B3C]/[0.06] px-4 py-3">
                    <div>
                      <p className="font-body text-[14px] font-medium text-[#f5f0e8]">
                        {selectedSession.title}
                      </p>
                      <p className="mt-1 font-body text-[12px] text-white/40">
                        {formatSessionDate(selectedSession.date, selectedSession.timezone)}
                        {" · "}
                        {(() => {
                          const start = new Date(selectedSession.date);
                          const end = new Date(start.getTime() + selectedSession.duration_hours * 60 * 60 * 1000);
                          const startStr = start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
                          const endStr = end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
                          return `${startStr} – ${endStr} ${selectedSession.timezone}`;
                        })()}
                        {" · "}
                        {selectedSession.duration_hours}
                        {" hours · "}
                        {selectedSession.format}
                        {" · Facilitated by "}
                        Jeff Richardson
                      </p>
                    </div>
                    {seatsLeft !== null && seatsLeft <= 5 && seatsLeft > 0 && (
                      <span className="ml-3 mt-0.5 whitespace-nowrap rounded-full bg-[#C49B3C]/20 px-2.5 py-0.5 font-body text-[11px] font-semibold text-[#C49B3C]">
                        {seatsLeft} left
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
                  marginBottom: "12px",
                }}
              >
                {HOW_OPTIONS.map((o) => (
                  <option key={o} value={o} style={{ background: "#1a2a4a" }}>
                    {o}
                  </option>
                ))}
              </select>

              {/* Referral code — conditional */}
              <AnimatePresence>
                {form.howHeard === "Referral" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <label style={labelStyle}>
                      Referral code{" "}
                      <span style={{ fontWeight: 400, opacity: 0.5 }}>(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.referralCode}
                      onChange={(e) => set("referralCode", e.target.value)}
                      onFocus={() => setFocused("referralCode")}
                      onBlur={() => setFocused("")}
                      style={getFocusStyle("referralCode")}
                      placeholder="Enter code if you have one"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Format pill */}
            <div>
              <label style={labelStyle}>Session format</label>
              <div className="flex items-center gap-3 rounded-[10px] border border-[#C49B3C]/20 bg-white/[0.06] px-4 py-3">
                <span className="inline-block h-3 w-3 rounded-full bg-[#C49B3C]" />
                <span className="font-body text-[14px] text-[#f5f0e8]">Virtual</span>
                <span className="ml-auto font-body text-[11px] text-white/30">
                  Zoom link sent via email
                </span>
              </div>
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
        </motion.div>
      </div>

      {/* ━━━ CONFIRMATION POPUP ━━━ */}
      <AnimatePresence>
        {confirmed && selectedSession && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35 }}
              className="relative mx-4 w-full max-w-md rounded-2xl border border-[#C49B3C]/20 bg-[#0f1f3d] p-8 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setConfirmed(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "rgba(245,240,232,0.5)",
                  transition: "all 0.2s",
                }}
              >
                <X className="h-4 w-4" />
              </button>

              {/* Animated checkmark */}
              <div className="mb-5 flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C49B3C]/20">
                    <svg className="h-8 w-8 text-[#C49B3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Heading */}
              <div className="mb-6 text-center">
                <h3 className="mb-2 font-serif text-[22px] font-medium text-white">
                  You Are Confirmed
                </h3>
                <p className="font-body text-[14px] text-white/50">
                  You'll receive an email confirmation shortly. We look forward to collaborating with you soon!
                </p>
              </div>

              {/* Session detail card */}
              <div className="mb-5 rounded-xl border border-[#C49B3C]/15 bg-[#C49B3C]/[0.06] px-4 py-3">
                <p className="font-body text-[14px] font-medium text-[#f5f0e8]">
                  {selectedSession.title}
                </p>
                <p className="mt-1 font-body text-[12px] text-white/40">
                  {formatSessionDate(selectedSession.date, selectedSession.timezone)}
                  {" · "}
                  {(() => {
                    const start = new Date(selectedSession.date);
                    const end = new Date(start.getTime() + selectedSession.duration_hours * 60 * 60 * 1000);
                    const startStr = start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
                    const endStr = end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
                    return `${startStr} – ${endStr} ${selectedSession.timezone}`;
                  })()}
                  {" · "}
                  {selectedSession.duration_hours}
                  {" hours · Virtual"}
                </p>
              </div>

              {/* Calendar buttons */}
              <div className="mb-5 flex flex-col gap-2">
                <a
                  href={buildGoogleCalendarUrl(selectedSession)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #C49B3C, #E8C97A)",
                    color: "#0f1f3d",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  Add to Google Calendar
                </a>
                <a
                  href={buildAppleCalendarUrl(selectedSession)}
                  download="leading-with-ai.ics"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(245,240,232,0.7)",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  Add to Apple Calendar (.ics)
                </a>
              </div>

              {/* LinkedIn share */}
              <div className="text-center">
                <p className="mb-2 font-body text-[12px] text-white/30">
                  Know someone who'd benefit?
                </p>
                <a
                  href={linkedInShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#C49B3C",
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(196,155,60,0.25)",
                    background: "rgba(196,155,60,0.06)",
                    transition: "all 0.2s",
                  }}
                >
                  <Share2 className="h-3.5 w-3.5" />
                  Share on LinkedIn →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegistrationSection;
