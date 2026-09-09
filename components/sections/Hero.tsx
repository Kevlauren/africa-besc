import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";
import type { HeroContent } from "@/lib/types";

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden pb-24 pt-28 sm:pb-28 sm:pt-32 lg:min-h-[760px] lg:pb-32 lg:pt-40"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 -z-20">
        <ImageSlot
          src={content.image}
          alt={content.imageLabel}
          label={content.imageLabel}
          icon="package"
          rounded="rounded-none"
          tone="dark"
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-center"
          priority
        />
      </div>

      {/* Layered gradient design for depth + text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900/95 via-navy-900/70 to-navy-800/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/85 via-navy-900/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-cream to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_88%_8%,rgba(242,166,59,0.18),transparent_70%)]"
      />

      {/* Faint continent accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-16 top-1/2 -z-10 hidden h-[560px] w-[560px] -translate-y-1/2 text-white/[0.06] lg:block"
      >
        <path
          fill="currentColor"
          d="M104 38c-9 22-5 35-14 47-8 11-27 12-35 26-8 13 2 30-3 46-4 16-19 25-17 43 2 21 21 32 29 52 7 17 3 36 15 49 11 12 29 12 42 21 8 6 14 18 26 19 12 0 20-12 25-24 8-17 4-35 15-49 12-17 36-21 44-41 6-17-3-35 1-52 3-13 13-24 12-38-2-16-16-25-25-38-8-12-8-28-19-37-11-9-27-7-40-12-11-4-19-16-31-17-12 0-20 8-25 25Z"
        />
      </svg>

      <Container className="relative">
        <Reveal className="flex max-w-2xl flex-col items-start gap-6 text-white">
          <ul className="flex flex-wrap gap-2">
            {content.chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                {chip}
              </li>
            ))}
          </ul>

          <h1 className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            {content.title}{" "}
            <span className="script-accent text-[1.25em] text-gold-300">
              {content.titleAccent}
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {content.subtitle}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" size="lg" icon="arrow-right">
              {content.primaryCta}
            </Button>
            <Button href="#services" size="lg" variant="outline">
              {content.secondaryCta}
            </Button>
          </div>

          <div className="mt-2 flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/90 shadow-lg backdrop-blur-md">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-gold-300">
              <Icon name="clock" size={18} />
            </span>
            <p className="leading-snug">{content.note}</p>
          </div>
        </Reveal>
      </Container>

      {/* Floating stat card */}
      <Reveal
        delay={160}
        className="absolute bottom-28 right-6 z-10 hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-white shadow-xl backdrop-blur-md xl:block 2xl:right-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        <p className="text-3xl font-bold">{content.badgeValue}</p>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-white/70">
          {content.badgeLabel}
        </p>
      </Reveal>
    </section>
  );
}
