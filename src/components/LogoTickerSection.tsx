import clientLogos from "@/assets/client_logos.png";

const LogoTickerSection = () => (
  <div className="border-b border-white/10 bg-[#0f1f3d] py-4">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      <p className="mb-3 text-center font-body text-[11px] uppercase tracking-[0.12em] text-white/40">
        Trusted by leaders from
      </p>
    </div>
    <div className="flex justify-center px-5 sm:px-8">
      <img src={clientLogos} alt="Client logos" className="h-12 w-auto max-w-full object-contain" />
    </div>
  </div>
);

export default LogoTickerSection;
