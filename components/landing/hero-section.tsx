"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/components/providers/i18n-provider";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-80"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10 inset-x-0"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10 inset-y-0"
            style={{ insetInlineStart: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="lg:max-w-[60%]">
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/60">
              <span className="w-8 h-px bg-white/30" />
              {t.hero.eyebrow}
            </span>
          </div>

          <div className="mb-10">
            <h1
              className={`text-start text-[clamp(2.5rem,6vw,5.5rem)] font-display leading-[0.95] tracking-tight text-white transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.hero.headline}
            </h1>
          </div>

          <p
            className={`text-start text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mb-10 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {t.hero.intro}
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-white/90 text-black rounded-full px-8 h-12"
            >
              <a href="#contact">{t.nav.cta}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full px-8 h-12 border-white/30 text-white hover:bg-white/10"
            >
              <a href="#services">{t.nav.services}</a>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-12 inset-x-0 px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-6 text-sm text-white/60">
          <a href={`tel:${t.company.phone}`} className="hover:text-white transition-colors">
            {t.company.phone}
          </a>
          <span className="hidden sm:inline text-white/30">·</span>
          <a href={`mailto:${t.company.email}`} className="hover:text-white transition-colors">
            {t.company.email}
          </a>
        </div>
      </div>
    </section>
  );
}
