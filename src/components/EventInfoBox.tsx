import { Calendar, MapPin, Users } from "lucide-react";

const details = [
  { icon: Calendar, label: "Mar 24-26, 2026" },
  { icon: MapPin, label: "Jacksonville, FL" },
  { icon: Users, label: "Limited to 100 Pro Members" },
];

const EventInfoBox = () => {
  return (
    <div className="w-full rounded-xl bg-card px-4 py-3 shadow-xl sm:px-6">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {details.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary">
              <d.icon className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <p className="font-headline text-xs font-bold text-card-foreground sm:text-sm whitespace-nowrap">
              {d.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfoBox;
