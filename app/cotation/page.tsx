import type { Metadata } from "next";
import { Quote } from "@/components/sections/Quote";
import { fr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: fr.quote.metaTitle,
  description: fr.quote.metaDescription,
  alternates: { canonical: "/cotation" },
};

export default function CotationPage() {
  return (
    <main id="contenu">
      <Quote />
    </main>
  );
}
