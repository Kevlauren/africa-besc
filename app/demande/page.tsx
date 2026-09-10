import type { Metadata } from "next";
import { Demande } from "@/components/sections/Demande";
import { fr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: fr.demande.metaTitle,
  description: fr.demande.metaDescription,
  alternates: { canonical: "/demande" },
};

export default function DemandePage() {
  return (
    <main id="contenu">
      <Demande />
    </main>
  );
}
