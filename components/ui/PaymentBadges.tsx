import { cn } from "@/lib/cn";

const pill =
  "flex h-7 items-center justify-center rounded-md border border-cream-300 bg-white px-1.5";

/** Accepted payment marks: card schemes, bank transfer and FedaPay. */
export function PaymentBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      <span className={cn(pill, "w-11 px-0")}>
        <span className="text-[0.7rem] font-black italic tracking-tight text-[#1A1F71]">
          VISA
        </span>
      </span>
      <span className={cn(pill, "w-11 px-0")}>
        <svg viewBox="0 0 40 24" className="h-4" aria-label="Mastercard">
          <circle cx="16" cy="12" r="8" fill="#EB001B" />
          <circle cx="24" cy="12" r="8" fill="#F79E1B" />
          <path d="M20 5.5a8 8 0 0 1 0 13 8 8 0 0 1 0-13Z" fill="#FF5F00" />
        </svg>
      </span>
      <span className={pill} aria-label="Virement bancaire">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-navy-500" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10 12 4l9 6" />
          <path d="M5 10v8M19 10v8M9 10v8M15 10v8M3 19h18" />
        </svg>
      </span>
      <span className={pill}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/payment/fedapay.svg"
          alt="FedaPay"
          width={62}
          height={17}
          className="h-4 w-auto"
        />
      </span>
    </div>
  );
}
