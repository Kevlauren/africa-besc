"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";
import type { IconName } from "@/lib/types";

const CHIP_ICONS: IconName[] = ["shield-check", "headset", "check"];

export function Quote() {
  const { t } = useLanguage();
  const q = t.quote;

  return (
    <>
      {/* Hero — light split layout (distinct from the home hero) */}
      <section className="relative overflow-hidden bg-cream pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        {/* soft brand glow, keeps it airy but on-palette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(242,166,59,0.14),transparent_70%)]"
        />

        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Text */}
            <Reveal className="flex flex-col items-start gap-6">
              <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold-600">
                <span className="h-px w-8 bg-gold-400" />
                {q.hero.label}
              </p>

              <h1 className="text-4xl font-bold leading-[1.08] text-navy-700 sm:text-5xl lg:text-[3.5rem]">
                {q.hero.title}
                <span className="mt-1 block font-extrabold text-gold-500">
                  {q.hero.titleAccent}
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-navy-400 sm:text-lg">
                {q.hero.subtitle}
              </p>

              <Button
                href={q.formUrl}
                size="lg"
                icon="arrow-right"
                className="mt-1"
              >
                {q.hero.primaryCta}
              </Button>

              <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-3">
                {q.hero.chips.map((chip, i) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy-500"
                  >
                    <Icon
                      name={CHIP_ICONS[i] ?? "check"}
                      size={16}
                      className="text-gold-600"
                    />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Image */}
            <Reveal delay={120} className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 right-2 z-10 hidden max-w-[9rem] -rotate-3 text-right font-script text-xl leading-tight text-navy-400 sm:block lg:-top-7 lg:text-2xl"
              >
                {q.hero.imageNote}
              </span>
              <ImageSlot
                src="/images/cotation/hero-terminal.jpg"
                alt={q.hero.imageAlt}
                label={q.hero.imageAlt}
                icon="ship"
                rounded="rounded-[2rem]"
                className="aspect-[5/4] w-full shadow-card sm:aspect-[4/3] lg:aspect-[5/4]"
                imgClassName="object-center"
                priority
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="section bg-cream">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                label={q.intro.label}
                title={q.intro.title}
                accent={q.intro.titleAccent}
              />
              <div className="flex flex-col gap-3 text-sm leading-relaxed text-navy-400 sm:text-base">
                {q.intro.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="flex flex-col gap-2.5">
                {q.intro.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-navy-600"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                      <Icon name="check" size={13} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <ImageSlot
                  src="/images/services/logistics-clipboard.jpg"
                  alt={q.intro.imageAlt}
                  label={q.intro.imageAlt}
                  icon="clipboard-check"
                  rounded="rounded-[2rem]"
                  className="aspect-[4/5] w-full shadow-card sm:aspect-square lg:aspect-[4/5]"
                />
                <ImageSlot
                  src="/images/cotation/rail-freight.jpg"
                  alt=""
                  icon="route"
                  rounded="rounded-2xl"
                  className="absolute -bottom-8 -left-8 hidden aspect-[4/3] w-44 border-4 border-cream shadow-card lg:block"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="section bg-cream-200">
        <Container>
          <Reveal>
            <SectionHeading
              label={q.coverage.label}
              title={q.coverage.title}
              accent={q.coverage.titleAccent}
              description={q.coverage.subtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {q.coverage.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="card-surface flex h-full flex-col gap-4 p-6 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700 text-white">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3 className="text-base font-semibold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="section bg-cream">
        <Container>
          <Reveal>
            <SectionHeading
              label={q.steps.label}
              title={q.steps.title}
              accent={q.steps.titleAccent}
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {q.steps.items.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <li className="card-surface flex h-full flex-col gap-3 p-6">
                  <span className="font-script text-3xl text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-navy-700">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-400">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <Container>
          <Reveal className="relative isolate overflow-hidden rounded-[2.25rem] bg-navy-800 px-6 py-16 text-white ring-1 ring-white/10 sm:px-12 lg:px-16 lg:py-20">
            <ImageSlot
              src="/images/hero/containers-yard.jpg"
              alt={q.cta.imageAlt}
              label={q.cta.imageAlt}
              icon="package"
              tone="dark"
              rounded="rounded-none"
              className="absolute inset-0 -z-20 h-full w-full"
              imgClassName="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/45"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/85 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_82%_12%,rgba(242,166,59,0.35),transparent_45%)]"
            />

            <div className="relative z-10 flex flex-col items-start gap-6 lg:max-w-2xl">
              <SectionLabel
                align="left"
                className="text-gold-300 [&::before]:bg-gold-400/60 [&::after]:hidden"
              >
                {q.cta.label}
              </SectionLabel>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
                {q.cta.title}{" "}
                <span className="script-accent text-[1.3em] text-gold-300">
                  {q.cta.titleAccent}
                </span>
              </h2>
              <p className="text-base text-white/75 sm:text-lg">
                {q.cta.subtitle}
              </p>
              <Button href={q.formUrl} size="lg" icon="arrow-right">
                {q.cta.primaryCta}
              </Button>
              <p className="text-sm text-white/55">{q.cta.note}</p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
