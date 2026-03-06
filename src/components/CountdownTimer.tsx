import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (deadline: Date): TimeLeft => {
  const now = new Date().getTime();
  const distance = deadline.getTime() - now;
  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const CountdownTimer = ({ inline = false }: { inline?: boolean }) => {
  const deadline = new Date("2026-03-24T09:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(deadline)), 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HRS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEC" },
  ];

  if (inline) {
    return (
      <span className="inline-flex items-center gap-1 sm:gap-1.5 font-headline text-xs sm:text-sm font-bold tabular-nums text-[hsl(50_100%_90%)] whitespace-nowrap">
        <span className="text-[hsl(50_100%_95%)] opacity-80 font-semibold uppercase tracking-wider text-[10px] sm:text-xs hidden sm:inline">Starts in</span>
        {blocks.map((block, i) => (
          <span key={block.label}>
            <span className="text-white">{String(block.value).padStart(2, "0")}</span>
            <span className="text-[hsl(50_100%_80%)] text-xs lowercase">{block.label.toLowerCase()}</span>
            {i < blocks.length - 1 && <span className="text-white/40 mx-0.5">:</span>}
          </span>
        ))}
      </span>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50 sm:text-sm">
        Workshop starts in
      </p>
      <div className="flex gap-3">
        {blocks.map((block, i) => (
          <div key={block.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="font-headline text-3xl font-bold text-cta sm:text-4xl tabular-nums">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="font-headline text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/40 sm:text-xs">
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span className="text-2xl font-bold text-primary-foreground/20 sm:text-3xl -mt-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
