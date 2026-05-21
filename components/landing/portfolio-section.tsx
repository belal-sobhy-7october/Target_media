"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import { ExternalLink } from "lucide-react";

const portfolioCategories = [
  {
    number: "01",
    categoryEn: "Web",
    categoryAr: "ويب",
    // صورتان حقيقيتان من المشاريع — نعرضهم جنب بعض كـ collage
    images: [
      "/portfolio/belal-portfolio.png", // screenshot من belal-portfolio-sable.vercel.app
      "/portfolio/foodie-wagon.png", // screenshot من foodie-wagon-ezfo.vercel.app
    ],
    // fallback لو الصور مش موجودة لسه
    imageFallback:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    descEn:
      "Modern, fast websites built to convert — from personal portfolios to restaurant platforms.",
    descAr:
      "مواقع عصرية وسريعة مبنية للتحويل — من البورتفوليو الشخصي لمواقع المطاعم.",
    projects: [
      {
        nameEn: "Portfolio Website",
        nameAr: "موقع البورتفوليو",
        tagEn: "Full-stack Developer Portfolio",
        tagAr: "بورتفوليو مطور فول ستاك",
        url: "https://belal-portfolio-sable.vercel.app/",
        linkLabel: "Visit Website",
        linkLabelAr: "زيارة الموقع",
        // لون مميز للكارد
        accent: "#2D6A4F",
      },
      {
        nameEn: "Foodie Wagon",
        nameAr: "فودي واجون",
        tagEn: "Restaurant & Food Truck Website",
        tagAr: "موقع مطعم وفود تراك",
        url: "https://foodie-wagon-ezfo.vercel.app/",
        linkLabel: "Visit Website",
        linkLabelAr: "زيارة الموقع",
        accent: "#B5860D",
      },
    ],
  },
  {
    number: "02",
    categoryEn: "Mobile Apps",
    categoryAr: "تطبيقات موبايل",
    images: [
      "/portfolio/flore-app.png", // screenshot من App Store لـ Flore
      "/portfolio/meshareeb-app.png", // screenshot من Play Store لـ Meshareeb
    ],
    imageFallback:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    descEn:
      "Native mobile apps published on App Store & Play Store — from flowers to beverages.",
    descAr:
      "تطبيقات موبايل منشورة على App Store وPlay Store — من الزهور للمشروبات.",
    projects: [
      {
        nameEn: "Flore App",
        nameAr: "تطبيق فلور فلور",
        tagEn: "Floral Bouquet Shopping · iOS",
        tagAr: "تطبيق بوكيهات زهور · iOS",
        url: "https://apps.apple.com/eg/app/flore-%D9%81%D9%84%D9%88%D8%B1/id6478376490",
        linkLabel: "App Store",
        linkLabelAr: "آب ستور",
        accent: "#7C3AED",
      },
      {
        nameEn: "Meshareeb App",
        nameAr: "تطبيق مشاريب",
        tagEn: "Beverages Delivery · Android · 1K+ Downloads",
        tagAr: "توصيل مشروبات · أندرويد · +1000 تحميل",
        url: "https://play.google.com/store/apps/details?id=com.vavisa.app.meshareeb",
        linkLabel: "Play Store",
        linkLabelAr: "بلاي ستور",
        accent: "#0EA5E9",
      },
    ],
  },
  {
    number: "03",
    categoryEn: "Video Editing",
    categoryAr: "مونتاج فيديو",
    images: [
      "/portfolio/video-editing.png",
    ],
    imageFallback:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    descEn:
      "Professional video editing & post-production for brands, ads, and social media.",
    descAr:
      "مونتاج فيديو احترافي وما بعد الإنتاج للبراندات والإعلانات والسوشيال ميديا.",
    projects: [
      {
        nameEn: 'Video Project 1',
        nameAr: 'مشروع فيديو ١',
        tagEn: 'Brand Video Production',
        tagAr: 'إنتاج فيديو براند',
        url: 'https://drive.google.com/file/d/1OPqClP3lqOIFbmTZXJnUbhRf9SW1-YGd/view?usp=drivesdk',
        linkLabel: 'Watch Video',
        linkLabelAr: 'شاهد الفيديو',
        accent: '#C1121F',
      },
      {
        nameEn: 'Video Project 2',
        nameAr: 'مشروع فيديو ٢',
        tagEn: 'Social Media Video',
        tagAr: 'فيديو سوشيال ميديا',
        url: 'https://drive.google.com/file/d/1w_yghKIJu4PM7jqqRco7AX0Bo0SnzXOC/view?usp=drivesdk',
        linkLabel: 'Watch Video',
        linkLabelAr: 'شاهد الفيديو',
        accent: '#C1121F',
      },
      {
        nameEn: 'Video Project 3',
        nameAr: 'مشروع فيديو ٣',
        tagEn: 'Ad Campaign Video',
        tagAr: 'فيديو حملة إعلانية',
        url: 'https://drive.google.com/file/d/19ixYME3cxB9PkpTbH-Ti-emZnsXdxOBU/view?usp=drivesdk',
        linkLabel: 'Watch Video',
        linkLabelAr: 'شاهد الفيديو',
        accent: '#C1121F',
      },
      {
        nameEn: 'Video Project 4',
        nameAr: 'مشروع فيديو ٤',
        tagEn: 'Post-Production Edit',
        tagAr: 'مونتاج ما بعد الإنتاج',
        url: 'https://drive.google.com/file/d/1sxbE7WhBq4O9j2kaBpzMbt81AqSM6EgL/view?usp=drivesdk',
        linkLabel: 'Watch Video',
        linkLabelAr: 'شاهد الفيديو',
        accent: '#C1121F',
      },
    ],
  },
];

export function PortfolioSection() {
  const { locale, dir } = useI18n();
  const isAr = locale === "ar";

  return (
    <section id="work" className="py-24 px-6 border-t border-white/[0.06]" dir={dir}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C1121F] mb-4">
            {isAr ? "أعمالنا" : "Selected Work"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {isAr ? (
              <>
                <span className="text-[#C1121F]">مشاريع</span> منجزة.
              </>
            ) : (
              <>
                Selected
                <br />
                <span className="text-[#C1121F]">Work.</span>
              </>
            )}
          </h2>
        </div>

        {/* Categories — تحت بعض */}
        <div className="space-y-20">
          {portfolioCategories.map((cat, i) => (
            <div key={i}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/[0.06]">
                <span className="text-[#C1121F] text-sm font-mono font-bold">
                  {cat.number}
                </span>
                <h3 className="text-white text-2xl font-bold uppercase tracking-wider">
                  {isAr ? cat.categoryAr : cat.categoryEn}
                </h3>
              </div>

              {/* Split: صورة + projects */}
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* الصورة — collage للـ web والموبايل */}
                <div className="relative h-[360px] rounded-2xl overflow-hidden group">
                  {/* الصورة الأساسية */}
                  <div className="overflow-hidden rounded-lg h-full">
                    <img
                      src={
                        [
                          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
                          "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80",
                          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200",
                        ][i]
                      }
                      alt={isAr ? cat.categoryAr : cat.categoryEn}
                      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* الصورة التانية كـ overlay صغيرة (لو موجودة) */}
                  {cat.images[1] && (
                    <div className="absolute bottom-4 end-4 w-32 h-24 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#181818] flex items-center justify-center">
                      <span className="text-[10px] text-white/15 select-none text-center px-1 leading-tight">
                        {isAr ? "معاينة" : "preview"}
                      </span>
                    </div>
                  )}

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 end-0 w-40 h-40 bg-[#C1121F]/15 blur-3xl rounded-full" />

                  {/* Category number watermark */}
                  <span className="absolute top-4 start-4 text-[90px] font-black text-white/[0.05] leading-none select-none">
                    {cat.number}
                  </span>

                  {/* Description overlay بالأسفل */}
                  <div className="absolute bottom-4 start-4 end-4">
                    <p className="text-white/60 text-sm leading-relaxed">
                      {isAr ? cat.descAr : cat.descEn}
                    </p>
                  </div>
                </div>

                {/* Projects list */}
                <div className="space-y-4">
                  {cat.projects.map((project, j) => (
                    <a
                      key={j}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-6 bg-[#1A1A1A] border border-white/[0.06]
                        rounded-2xl hover:border-[#C1121F]/40 hover:-translate-y-1
                        transition-all duration-200 group/card"
                    >
                      <div className="flex items-start gap-4">
                        {/* Accent color dot */}
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: project.accent }}
                        />
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-1">
                            {isAr ? project.nameAr : project.nameEn}
                          </h4>
                          <span className="text-white/40 text-sm">
                            {isAr ? project.tagAr : project.tagEn}
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-2 text-[#C1121F] text-sm font-medium
                        opacity-0 group-hover/card:opacity-100 transition-all duration-200 flex-shrink-0 ms-4"
                      >
                        <span>
                          {isAr ? project.linkLabelAr : project.linkLabel}
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
