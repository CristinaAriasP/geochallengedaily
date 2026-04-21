import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GeoChallenge — Daily Geography Game" },
      {
        name: "description",
        content:
          "GeoChallenge is a daily geography guessing game inspired by Wordle. A new country every day.",
      },
      { property: "og:title", content: "GeoChallenge — Daily Geography Game" },
      {
        property: "og:description",
        content: "Guess the country of the day with progressively easier hints.",
      },
    ],
  }),
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

function Index() {
  const todaysCountry = useMemo(() => getTodaysCountry(), []);
  const todayKey = useMemo(() => getTodayKey(), []);

  const [lang, setLang] = useState<Lang>("es");
  const [hintIndex, setHintIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState("");
  const [gameState, setGameState] = useState<GameState>("playing");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [showInvalid, setShowInvalid] = useState(false);
  const [bgVariant, setBgVariant] = useState<BgVariant>("aurora");
  const hydrated = useRef(false);

  // Load background preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(BG_STORAGE_KEY) as BgVariant | null;
    if (saved && ["none", "aurora", "meridians", "constellation", "pattern"].includes(saved)) {
      setBgVariant(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(BG_STORAGE_KEY, bgVariant);
  }, [bgVariant]);

  // Load saved progress on mount (only if same day)
  useEffect(() => {
    const saved = loadSaved();
    if (saved && saved.date === todayKey) {
      setLang(saved.lang);
      setHintIndex(saved.hintIndex);
      setAttempts(saved.attempts);
      setGameState(saved.gameState);
      setGuesses(saved.guesses);
    }
    hydrated.current = true;
  }, [todayKey]);

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = guess.trim();
    if (!value || isOver) return;

    if (!isRealCountry(value)) {
      setShowInvalid(true);
      return;
    }

    if (matchesCountry(value, todaysCountry)) {
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
      <AnimatedBackground variant={bgVariant} />
      <div className="relative z-10 mx-auto w-full max-w-[600px] px-4 py-6 sm:py-10">
        {/* HEADER */}
        <header className="gc-fade-in flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            🌍 {tx.title}
          </h1>
          <button
            type="button"
            onClick={() => setLang((l) => (l === "es" ? "en" : "es"))}
            className="rounded-lg border border-border bg-card px-3 py-2 text-lg shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Toggle language"
          >
            {lang === "es" ? "🇪🇸" : "🇬🇧"}
          </button>
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
            <p className="mt-1 text-sm text-muted-foreground">{tx.comeBack}</p>

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
          <section className="gc-fade-in mt-6 rounded-[10px] bg-card p-6 text-center shadow-[var(--shadow-soft)] ring-2 ring-destructive/40">
            <p className="text-sm font-medium text-muted-foreground">{tx.lose}</p>
            <p className="mt-2 text-3xl font-bold">{correctName}</p>
            <p className="mt-3 text-sm text-muted-foreground">{tx.comeBack}</p>
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
          {tx.footer}
        </footer>
      </div>

      {/* BACKGROUND SELECTOR (temporary) */}
      <div className="fixed bottom-3 left-3 z-40 flex max-w-[calc(100vw-1.5rem)] flex-wrap gap-1 rounded-full border border-border bg-card/90 p-1.5 shadow-[var(--shadow-soft)] backdrop-blur">
        {BG_VARIANTS.map((v) => {
          const active = bgVariant === v.value;
          return (
            <button
              key={v.value}
              type="button"
              onClick={() => setBgVariant(v.value)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {v.label}
            </button>
          );
        })}
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
