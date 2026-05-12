import { countries, type Country, type Difficulty } from "@/data/countries";
import { VALID_COUNTRIES } from "@/data/validCountries";
import { getAcceptedNames } from "@/data/countryAliases";

export type Lang = "es" | "en";

/** Lowercase, trim, strip accents, collapse whitespace. */
export function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

const VALID_SET = new Set(VALID_COUNTRIES.map(normalizeString));

export function isRealCountry(name: string): boolean {
  return VALID_SET.has(normalizeString(name));
}

/** Deterministic country-of-the-day based on UTC day index. */
export function getTodaysCountry(now: number = Date.now()): Country {
  const dayIndex = Math.floor(now / (1000 * 60 * 60 * 24));
  return countries[dayIndex % countries.length];
}

/** Today's UTC date as YYYY-MM-DD (used for localStorage freshness). */
export function getTodayKey(date: Date = new Date()): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getCountryName(country: Country, lang: Lang): string {
  return lang === "es" ? country.name : country.name_en;
}

/** Match user input against a country in BOTH languages, including aliases. */
export function matchesCountry(input: string, country: Country): boolean {
  const n = normalizeString(input);
  const accepted = getAcceptedNames(country.name, country.name_en);
  return accepted.has(n);
}

export const DIFFICULTY_ORDER: Difficulty[] = ["expert", "hard", "medium", "easy"];
export const MAX_ATTEMPTS = 4;
