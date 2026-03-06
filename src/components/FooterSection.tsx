const FooterSection = () => {
  return (
    <footer className="bg-primary px-5 py-10 text-center sm:px-8">
      <p className="font-headline text-xl font-bold text-primary-foreground">Empowered Alliances</p>
      <p className="mx-auto mt-3 max-w-[500px] font-body text-sm text-primary-foreground/60">
        We help leadership teams turn AI complexity into clear business priorities — and build the internal capability to keep doing it.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-4 font-body text-sm text-primary-foreground/40">
        <a href="https://empoweredalliances.com/" className="transition-colors hover:text-primary-foreground">Home</a>
        <span>|</span>
        <a href="https://empoweredalliances.com/" className="transition-colors hover:text-primary-foreground">Success Stories</a>
        <span>|</span>
        <a href="https://api.aiforbusiness.com/widget/booking/SMmXrKS1j5mBJBMRobfg" className="transition-colors hover:text-primary-foreground">Contact</a>
      </div>
      <p className="mt-4 font-body text-xs text-primary-foreground/30">© 2026 Empowered Alliances. All rights reserved.</p>
    </footer>
  );
};

export default FooterSection;
