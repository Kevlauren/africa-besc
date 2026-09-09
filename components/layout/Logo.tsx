import { cn } from "@/lib/cn";

/** Africa silhouette mark + wordmark, used in the header and footer. */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-xl",
          isLight ? "bg-white/10" : "bg-navy-700",
        )}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M8.5 2.2c-.7 1.6-.4 2.6-1.1 3.5-.6.8-2 .9-2.6 1.9-.6 1 .1 2.2-.2 3.4-.3 1.2-1.4 1.9-1.3 3.2.1 1.6 1.6 2.4 2.2 3.9.5 1.3.2 2.7 1.1 3.7.8.9 2.2.9 3.2 1.6.6.4 1 1.3 1.9 1.4.9 0 1.5-.9 1.9-1.8.6-1.3.3-2.6 1.1-3.7.9-1.3 2.7-1.6 3.3-3.1.5-1.3-.2-2.6.1-3.9.2-1 1-1.8.9-2.9-.1-1.2-1.2-1.9-1.9-2.9-.6-.9-.6-2.1-1.4-2.8-.8-.7-2-.5-3-.9-.8-.3-1.4-1.2-2.3-1.3-.9 0-1.5.6-1.9 1.9Z"
            fill={isLight ? "#F2A63B" : "#F2A63B"}
          />
          <path
            d="M13.5 8.5 12 11l1 1.5-.8 2 2-1.2 1.6.7-.4-2 1.2-1.6-2-.2-1.1-1.4Z"
            fill={isLight ? "#152238" : "#ffffff"}
          />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[0.95rem] font-extrabold tracking-tight",
            isLight ? "text-white" : "text-navy-700",
          )}
        >
          AFRICA <span className="text-gold-500">BESC</span>
        </span>
        <span
          className={cn(
            "block text-[0.6rem] font-semibold uppercase tracking-[0.3em]",
            isLight ? "text-white/50" : "text-navy-300",
          )}
        >
          ECTN · BESC · CTN
        </span>
      </span>
    </span>
  );
}
