import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatedNote } from "@/components/ui/RotatedNote";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PaymentBadges } from "@/components/ui/PaymentBadges";
import type { WhyContent } from "@/lib/types";

export function WhyUs({ content }: { content: WhyContent }) {
  return (
    <section id="pourquoi" className="section relative bg-cream-200">
      <RotatedNote side="right">{content.rotatedNote}</RotatedNote>
      <Container className="relative">
        <Reveal>
          <SectionHeading
            label={content.label}
            title={content.title}
            accent={content.titleAccent}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, i) => {
            const isPayment = item.icon === "shield-check";
            return (
              <Reveal key={item.title} delay={i * 90}>
                <article className="card-surface flex h-full flex-col items-center gap-4 p-6 text-center hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-50 text-gold-600">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <h3 className="text-base font-semibold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-400">
                    {item.description}
                  </p>
                  {isPayment ? <PaymentBadges className="mt-auto" /> : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
