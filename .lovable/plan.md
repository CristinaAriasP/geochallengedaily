
## Hacer la aurora más visible (más en mobile, sutil en desktop)

Actualmente los blobs de la aurora usan colores muy claros (oklch L≈0.92) y opacidad ~0.5, lo que en pantallas pequeñas casi no se aprecia. La idea es subir un poco la saturación e intensidad globalmente, y usar una media query para que en mobile sea aún algo más vibrante (sin llegar a competir con las cards blancas del juego).

### Cambios — `src/styles.css`

**1. Subir la chroma e intensidad base (desktop)** en cada periodo del bloque `.gc-aurora-root[data-period="..."]`:
- Aumentar el segundo valor de `oklch(L C H)` (chroma) de ~0.06–0.09 a ~0.10–0.14 para que los colores se noten más.
- Bajar ligeramente la luminosidad (L) de ~0.92 a ~0.88 para que contrasten contra el `--background` casi blanco (#fafafa).
- Subir `--gc-aurora-opacity` de 0.45–0.55 → **0.6** (desktop).

Por periodo, manteniendo la paleta:
- **Morning**: púrpura suave, coral, dorado — chroma ~0.11–0.13.
- **Afternoon**: naranja, dorado, crema — chroma ~0.10–0.12 (la más suave para no quemar al mediodía).
- **Evening**: dorado, naranja, rosa profundo — chroma ~0.13–0.15 (la más cálida/marcada).
- **Night**: navy, púrpura, azul suave — chroma ~0.09–0.11 (cool tones, no debe gritar de noche).

**2. Reducir el `transparent` stop del gradiente** en `.gc-aurora-hue-1/2/3` de `70%` → `65%` para que el color rellene más superficie del blob antes de desvanecerse.

**3. Media query mobile (<= 640px)** dentro de `.gc-aurora-root`:
- Subir `--gc-aurora-opacity` a **0.78** (vs 0.6 desktop) para compensar la menor superficie visible.
- Aumentar el tamaño relativo de los blobs (`h-[55vw] w-[55vw]` → en mobile usar clases mayores vía CSS: añadir reglas `@media (max-width: 640px) { .gc-aurora-blob, .gc-aurora-blob-2, .gc-aurora-blob-3 { width: 90vw; height: 90vw; } }`) para que cubran más viewport.
- Reducir `blur-3xl` efectivo en mobile bajando ligeramente el `filter: blur()` (~48px en mobile vs el blur-3xl por defecto) para que el color se aprecie más definido.

**4. Mantener legibilidad**: el fondo sigue detrás de las cards blancas (`--card: #fff`) con `shadow-soft`, así que el contraste de texto no se ve afectado. El `z-0` del root y el `z` mayor de las cards lo garantizan — no se toca el layout.

### Lo que NO cambia

- Estructura del componente `AnimatedBackground.tsx` (mismos 3 blobs, misma lógica horaria).
- Animaciones de drift y duración de transición de 8s entre periodos.
- `prefers-reduced-motion` sigue desactivando la animación.
- Colores semánticos del design system (primary verde, accent amarillo) intactos.

### Resultado esperado

- **Mobile** (≤640px): aurora claramente visible, blobs más grandes y con ~30% más opacidad, los colores del periodo del día se aprecian sin tapar el juego.
- **Desktop**: aurora algo más rica que ahora pero todavía sutil — el protagonismo sigue siendo de las cards centrales.
