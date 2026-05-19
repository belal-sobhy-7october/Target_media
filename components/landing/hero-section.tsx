"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "@/components/providers/i18n-provider";
import { Button } from "@/components/ui/button";

const HeroVideo = dynamic(
  () => import("@/components/landing/hero-video").then((mod) => mod.HeroVideo),
  { ssr: false },
);

export function HeroSection() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(193,18,31,0.08)] via-transparent to-[rgba(13,13,13,0.85)]" />
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/60">
              <span className="w-8 h-px bg-white/30" />
              {t.hero.eyebrow}
            </span>
          </div>

          <div className="mb-10">
            <h1
              className={`text-start text-[clamp(72px,12vw,140px)] font-display leading-none tracking-tight uppercase transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-white">Grow</span>{" "}
              <span className="text-[#C1121F]">Loud.</span>
            </h1>
          </div>

          <p
            className={`text-start text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mb-10 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t.hero.intro}
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-[#C1121F] hover:bg-[#E5161F] text-white rounded-full px-8 h-12"
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

          <div className="animate-bounce mt-12 flex flex-col items-center gap-1">
            <span className="text-xs text-white/40 tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-12 inset-x-0 px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-6 text-sm text-white/60">
          <a
            href={`tel:${t.company.phone}`}
            className="hover:text-white transition-colors"
          >
            {t.company.phone}
          </a>
          <span className="hidden sm:inline text-white/30">·</span>
          <a
            href={`mailto:${t.company.email}`}
            className="hover:text-white transition-colors"
          >
            {t.company.email}
          </a>
        </div>
      </div>
    </section>
  );
}
