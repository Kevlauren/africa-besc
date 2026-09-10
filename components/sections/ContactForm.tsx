"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TextField, TextareaField } from "@/components/ui/Field";

type FieldName = "lastName" | "firstName" | "email" | "subject" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMPTY: Values = {
  lastName: "",
  firstName: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const { t, lang } = useLanguage();
  const c = t.contact.form;
  const email = t.footer.contact.email;

  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  // Honeypot — real users never fill this.
  const [company, setCompany] = useState("");

  const setField = (name: FieldName) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    (Object.keys(EMPTY) as FieldName[]).forEach((name) => {
      if (!values[name].trim()) next[name] = c.required;
    });
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) {
      next.email = c.invalidEmail;
    }
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
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company, lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center gap-4 p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
          <Icon name="check" size={26} />
        </span>
        <h3 className="text-xl font-semibold text-navy-700">
          {c.successTitle}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-navy-400">
          {c.successBody}
        </p>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setStatus("idle")}
          icon="arrow-right"
        >
          {c.another}
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="card-surface flex flex-col gap-5 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label={c.lastName}
          name="lastName"
          autoComplete="family-name"
          value={values.lastName}
          onChange={setField("lastName")}
          error={errors.lastName}
          required
        />
        <TextField
          label={c.firstName}
          name="firstName"
          autoComplete="given-name"
          value={values.firstName}
          onChange={setField("firstName")}
          error={errors.firstName}
          required
        />
      </div>

      <TextField
        label={c.email}
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={values.email}
        onChange={setField("email")}
        error={errors.email}
        required
      />

      <TextField
        label={c.subject}
        name="subject"
        placeholder={c.subjectPlaceholder}
        value={values.subject}
        onChange={setField("subject")}
        error={errors.subject}
        required
      />

      <TextareaField
        label={c.message}
        name="message"
        rows={6}
        placeholder={c.messagePlaceholder}
        value={values.message}
        onChange={setField("message")}
        error={errors.message}
        required
      />

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <strong className="font-semibold">{c.errorTitle}.</strong> {c.errorBody}
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
          {status === "sending" ? c.sending : c.submit}
        </Button>
        <p className="text-xs leading-relaxed text-navy-400">{c.consent}</p>
      </div>
    </form>
  );
}
