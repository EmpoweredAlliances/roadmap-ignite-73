import clientLogos from "@/assets/client_logos.png";

const LogoTickerSection = () => (
  <div className="overflow-hidden border-b border-white/10 bg-[#0f1f3d] py-4">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      <p className="mb-3 text-center font-body text-[11px] uppercase tracking-[0.12em] text-white/40">
        Trusted by leaders from
      </p>
    </div>
    <div className="relative overflow-hidden">
      <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
        {[0, 1].map((copy) => (
          <img key={copy} src={clientLogos} alt="Client logos" className="h-8 w-auto opacity-100" />
        ))}
      </div>
    </div>
  </div>
);

export default LogoTickerSection;
