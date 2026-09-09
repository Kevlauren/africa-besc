"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatedNote } from "@/components/ui/RotatedNote";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AfricaMap } from "@/components/africa/AfricaMap";
import { cn } from "@/lib/cn";
import type { CountriesContent } from "@/lib/types";

export function CountriesCovered({ content }: { content: CountriesContent }) {
  const [selected, setSelected] = useState(content.list[0]?.name ?? "");

  return (
    <section id="pays-couverts" className="section relative bg-cream">
      <RotatedNote side="right">{content.rotatedNote}</RotatedNote>
      <Container className="relative">
        <Reveal>
          <SectionHeading
            label={content.label}
            title={content.title}
            accent={content.titleAccent}
            description={content.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <select
                  aria-label={content.selectPlaceholder}
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="h-12 w-full appearance-none rounded-full border border-cream-300 bg-white px-5 pr-11 text-sm font-medium text-navy-600 shadow-sm outline-none transition focus:border-gold-300"
                >
                  {content.list.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <Icon
                  name="chevron-down"
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy-400"
                />
              </div>
              <Button href="#contact" size="lg" className="shrink-0">
                {content.cta}
              </Button>
            </div>

            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {content.list.map((country) => {
                const isActive = country.name === selected;
                return (
                  <li key={country.name}>
                    <button
                      type="button"
                      onClick={() => setSelected(country.name)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition",
                        isActive
                          ? "border-gold-300 bg-gold-50 text-navy-700"
                          : "border-cream-300 bg-white text-navy-500 hover:border-gold-200 hover:text-navy-700",
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/flags/${country.code}.svg`}
                        alt=""
                        width={22}
                        height={15}
                        loading="lazy"
                        className="h-4 w-6 shrink-0 rounded-[3px] object-cover ring-1 ring-black/5"
                      />
                      <span className="flex-1 truncate">{country.name}</span>
                      {isActive ? (
                        <Icon
                          name="check"
                          size={15}
                          className="text-gold-600"
                        />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="card-surface relative overflow-hidden rounded-[2rem] p-4 sm:p-8">
              <AfricaMap
                countries={content.list}
                selected={selected}
                onSelect={setSelected}
                className="mx-auto aspect-square w-full max-w-md"
              />
              <div className="mt-2 flex items-center justify-center gap-3 border-t border-cream-300/70 pt-4 text-center">
                <span className="text-3xl font-bold text-navy-700">
                  {content.mapValue}
                </span>
                <span className="max-w-[10rem] text-left text-xs font-medium uppercase tracking-wide text-navy-400">
                  {content.mapLabel}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={80}
          className="mt-12 flex flex-col items-center gap-2 border-t border-cream-300/70 pt-8 text-center"
        >
          <span className="script-accent text-5xl">{content.footnoteValue}</span>
          <span className="text-sm font-medium uppercase tracking-[0.16em] text-navy-400">
            {content.footnoteLabel}
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
