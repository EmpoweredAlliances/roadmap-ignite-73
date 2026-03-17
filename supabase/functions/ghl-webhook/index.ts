import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GHL_WEBHOOK_URL = Deno.env.get('GHL_WEBHOOK_URL');
    if (!GHL_WEBHOOK_URL) {
      throw new Error('GHL_WEBHOOK_URL is not configured');
    }

    const body = await req.json();

    // Validate required field
    if (!body.email || typeof body.email !== 'string' || !body.email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'A valid email address is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build GHL payload
    const ghlPayload: Record<string, string> = {
      email: body.email.trim(),
    };

    if (body.firstName) ghlPayload.firstName = String(body.firstName).trim();
    if (body.lastName) ghlPayload.lastName = String(body.lastName).trim();
    if (body.phone) ghlPayload.phone = String(body.phone).trim();
    if (body.source) ghlPayload.source = String(body.source).trim();

    // Forward any additional custom fields
    const knownFields = ['email', 'firstName', 'lastName', 'phone', 'source'];
    for (const [key, value] of Object.entries(body)) {
      if (!knownFields.includes(key) && value) {
        ghlPayload[key] = String(value).trim();
      }
    }

    console.log('Forwarding to GHL:', JSON.stringify(ghlPayload));

    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ghlPayload),
    });

    const responseText = await ghlResponse.text();

    if (!ghlResponse.ok) {
      console.error(`GHL webhook failed [${ghlResponse.status}]: ${responseText}`);
      throw new Error(`GHL webhook returned ${ghlResponse.status}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error in ghl-webhook:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
