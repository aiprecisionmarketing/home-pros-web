import { NextResponse } from "next/server";

export const runtime = "edge";

interface InquiryRequest {
  name: string;
  email: string;
  phone: string;
  conversation: string;
}

export async function POST(request: Request) {
  try {
    const body: InquiryRequest = await request.json();
    const { name, email, phone, conversation } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // Try to send via Resend if API key is available
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const emailBody = `
New Chat Inquiry from Home Pros Website

Name: ${name}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}
Time: ${new Date().toLocaleString("en-CA", { timeZone: "America/Edmonton" })}

--- Conversation Summary ---
${conversation || "No conversation recorded"}
      `.trim();

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Home Pros Website <noreply@homeprosgroup.com>",
          to: ["info@homeprosgroup.com"],
          subject: `New Chat Inquiry from ${name}${phone ? ` — ${phone}` : ""}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        // Fall through to success anyway — we logged the inquiry
      }
    } else {
      // No email service — just log it
      console.log("=== NEW CHAT INQUIRY ===");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Conversation:", conversation?.substring(0, 500));
      console.log("========================");
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Chat inquiry error:", message);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
