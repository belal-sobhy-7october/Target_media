import type { ContactPayload } from "@/lib/validation/contact";
import { getSupabase } from "./supabase";

export type LeadRecord = ContactPayload & {
  id?: string;
  created_at?: string;
};

export async function saveLead(
  payload: ContactPayload,
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const client = getSupabase();

  if (!client) {
    return { ok: false, error: "Database not configured" };
  }

  const { data, error } = await client
    .from("leads")
    .insert({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      business_description: payload.businessDescription,
      language: payload.language,
    })
    .select("id")
    .single();

  if (error) {
    console.error("[leads] insert failed:", error.message);
    return { ok: false, error: error.message };
  }

  return { ok: true, id: data.id as string };
}
