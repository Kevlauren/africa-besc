"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // At the top of the page the header sits on top of the dark hero image.
  const overHero = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-cream-300/80 bg-cream/90 backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#accueil" aria-label="Africa BESC" className="shrink-0">
          <Logo tone={overHero ? "light" : "dark"} />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition",
                overHero
                  ? "text-white/80 hover:bg-white/10 hover:text-white"
                  : "text-navy-500 hover:bg-white hover:text-navy-700",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher tone={overHero ? "dark" : "light"} />
          <Button href="#contact" size="sm" icon="arrow-right">
            {t.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden",
            overHero
              ? "border-white/30 bg-white/10 text-white backdrop-blur"
              : "border-cream-300 bg-white text-navy-600",
          )}
          aria-label={t.nav.menuLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="menu" size={20} />
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-900/40 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-6 bg-cream px-6 py-6 shadow-2xl transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300 bg-white text-navy-600"
              aria-label="Fermer"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav className="flex flex-col">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-cream-300/70 py-3 text-[0.95rem] font-medium text-navy-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <LanguageSwitcher tone="light" className="self-start" />
            <Button
              href="#contact"
              className="w-full"
              icon="arrow-right"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
