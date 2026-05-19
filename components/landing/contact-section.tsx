"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "@/components/providers/i18n-provider";

export function ContactSection() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.95]">
            {t.contact.title}
            <br />
            <span className="text-muted-foreground">
              {t.contact.titleMuted}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
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
      </div>
    </section>
  );
}
