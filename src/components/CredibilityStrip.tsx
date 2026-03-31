const CredibilityStrip = () => (
  <div className="overflow-hidden border-b border-white/10 bg-[#0f1f3d] py-3">
    <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
      {[
        'Fortune 500 Validated',
        'Vendor-Neutral Methodology',
        'Human-First AI Design',
        'Board-Ready in 90 Minutes',
        'Confidential by Default',
        'No Account Required',
        'Fortune 500 Validated',
        'Vendor-Neutral Methodology',
        'Human-First AI Design',
        'Board-Ready in 90 Minutes',
        'Confidential by Default',
        'No Account Required',
      ].map((item, i) => (
        <span key={i} className="mx-6 flex items-center gap-2 font-body text-[13px] text-white/50">
          <span className="inline-block h-1 w-1 rounded-full bg-[#C49B3C]" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default CredibilityStrip;
