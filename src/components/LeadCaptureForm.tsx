import { motion } from "framer-motion";

const LeadCaptureForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-[640px]"
    >
      <iframe
        src="https://api.aiforbusiness.com/widget/form/OtNnMMyYU7zMXGJdVe3N"
        style={{
          width: "100%",
          height: "601px",
          border: "none",
          borderRadius: "12px",
        }}
        id="inline-OtNnMMyYU7zMXGJdVe3N"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead with AI session 1"
        data-height="601"
        data-layout-iframe-id="inline-OtNnMMyYU7zMXGJdVe3N"
        data-form-id="OtNnMMyYU7zMXGJdVe3N"
        title="Lead with AI session 1"
      />
    </motion.div>
  );
};

export default LeadCaptureForm;
