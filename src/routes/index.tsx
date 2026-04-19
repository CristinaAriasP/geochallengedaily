import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

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

type Difficulty = "Experto" | "Difícil" | "Medio" | "Fácil";

const difficultyStyles: Record<Difficulty, string> = {
  Experto: "bg-foreground text-background",
  Difícil: "bg-destructive/10 text-destructive",
  Medio: "bg-accent/30 text-accent-foreground",
  Fácil: "bg-primary/15 text-primary",
};

function Index() {
  // Visual-only placeholder state (no game logic yet)
  const [lang, setLang] = useState<"es" | "en">("es");
  const [showInvalid, setShowInvalid] = useState(false);
  const [resultState] = useState<"none" | "win" | "lose">("none");

  const progress = 50;
  const failedAttempts = ["Brasil", "México"];
  const currentDifficulty: Difficulty = "Medio";
  const totalAttempts = 4;
  const usedAttempts = 2;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[600px] px-4 py-6 sm:py-10">
        {/* 1. HEADER */}
        <header className="gc-fade-in flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            🌍 GeoChallenge
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

        {/* 2. PROGRESS BAR */}
        <section className="gc-fade-in mt-6" style={{ animationDelay: "60ms" }}>
          <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* failed attempts */}
          {failedAttempts.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">
                Intentos fallidos:
              </span>
              {failedAttempts.map((country) => (
                <span
                  key={country}
                  className="inline-flex items-center gap-1 rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-accent-foreground"
                >
                  ✗ {country}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* 3. HINT BOX */}
        <section
          className="gc-fade-in mt-6 rounded-[10px] bg-card p-5 shadow-[var(--shadow-soft)]"
          style={{ animationDelay: "120ms" }}
        >
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${difficultyStyles[currentDifficulty]}`}
          >
            {currentDifficulty}
          </span>
          <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
            Este país es famoso por sus fiordos espectaculares y por ser uno de
            los principales productores de salmón del mundo.
          </p>
        </section>

        {/* 4. INPUT + BUTTON */}
        <section
          className="gc-fade-in mt-6"
          style={{ animationDelay: "180ms" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Demo: open invalid popup so users can see it
              setShowInvalid(true);
            }}
            className="flex items-stretch gap-2"
          >
            <input
              type="text"
              placeholder="Escribe un país..."
              className="w-full rounded-[10px] border border-border bg-card px-4 py-3 text-base text-foreground shadow-[var(--shadow-soft)] outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="flex shrink-0 items-center justify-center rounded-[10px] bg-primary px-5 text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </section>

        {/* 5. RESULT MESSAGE (conditional) */}
        {resultState === "win" && (
          <section className="gc-pop-in mt-6 rounded-[10px] bg-card p-6 text-center shadow-[var(--shadow-pop)] ring-2 ring-primary/30">
            <div className="text-5xl">🎉</div>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary">
              ¡Victoria!
            </p>
            <p className="mt-1 text-3xl font-bold">Noruega</p>
          </section>
        )}

        {resultState === "lose" && (
          <section className="gc-fade-in mt-6 rounded-[10px] bg-card p-6 text-center shadow-[var(--shadow-soft)]">
            <p className="text-sm font-medium text-muted-foreground">
              No fue esta vez. El país era:
            </p>
            <p className="mt-2 text-2xl font-bold">Noruega</p>
          </section>
        )}

        {/* 6. STATS */}
        <section
          className="gc-fade-in mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          style={{ animationDelay: "240ms" }}
        >
          <span className="font-medium text-foreground">{usedAttempts}/{totalAttempts}</span>
          <span>intentos usados</span>
        </section>

        {/* 7. FOOTER */}
        <footer
          className="gc-fade-in mt-10 text-center text-xs text-muted-foreground"
          style={{ animationDelay: "300ms" }}
        >
          Un país diferente cada día 🌎
        </footer>
      </div>

      {/* INVALID COUNTRY POPUP */}
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
              aria-label="Cerrar"
              className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-3xl">🤔</div>
            <h2 className="mt-2 text-lg font-semibold">País no válido</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Asegúrate de escribir un nombre de país correctamente.
            </p>
            <button
              type="button"
              onClick={() => setShowInvalid(false)}
              className="mt-5 w-full rounded-[10px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
