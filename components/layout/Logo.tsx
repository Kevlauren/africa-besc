"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Logo slot.
 *
 * Drop your own artwork into `public/images/logo/`:
 *   - logo-light.svg  (or .png)  -> used on DARK backgrounds
 *       (header while over the hero, footer)
 *   - logo-dark.svg   (or .png)  -> used on LIGHT backgrounds
 *       (header once scrolled / on inner pages)
 *
 * Keep both files the SAME height/aspect ratio. The component reserves the
 * height set via `className` (e.g. `h-9 lg:h-11`) and scales the image to fit
 * (`width: auto`, capped at `max-w-[200px]`). No code change needed after upload
 * — until the files exist a branded placeholder is shown.
 */

const LOGO_SRC: Record<"light" | "dark", string> = {
  light: "/images/logo/logo-light-besc.svg",
  dark: "/images/logo/logo-dark-besc.svg",
};

interface LogoProps {
  tone?: "light" | "dark";
  /** Sets the reserved height, e.g. "h-9 lg:h-11". */
  className?: string;
}

export function Logo({ tone = "dark", className }: LogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cn(
        "inline-flex h-8 max-w-[200px] items-center [&_img]:h-full [&_img]:w-auto [&_svg]:h-full [&_svg]:w-auto",
        className,
      )}
    >
      {failed ? (
        <LogoMark tone={tone} />
      ) : (
        // Deliberate plain <img>: this is an upload slot for the client's own
        // logo file (see public/images/logo/README.md), not an optimized asset.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={LOGO_SRC[tone]}
          alt="Africa BESC"
          onError={() => setFailed(true)}
          className="block max-h-full max-w-full object-contain object-left"
        />
      )}
    </span>
  );
}

/** Inline fallback lockup — mirrors the shipped placeholder SVGs. */
export function LogoMark({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const isLight = tone === "light";
  return (
    <svg
      viewBox="0 0 210 48"
      className="h-full w-auto"
      role="img"
      aria-label="Africa BESC"
    >
      <rect
        x="0"
        y="4"
        width="40"
        height="40"
        rx="10"
        fill={isLight ? "rgba(255,255,255,0.1)" : "#152238"}
      />
      <circle
        cx="20"
        cy="24"
        r="11"
        fill="none"
        stroke="#F2A63B"
        strokeWidth="3.2"
      />
      <path
        d="M20 13c4 4 4 18 0 22"
        fill="none"
        stroke="#F2A63B"
        strokeWidth="2.4"
      />
      <path d="M9 24h22" stroke="#F2A63B" strokeWidth="2.4" />
      <text
        x="52"
        y="24"
        fontFamily='var(--font-sans), "IBM Plex Sans", system-ui, sans-serif'
        fontSize="18"
        fontWeight="800"
        letterSpacing="0.4"
        fill={isLight ? "#ffffff" : "#152238"}
      >
        AFRICA <tspan fill="#F2A63B">BESC</tspan>
      </text>
      <text
        x="52.5"
        y="38"
        fontFamily='var(--font-sans), "IBM Plex Sans", system-ui, sans-serif'
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="2.6"
        fill={isLight ? "rgba(255,255,255,0.55)" : "#7389AE"}
      >
        ECTN · BESC · CTN
      </text>
    </svg>
  );
}
