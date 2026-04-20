import type { Lang } from "@/lib/geo";
import type { Difficulty } from "@/data/countries";

export const TRANSLATIONS = {
  es: {
    title: "GeoChallenge",
    placeholder: "Escribe un país...",
    submit: "Enviar",
    failedAttempts: "Intentos fallidos:",
    attemptsUsed: "intentos usados",
    win: "¡Correcto!",
    winSubtitle: (n: number) => `Completado en ${n} pista${n === 1 ? "" : "s"}`,
    comeBack: "¡Vuelve mañana para un nuevo reto!",
    allHintsTitle: "Todas las pistas",
    lose: "No fue esta vez. El país era:",
    invalidTitle: "País no válido",
    invalidBody: "Parece que ese país no existe o lo escribiste mal.",
    gotIt: "Entendido",
    close: "Cerrar",
    footer: "Un país diferente cada día 🌎",
    difficulty: {
      expert: "Experto",
      hard: "Difícil",
      medium: "Medio",
      easy: "Fácil",
    } satisfies Record<Difficulty, string>,
  },
  en: {
    title: "GeoChallenge",
    placeholder: "Type a country...",
    submit: "Submit",
    failedAttempts: "Failed attempts:",
    attemptsUsed: "attempts used",
    win: "Correct!",
    winSubtitle: (n: number) => `Solved in ${n} hint${n === 1 ? "" : "s"}`,
    comeBack: "Come back tomorrow for a new challenge!",
    allHintsTitle: "All hints",
    lose: "Not this time. The country was:",
    invalidTitle: "Invalid country",
    invalidBody: "That country doesn't exist or you misspelled it.",
    gotIt: "Got it",
    close: "Close",
    footer: "A different country every day 🌎",
    difficulty: {
      expert: "Expert",
      hard: "Hard",
      medium: "Medium",
      easy: "Easy",
    } satisfies Record<Difficulty, string>,
  },
} as const;

export const t = (lang: Lang) => TRANSLATIONS[lang];
