import type { Dictionary, Lang } from "@/lib/types";
import { fr } from "./fr";
import { en } from "./en";

export const dictionaries: Record<Lang, Dictionary> = { fr, en };

export const DEFAULT_LANG: Lang = "fr";

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries[DEFAULT_LANG];
}

export { fr, en };
