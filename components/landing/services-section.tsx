"use client";

import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Smartphone,
  Video,
  Layout,
  ShoppingCart,
  Briefcase,
  Monitor,
  Tablet,
  Palette,
  Upload,
  Film,
  Camera,
  Tv,
  Bug,
  Search,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "@/components/providers/i18n-provider";

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
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {t.services.title}
                <br />
                <span className="text-muted-foreground">
                  {t.services.titleMuted}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-lg text-muted-foreground leading-relaxed text-start transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {t.services.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ===== BLOCK 1 — Web ===== */}
        <div className="mb-24">
          <div className="w-full h-[500px] bg-black/[0.96] rounded-2xl relative overflow-hidden border border-white/[0.08] mb-16">
            <div className="flex h-full">
              {/* Left — Text */}
              <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C1121F] mb-4">
                  WEB SERVICES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Website Design & Development
                </h2>
                <p className="mt-4 text-white/50 max-w-md text-base leading-relaxed">
                  Modern, fast websites built to convert — from landing pages to full e-commerce platforms.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#C1121F] hover:bg-[#E5161F] text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] w-fit"
                >
                  Get Started
                  <span>→</span>
                </a>
              </div>
              {/* Right — Image */}
              <div className="flex-1 relative overflow-hidden rounded-lg h-full">
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80" alt="Web Development" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Sub-cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">01</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Layout className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Landing Pages</h3>
              <p className="text-white/40 text-sm leading-relaxed">High-converting pages designed to turn visitors into leads.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">02</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <ShoppingCart className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">E-Commerce</h3>
              <p className="text-white/40 text-sm leading-relaxed">Full online stores with payment integration.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">03</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Briefcase className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Portfolio Sites</h3>
              <p className="text-white/40 text-sm leading-relaxed">Clean professional sites to showcase your work.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">04</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Monitor className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Web Apps</h3>
              <p className="text-white/40 text-sm leading-relaxed">Custom web applications built for your business.</p>
            </a>
          </div>
        </div>

        {/* ===== BLOCK 2 — Mobile Apps ===== */}
        <div className="mb-24">
          <div className="w-full h-[500px] bg-black/[0.96] rounded-2xl relative overflow-hidden border border-white/[0.08] mb-16">
            <div className="flex h-full">
              {/* Left — Text */}
              <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C1121F] mb-4">
                  MOBILE DEVELOPMENT
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Native iOS & Android Apps
                </h2>
                <p className="mt-4 text-white/50 max-w-md text-base leading-relaxed">
                  Apps published on App Store & Play Store — built for performance and great UX.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#C1121F] hover:bg-[#E5161F] text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] w-fit"
                >
                  Get Started
                  <span>→</span>
                </a>
              </div>
              {/* Right — Image */}
              <div className="flex-1 relative overflow-hidden rounded-lg h-full">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80" alt="Mobile Apps" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Sub-cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">01</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Smartphone className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">iOS Apps</h3>
              <p className="text-white/40 text-sm leading-relaxed">Native apps for iPhone and iPad.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">02</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Tablet className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Android Apps</h3>
              <p className="text-white/40 text-sm leading-relaxed">Native apps for all Android devices.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">03</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Palette className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">UI/UX Design</h3>
              <p className="text-white/40 text-sm leading-relaxed">Beautiful intuitive mobile interfaces.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">04</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Upload className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">App Publishing</h3>
              <p className="text-white/40 text-sm leading-relaxed">Full App Store & Play Store submission support.</p>
            </a>
          </div>
        </div>

        {/* ===== BLOCK 3 — Video Editing ===== */}
        <div>
          <div className="w-full h-[500px] bg-black/[0.96] rounded-2xl relative overflow-hidden border border-white/[0.08] mb-16">
            <div className="flex h-full">
              {/* Left — Text */}
              <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C1121F] mb-4">
                  VIDEO PRODUCTION
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Professional Video Editing & Post-Production
                </h2>
                <p className="mt-4 text-white/50 max-w-md text-base leading-relaxed">
                  From brand videos to social media reels — content that stops the scroll.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#C1121F] hover:bg-[#E5161F] text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] w-fit"
                >
                  Get Started
                  <span>→</span>
                </a>
              </div>
              {/* Right — Image */}
              <div className="flex-1 relative overflow-hidden rounded-lg h-full">
                <img src="https://i.pinimg.com/736x/99/43/bd/9943bd6191eab4b24e406d4577b869a6.jpg" alt="Video Editing" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
          </div>
          {/* Sub-cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">01</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Film className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Brand Videos</h3>
              <p className="text-white/40 text-sm leading-relaxed">Cinematic videos that tell your brand story.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">02</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Video className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Social Media Reels</h3>
              <p className="text-white/40 text-sm leading-relaxed">Short-form content for Instagram & TikTok.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">03</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Camera className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Ad Production</h3>
              <p className="text-white/40 text-sm leading-relaxed">High-converting video ads for Meta and Google.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">04</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Tv className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Motion Graphics</h3>
              <p className="text-white/40 text-sm leading-relaxed">Animated visuals and intros for your content.</p>
            </a>
          </div>
        </div>

        {/* ===== BLOCK 4 — Software Testing ===== */}
        <div className="mb-24">
          <div className="w-full h-[500px] bg-black/[0.96] rounded-2xl relative overflow-hidden border border-white/[0.08] mb-16">
            <div className="flex h-full">
              {/* Left — Text */}
              <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C1121F] mb-4">
                  QUALITY ASSURANCE
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Software Testing & QA
                </h2>
                <p className="mt-4 text-white/50 max-w-md text-base leading-relaxed">
                  From manual testing to automated pipelines — we catch every bug before your users do.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#C1121F] hover:bg-[#E5161F] text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] w-fit"
                >
                  Get Started
                  <span>→</span>
                </a>
              </div>
              {/* Right — Image */}
              <div className="flex-1 relative overflow-hidden rounded-lg h-full">
                <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80" alt="Software Testing" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Sub-cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">01</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Bug className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Manual Testing</h3>
              <p className="text-white/40 text-sm leading-relaxed">Detailed functional and UI testing by expert QA engineers.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">02</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Search className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Automated Testing</h3>
              <p className="text-white/40 text-sm leading-relaxed">Cypress, Playwright, and Jest pipelines for continuous testing.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">03</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Gauge className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Performance Testing</h3>
              <p className="text-white/40 text-sm leading-relaxed">Load testing and bottleneck detection before launch.</p>
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#C1121F] hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
            >
              <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">04</span>
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-[#C1121F]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">Security Testing</h3>
              <p className="text-white/40 text-sm leading-relaxed">Vulnerability scanning and penetration testing for your app.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
