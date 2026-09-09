"use client";

import { useMemo } from "react";
import { cn } from "@/lib/cn";
import type { CountryItem } from "@/lib/types";

/** Approximate marker positions on the stylised continent (viewBox 1000x1000). */
const MARKERS: Record<string, { x: number; y: number }> = {
  // FR names
  "Sénégal": { x: 150, y: 452 },
  "Guinée-Bissau": { x: 156, y: 488 },
  "Guinée": { x: 208, y: 502 },
  "Ghana": { x: 322, y: 588 },
  "Togo": { x: 350, y: 580 },
  "Bénin": { x: 374, y: 573 },
  "Nigeria": { x: 452, y: 566 },
  "Guinée équatoriale": { x: 470, y: 648 },
  "République centrafricaine": { x: 560, y: 602 },
  "Soudan du Sud": { x: 648, y: 545 },
  "Burundi": { x: 650, y: 700 },
  // EN names
  Senegal: { x: 150, y: 452 },
  "Guinea-Bissau": { x: 156, y: 488 },
  Guinea: { x: 208, y: 502 },
  Benin: { x: 374, y: 573 },
  "Equatorial Guinea": { x: 470, y: 648 },
  "Central African Republic": { x: 560, y: 602 },
  "South Sudan": { x: 648, y: 545 },
};

const AFRICA_PATH =
  "M262 96 C240 150 250 180 235 210 C250 250 300 250 300 300 C300 340 250 360 235 400 L150 430 C120 452 130 500 176 520 C210 540 250 545 272 560 C300 585 305 620 330 652 C340 702 330 762 362 802 C402 882 480 942 546 952 C602 942 622 882 632 822 C662 782 712 762 742 722 C792 662 822 560 862 470 C882 430 902 400 882 370 C852 350 822 380 802 360 C792 300 762 220 722 150 C702 110 682 95 642 92 L320 90 C296 90 276 90 262 96 Z";

interface AfricaMapProps {
  countries: CountryItem[];
  selected: string;
  onSelect: (name: string) => void;
  className?: string;
}

export function AfricaMap({
  countries,
  selected,
  onSelect,
  className,
}: AfricaMapProps) {
  const points = useMemo(
    () =>
      countries
        .map((c) => ({ country: c, pos: MARKERS[c.name] }))
        .filter((p): p is { country: CountryItem; pos: { x: number; y: number } } =>
          Boolean(p.pos),
        ),
    [countries],
  );

  const selectedPos = MARKERS[selected];

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 1000 1000"
        className="h-full w-full"
        role="group"
        aria-label="Carte des destinations africaines couvertes"
      >
        <defs>
          <linearGradient id="africaFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E7E1D6" />
            <stop offset="100%" stopColor="#D9D2C4" />
          </linearGradient>
        </defs>

        <path
          d={AFRICA_PATH}
          fill="url(#africaFill)"
          stroke="#C4BBA8"
          strokeWidth={2}
        />

        {/* selected-country halo */}
        {selectedPos ? (
          <circle
            cx={selectedPos.x}
            cy={selectedPos.y}
            r={46}
            fill="rgba(242,166,59,0.18)"
            className="transition-all duration-300"
          />
        ) : null}

        {points.map(({ country, pos }) => {
          const isActive = country.name === selected;
          return (
            <g
              key={country.name}
              role="button"
              tabIndex={0}
              aria-label={country.name}
              aria-pressed={isActive}
              className="cursor-pointer focus:outline-none"
              onClick={() => onSelect(country.name)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(country.name);
                }
              }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isActive ? 15 : 9}
                fill={isActive ? "#E8942A" : "#F2A63B"}
                stroke="#fff"
                strokeWidth={isActive ? 4 : 3}
                className="transition-all duration-200"
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r={26}
                fill="transparent"
              />
            </g>
          );
        })}

        {/* tooltip */}
        {selectedPos ? (
          <g
            transform={`translate(${selectedPos.x}, ${selectedPos.y - 34})`}
            className="pointer-events-none"
          >
            <rect
              x={-Math.max(38, selected.length * 8.5) / 2}
              y={-26}
              width={Math.max(38, selected.length * 8.5)}
              height={26}
              rx={8}
              fill="#152238"
            />
            <text
              x={0}
              y={-8}
              textAnchor="middle"
              fontSize={15}
              fontWeight={600}
              fill="#ffffff"
            >
              {selected}
            </text>
            <path d="M-6 0 L6 0 L0 8 Z" fill="#152238" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}
