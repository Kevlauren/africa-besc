import { cn } from "@/lib/cn";
import { SectionLabel } from "./SectionLabel";

type HeadingLevel = "h1" | "h2" | "h3";

interface SectionHeadingProps {
  label?: React.ReactNode;
  title: React.ReactNode;
  accent?: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  as?: HeadingLevel;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  invert?: boolean;
}

export function SectionHeading({
  label,
  title,
  accent,
  description,
  align = "center",
  as = "h2",
  className,
  titleClassName,
  descriptionClassName,
  invert = false,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {label ? <SectionLabel align={align}>{label}</SectionLabel> : null}
      <Tag
        className={cn(
          "max-w-3xl text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          invert ? "text-white" : "text-navy-700",
          titleClassName,
        )}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className="script-accent text-[1.35em] align-baseline">
              {accent}
            </span>
          </>
        ) : null}
      </Tag>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-[1.05rem]",
            invert ? "text-white/70" : "text-navy-400",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
