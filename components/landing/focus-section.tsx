"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useTranslations } from "@/components/providers/i18n-provider";

export function FocusSection() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="focus"
      ref={sectionRef}
      className="relative py-24 lg:py-32 how-it-works-bg overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-12 h-px bg-foreground/30" />
              {t.focus.label}
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8 text-start transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t.focus.title}
              <br />
              <span className="text-[#C1121F]">{t.focus.titleMuted}</span>
            </h2>
            <p
              className={`text-lg lg:text-xl text-muted-foreground leading-relaxed text-start transition-all duration-1000 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {t.focus.statement}
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-1">
            {t.focus.pillars.map((pillar, index) => (
              <li
                key={pillar}
                className={`flex items-start gap-4 border border-foreground/10 bg-background/50 px-5 py-4 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C1121F]/20 text-[#C1121F]">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-base text-foreground/90 text-start leading-snug">
                  {pillar}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
