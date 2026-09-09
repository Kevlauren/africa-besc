import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { fr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: fr.contact.metaTitle,
  description: fr.contact.metaDescription,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="contenu">
      <Contact />
    </main>
  );
}
