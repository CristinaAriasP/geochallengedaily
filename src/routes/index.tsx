import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Flame, Moon, Sun, X } from "lucide-react";
import confetti from "canvas-confetti";
import type { Difficulty } from "@/data/countries";
import {
  DIFFICULTY_ORDER,
  MAX_ATTEMPTS,
  getCountryName,
  getTodayKey,
  getTodaysCountry,
  isRealCountry,
  matchesCountry,
  normalizeString,
  type Lang,
} from "@/lib/geo";
import { t } from "@/lib/i18n";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { NextCountryCountdown } from "@/components/NextCountryCountdown";
import { useTheme } from "@/hooks/use-theme";

const SEO_BY_LANG = {
  es: {
    title: "GeoChallenge - Adivina Países Diarios",
    description:
      "Juego diario de geografía. Adivina un país diferente cada día con 4 pistas de experto a fácil. Bilingüe ES/EN. 🌍",
    keywords:
      "adivinar paises, geochallenge, geografía, juego diario, quiz países, desafío geográfico, wordle de paises, country guessing game",
    locale: "es_ES",
    localeAlternate: "en_US",
  },
  en: {
    title: "GeoChallenge - Guess Daily Countries",
    description:
      "Daily geography game. Guess a different country every day with 4 hints from expert to easy. Bilingual ES/EN. 🌍",
    keywords:
      "guess countries, geochallenge, geography, daily game, country quiz, geography challenge, country wordle, country guessing game",
    locale: "en_US",
    localeAlternate: "es_ES",
  },
} as const;

const SEO_AUTHOR = "Cristina Arias";
const SEO_URL = "https://geochallengedaily.lovable.app";
const SEO_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/xfKOVxapo0g2NYbdU2k2SRsObV32/social-images/social-1776688009543-Social_image_geochallenge-1.webp";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = SEO_BY_LANG.es;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
        { name: "author", content: SEO_AUTHOR },
        // Open Graph
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SEO_URL },
        { property: "og:image", content: SEO_IMAGE },
        { property: "og:locale", content: seo.locale },
        { property: "og:locale:alternate", content: seo.localeAlternate },
        { property: "og:site_name", content: "GeoChallenge" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:image", content: SEO_IMAGE },
        { name: "twitter:creator", content: "@CristinaAriasP" },
      ],
      links: [{ rel: "canonical", href: SEO_URL }],
    };
  },
  component: Index,
});

const difficultyStyles: Record<Difficulty, string> = {
  expert: "bg-foreground text-background",
  hard: "bg-destructive/10 text-destructive",
  medium: "bg-accent/30 text-accent-foreground",
  easy: "bg-primary/15 text-primary",
};

type GameState = "playing" | "won" | "lost";

interface SavedState {
  date: string;
  lang: Lang;
  hintIndex: number;
  attempts: number;
  gameState: GameState;
  guesses: string[];
}

const STORAGE_KEY = "geoChallenge";
const STREAK_KEY = "geoChallengeStreak";

interface StreakState {
  currentStreak: number;
  bestStreak: number;
  lastWonDate: string | null;
}

function loadSaved(): SavedState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedState;
  } catch {
    return null;
  }
}

function loadStreak(): StreakState {
  if (typeof window === "undefined")
    return { currentStreak: 0, bestStreak: 0, lastWonDate: null };
  try {
    const raw = window.localStorage.getItem(STREAK_KEY);
    if (!raw) return { currentStreak: 0, bestStreak: 0, lastWonDate: null };
    return JSON.parse(raw) as StreakState;
  } catch {
    return { currentStreak: 0, bestStreak: 0, lastWonDate: null };
  }
}

function yesterdayKey(todayKey: string): string {
  // todayKey format: YYYY-MM-DD (UTC-based from getTodayKey)
  const d = new Date(`${todayKey}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function computeDisplayStreak(streak: StreakState, todayKey: string): number {
  if (!streak.lastWonDate) return 0;
  if (streak.lastWonDate === todayKey) return streak.currentStreak;
  if (streak.lastWonDate === yesterdayKey(todayKey)) return streak.currentStreak;
  // Older than yesterday → streak is broken visually
  return 0;
}

function Index() {
  const todaysCountry = useMemo(() => getTodaysCountry(), []);
  const todayKey = useMemo(() => getTodayKey(), []);

  const [lang, setLang] = useState<Lang>("es");
  const { theme, toggle: toggleTheme } = useTheme();
  const [hintIndex, setHintIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState("");
  const [gameState, setGameState] = useState<GameState>("playing");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [showInvalid, setShowInvalid] = useState(false);
  const [streak, setStreak] = useState<StreakState>({
    currentStreak: 0,
    bestStreak: 0,
    lastWonDate: null,
  });
  const hydrated = useRef(false);
  const streakAwardedRef = useRef(false);
  const confettiFiredRef = useRef(false);
  const freshWinRef = useRef(false);

  // Load saved progress on mount (only if same day)
  useEffect(() => {
    const saved = loadSaved();
    if (saved && saved.date === todayKey) {
      setLang(saved.lang);
      setHintIndex(saved.hintIndex);
      setAttempts(saved.attempts);
      setGameState(saved.gameState);
      setGuesses(saved.guesses);
      // If today's game is already finished, don't re-award the streak or refire confetti
      if (saved.gameState === "won" || saved.gameState === "lost") {
        streakAwardedRef.current = true;
      }
      if (saved.gameState === "won") {
        confettiFiredRef.current = true;
      }
    }
    setStreak(loadStreak());
    hydrated.current = true;
  }, [todayKey]);

  // Award / update streak when today's game finishes (won OR lost).
  // The streak rewards playing daily, not only winning.
  useEffect(() => {
    if (!hydrated.current || typeof window === "undefined") return;
    if (gameState === "playing" || streakAwardedRef.current) return;

    setStreak((prev) => {
      if (prev.lastWonDate === todayKey) return prev; // already counted today
      const yesterday = yesterdayKey(todayKey);
      const next =
        prev.lastWonDate === yesterday ? prev.currentStreak + 1 : 1;
      const updated: StreakState = {
        currentStreak: next,
        bestStreak: Math.max(prev.bestStreak, next),
        lastWonDate: todayKey,
      };
      window.localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
      return updated;
    });
    streakAwardedRef.current = true;
  }, [gameState, todayKey]);

  // Confetti burst on a fresh win (not on reload of an already-won game)
  useEffect(() => {
    if (!hydrated.current || typeof window === "undefined") return;
    if (gameState !== "won") return;
    if (confettiFiredRef.current || !freshWinRef.current) return;

    confettiFiredRef.current = true;

    // Respect reduced-motion preference
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const colors = ["#22c55e", "#facc15", "#fb923c", "#ec4899", "#a78bfa"];

    // Center burst
    confetti({
      particleCount: 90,
      spread: 75,
      startVelocity: 45,
      origin: { x: 0.5, y: 0.55 },
      colors,
      scalar: 0.9,
      zIndex: 9999,
    });

    // Side cannons for a fuller effect
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors,
        zIndex: 9999,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors,
        zIndex: 9999,
      });
    }, 220);
  }, [gameState]);


  // DEV-ONLY: hidden hotkey to reset today's game (Ctrl+Shift+R).
  // Lets us replay the same day during testing without exposing a Retry UI.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "R" || e.key === "r")) {
        e.preventDefault();
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch {
          // ignore
        }
        setHintIndex(0);
        setAttempts(0);
        setGuesses([]);
        setGuess("");
        setShowInvalid(false);
        setGameState("playing");
        streakAwardedRef.current = false;
        confettiFiredRef.current = false;
        freshWinRef.current = false;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Keep meta tags in sync with current language (client-side)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const seo = SEO_BY_LANG[lang];

    document.title = seo.title;
    document.documentElement.lang = lang;

    const setMeta = (
      attr: "name" | "property",
      key: string,
      content: string,
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", seo.description);
    setMeta("name", "keywords", seo.keywords);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:locale", seo.locale);
    setMeta("property", "og:locale:alternate", seo.localeAlternate);
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
  }, [lang]);

  // Persist on every change (after hydration)
  useEffect(() => {
    if (!hydrated.current || typeof window === "undefined") return;
    const payload: SavedState = {
      date: todayKey,
      lang,
      hintIndex,
      attempts,
      gameState,
      guesses,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [todayKey, lang, hintIndex, attempts, gameState, guesses]);

  const tx = t(lang);
  const currentDifficulty = DIFFICULTY_ORDER[Math.min(hintIndex, DIFFICULTY_ORDER.length - 1)];
  const currentHint = todaysCountry.hints[hintIndex];
  const hintText = currentHint
    ? lang === "es"
      ? currentHint.text_es
      : currentHint.text_en
    : "";
  const progress = Math.min(100, (hintIndex / (MAX_ATTEMPTS - 1)) * 100);
  const correctName = getCountryName(todaysCountry, lang);
  const isOver = gameState !== "playing";
  const displayStreak = computeDisplayStreak(streak, todayKey);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = guess.trim();
    if (!value || isOver) return;

    if (!isRealCountry(value)) {
      setShowInvalid(true);
      return;
    }

    if (matchesCountry(value, todaysCountry)) {
      freshWinRef.current = true;
      setGameState("won");
      setGuess("");
      return;
    }

    // Wrong but valid country: count attempt, show next hint
    const nextAttempts = attempts + 1;
    const displayName = normalizeString(value).toUpperCase();
    const nextGuesses = [...guesses, displayName];
    setGuesses(nextGuesses);
    setAttempts(nextAttempts);

    if (nextAttempts >= MAX_ATTEMPTS) {
      setGameState("lost");
    } else {
      setHintIndex((i) => Math.min(i + 1, DIFFICULTY_ORDER.length - 1));
    }
    setGuess("");
  }

  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto w-full max-w-[600px] px-4 py-6 sm:py-10">
        {/* HEADER */}
        <header className="gc-fade-in flex items-center justify-between gap-2">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            🌍 {tx.title}
          </h1>
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-2 text-sm font-semibold shadow-[var(--shadow-soft)] transition-all duration-200 ${
                displayStreak > 0 ? "text-foreground" : "text-muted-foreground"
              }`}
              aria-label={`${tx.streak}: ${tx.streakDays(displayStreak)}`}
              title={tx.streakDays(displayStreak)}
            >
              <Flame
                className={`h-4 w-4 ${
                  displayStreak > 0
                    ? "fill-orange-400 text-orange-500"
                    : "text-muted-foreground"
                }`}
              />
              <span className="tabular-nums">{displayStreak}</span>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-lg border border-border bg-card px-3 py-2 text-foreground shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={tx.toggleTheme}
              title={tx.toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setLang((l) => (l === "es" ? "en" : "es"))}
              className="rounded-lg border border-border bg-card px-3 py-2 text-lg shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Toggle language"
            >
              {lang === "es" ? "🇪🇸" : "🇬🇧"}
            </button>
          </div>
        </header>

        {/* PROGRESS */}
        {!isOver && (
          <section className="gc-fade-in mt-6" style={{ animationDelay: "60ms" }}>
            <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {guesses.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {tx.failedAttempts}
                </span>
                {guesses.map((country, i) => (
                  <span
                    key={`${country}-${i}`}
                    className="inline-flex items-center gap-1 rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    ✗ {country}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {/* HINT */}
        {!isOver && (
          <section
            className="gc-fade-in mt-6 rounded-[10px] bg-card p-5 shadow-[var(--shadow-soft)]"
            style={{ animationDelay: "120ms" }}
            key={hintIndex}
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${difficultyStyles[currentDifficulty]}`}
            >
              {tx.difficulty[currentDifficulty]}
            </span>
            <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
              {hintText}
            </p>
          </section>
        )}

        {/* INPUT */}
        {!isOver && (
          <section className="gc-fade-in mt-6" style={{ animationDelay: "180ms" }}>
            <form onSubmit={handleSubmit} className="flex items-stretch gap-2">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder={tx.placeholder}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                className="w-full rounded-[10px] border border-border bg-card px-4 py-3 text-base text-foreground shadow-[var(--shadow-soft)] outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
              <button
                type="submit"
                aria-label={tx.submit}
                className="flex shrink-0 items-center justify-center rounded-[10px] bg-primary px-5 text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </section>
        )}

        {/* RESULT — WIN */}
        {gameState === "won" && (
          <section className="gc-pop-in mt-6 rounded-[10px] bg-card p-6 text-center shadow-[var(--shadow-pop)] ring-2 ring-primary/40">
            <div className="text-5xl">🎉</div>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary">
              {tx.win}
            </p>
            <p className="mt-1 text-3xl font-bold sm:text-4xl">{correctName}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {tx.winSubtitle(attempts + 1)}
            </p>
            {displayStreak > 0 && (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-600 dark:text-orange-400">
                <Flame className="h-4 w-4 fill-orange-400 text-orange-500" />
                {tx.streakDays(displayStreak)}
              </p>
            )}
            <p className="mt-3 text-sm text-muted-foreground">{tx.comeBack}</p>
            <div className="mt-3 flex justify-center">
              <NextCountryCountdown label={tx.nextCountryIn} />
            </div>

            <div className="mt-6 border-t border-border pt-5 text-left">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tx.allHintsTitle}
              </p>
              <ul className="space-y-3">
                {todaysCountry.hints.map((h, i) => (
                  <li
                    key={h.difficulty}
                    className="gc-fade-in rounded-[10px] bg-secondary/40 p-3"
                    style={{ animationDelay: `${120 + i * 80}ms` }}
                  >
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${difficultyStyles[h.difficulty]}`}
                    >
                      {tx.difficulty[h.difficulty]}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {lang === "es" ? h.text_es : h.text_en}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* RESULT — LOSE */}
        {gameState === "lost" && (
          <section className="gc-shake mt-6 rounded-[10px] bg-card p-6 text-center shadow-[var(--shadow-pop)] ring-2 ring-destructive/40">
            <div className="text-5xl">😔</div>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-destructive">
              {tx.lose}
            </p>
            <p className="mt-1 text-3xl font-bold sm:text-4xl">{correctName}</p>
            {displayStreak > 0 && (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-600 dark:text-orange-400">
                <Flame className="h-4 w-4 fill-orange-400 text-orange-500" />
                {tx.streakDays(displayStreak)}
              </p>
            )}
            <p className="mt-3 text-sm text-muted-foreground">{tx.comeBack}</p>
            <div className="mt-3 flex justify-center">
              <NextCountryCountdown label={tx.nextCountryIn} />
            </div>

            <div className="mt-6 border-t border-border pt-5 text-left">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tx.allHintsTitle}
              </p>
              <ul className="space-y-3">
                {todaysCountry.hints.map((h, i) => (
                  <li
                    key={h.difficulty}
                    className="gc-fade-in rounded-[10px] bg-secondary/40 p-3"
                    style={{ animationDelay: `${120 + i * 80}ms` }}
                  >
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${difficultyStyles[h.difficulty]}`}
                    >
                      {tx.difficulty[h.difficulty]}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {lang === "es" ? h.text_es : h.text_en}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* STATS */}
        {!isOver && (
          <section
            className="gc-fade-in mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            <span className="font-medium text-foreground">
              {attempts}/{MAX_ATTEMPTS}
            </span>
            <span>{tx.attemptsUsed}</span>
          </section>
        )}

        {/* FOOTER */}
        <footer
          className="gc-fade-in mt-10 text-center text-xs text-muted-foreground"
          style={{ animationDelay: "300ms" }}
        >
          <p>{tx.footer}</p>
          <div className="mx-auto mt-4 h-px w-16 bg-border/70" />
          <p className="mt-3 text-[11px] text-[#999]">
            Made by Cristina Arias
            <span className="mx-1.5 opacity-60">•</span>
            <a
              href="https://github.com/CristinaAriasP"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              GitHub
            </a>
            <span className="mx-1.5 opacity-60">|</span>
            <a
              href="https://www.linkedin.com/in/cristina-arias-parrilla/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>



      {/* INVALID POPUP */}
      {showInvalid && (
        <div
          className="gc-overlay-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowInvalid(false)}
        >
          <div
            className="gc-pop-in relative w-full max-w-sm rounded-[12px] bg-card p-6 text-center shadow-[var(--shadow-pop)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowInvalid(false)}
              aria-label={tx.close}
              className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-3xl">🤔</div>
            <h2 className="mt-2 text-lg font-semibold">{tx.invalidTitle}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{tx.invalidBody}</p>
            <button
              type="button"
              onClick={() => setShowInvalid(false)}
              className="mt-5 w-full rounded-[10px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
              {tx.gotIt}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
