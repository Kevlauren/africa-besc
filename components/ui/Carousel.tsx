"use client";

import {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

interface CarouselProps {
  children: React.ReactNode;
  /** Tailwind classes controlling each slide's width (responsive basis). */
  itemClassName?: string;
  className?: string;
  ariaLabel: string;
  /** Show prev/next arrows above the track (right-aligned, like the mockup). */
  showArrows?: boolean;
  prevLabel?: string;
  nextLabel?: string;
}

export function Carousel({
  children,
  itemClassName = "basis-[85%] sm:basis-[45%] lg:basis-[31%]",
  className,
  ariaLabel,
  showArrows = true,
  prevLabel = "Précédent",
  nextLabel = "Suivant",
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slides = useMemo(() => Children.toArray(children), [children]);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideEls = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    slideEls.forEach((el, i) => {
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(elCenter - center);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateActive();
    track.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      track.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, track.children.length - 1));
    const target = track.children[clamped] as HTMLElement | undefined;
    if (target) {
      track.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }
  }, []);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {showArrows ? (
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300 bg-white text-navy-500 transition hover:border-gold-300 hover:text-gold-600 disabled:opacity-40"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => scrollToIndex(active + 1)}
            disabled={active >= slides.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300 bg-white text-navy-500 transition hover:border-gold-300 hover:text-gold-600 disabled:opacity-40"
          >
            <Icon name="chevron-right" size={18} />
          </button>
        </div>
      ) : null}

      <div
        ref={trackRef}
        role="group"
        aria-label={ariaLabel}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-1 px-1 pb-2"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={cn("shrink-0 snap-start", itemClassName)}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1} / ${slides.length}`}
            aria-current={active === i}
            onClick={() => scrollToIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              active === i
                ? "w-6 bg-gold-400"
                : "w-2 bg-navy-200 hover:bg-navy-300",
            )}
          />
        ))}
      </div>
    </div>
  );
}
