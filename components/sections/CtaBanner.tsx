import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { CtaBannerContent } from "@/lib/types";

export function CtaBanner({ content }: { content: CtaBannerContent }) {
  return (
    <section className="section bg-cream">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2.25rem] bg-navy-800 px-6 py-16 text-white ring-1 ring-white/10 sm:px-12 lg:px-16 lg:py-24">
          {/* Background image */}
          <ImageSlot
            src={content.image}
            alt={content.imageAlt}
            label={content.imageAlt}
            icon="package"
            tone="dark"
            rounded="rounded-none"
            className="absolute inset-0 -z-20 h-full w-full"
            imgClassName="h-full w-full object-cover object-center"
          />

          {/* Layered gradient design */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_82%_12%,rgba(242,166,59,0.35),transparent_45%),repeating-linear-gradient(115deg,rgba(255,255,255,0.05)_0_18px,transparent_18px_38px)]"
          />

          <div className="relative z-10 flex flex-col items-start gap-6 lg:max-w-2xl">
            <SectionLabel
              align="left"
              className="text-gold-300 [&::before]:bg-gold-400/60 [&::after]:hidden"
            >
              {content.label}
            </SectionLabel>
            <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {content.title}{" "}
              <span className="script-accent text-[1.3em] text-gold-300">
                {content.titleAccent}
              </span>
            </h2>
            <p className="text-base text-white/75 sm:text-lg">
              {content.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact" size="lg" icon="arrow-right">
                {content.primaryCta}
              </Button>
              <Button
                href="#contact"
                size="lg"
                variant="outline"
                icon="phone"
                iconPosition="left"
              >
                {content.secondaryCta}
              </Button>
            </div>
            <p className="text-sm text-white/55">{content.note}</p>
          </div>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 select-none font-script text-xl text-white/25 xl:block"
            style={{ writingMode: "vertical-rl" }}
          >
            {content.rotatedNote}
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
