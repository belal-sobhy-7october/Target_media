"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Globe,
  Palette,
  Share2,
  Sparkles,
  Video,
} from "lucide-react";
import { useTranslations } from "@/components/providers/i18n-provider";

const serviceIcons = [Palette, Globe, Share2, BarChart3, Sparkles, Video];

export function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                {t.services.label}
              </span>
              <h2
                className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 text-start ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {t.services.title}
                <br />
                <span className="text-muted-foreground">{t.services.titleMuted}</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-lg text-muted-foreground leading-relaxed text-start transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {t.services.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {t.services.items.map((title, index) => {
            const Icon = serviceIcons[index];
            return (
              <article
                key={title}
                className={`group relative border border-foreground/10 bg-card/50 p-6 lg:p-8 hover:border-foreground/25 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-xl font-display mb-3 text-start leading-snug">
                  {title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
