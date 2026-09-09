import { cn } from "@/lib/cn";

/** Lightweight Visa / Mastercard marks for the secure-payment feature. */
export function PaymentBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="flex h-7 w-11 items-center justify-center rounded-md border border-cream-300 bg-white">
        <span className="text-[0.7rem] font-black italic tracking-tight text-[#1A1F71]">
          VISA
        </span>
      </span>
      <span className="flex h-7 w-11 items-center justify-center rounded-md border border-cream-300 bg-white">
        <svg viewBox="0 0 40 24" className="h-4" aria-label="Mastercard">
          <circle cx="16" cy="12" r="8" fill="#EB001B" />
          <circle cx="24" cy="12" r="8" fill="#F79E1B" />
          <path
            d="M20 5.5a8 8 0 0 1 0 13 8 8 0 0 1 0-13Z"
            fill="#FF5F00"
          />
        </svg>
      </span>
    </div>
  );
}
