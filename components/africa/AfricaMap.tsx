"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { CountryItem } from "@/lib/types";
import { AFRICA_PATHS, AFRICA_VIEWBOX } from "./africaPaths";

interface AfricaMapProps {
  /** Covered countries (extensible: add { name, code } in lib/i18n and, if the
   *  <path id> isn't in africa.svg yet, add it there and re-run the script). */
  countries: CountryItem[];
  /** Currently selected country NAME. */
  selected: string;
  onSelect: (name: string) => void;
  className?: string;
}

type Centroid = { x: number; y: number };

export function AfricaMap({
  countries,
  selected,
  onSelect,
  className,
}: AfricaMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [centroids, setCentroids] = useState<Record<string, Centroid>>({});

  const coveredByCode = useMemo(() => {
    const map = new Map<string, CountryItem>();
    for (const c of countries) map.set(c.code.toUpperCase(), c);
    return map;
  }, [countries]);

  const nameByCode = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of countries) map.set(c.code.toUpperCase(), c.name);
    return map;
  }, [countries]);

  const selectedCode = useMemo(
    () =>
      countries.find((c) => c.name === selected)?.code.toUpperCase() ?? null,
    [countries, selected],
  );

  // Measure covered-country centroids once the paths are in the DOM.
  const measure = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const next: Record<string, Centroid> = {};
    for (const country of countries) {
      const code = country.code.toUpperCase();
      const el = svg.querySelector<SVGPathElement>(`#africa-${code}`);
      if (!el) continue;
      try {
        const b = el.getBBox();
        if (b.width || b.height) {
          next[code] = { x: b.x + b.width / 2, y: b.y + b.height / 2 };
        }
      } catch {
        /* getBBox can throw in detached/hidden trees */
      }
    }
    setCentroids(next);
  }, [countries]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const activate = (code: string) => {
    const name = nameByCode.get(code);
    if (name) onSelect(name);
  };

  const selectedCentroid = selectedCode ? centroids[selectedCode] : undefined;

  return (
    <div className={cn("relative", className)}>
      <svg
        ref={svgRef}
        viewBox={AFRICA_VIEWBOX}
        className="h-full w-full"
        role="group"
        aria-label="Carte interactive des destinations africaines couvertes"
      >
        {/* Continent — all countries */}
        <g strokeLinejoin="round">
          {AFRICA_PATHS.map((p) => {
            const covered = coveredByCode.get(p.id);
            const isSelected = p.id === selectedCode;

            if (!covered) {
              return (
                <path
                  key={p.id}
                  d={p.d}
                  fill="#E7E1D4"
                  stroke="#D8D0BE"
                  strokeWidth={0.35}
                />
              );
            }

            return (
              <path
                key={p.id}
                id={`africa-${p.id}`}
                d={p.d}
                role="button"
                tabIndex={0}
                aria-label={covered.name}
                aria-pressed={isSelected}
                onClick={() => activate(p.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    activate(p.id);
                  }
                }}
                className="cursor-pointer outline-none transition-colors duration-200 focus-visible:stroke-navy-700"
                fill={isSelected ? "#E8942A" : "#F2A63B"}
                stroke="#ffffff"
                strokeWidth={isSelected ? 0.9 : 0.6}
              />
            );
          })}
        </g>

        {/* Markers for covered countries (reliable hit target, esp. small ones) */}
        <g>
          {Object.entries(centroids).map(([code, c]) => {
            const isSelected = code === selectedCode;
            return (
              <g
                key={code}
                role="button"
                tabIndex={0}
                aria-label={nameByCode.get(code)}
                aria-pressed={isSelected}
                onClick={() => activate(code)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    activate(code);
                  }
                }}
                className="cursor-pointer outline-none"
              >
                {isSelected ? (
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={3.6}
                    fill="rgba(232,148,42,0.25)"
                  />
                ) : null}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isSelected ? 1.7 : 1.15}
                  fill={isSelected ? "#B45309" : "#7a4a12"}
                  stroke="#fff"
                  strokeWidth={isSelected ? 0.6 : 0.45}
                  className="transition-all duration-200"
                />
                <circle cx={c.x} cy={c.y} r={4} fill="transparent" />
              </g>
            );
          })}
        </g>

        {/* Tooltip near the selected country */}
        {selectedCentroid ? (
          <g
            transform={`translate(${selectedCentroid.x}, ${selectedCentroid.y - 6})`}
            className="pointer-events-none"
          >
            <rect
              x={-Math.max(14, selected.length * 1.85)}
              y={-7.4}
              width={Math.max(28, selected.length * 3.7)}
              height={7.2}
              rx={2}
              fill="#152238"
            />
            <text
              x={0}
              y={-2.2}
              textAnchor="middle"
              fontSize={4.2}
              fontWeight={600}
              fill="#ffffff"
            >
              {selected}
            </text>
            <path d="M-2 0 L2 0 L0 2.4 Z" fill="#152238" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}
