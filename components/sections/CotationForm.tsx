"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  TextField,
  TextareaField,
  SelectField,
  FileField,
} from "@/components/ui/Field";
import {
  LOADING_COUNTRIES,
  DESTINATION_COUNTRIES,
  TRANSPORT_MODES,
  CONTAINER_TYPES,
  INCOTERMS,
  CURRENCIES,
  localizeOptions,
} from "@/lib/formOptions";

const MAX_FILE_MB = 5;
const MAX_TOTAL_MB = 10;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;
const MAX_TOTAL_BYTES = MAX_TOTAL_MB * 1024 * 1024;
const ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp";
const ALLOWED_EXT = ["pdf", "jpg", "jpeg", "png", "webp"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type TextName =
  | "firstName"
  | "lastName"
  | "companyName"
  | "email"
  | "phone"
  | "originCountry"
  | "originCity"
  | "destinationCountry"
  | "destinationCity"
  | "transportMode"
  | "incoterms"
  | "goodsNature"
  | "grossWeight"
  | "volume"
  | "containerType"
  | "goodsValue"
  | "currency"
  | "readyDate"
  | "message";

type FileName = "proformaInvoice" | "packingList";

const TEXT_NAMES: TextName[] = [
  "firstName",
  "lastName",
  "companyName",
  "email",
  "phone",
  "originCountry",
  "originCity",
  "destinationCountry",
  "destinationCity",
  "transportMode",
  "incoterms",
  "goodsNature",
  "grossWeight",
  "volume",
  "containerType",
  "goodsValue",
  "currency",
  "readyDate",
  "message",
];

const REQUIRED_TEXT: TextName[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "originCountry",
  "originCity",
  "destinationCountry",
  "destinationCity",
  "transportMode",
  "incoterms",
  "goodsNature",
  "grossWeight",
];

const FILE_NAMES: FileName[] = ["proformaInvoice", "packingList"];

const EMPTY_TEXT = Object.fromEntries(
  TEXT_NAMES.map((n) => [n, ""]),
) as Record<TextName, string>;
const EMPTY_FILES = Object.fromEntries(
  FILE_NAMES.map((n) => [n, null]),
) as Record<FileName, File | null>;

type Status = "idle" | "sending" | "success" | "error";

function Fieldset({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="m-0 flex flex-col gap-5 border-0 p-0">
      <legend className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
        {title}
      </legend>
      <div className="flex flex-col gap-5">{children}</div>
    </fieldset>
  );
}

export function CotationForm() {
  const { t, lang } = useLanguage();
  const f = t.quote.form;
  const email = t.footer.contact.email;

  const [values, setValues] = useState<Record<TextName, string>>(EMPTY_TEXT);
  const [files, setFiles] = useState<Record<FileName, File | null>>(EMPTY_FILES);
  const [insurance, setInsurance] = useState(false);
  const [customs, setCustoms] = useState(false);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const originOpts = useMemo(
    () => localizeOptions(LOADING_COUNTRIES, lang, { sort: true }),
    [lang],
  );
  const destOpts = useMemo(
    () => localizeOptions(DESTINATION_COUNTRIES, lang),
    [lang],
  );
  const modeOpts = useMemo(() => localizeOptions(TRANSPORT_MODES, lang), [lang]);
  const containerOpts = useMemo(
    () => localizeOptions(CONTAINER_TYPES, lang),
    [lang],
  );
  const incotermOpts = useMemo(() => localizeOptions(INCOTERMS, lang), [lang]);
  const currencyOpts = useMemo(() => localizeOptions(CURRENCIES, lang), [lang]);

  const clearError = (name: string) =>
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));

  const setText =
    (name: TextName) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setValues((v) => ({ ...v, [name]: e.target.value }));
      clearError(name);
    };

  const setFile =
    (name: FileName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFiles((prev) => ({ ...prev, [name]: e.target.files?.[0] ?? null }));
      clearError(name);
      clearError("_total");
    };

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};

    REQUIRED_TEXT.forEach((name) => {
      if (!values[name].trim()) next[name] = f.errors.required;
    });
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) {
      next.email = f.errors.invalidEmail;
    }

    let total = 0;
    FILE_NAMES.forEach((name) => {
      const file = files[name];
      if (!file) return;
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!ALLOWED_EXT.includes(ext)) next[name] = f.errors.fileType;
      else if (file.size > MAX_FILE_BYTES) next[name] = f.errors.fileTooLarge;
      total += file.size;
    });
    if (total > MAX_TOTAL_BYTES) next._total = f.errors.totalTooLarge;

    if (!consent) next.consent = f.errors.consentRequired;

    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      first?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    setStatus("sending");
    try {
      const fd = new FormData();
      TEXT_NAMES.forEach((name) => fd.append(name, values[name].trim()));
      FILE_NAMES.forEach((name) => {
        const file = files[name];
        if (file) fd.append(name, file);
      });
      fd.append("cargoInsurance", insurance ? "true" : "");
      fd.append("customsClearance", customs ? "true" : "");
      fd.append("consent", consent ? "true" : "");
      fd.append("lang", lang);
      fd.append("website", website);

      const res = await fetch("/api/cotation", { method: "POST", body: fd });
      if (!res.ok) throw new Error(String(res.status));

      setStatus("success");
      setValues(EMPTY_TEXT);
      setFiles(EMPTY_FILES);
      setInsurance(false);
      setCustoms(false);
      setConsent(false);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-surface mx-auto flex max-w-2xl flex-col items-center gap-4 p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
          <Icon name="check" size={26} />
        </span>
        <h2 className="text-xl font-semibold text-navy-700">{f.successTitle}</h2>
        <p className="max-w-sm text-sm leading-relaxed text-navy-400">
          {f.successBody}
        </p>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setStatus("idle")}
          icon="arrow-right"
        >
          {f.another}
        </Button>
      </div>
    );
  }

  const optional = (label: string) => `${label} ${f.fields.optionalSuffix}`;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="card-surface mx-auto flex max-w-3xl flex-col gap-9 p-6 sm:p-8 lg:p-10"
    >
      <Fieldset title={f.sections.contact}>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label={f.fields.firstName}
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={setText("firstName")}
            error={errors.firstName}
            required
          />
          <TextField
            label={f.fields.lastName}
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={setText("lastName")}
            error={errors.lastName}
            required
          />
        </div>
        <TextField
          label={optional(f.fields.companyName)}
          name="companyName"
          autoComplete="organization"
          value={values.companyName}
          onChange={setText("companyName")}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label={f.fields.email}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={setText("email")}
            error={errors.email}
            required
          />
          <TextField
            label={f.fields.phone}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            hint={f.fields.phoneHint}
            value={values.phone}
            onChange={setText("phone")}
            error={errors.phone}
            required
          />
        </div>
      </Fieldset>

      <Fieldset title={f.sections.route}>
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            label={f.fields.originCountry}
            name="originCountry"
            options={originOpts}
            placeholder={f.selectPlaceholder}
            value={values.originCountry}
            onChange={setText("originCountry")}
            error={errors.originCountry}
            required
          />
          <TextField
            label={f.fields.originCity}
            name="originCity"
            placeholder={f.fields.originCityPlaceholder}
            value={values.originCity}
            onChange={setText("originCity")}
            error={errors.originCity}
            required
          />
          <SelectField
            label={f.fields.destinationCountry}
            name="destinationCountry"
            options={destOpts}
            placeholder={f.selectPlaceholder}
            value={values.destinationCountry}
            onChange={setText("destinationCountry")}
            error={errors.destinationCountry}
            required
          />
          <TextField
            label={f.fields.destinationCity}
            name="destinationCity"
            placeholder={f.fields.destinationCityPlaceholder}
            value={values.destinationCity}
            onChange={setText("destinationCity")}
            error={errors.destinationCity}
            required
          />
        </div>
      </Fieldset>

      <Fieldset title={f.sections.cargo}>
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            label={f.fields.transportMode}
            name="transportMode"
            options={modeOpts}
            placeholder={f.selectPlaceholder}
            value={values.transportMode}
            onChange={setText("transportMode")}
            error={errors.transportMode}
            required
          />
          <SelectField
            label={f.fields.incoterms}
            name="incoterms"
            options={incotermOpts}
            placeholder={f.selectPlaceholder}
            value={values.incoterms}
            onChange={setText("incoterms")}
            error={errors.incoterms}
            required
          />
        </div>
        <TextField
          label={f.fields.goodsNature}
          name="goodsNature"
          placeholder={f.fields.goodsNaturePlaceholder}
          value={values.goodsNature}
          onChange={setText("goodsNature")}
          error={errors.goodsNature}
          required
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label={f.fields.grossWeight}
            name="grossWeight"
            inputMode="decimal"
            value={values.grossWeight}
            onChange={setText("grossWeight")}
            error={errors.grossWeight}
            required
          />
          <TextField
            label={optional(f.fields.volume)}
            name="volume"
            inputMode="decimal"
            value={values.volume}
            onChange={setText("volume")}
          />
          <SelectField
            label={optional(f.fields.containerType)}
            name="containerType"
            options={containerOpts}
            placeholder={f.selectPlaceholder}
            value={values.containerType}
            onChange={setText("containerType")}
          />
          <TextField
            label={optional(f.fields.readyDate)}
            name="readyDate"
            type="date"
            value={values.readyDate}
            onChange={setText("readyDate")}
          />
          <TextField
            label={optional(f.fields.goodsValue)}
            name="goodsValue"
            inputMode="decimal"
            value={values.goodsValue}
            onChange={setText("goodsValue")}
          />
          <SelectField
            label={optional(f.fields.currency)}
            name="currency"
            options={currencyOpts}
            placeholder={f.selectPlaceholder}
            value={values.currency}
            onChange={setText("currency")}
          />
        </div>
      </Fieldset>

      <Fieldset title={f.sections.options}>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-navy-600">
          <input
            type="checkbox"
            checked={insurance}
            onChange={(e) => setInsurance(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-cream-300 text-gold-500 focus:ring-4 focus:ring-gold-100"
          />
          <span>{f.options.cargoInsurance}</span>
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-navy-600">
          <input
            type="checkbox"
            checked={customs}
            onChange={(e) => setCustoms(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-cream-300 text-gold-500 focus:ring-4 focus:ring-gold-100"
          />
          <span>{f.options.customsClearance}</span>
        </label>
      </Fieldset>

      <Fieldset title={f.sections.details}>
        <TextareaField
          label={optional(f.fields.message)}
          name="message"
          rows={4}
          placeholder={f.fields.messagePlaceholder}
          value={values.message}
          onChange={setText("message")}
        />
      </Fieldset>

      <Fieldset title={f.sections.documents}>
        <p className="-mt-1 text-xs leading-relaxed text-navy-400">
          {f.files.hint}
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <FileField
            label={optional(f.files.proformaInvoice)}
            name="proformaInvoice"
            accept={ACCEPT}
            onChange={setFile("proformaInvoice")}
            error={errors.proformaInvoice}
          />
          <FileField
            label={optional(f.files.packingList)}
            name="packingList"
            accept={ACCEPT}
            onChange={setFile("packingList")}
            error={errors.packingList}
          />
        </div>
        {errors._total ? (
          <p className="text-xs font-medium text-red-600">{errors._total}</p>
        ) : null}
      </Fieldset>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-3 text-xs leading-relaxed text-navy-500">
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              clearError("consent");
            }}
            aria-invalid={errors.consent ? true : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-cream-300 text-gold-500 focus:ring-4 focus:ring-gold-100"
          />
          <span>{f.consent}</span>
        </label>
        {errors.consent ? (
          <p className="text-xs font-medium text-red-600">{errors.consent}</p>
        ) : null}
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cotation-website">Website</label>
        <input
          id="cotation-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <strong className="font-semibold">{f.errorTitle}.</strong>{" "}
          {f.errorBody}{" "}
          <a href={`mailto:${email}`} className="font-semibold underline">
            {email}
          </a>
          .
        </p>
      ) : null}

      <div>
        <Button
          type="submit"
          size="lg"
          icon="arrow-right"
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending" ? f.sending : f.submit}
        </Button>
      </div>
    </form>
  );
}
