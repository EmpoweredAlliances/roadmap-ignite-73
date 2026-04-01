import logo from "@/assets/ea-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary px-5 py-10 text-center sm:px-8">
      <img src={logo} alt="Empowered Alliances" className="mx-auto h-12 mb-4" />
      <p className="mx-auto mt-3 max-w-[700px] font-body text-lg text-white">
        We help leadership teams turn AI complexity into clear business priorities - and build the internal capability to keep doing it.
      </p>
      <p className="mt-4 font-body text-xs text-white/70">© 2026 Empowered Alliances. All rights reserved.</p>
    </footer>
  );
};

export default FooterSection;
