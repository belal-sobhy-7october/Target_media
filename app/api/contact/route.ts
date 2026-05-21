import { NextResponse } from "next/server";
import { Resend } from "resend";
import { saveLead } from "@/lib/db/leads";
import {
  contactPayloadSchema,
  type ContactPayload,
} from "@/lib/validation/contact";

const LEAD_NOTIFICATION_TO = "vionagency478@gmail.com";

function formatLeadEmailBody(payload: ContactPayload, leadId: string) {
  return [
    "New contact form lead (Vion Agency)",
    "",
    `Lead ID: ${leadId}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Language: ${payload.language}`,
    "",
    "Business description:",
    payload.businessDescription,
  ].join("\n");
}

async function sendLeadNotificationEmail(
  payload: ContactPayload,
  leadId: string,
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[api/contact] RESEND_API_KEY is not set; skipping lead notification email.",
    );
    return;
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Vion Agency <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: LEAD_NOTIFICATION_TO,
    subject: `New Vion Agency lead: ${payload.name}`,
    text: formatLeadEmailBody(payload, leadId),
    replyTo: payload.email,
  });

  if (error) {
    console.error(
      "[api/contact] Failed to send lead notification email:",
      error,
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactPayloadSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: firstIssue?.message ?? "Validation failed",
          field: firstIssue?.path[0] ?? null,
        },
        { status: 400 },
      );
    }

    const result = await saveLead(parsed.data);

    if (!result.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to save your inquiry. Please try again later.",
        },
        { status: 500 },
      );
    }

    await sendLeadNotificationEmail(parsed.data, result.id);

    return NextResponse.json(
      { success: true, id: result.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("[api/contact] unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
