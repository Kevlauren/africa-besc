"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/cn";
import type { Lang } from "@/lib/types";

const options: Lang[] = ["fr", "en"];

export function LanguageSwitcher({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-xs font-semibold",
        tone === "dark"
          ? "border-white/20 bg-white/5"
          : "border-cream-300 bg-cream-100",
        className,
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition",
            lang === option
              ? "bg-gold-400 text-navy-800"
              : tone === "dark"
                ? "text-white/60 hover:text-white"
                : "text-navy-400 hover:text-navy-700",
          )}
        >
          {t.langLabel[option]}
        </button>
      ))}
    </div>
  );
}
