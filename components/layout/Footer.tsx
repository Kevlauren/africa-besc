"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/types";
import { Logo } from "./Logo";

const socials: { icon: IconName; href: string; label: string }[] = [
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "facebook", href: "#", label: "Facebook" },
  { icon: "whatsapp", href: "#", label: "WhatsApp" },
];

export function Footer() {
  const { t } = useLanguage();
  const { footer } = t;

  return (
    <footer id="contact" className="bg-navy-800 text-white/70">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {footer.tagline}
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-white/60 transition hover:text-gold-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
              {footer.contact.title}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Icon name="mail" size={16} className="text-gold-400" />
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="transition hover:text-gold-400"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" size={16} className="text-gold-400" />
                <a
                  href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`}
                  className="transition hover:text-gold-400"
                >
                  {footer.contact.phone}
                </a>
              </li>
              {footer.contact.lines.map((line) => (
                <li key={line} className="flex items-center gap-3">
                  <Icon name="map-pin" size={16} className="text-gold-400" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>{footer.legal}</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            ECTN · BESC · CTN — Africa
          </p>
        </Container>
      </div>
    </footer>
  );
}
