
CREATE OR REPLACE FUNCTION public.increment_session_registered(session_id uuid)
RETURNS void AS $$
  UPDATE public.sessions 
  SET registered = registered + 1 
  WHERE id = session_id;
$$ LANGUAGE sql SECURITY DEFINER SET search_path = public;

DROP POLICY "Authenticated users manage sessions" ON public.sessions;

CREATE POLICY "Authenticated users can insert sessions"
  ON public.sessions FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update sessions"
  ON public.sessions FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete sessions"
  ON public.sessions FOR DELETE
  TO authenticated
  USING (true);
