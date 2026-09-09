"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/types";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { t } = useLanguage();
  const { contact, footer } = t;
  const phoneHref = `tel:${footer.contact.phone.replace(/\s+/g, "")}`;

  const details: {
    icon: IconName;
    label: string;
    value: string;
    href?: string;
  }[] = [
    {
      icon: "mail",
      label: contact.info.emailLabel,
      value: footer.contact.email,
      href: `mailto:${footer.contact.email}`,
    },
    {
      icon: "phone",
      label: contact.info.phoneLabel,
      value: footer.contact.phone,
      href: phoneHref,
    },
    {
      icon: "map-pin",
      label: contact.info.addressLabel,
      value: footer.contact.lines.join(" · "),
    },
    {
      icon: "clock",
      label: contact.info.hoursLabel,
      value: contact.info.hoursValue,
    },
  ];

  return (
    <section className="bg-cream pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40">
      <Container>
        <SectionHeading
          align="left"
          as="h1"
          label={contact.label}
          title={contact.title}
          accent={contact.titleAccent}
          description={contact.subtitle}
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-semibold text-navy-700">
                {contact.info.title}
              </h2>
              <p className="mt-1 text-sm text-navy-400">{contact.info.intro}</p>
            </div>

            <ul className="flex flex-col gap-3">
              {details.map((d) => (
                <li key={d.label}>
                  <div className="card-surface flex items-start gap-4 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-50 text-gold-600">
                      <Icon name={d.icon} size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-navy-400">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="break-words text-sm font-semibold text-navy-700 transition hover:text-gold-700"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="break-words text-sm font-semibold text-navy-700">
                          {d.value}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
