import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatedNote } from "@/components/ui/RotatedNote";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import type { FaqContent } from "@/lib/types";

export function Faq({ content }: { content: FaqContent }) {
  const half = Math.ceil(content.items.length / 2);
  const left = content.items.slice(0, half);
  const right = content.items.slice(half);

  return (
    <section id="faq" className="section relative bg-cream-200">
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

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal>
            <Accordion items={left} startIndex={0} defaultOpen={0} />
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-4">
            <Accordion items={right} startIndex={half} />
            <div className="card-surface flex items-center gap-4 border-gold-200 bg-gold-50/60 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm">
                <Icon name="headset" size={20} />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-navy-500">{content.support.text}</p>
                <a href="#contact" className="link-arrow">
                  {content.support.cta}
                  <Icon name="arrow-right" size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
