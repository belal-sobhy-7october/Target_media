import { NextResponse } from "next/server";
import { saveLead } from "@/lib/db/leads";
import { contactPayloadSchema } from "@/lib/validation/contact";

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
