import { cn } from "@/lib/cn";

/**
 * Handwritten-style vertical annotation echoing the mockup's margin notes.
 * Hidden below xl to keep the layout clean on small screens.
 */
export function RotatedNote({
  children,
  side = "right",
  className,
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "rotated-note top-1/2 -translate-y-1/2",
        side === "right" ? "right-2 2xl:right-6" : "left-2 2xl:left-6 rotate-180",
        className,
      )}
    >
      {children}
    </span>
  );
}
