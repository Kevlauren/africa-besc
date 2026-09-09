"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  index: number;
  item: AccordionItemData;
  open: boolean;
  onToggle: () => void;
}

function AccordionItem({ index, item, open, onToggle }: AccordionItemProps) {
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div
      className={cn(
        "card-surface overflow-hidden",
        open ? "border-gold-200 shadow-card-hover" : "hover:border-gold-200",
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="font-script text-lg text-gold-500 tabular-nums sm:text-xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 text-sm font-semibold text-navy-700 sm:text-[0.95rem]">
            {item.question}
          </span>
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream-300 text-navy-400 transition",
              open && "rotate-180 border-gold-300 bg-gold-50 text-gold-600",
            )}
          >
            <Icon name="chevron-down" size={16} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-navy-400 sm:px-6 sm:pb-6 sm:pl-[3.75rem]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItemData[];
  /** Continue numbering from this offset (used for the 2-column FAQ layout). */
  startIndex?: number;
  defaultOpen?: number | null;
  className?: string;
}

export function Accordion({
  items,
  startIndex = 0,
  defaultOpen = null,
  className,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          index={startIndex + i}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
        />
      ))}
    </div>
  );
}
