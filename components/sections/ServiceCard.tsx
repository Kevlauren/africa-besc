import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { ServiceItem } from "@/lib/types";

export function ServiceCard({
  item,
  learnMore,
  className,
}: {
  item: ServiceItem;
  learnMore: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "card-surface group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      <ImageSlot
        src={item.image}
        alt={`${item.title} — ${item.subtitle}`}
        label={item.title}
        icon={item.icon}
        rounded="rounded-none"
        className="h-36 w-full"
        imgClassName="transition duration-500 group-hover:scale-105"
        tone="brand"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-700 text-white">
          <Icon name={item.icon} size={20} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-navy-700">{item.title}</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
            {item.subtitle}
          </p>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-navy-400">
          {item.description}
        </p>
        <a href="#contact" className="link-arrow mt-1">
          {learnMore}
          <Icon name="arrow-right" size={15} />
        </a>
      </div>
    </article>
  );
}
