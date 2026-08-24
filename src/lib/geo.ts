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

/** Deterministic PRNG seeded by an integer. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates shuffle using a deterministic seed. */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const rand = mulberry32(seed + 1); // avoid seed 0 producing weak first value
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Day index (UTC) at which the country list expansion goes live.
 * Before this day the game keeps using the original 105-country pool so that
 * games already in progress / finished today are not altered mid-day.
 * Streaks are date-based and are never affected by this.
 */
const EXPANSION_DAY_INDEX = 20690; // 2026-08-25 UTC
const LEGACY_POOL_SIZE = 105;

/**
 * Deterministic country-of-the-day based on UTC day index.
 * Uses cycles of N days; within each cycle the order is a seeded shuffle so no
 * country repeats until the cycle completes.
 */
export function getTodaysCountry(now: number = Date.now()): Country {
  const dayIndex = Math.floor(now / (1000 * 60 * 60 * 24));
  const pool =
    dayIndex < EXPANSION_DAY_INDEX
      ? countries.slice(0, Math.min(LEGACY_POOL_SIZE, countries.length))
      : countries;
  const N = pool.length;
  const cycle = Math.floor(dayIndex / N);
  const dayInCycle = ((dayIndex % N) + N) % N;
  const order = seededShuffle(
    Array.from({ length: N }, (_, i) => i),
    cycle,
  );
  return pool[order[dayInCycle]];
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
