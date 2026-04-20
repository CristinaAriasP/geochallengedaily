
The user wants the win screen to display all 4 hints (with their difficulty badges) so the player can review the curiosities about the country they guessed.

Looking at `src/routes/index.tsx`:
- Win section currently shows: 🎉 emoji, "¡CORRECTO!", country name, attempts count, "come back tomorrow"
- `todaysCountry.hints` is an array of 4 hint objects with `difficulty`, `text_es`, `text_en`
- `difficultyStyles` and `tx.difficulty` already exist for badge rendering

## Plan

Update the win section in `src/routes/index.tsx` to append a "Curiosidades / Did you know?" block listing all 4 hints with their difficulty badges, in the same visual style as the active hint card.

**Changes:**

1. **`src/lib/i18n.ts`** — Add two new translation keys:
   - `allHintsTitle`: "Todas las pistas" / "All hints"
   - (Optional subtitle if needed)

2. **`src/routes/index.tsx`** — In the `gameState === "won"` section, after the existing content, add a list that maps over `todaysCountry.hints`:
   - Each item: small difficulty badge (reusing `difficultyStyles` + `tx.difficulty[...]`) + hint text in current language
   - Left-aligned text, comfortable spacing, same card aesthetic
   - Use `gc-fade-in` with staggered `animationDelay` for a polished reveal

**Visual layout (win card):**
```text
       🎉
   ¡CORRECTO!
    ESPAÑA
 Completado en 2 pistas
 ¡Vuelve mañana...!
 ─────────────────
   Todas las pistas
 [EXPERTO]  texto...
 [DIFÍCIL]  texto...
 [MEDIO]    texto...
 [FÁCIL]    texto...
```

**Scope:** Only the win screen gets this. The lose screen already reveals the country; if desired later we can mirror this there too — but the user specifically asked for the win case, so keeping it scoped.
