import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatedNote } from "@/components/ui/RotatedNote";
import { Reveal } from "@/components/ui/Reveal";
import { Carousel } from "@/components/ui/Carousel";
import { ServiceCard } from "./ServiceCard";
import type { ServicesContent } from "@/lib/types";

export function Services({ content }: { content: ServicesContent }) {
  return (
    <section id="services" className="section relative bg-cream-200">
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

        {/* Desktop grid */}
        <Reveal
          delay={100}
          className="mt-14 hidden gap-6 lg:grid lg:grid-cols-4"
        >
          {content.items.map((item) => (
            <ServiceCard
              key={item.title}
              item={item}
              learnMore={content.learnMore}
            />
          ))}
        </Reveal>

        {/* Mobile / tablet carousel */}
        <div className="mt-10 lg:hidden">
          <Carousel
            ariaLabel={content.label}
            itemClassName="basis-[82%] sm:basis-[46%]"
          >
            {content.items.map((item) => (
              <ServiceCard
                key={item.title}
                item={item}
                learnMore={content.learnMore}
                className="h-full"
              />
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
