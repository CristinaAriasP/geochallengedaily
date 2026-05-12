## Objetivo

Cambiar la selección del país diario para evitar repeticiones dentro de un ciclo de 105 días, manteniendo la propiedad de "mismo país para todos los usuarios el mismo día UTC".

## Lógica nueva

1. `dayIndex = floor(now / 86_400_000)` (UTC, igual que ahora).
2. `N = countries.length` (105).
3. `cycle = floor(dayIndex / N)` y `dayInCycle = dayIndex % N`.
4. Generar una permutación de `[0..N-1]` mediante un **shuffle Fisher–Yates determinista** sembrado con `cycle` (PRNG mulberry32 a partir de `cycle`).
5. `country = countries[shuffledIndices[dayInCycle]]`.

Esto garantiza:
- Mismo país para todos los usuarios el mismo día UTC (la semilla solo depende de `cycle`, que es global).
- Sin repeticiones hasta completar los 105 días del ciclo.
- Orden distinto en cada ciclo nuevo.
- Determinista: misma fecha → mismo país, sin importar despliegues.

## Cambios de código

### `src/lib/geo.ts`
- Añadir helpers internos:
  - `mulberry32(seed: number): () => number` — PRNG determinista.
  - `seededShuffle<T>(arr: T[], seed: number): T[]` — Fisher–Yates usando el PRNG.
- Sustituir `getTodaysCountry`:
  ```ts
  export function getTodaysCountry(now: number = Date.now()): Country {
    const N = countries.length;
    const dayIndex = Math.floor(now / 86_400_000);
    const cycle = Math.floor(dayIndex / N);
    const dayInCycle = ((dayIndex % N) + N) % N;
    const order = seededShuffle(
      Array.from({ length: N }, (_, i) => i),
      cycle
    );
    return countries[order[dayInCycle]];
  }
  ```

No se tocan `getTodayKey`, `matchesCountry`, ni `NextCountryCountdown` (sigue contando hasta las 00:00 UTC).

## Notas

- El shuffle solo se ejecuta una vez por render (105 elementos, coste despreciable). Si se quisiera, se puede memoizar por `cycle`, pero no es necesario.
- Si en el futuro añades países al array, el `cycle` cambiará de tamaño y el orden de los ciclos ya emitidos no será reproducible — comportamiento esperado y aceptable, igual que hoy.
