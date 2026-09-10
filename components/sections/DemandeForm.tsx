"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TextField, SelectField, FileField } from "@/components/ui/Field";
import { SignaturePad } from "@/components/ui/SignaturePad";
import {
  LOADING_COUNTRIES,
  DESTINATION_COUNTRIES,
  CURRENCIES,
  FREIGHT_PAYMENT_TYPES,
  INCOTERMS,
  localizeOptions,
} from "@/lib/formOptions";

const MAX_FILE_MB = 5;
const MAX_TOTAL_MB = 12;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;
const MAX_TOTAL_BYTES = MAX_TOTAL_MB * 1024 * 1024;
const ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp";
const ALLOWED_EXT = ["pdf", "jpg", "jpeg", "png", "webp"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type TextName =
  | "countryOfLoading"
  | "destinationCountry"
  | "firstName"
  | "lastName"
  | "companyName"
  | "email"
  | "phone"
  | "blNumber"
  | "currency"
  | "freightPayment"
  | "incoterms";

type FileName =
  | "blDocument"
  | "commercialInvoice"
  | "exportDeclaration"
  | "packingList"
  | "freightInvoice"
  | "grayCards";

const TEXT_NAMES: TextName[] = [
  "countryOfLoading",
  "destinationCountry",
  "firstName",
  "lastName",
  "companyName",
  "email",
  "phone",
  "blNumber",
  "currency",
  "freightPayment",
  "incoterms",
];

const REQUIRED_TEXT: TextName[] = TEXT_NAMES.filter((n) => n !== "companyName");
const REQUIRED_FILES: FileName[] = [
  "blDocument",
  "commercialInvoice",
  "exportDeclaration",
  "packingList",
  "freightInvoice",
];
const FILE_NAMES: FileName[] = [...REQUIRED_FILES, "grayCards"];

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

export function DemandeForm() {
  const { t, lang } = useLanguage();
  const d = t.demande;
  const email = t.footer.contact.email;

  const [values, setValues] = useState<Record<TextName, string>>(EMPTY_TEXT);
  const [files, setFiles] = useState<Record<FileName, File | null>>(EMPTY_FILES);
  const [signature, setSignature] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const loadingOpts = useMemo(
    () => localizeOptions(LOADING_COUNTRIES, lang, { sort: true }),
    [lang],
  );
  const destOpts = useMemo(
    () => localizeOptions(DESTINATION_COUNTRIES, lang),
    [lang],
  );
  const currencyOpts = useMemo(() => localizeOptions(CURRENCIES, lang), [lang]);
  const freightOpts = useMemo(
    () => localizeOptions(FREIGHT_PAYMENT_TYPES, lang),
    [lang],
  );
  const incotermOpts = useMemo(() => localizeOptions(INCOTERMS, lang), [lang]);

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
      setFiles((f) => ({ ...f, [name]: e.target.files?.[0] ?? null }));
      clearError(name);
      clearError("_total");
    };

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};

    REQUIRED_TEXT.forEach((name) => {
      if (!values[name].trim()) next[name] = d.errors.required;
    });
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) {
      next.email = d.errors.invalidEmail;
    }

    REQUIRED_FILES.forEach((name) => {
      if (!files[name]) next[name] = d.errors.fileRequired;
    });

    let total = 0;
    FILE_NAMES.forEach((name) => {
      const file = files[name];
      if (!file) return;
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!ALLOWED_EXT.includes(ext)) next[name] = d.errors.fileType;
      else if (file.size > MAX_FILE_BYTES) next[name] = d.errors.fileTooLarge;
      total += file.size;
    });
    if (total > MAX_TOTAL_BYTES) next._total = d.errors.totalTooLarge;

    if (!signature) next.signature = d.errors.signatureRequired;
    if (!consent) next.consent = d.errors.consentRequired;

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
      fd.append("signature", signature);
      fd.append("consent", consent ? "true" : "");
      fd.append("lang", lang);
      fd.append("website", website);

      const res = await fetch("/api/demande", { method: "POST", body: fd });
      if (!res.ok) throw new Error(String(res.status));

      setStatus("success");
      setValues(EMPTY_TEXT);
      setFiles(EMPTY_FILES);
      setSignature("");
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
        <h2 className="text-xl font-semibold text-navy-700">{d.successTitle}</h2>
        <p className="max-w-sm text-sm leading-relaxed text-navy-400">
          {d.successBody}
        </p>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setStatus("idle")}
          icon="arrow-right"
        >
          {d.another}
        </Button>
      </div>
    );
  }

  const fileHint = (name: FileName) =>
    name === "grayCards" ? d.files.grayCardsHint : d.files.hint;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="card-surface mx-auto flex max-w-3xl flex-col gap-9 p-6 sm:p-8 lg:p-10"
    >
      <Fieldset title={d.sections.route}>
        <SelectField
          label={d.fields.countryOfLoading}
          name="countryOfLoading"
          options={loadingOpts}
          placeholder={d.selectPlaceholder}
          value={values.countryOfLoading}
          onChange={setText("countryOfLoading")}
          error={errors.countryOfLoading}
          required
        />
        <SelectField
          label={d.fields.destinationCountry}
          name="destinationCountry"
          options={destOpts}
          placeholder={d.selectPlaceholder}
          hint={d.fields.destinationHint}
          value={values.destinationCountry}
          onChange={setText("destinationCountry")}
          error={errors.destinationCountry}
          required
        />
      </Fieldset>

      <Fieldset title={d.sections.applicant}>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label={d.fields.firstName}
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={setText("firstName")}
            error={errors.firstName}
            required
          />
          <TextField
            label={d.fields.lastName}
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={setText("lastName")}
            error={errors.lastName}
            required
          />
        </div>
        <TextField
          label={`${d.fields.companyName} ${d.fields.optionalSuffix}`}
          name="companyName"
          autoComplete="organization"
          value={values.companyName}
          onChange={setText("companyName")}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label={d.fields.email}
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
            label={d.fields.phone}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            hint={d.fields.phoneHint}
            value={values.phone}
            onChange={setText("phone")}
            error={errors.phone}
            required
          />
        </div>
      </Fieldset>

      <Fieldset title={d.sections.shipment}>
        <TextField
          label={d.fields.blNumber}
          name="blNumber"
          hint={d.fields.blNumberHint}
          value={values.blNumber}
          onChange={setText("blNumber")}
          error={errors.blNumber}
          required
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            label={d.fields.currency}
            name="currency"
            options={currencyOpts}
            placeholder={d.selectPlaceholder}
            value={values.currency}
            onChange={setText("currency")}
            error={errors.currency}
            required
          />
          <SelectField
            label={d.fields.freightPayment}
            name="freightPayment"
            options={freightOpts}
            placeholder={d.selectPlaceholder}
            value={values.freightPayment}
            onChange={setText("freightPayment")}
            error={errors.freightPayment}
            required
          />
        </div>
        <SelectField
          label={d.fields.incoterms}
          name="incoterms"
          options={incotermOpts}
          placeholder={d.selectPlaceholder}
          value={values.incoterms}
          onChange={setText("incoterms")}
          error={errors.incoterms}
          required
        />
      </Fieldset>

      <Fieldset title={d.sections.documents}>
        <p className="-mt-1 text-xs leading-relaxed text-navy-400">
          {d.files.hint}
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {(
            [
              "blDocument",
              "commercialInvoice",
              "exportDeclaration",
              "packingList",
              "freightInvoice",
            ] as FileName[]
          ).map((name) => (
            <FileField
              key={name}
              label={d.files[name]}
              name={name}
              accept={ACCEPT}
              onChange={setFile(name)}
              error={errors[name]}
              required
            />
          ))}
          <FileField
            label={`${d.files.grayCards} ${d.fields.optionalSuffix}`}
            name="grayCards"
            accept={ACCEPT}
            hint={fileHint("grayCards")}
            onChange={setFile("grayCards")}
            error={errors.grayCards}
          />
        </div>
        {errors._total ? (
          <p className="text-xs font-medium text-red-600">{errors._total}</p>
        ) : null}
      </Fieldset>

      <Fieldset title={d.sections.signature}>
        <SignaturePad
          label={d.signature.label}
          hint={d.signature.hint}
          clearLabel={d.signature.clear}
          error={errors.signature}
          onChange={(dataUrl) => {
            setSignature(dataUrl);
            clearError("signature");
          }}
        />
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
            <span>{d.consent}</span>
          </label>
          {errors.consent ? (
            <p className="text-xs font-medium text-red-600">{errors.consent}</p>
          ) : null}
        </div>
      </Fieldset>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="demande-website">Website</label>
        <input
          id="demande-website"
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
          <strong className="font-semibold">{d.errorTitle}.</strong>{" "}
          {d.errorBody}{" "}
          <a href={`mailto:${email}`} className="font-semibold underline">
            {email}
          </a>
          .
        </p>
      ) : null}

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          size="lg"
          icon="arrow-right"
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending" ? d.sending : d.submit}
        </Button>
      </div>
    </form>
  );
}
