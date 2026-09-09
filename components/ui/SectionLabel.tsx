import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <p
      className={cn(
        "eyebrow",
        align === "left" && "justify-start",
        className,
      )}
    >
      {children}
    </p>
  );
}
