import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { email: formData.email, service: formData.service });

    const serviceLabels: Record<string, string> = {
      "home-visit": "Hjemmebesøk - IT-problemer",
      "pc-building": "Skreddersydd PC-bygging",
      "website": "Nettsidebygging",
      "other": "Annet",
    };

    const emailHtml = `
      <h2>Ny kontaktforespørsel fra nettsiden</h2>
      <p><strong>Navn:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>E-post:</strong> ${formData.email}</p>
      <p><strong>Telefon:</strong> ${formData.phone}</p>
      <p><strong>Type tjeneste:</strong> ${serviceLabels[formData.service] || formData.service}</p>
      <p><strong>Beskrivelse:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Denne e-posten ble sendt fra kontaktskjemaet på onsite-it.no</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Onsite IT <onboarding@resend.dev>",
        to: ["kontakt@onsiteit.no"],
        subject: `Ny henvendelse fra ${formData.firstName} ${formData.lastName}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailResponse = await resendResponse.json();
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
