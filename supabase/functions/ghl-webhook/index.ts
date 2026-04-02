import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/" +
  "WNktxTbhl0MIORsBz8Jq/webhook-trigger/" +
  "a5dd6860-64c4-4835-bcfe-197a5348d38f";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods":
    "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { 
      headers: corsHeaders 
    });
  }

  try {
    const payload = await req.json();

    const ghlResponse = await fetch(
      GHL_WEBHOOK_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!ghlResponse.ok) {
      throw new Error(
        `GHL responded with ${ghlResponse.status}`
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );

  } catch (err) {
    console.error("GHL webhook error:", err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: String(err) 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
