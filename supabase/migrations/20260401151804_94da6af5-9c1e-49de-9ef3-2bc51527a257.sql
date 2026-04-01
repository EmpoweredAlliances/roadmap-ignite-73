
CREATE TABLE public.sessions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  date timestamptz NOT NULL,
  timezone text NOT NULL DEFAULT 'CT',
  duration_hours int NOT NULL DEFAULT 2,
  capacity int NOT NULL DEFAULT 20,
  registered int NOT NULL DEFAULT 0,
  format text NOT NULL DEFAULT 'Virtual',
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read active future sessions"
  ON public.sessions FOR SELECT
  USING (active = true AND date > now());

CREATE POLICY "Authenticated users manage sessions"
  ON public.sessions FOR ALL
  TO authenticated
  USING (true);

CREATE OR REPLACE FUNCTION public.increment_session_registered(session_id uuid)
RETURNS void AS $$
  UPDATE public.sessions 
  SET registered = registered + 1 
  WHERE id = session_id;
$$ LANGUAGE sql SECURITY DEFINER;

INSERT INTO public.sessions (title, date, timezone, capacity, format)
VALUES
  ('Leading with AI — April 17, 2026', '2026-04-17 12:00:00+00', 'CT', 20, 'Virtual'),
  ('Leading with AI — May 1, 2026', '2026-05-01 12:00:00+00', 'CT', 20, 'Virtual'),
  ('Leading with AI — May 15, 2026', '2026-05-15 12:00:00+00', 'CT', 20, 'Virtual');
