const ConsultantPlatformVideoSection = () => {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a5c 45%, #0d2818 100%)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.035,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-[36px] font-medium leading-[1.2] text-white">
            Explore the Priority Acceleration platform
          </h2>
        </div>

        <div className="mx-auto aspect-video w-full max-w-[960px] overflow-hidden rounded-[14px] border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/idRLHDQCDqk"
            title="Explore the Priority Acceleration platform"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultantPlatformVideoSection;
