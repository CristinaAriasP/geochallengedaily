

## Por qué no se ven los fondos

Dos problemas combinados:

1. **El contenedor raíz tiene `bg-background`**: el `<div className="relative min-h-screen bg-background ...">` en `src/routes/index.tsx` pinta un fondo opaco que cubre toda la pantalla. Como `AnimatedBackground` está dentro de ese contenedor con `-z-10`, queda tapado por el propio fondo del contenedor.
2. **El `body` también tiene fondo opaco**: aunque sacáramos el fondo del contenedor, `body { background-color: var(--color-background) }` en `styles.css` también lo cubriría si el `AnimatedBackground` queda debajo del body por el `-z-10`.

## Solución

**1. `src/routes/index.tsx`**
- Quitar `bg-background` del contenedor raíz (`<div className="relative min-h-screen bg-background ...">` → `<div className="relative min-h-screen ...">`).
- Mover `<AnimatedBackground>` para que sea hermano del contenido pero dentro del mismo contenedor `relative`, ya está bien posicionado — solo hace falta que nada opaco lo tape.
- Cambiar `-z-10` por `z-0` en el wrapper del fondo, y poner el contenido con `relative z-10` para asegurar el orden de apilamiento sin depender de z negativos.

**2. `src/components/AnimatedBackground.tsx`**
- Cambiar `className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"` por `className="pointer-events-none fixed inset-0 z-0 overflow-hidden"`.
- Subir las opacidades de las blobs aurora de `0.40 / 0.35 / 0.30` a `0.55 / 0.50 / 0.45` y aumentar las opacidades del gradiente de meridianos / constelación / patrón un ~50% para que sean claramente visibles sobre el fondo claro `#fafafa`.

**3. `src/styles.css`**
- Quitar `background-color: var(--color-background)` del selector `body` (o moverlo a `html` solo) para que el fondo animado quede visible. El `<div>` raíz ya no tendrá `bg-background`, así que el color base lo aplica `html`.

## Verificación rápida tras el cambio

- Recarga la página y abre el selector inferior izquierdo.
- Cambia entre **Aurora**, **Meridianos**, **Constelación** y **Patrón**: cada uno debe verse claramente detrás de las cards blancas.
- Las cards del juego siguen siendo `bg-card` sólido → la legibilidad se mantiene.

## Lo que NO cambia

- Lógica del juego, traducciones, datos de países.
- Animaciones del CSS (ya están bien definidas, solo no eran visibles).
- Selector temporal (sigue ahí para que decidas cuál te gusta).

