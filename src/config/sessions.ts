export interface Session {
  id: string;
  title: string;
  date: string;
  start_time: string;
  timezone: string;
  duration_hours: number;
  capacity: number;
  registered: number;
  format: string;
}

export const SESSIONS: Session[] = [
  {
    id: "apr-17-2026",
    title: "Leading with AI — April 17, 2026",
    date: "2026-04-17T17:00:00Z",
    start_time: "12:00 PM CT",
    timezone: "CT",
    duration_hours: 2,
    capacity: 20,
    registered: 6,
    format: "Virtual",
  },
  {
    id: "may-01-2026",
    title: "Leading with AI — May 1, 2026",
    date: "2026-05-01T17:00:00Z",
    start_time: "12:00 PM CT",
    timezone: "CT",
    duration_hours: 2,
    capacity: 20,
    registered: 2,
    format: "Virtual",
  },
  {
    id: "may-15-2026",
    title: "Leading with AI — May 15, 2026",
    date: "2026-05-15T17:00:00Z",
    start_time: "12:00 PM CT",
    timezone: "CT",
    duration_hours: 2,
    capacity: 20,
    registered: 0,
    format: "Virtual",
  },
];

export const getUpcomingSessions = (): Session[] => {
  const now = new Date();
  return SESSIONS.filter(
    (s) => new Date(s.date) > now && 
    s.registered < s.capacity
  );
};

export const getSeatsRemaining = (
  session: Session
): number => {
  return Math.max(0, session.capacity - 
    session.registered);
};

export const formatSessionDate = (
  dateStr: string,
  timezone: string
): string => {
  const date = new Date(dateStr);
  return (
    date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Chicago",
    }) +
    " · " +
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Chicago",
    }) +
    " " +
    timezone
  );
};

export const buildGoogleCalendarUrl = (
  session: Session
): string => {
  const start = new Date(session.date);
  const end = new Date(start);
  end.setHours(
    end.getHours() + session.duration_hours
  );

  const pad = (n: number) => 
    String(n).padStart(2, "0");
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}` +
    `${pad(d.getUTCMonth() + 1)}` +
    `${pad(d.getUTCDate())}T` +
    `${pad(d.getUTCHours())}` +
    `${pad(d.getUTCMinutes())}00Z`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Leading with AI Workshop — Empowered Alliances",
    dates: `${fmt(start)}/${fmt(end)}`,
    details:
      "You are registered for the Leading with AI workshop. " +
      "You will receive a Zoom link via email " +
      "before the session. " +
      "https://empoweredalliances.com",
    location: "Virtual (Zoom link sent via email)",
  });

  return `https://calendar.google.com/calendar/render?${params}`;
};

export const buildAppleCalendarUrl = (
  session: Session
): string => {
  const start = new Date(session.date);
  const end = new Date(start);
  end.setHours(
    end.getHours() + session.duration_hours
  );

  const pad = (n: number) =>
    String(n).padStart(2, "0");
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}` +
    `${pad(d.getUTCMonth() + 1)}` +
    `${pad(d.getUTCDate())}T` +
    `${pad(d.getUTCHours())}` +
    `${pad(d.getUTCMinutes())}00Z`;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    "SUMMARY:Leading with AI Workshop — Empowered Alliances",
    "DESCRIPTION:Zoom link sent via email.",
    "LOCATION:Virtual",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const blob = new Blob([icsContent], {
    type: "text/calendar",
  });
  return URL.createObjectURL(blob);
};
