import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatedNote } from "@/components/ui/RotatedNote";
import { Reveal } from "@/components/ui/Reveal";
import { Carousel } from "@/components/ui/Carousel";
import { Icon } from "@/components/ui/Icon";
import type { TestimonialItem, TestimonialsContent } from "@/lib/types";

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <figure className="card-surface flex h-full flex-col gap-5 p-6 sm:p-7">
      <Icon name="quote" size={30} className="text-gold-300" />
      <blockquote className="flex-1 text-sm leading-relaxed text-navy-500 sm:text-[0.95rem]">
        “{item.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-cream-300/70 pt-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white">
          {item.initials}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-navy-700">
            {item.name}
          </span>
          <span className="text-xs text-navy-400">
            {item.role} · {item.country}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ content }: { content: TestimonialsContent }) {
  return (
    <section id="temoignages" className="section relative bg-cream">
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

        <Reveal delay={100} className="mt-12">
          <Carousel
            ariaLabel={content.label}
            itemClassName="basis-[85%] sm:basis-[46%] lg:basis-[31.5%]"
          >
            {content.items.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </Carousel>
        </Reveal>
      </Container>
    </section>
  );
}
