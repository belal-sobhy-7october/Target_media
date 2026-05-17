import { z } from "zod";
import { locales } from "@/lib/i18n/config";

export function sanitizeString(value: string, maxLength = 2000): string {
  return value
    .trim()
    .replace(/<[^>]*>/g, "")
    .slice(0, maxLength);
}

export function normalizeEgyptianPhone(phone: string): string {
  const digits = phone.replace(/[\s\-().]/g, "");
  if (digits.startsWith("+20")) return `0${digits.slice(3)}`;
  if (digits.startsWith("0020")) return `0${digits.slice(4)}`;
  if (digits.startsWith("20") && digits.length === 12) return `0${digits.slice(2)}`;
  return digits;
}

export function isValidEgyptianPhone(phone: string): boolean {
  const normalized = normalizeEgyptianPhone(phone);
  return /^01[0125]\d{8}$/.test(normalized);
}

export const contactPayloadSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(120)
    .transform((v) => sanitizeString(v, 120)),
  email: z
    .string()
    .min(1)
    .max(254)
    .email()
    .transform((v) => sanitizeString(v.toLowerCase(), 254)),
  phone: z
    .string()
    .min(1)
    .max(20)
    .refine((v) => isValidEgyptianPhone(v), {
      message: "Invalid Egyptian phone number",
    })
    .transform((v) => normalizeEgyptianPhone(v)),
  businessDescription: z
    .string()
    .min(10)
    .max(2000)
    .transform((v) => sanitizeString(v, 2000)),
  language: z.enum(locales),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;
