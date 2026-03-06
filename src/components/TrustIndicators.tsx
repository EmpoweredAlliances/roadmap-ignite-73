import { Shield, Award, Users } from "lucide-react";

const items = [
  { icon: Shield, text: "100% Refundable Deposit" },
  { icon: Award, text: "Inc. 5000 Company 4x" },
  { icon: Users, text: "3,000+ Active Members" },
];

const TrustIndicators = () => (
  <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-start sm:gap-8">
    {items.map((item) => (
      <div key={item.text} className="flex items-center gap-2 text-primary-foreground/50">
        <item.icon className="h-4 w-4 shrink-0" />
        <span className="font-headline text-xs font-medium sm:text-sm">{item.text}</span>
      </div>
    ))}
  </div>
);

export default TrustIndicators;
