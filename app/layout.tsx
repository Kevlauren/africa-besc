import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-script",
});

const siteUrl = "https://africabesc.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Africa BESC — Obtenez votre ECTN / BESC rapidement et simplement",
    template: "%s · Africa BESC",
  },
  description:
    "Africa BESC accompagne exportateurs, transitaires et entreprises dans l'obtention de leurs certificats ECTN / BESC / CTN pour leurs expéditions vers l'Afrique. Traitement rapide, assistance 7j/7, paiement sécurisé.",
  keywords: [
    "ECTN",
    "BESC",
    "CTN",
    "Electronic Cargo Tracking Note",
    "Bordereau Électronique de Suivi des Cargaisons",
    "expédition Afrique",
    "certificat cargaison",
  ],
  authors: [{ name: "Africa BESC" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Africa BESC",
    title: "Africa BESC — Vos formalités ECTN / BESC sans complications",
    description:
      "Obtenez votre certificat ECTN / BESC pour vos expéditions vers l'Afrique. Certificat reçu sous 24 h par e-mail ou WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa BESC — ECTN / BESC pour vos expéditions vers l'Afrique",
    description:
      "Traitement rapide, accompagnement personnalisé, paiement sécurisé. 11 destinations africaines couvertes.",
  },
};

export const viewport: Viewport = {
  themeColor: "#152238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${caveat.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <a
          href="#accueil"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Aller au contenu
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
