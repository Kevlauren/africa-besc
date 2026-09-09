import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/types";

interface ImageSlotProps {
  /** Real image URL. When omitted a styled placeholder is rendered instead. */
  src?: string;
  alt: string;
  /** Short label shown on the placeholder to describe the intended asset. */
  label?: string;
  icon?: IconName;
  className?: string;
  imgClassName?: string;
  rounded?: string;
  tone?: "light" | "dark" | "brand";
  priority?: boolean;
}

const tones: Record<NonNullable<ImageSlotProps["tone"]>, string> = {
  light: "bg-cream-200 text-navy-300",
  dark: "bg-navy-700 text-white/40",
  brand: "bg-gold-100 text-gold-600",
};

/**
 * Drop-in media slot. Swap `src` in for production assets; until then it shows a
 * branded placeholder so every layout stays intact. Mirrors the design's
 * `image-slot.js` behaviour.
 */
export function ImageSlot({
  src,
  alt,
  label,
  icon = "map-pin",
  className,
  imgClassName,
  rounded = "rounded-3xl",
  tone = "light",
  priority,
}: ImageSlotProps) {
  if (src) {
    return (
      <span className={cn("block overflow-hidden", rounded, className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden",
        rounded,
        tones[tone],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%),repeating-linear-gradient(135deg,rgba(0,0,0,0.04)_0_12px,transparent_12px_24px)]"
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-current shadow-sm">
        <Icon name={icon} size={22} />
      </span>
      {label ? (
        <span className="relative max-w-[80%] text-center text-xs font-medium uppercase tracking-[0.18em]">
          {label}
        </span>
      ) : null}
    </span>
  );
}
