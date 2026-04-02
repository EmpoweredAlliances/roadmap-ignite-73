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
    id: "apr-14-2026",
    title: "Leading with AI — Tuesday, April 14",
    date: "2026-04-14T14:00",
    start_time: "02:00 PM",
    timezone: "CT",
    duration_hours: 1.5,
    capacity: 20,
    registered: 0,
    format: "Virtual",
  },
  {
    id: "apr-22-2026",
    title: "Leading with AI — Wednesday, April 22",
    date: "2026-04-22T11:00",
    start_time: "11:00 AM",
    timezone: "CT",
    duration_hours: 1.5,
    capacity: 20,
    registered: 0,
    format: "Virtual",
  },
  {
    id: "apr-24-2026",
    title: "Leading with AI — Friday, April 24",
    date: "2026-04-24T13:00",
    start_time: "01:00 PM",
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
  const end = new Date(
    start.getTime() +
    session.duration_hours * 60 * 60 * 1000
  );

  const pad = (n: number) =>
    String(n).padStart(2, "0");
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}` +
    `${pad(d.getUTCMonth() + 1)}` +
    `${pad(d.getUTCDate())}T` +
    `${pad(d.getUTCHours())}` +
    `${pad(d.getUTCMinutes())}00Z`;

  const startStr = start.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Chicago",
    }
  );
  const endStr = end.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Chicago",
    }
  );
  const timeRange =
    `${startStr} – ${endStr} ${session.timezone}`;

  const url = new URL(
    "https://calendar.google.com/calendar/render"
  );
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set(
    "text",
    "Leading with AI Workshop — Empowered Alliances"
  );
  url.searchParams.set(
    "dates",
    `${fmt(start)}/${fmt(end)}`
  );
  url.searchParams.set(
    "details",
    `You are registered for the Leading with AI workshop.\n\n` +
    `Date: ${start.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Chicago",
    })}\n` +
    `Time: ${timeRange}\n\n` +
    `Join Zoom: https://zoom.us/j/97875162394` +
    `?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13`
  );
  url.searchParams.set(
    "location",
    "https://zoom.us/j/97875162394" +
    "?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13"
  );

  return url.toString();
};

export const buildAppleCalendarUrl = (
  session: Session
): string => {
  const start = new Date(session.date);
  const end = new Date(
    start.getTime() +
    session.duration_hours * 60 * 60 * 1000
  );

  const pad = (n: number) =>
    String(n).padStart(2, "0");
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}` +
    `${pad(d.getUTCMonth() + 1)}` +
    `${pad(d.getUTCDate())}T` +
    `${pad(d.getUTCHours())}` +
    `${pad(d.getUTCMinutes())}00Z`;

  const startStr = start.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Chicago",
    }
  );
  const endStr = end.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Chicago",
    }
  );
  const timeRange =
    `${startStr} – ${endStr} ${session.timezone}`;

  const dateStr = start.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Chicago",
    }
  );

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Empowered Alliances//EN",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    "SUMMARY:Leading with AI Workshop — Empowered Alliances",
    `DESCRIPTION:You are registered for the Leading with AI workshop.\\n\\nDate: ${dateStr}\\nTime: ${timeRange}\\n\\nJoin Zoom: https://zoom.us/j/97875162394?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13`,
    "LOCATION:https://zoom.us/j/97875162394?pwd=wL4xFtsMLtJFneeclkMdrN1xGxyqTx.13",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], {
    type: "text/calendar;charset=utf-8",
  });
  return URL.createObjectURL(blob);
};
