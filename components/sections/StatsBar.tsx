import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { StatItem } from "@/lib/types";

export function StatsBar({ items }: { items: StatItem[] }) {
  return (
    <section className="relative z-20 -mt-14 bg-transparent pb-4 sm:-mt-16">
      <Container>
        <Reveal className="card-surface grid grid-cols-2 divide-cream-300/70 rounded-3xl px-4 py-8 sm:px-8 lg:grid-cols-4 lg:divide-x">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center gap-1 px-2 py-4 text-center lg:py-2 ${
                i < 2 ? "border-b border-cream-300/70 lg:border-b-0" : ""
              }`}
            >
              <span className="text-3xl font-bold text-navy-700 sm:text-4xl">
                {item.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-navy-400 sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
