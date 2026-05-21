"use client";

import { useTranslations } from "@/components/providers/i18n-provider";
import { Instagram, Facebook } from "lucide-react";

export function FooterSection() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const footerLinks = [
    { name: t.footer.links.services, href: "#services" },
    { name: t.footer.links.focus, href: "#focus" },
    { name: t.footer.links.contact, href: "#contact" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="relative w-full h-[280px] md:h-[340px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <a href="#" className="inline-block mb-6">
                <span className="text-2xl font-display text-white">
                  {t.company.name}
                </span>
              </a>
              <p className="text-white/50 leading-relaxed mb-8 max-w-sm text-sm text-start">
                {t.footer.tagline}
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <a
                  href={`tel:${t.company.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {t.company.phone}
                </a>
                <a
                  href={`mailto:${t.company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {t.company.email}
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.instagram.com/vion_agency12/?hl=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C1121F] hover:border-[#C1121F] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590204153009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C1121F] hover:border-[#C1121F] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

              </div>
            </div>

            <div className="md:col-span-3 md:col-start-8">
              <h3 className="text-sm font-medium text-white mb-6">
                {t.footer.sections.services}
              </h3>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30 text-center md:text-start">
            &copy; {year} {t.company.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
