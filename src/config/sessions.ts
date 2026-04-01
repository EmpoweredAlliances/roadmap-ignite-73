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
    id: "apr-08-2026",
    title: "Leading with AI — Wednesday, April 8",
    date: "2026-04-08T16:00:00Z",
    start_time: "11:00 AM CT",
    timezone: "CT",
    duration_hours: 1.5,
    capacity: 20,
    registered: 0,
    format: "Virtual",
  },
  {
    id: "apr-14-2026",
    title: "Leading with AI — Tuesday, April 14",
    date: "2026-04-14T17:00:00Z",
    start_time: "02:00 PM CT",
    timezone: "CT",
    duration_hours: 1.5,
    capacity: 20,
    registered: 0,
    format: "Virtual",
  },
  {
    id: "apr-24-2026",
    title: "Leading with AI — Friday, April 24",
    date: "2026-04-24T17:00:00Z",
    start_time: "01:00 PM CT",
    timezone: "CT",
    duration_hours: 1.5,
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
      "Join Zoom: https://zoom.us/j/97875162394?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13",
    location:
      "https://zoom.us/j/97875162394?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13",
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
    "DESCRIPTION:Join Zoom: https://zoom.us/j/97875162394?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13",
    "LOCATION:https://zoom.us/j/97875162394?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const blob = new Blob([icsContent], {
    type: "text/calendar",
  });
  return URL.createObjectURL(blob);
};
