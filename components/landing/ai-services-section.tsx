"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import {
  Bot,
  Mic,
  Users,
  Video,
  BarChart3,
  ShoppingBag,
  Search,
} from "lucide-react";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";

const aiServices = [
  {
    icon: Bot,
    titleEn: "Smart Chatbots",
    titleAr: "روبوتات الدردشة الذكية",
    descEn:
      "AI-powered chatbot trained on your company data — responds like an expert employee, available 24/7.",
    descAr:
      "بوت مبني على تقنية RAG متدرب على ملفات وبيانات شركتك، بيرد على العملاء كأنه موظف خبير على مدار اليوم.",
  },
  {
    icon: Mic,
    titleEn: "Voice Agents",
    titleAr: "الموظف الصوتي الآلي",
    descEn:
      "AI system that makes and receives calls with a natural human voice — handles appointments and routine tasks automatically.",
    descAr:
      "نظام ذكاء اصطناعي بيستقبل أو بيعمل مكالمات بصوت بشري طبيعي لإدارة المواعيد والمهام الروتينية.",
  },
  {
    icon: Users,
    titleEn: "Lead Qualification",
    titleAr: "تأهيل وفلترة العملاء",
    descEn:
      "Automatically qualifies incoming leads with a quick AI conversation — only hot leads reach your sales team.",
    descAr:
      "نظام بيستلم الـ Leads من الإعلانات، بيعمل معاهم محادثة سريعة لتقييم جاهزيتهم، وبيبعت الجادين فوراً لفريق المبيعات.",
  },
  {
    icon: Video,
    titleEn: "AI Video Ads",
    titleAr: "إعلانات الفيديو بالذكاء الاصطناعي",
    descEn:
      "Professional video ads using AI Avatars and Voiceovers — produce multiple A/B test versions at a fraction of the cost.",
    descAr:
      "إنتاج فيديوهات إعلانية احترافية باستخدام AI Avatars و Voiceovers لعمل A/B Testing بتكلفة منخفضة وفي وقت قياسي.",
  },
  {
    icon: BarChart3,
    titleEn: "Customer Segmentation",
    titleAr: "تقسيم العملاء الذكي",
    descEn:
      "AI analyzes customer behavior and splits them into precise segments so you target them with personalized offers.",
    descAr:
      "الـ AI بيحلل داتا العملاء ويقسمهم لشرائح دقيقة بناءً على سلوكهم الشرائي عشان تستهدفهم بعروض مخصصة.",
  },
  {
    icon: ShoppingBag,
    titleEn: "Smart Recommendation Engine",
    titleAr: "محركات التوصية الذكية",
    descEn:
      "Recommends complementary products to e-commerce visitors based on their interests — increases average order value.",
    descAr:
      "نظام ترشيحات للمتاجر الإلكترونية بيقترح منتجات مكملة بناءً على اهتمامات الزائر لزيادة قيمة السلة.",
  },
  {
    icon: Search,
    titleEn: "AI Site Search",
    titleAr: "بحث الموقع بالذكاء الاصطناعي",
    descEn:
      "Replaces traditional search with semantic AI search that understands user intent — even with typos or colloquial terms.",
    descAr:
      "استبدال البحث التقليدي ببحث بيفهم نية المستخدم حتى لو كتب الكلمة غلط أو بالعامية.",
  },
];

export function AiServicesSection() {
  const { locale, dir } = useI18n();
  const isAr = locale === "ar";

  return (
    <section className="py-24 px-6" dir={dir}>
      <div className="max-w-7xl mx-auto">
        {/* ===== ROBOT HERO CARD ===== */}
        <div className="w-full h-[500px] bg-black/[0.96] rounded-2xl relative overflow-hidden border border-white/[0.08] mb-16">
          <Spotlight size={400} />

          <div className="flex h-full">
            {/* Left — Text */}
            <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C1121F] mb-4">
                {isAr ? "الذكاء الاصطناعي" : "AI Services"}
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {isAr ? (
                  <>
                    أتمتة أعمالك
                    <br />
                    بـ<span className="text-[#C1121F]"> الذكاء الاصطناعي</span>
                  </>
                ) : (
                  <>
                    Automate Your
                    <br />
                    Business with<span className="text-[#C1121F]"> AI</span>
                  </>
                )}
              </h2>

              <p className="mt-4 text-white/50 max-w-md text-base leading-relaxed">
                {isAr
                  ? "حلول ذكاء اصطناعي مخصصة — من ردود العملاء الآلية لتحليل البيانات وإنتاج الإعلانات."
                  : "Custom AI solutions — from automated customer responses to data analysis and ad production."}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#C1121F] hover:bg-[#E5161F] text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] w-fit"
              >
                {isAr ? "استفسر الآن" : "Get Started"}
                <span>{isAr ? "←" : "→"}</span>
              </a>
            </div>

            {/* Right — Robot 3D */}
            <div className="flex-1 relative">
              <SplineScene
                scene="https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* ===== END ROBOT HERO CARD ===== */}

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-6
                  transition-all duration-300 hover:-translate-y-1
                  hover:border-t-2 hover:border-t-[#C1121F]
                  hover:shadow-[0_0_24px_rgba(193,18,31,0.08)]"
              >
                {/* Background number */}
                <span className="absolute top-3 end-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#C1121F]/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#C1121F]" />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-2">
                  {isAr ? service.titleAr : service.titleEn}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed">
                  {isAr ? service.descAr : service.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
