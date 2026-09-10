import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

interface BaseProps {
  label: string;
  error?: string;
  hint?: string;
  className?: string;
}

const controlBase =
  "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-navy-700 shadow-sm outline-none transition placeholder:text-navy-300 focus:border-gold-300 focus:ring-4 focus:ring-gold-100 disabled:opacity-60";

function describedByFor(id: string, error?: string, hint?: string) {
  return (
    [hint && !error ? `${id}-hint` : null, error ? `${id}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined
  );
}

function Frame({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-navy-600">
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="text-xs text-navy-400">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  function TextField({ label, error, hint, className, id, ...rest }, ref) {
    const generated = useId();
    const fieldId = id ?? generated;
    return (
      <Frame id={fieldId} label={label} error={error} hint={hint}>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedByFor(fieldId, error, hint)}
          className={cn(
            controlBase,
            error
              ? "border-red-300 focus:border-red-400 focus:ring-red-100"
              : "border-cream-300",
            className,
          )}
          {...rest}
        />
      </Frame>
    );
  },
);

type SelectOption = { value: string; label: string };

type SelectProps = BaseProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className" | "children"> & {
    options: SelectOption[];
    placeholder?: string;
  };

export const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  function SelectField(
    { label, error, hint, className, id, options, placeholder, value, ...rest },
    ref,
  ) {
    const generated = useId();
    const fieldId = id ?? generated;
    return (
      <Frame id={fieldId} label={label} error={error} hint={hint}>
        <div className="relative">
          <select
            ref={ref}
            id={fieldId}
            value={value}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedByFor(fieldId, error, hint)}
            className={cn(
              controlBase,
              "cursor-pointer appearance-none pr-11",
              value ? "" : "text-navy-300",
              error
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-cream-300",
              className,
            )}
            {...rest}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-navy-700">
                {opt.label}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy-400"
          />
        </div>
      </Frame>
    );
  },
);

type FileProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "type">;

export const FileField = forwardRef<HTMLInputElement, FileProps>(
  function FileField({ label, error, hint, className, id, ...rest }, ref) {
    const generated = useId();
    const fieldId = id ?? generated;
    return (
      <Frame id={fieldId} label={label} error={error} hint={hint}>
        <input
          ref={ref}
          id={fieldId}
          type="file"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedByFor(fieldId, error, hint)}
          className={cn(
            "w-full rounded-2xl border bg-white text-sm text-navy-600 shadow-sm outline-none transition file:mr-4 file:cursor-pointer file:border-0 file:bg-navy-700 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-navy-600 focus:border-gold-300 focus:ring-4 focus:ring-gold-100",
            error
              ? "border-red-300 focus:border-red-400 focus:ring-red-100"
              : "border-cream-300",
            className,
          )}
          {...rest}
        />
      </Frame>
    );
  },
);

type TextareaProps = BaseProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextareaField(
    { label, error, hint, className, id, rows = 5, ...rest },
    ref,
  ) {
    const generated = useId();
    const fieldId = id ?? generated;
    return (
      <Frame id={fieldId} label={label} error={error} hint={hint}>
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedByFor(fieldId, error, hint)}
          className={cn(
            controlBase,
            "resize-y",
            error
              ? "border-red-300 focus:border-red-400 focus:ring-red-100"
              : "border-cream-300",
            className,
          )}
          {...rest}
        />
      </Frame>
    );
  },
);
