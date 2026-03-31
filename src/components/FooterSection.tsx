import logo from "@/assets/ea-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary px-5 py-10 text-center sm:px-8">
      <img src={logo} alt="Empowered Alliances" className="mx-auto h-12 mb-4" />
      <p className="mx-auto mt-3 max-w-[500px] font-body text-sm text-white">
        We help leadership teams turn AI complexity into clear business priorities - and build the internal capability to keep doing it.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-4 font-body text-sm text-white/80">
        <a href="https://empoweredalliances.com/" className="transition-colors hover:text-primary-foreground">Home</a>
        <span>|</span>
        <a href="https://empoweredalliances.com/" className="transition-colors hover:text-primary-foreground">Success Stories</a>
        <span>|</span>
        <a href="https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg" className="transition-colors hover:text-primary-foreground">Contact</a>
      </div>
      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "16px" }}>
        Consultant platform licensing —{" "}
        <a
          href="/consultants"
          style={{ color: "rgba(196,155,60,0.6)", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C49B3C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(196,155,60,0.6)")}
        >
          Learn more →
        </a>
      </p>
      <p className="mt-4 font-body text-xs text-white/70">© 2026 Empowered Alliances. All rights reserved.</p>
    </footer>
  );
};

export default FooterSection;
