"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { useI18n, useTranslations } from "@/components/providers/i18n-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { isValidEgyptianPhone } from "@/lib/validation/contact";

function buildContactFormSchema(t: ReturnType<typeof useTranslations>) {
  return z.object({
    name: z.string().min(1, t.contact.validation.nameRequired),
    email: z
      .string()
      .min(1, t.contact.validation.emailRequired)
      .email(t.contact.validation.emailInvalid),
    phone: z
      .string()
      .min(1, t.contact.validation.phoneRequired)
      .refine((v) => isValidEgyptianPhone(v), t.contact.validation.phoneInvalid),
    businessDescription: z
      .string()
      .min(10, t.contact.validation.businessRequired),
  });
}

type ContactFormValues = z.infer<ReturnType<typeof buildContactFormSchema>>;

export function ContactSection() {
  const t = useTranslations();
  const { locale } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const schema = useMemo(() => buildContactFormSchema(t), [t]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessDescription: "",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    form.clearErrors();
  }, [locale, schema, form]);

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          language: locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Request failed");
      }

      toast.success(t.contact.toast.successTitle, {
        description: t.contact.toast.successDescription,
      });
      form.reset();
    } catch {
      toast.error(t.contact.toast.errorTitle, {
        description: t.contact.toast.errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:pe-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                {t.contact.label}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-6 text-start leading-[0.95]">
                {t.contact.title}
                <br />
                <span className="text-muted-foreground">{t.contact.titleMuted}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-start mb-8">
                {t.contact.description}
              </p>
              <div className="flex flex-col gap-4 text-sm">
                <a
                  href={`tel:${t.company.phone}`}
                  className="inline-flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {t.company.phone}
                </a>
                <a
                  href={`mailto:${t.company.email}`}
                  className="inline-flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {t.company.email}
                </a>
              </div>
            </div>

            <div className="lg:ps-8">
              <Form {...form}>
                <form
                  key={locale}
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.name}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t.contact.form.namePlaceholder}
                            className="bg-background/40 border-foreground/10 h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.email}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t.contact.form.emailPlaceholder}
                              className="bg-background/40 border-foreground/10 h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.phone}</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              dir="ltr"
                              placeholder={t.contact.form.phonePlaceholder}
                              className="bg-background/40 border-foreground/10 h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="businessDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.business}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.contact.form.businessPlaceholder}
                            className="bg-background/40 border-foreground/10 min-h-[120px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background rounded-full h-12 px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin me-2" />
                        {t.contact.form.submitting}
                      </>
                    ) : (
                      t.contact.form.submit
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
      </div>
    </section>
  );
}
