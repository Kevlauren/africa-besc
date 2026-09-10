"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { DemandeForm } from "./DemandeForm";

export function Demande() {
  const { t } = useLanguage();
  const d = t.demande;

  return (
    <section className="bg-cream pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            as="h1"
            label={d.label}
            title={d.title}
            accent={d.titleAccent}
            description={d.subtitle}
          />

          <div className="mt-8 rounded-3xl border border-cream-300/70 bg-cream-100 p-6 sm:p-7">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
              {d.checklistTitle}
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {d.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-navy-600"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Icon name="check" size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <DemandeForm />
        </div>
      </Container>
    </section>
  );
}
