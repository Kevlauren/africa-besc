"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { CountriesCovered } from "@/components/sections/CountriesCovered";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <main id="contenu">
      <Hero content={t.hero} />
      <StatsBar items={t.stats} />
      <Services content={t.services} />
      <CountriesCovered content={t.countries} />
      <WhyUs content={t.why} />
      <CtaBanner content={t.ctaBanner} />
      <Testimonials content={t.testimonials} />
      <Faq content={t.faq} />
    </main>
  );
}
