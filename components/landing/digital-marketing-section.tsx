"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import { Target, Share2, Video, Globe } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Globe,
    titleEn: "Professional Graphic Design",
    titleAr: "التصميم الجرافيكي الاحترافي",
    descEn: "Visual content for social media and ads that converts.",
    descAr: "محتوى بصري لسوشيال ميديا والإعلانات يحول المشاهدين لعملاء.",
    linkEn: "Start Designing",
    linkAr: "ابدأ التصميم",
  },
  {
    icon: Target,
    titleEn: "Paid Advertising Campaigns",
    titleAr: "حملات الإعلانات المدفوعة",
    descEn: "Data-driven campaigns on Meta, Google, and TikTok.",
    descAr: "حملات مدروسة على ميتا وجوجل وتيك توك.",
    linkEn: "Launch Campaigns",
    linkAr: "أطلق حملتك",
  },
  {
    icon: Share2,
    titleEn: "Social Media Management",
    titleAr: "إدارة السوشيال ميديا",
    descEn: "Full management — content, scheduling, engagement.",
    descAr: "إدارة شاملة — محتوى وجدولة وتفاعل وتقارير.",
    linkEn: "Grow Your Presence",
    linkAr: "طوّر حضورك",
  },
  {
    icon: Video,
    titleEn: "Website Design & Development",
    titleAr: "تصميم وتطوير المواقع",
    descEn: "Fast, modern websites built to convert.",
    descAr: "مواقع سريعة وعصرية مبنية للتحويل.",
    linkEn: "Build My Website",
    linkAr: "ابن موقعي",
  },
];

export function DigitalMarketingSection() {
  const { locale, dir } = useI18n();
  const isAr = locale === "ar";

  return (
    <section className="py-24 px-6 border-t border-white/[0.06]" dir={dir}>
      <div className="max-w-7xl mx-auto">
        {/* Split layout — صورة + content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* الصورة — شمال */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Digital Marketing"
              className="w-full h-full object-cover"
            />
            {/* Red overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            {/* Red glow corner */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#C1121F]/20 blur-3xl rounded-full" />
          </div>

          {/* Content — يمين */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C1121F] mb-4">
              {isAr ? "التسويق الرقمي" : "Digital Marketing"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {isAr ? (
                <>
                  التسويق الرقمي و
                  <span className="text-[#C1121F]">إدارة السوشيال ميديا</span>
                </>
              ) : (
                <>
                  Digital Marketing &<br />
                  <span className="text-[#C1121F]">
                    Social Media Management
                  </span>
                </>
              )}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              {isAr
                ? "نبني هويتك الرقمية ونوصل رسالتك للجمهور الصح بالاستراتيجية الصح."
                : "We build your digital identity and reach the right audience with the right strategy."}
            </p>

            {/* 2x2 mini cards */}
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-4
                    hover:border-[#C1121F]/40 transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-[#C1121F] mb-2" />
                    <h3 className="text-white text-sm font-medium mb-1">
                      {isAr ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {isAr ? service.descAr : service.descEn}
                    </p>
                    <a
                      href="#contact"
                      className="mt-2 inline-flex items-center gap-1 text-[#C1121F] text-xs font-medium"
                    >
                      {isAr ? service.linkAr : service.linkEn}{" "}
                      {isAr ? "←" : "→"}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
