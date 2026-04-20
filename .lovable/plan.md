
## Añadir fondo visual al juego

Quieres que el fondo se sienta menos vacío y más divertido, pero sin entorpecer la lectura ni dar pistas. Antes de aplicar nada quieres verlo, así que el plan es **implementar varias opciones de fondo y un selector temporal** para que puedas probarlas en vivo y decidir cuál te gusta más (o ninguna).

## Opciones que se implementarán

Las 4 son puramente decorativas — no contienen nombres, banderas ni siluetas de países, así que no dan pistas.

**1. Aurora animada (degradado en movimiento)**
Manchas grandes y suaves de color (verde primario + amarillo accent) flotando lentamente. CSS puro, animación de 20-30s, muy sutil. Tipo "northern lights" minimalista.

**2. Meridianos flotantes**
Líneas curvas (paralelos/meridianos) muy finas y semi-transparentes que se desplazan despacio. Evoca un globo terráqueo abstracto sin mostrar un mapa real. SVG animado.

**3. Constelación de puntos**
Pequeños puntos conectados por líneas finas que derivan suavemente (estilo "particles network"). Sugiere conexiones globales sin geografía. Canvas ligero o SVG.

**4. Patrón estático sutil**
Iconografía geográfica genérica muy difuminada y repetida (brújula, rosa de los vientos, líneas de latitud) en opacidad 4-6%. Sin movimiento, máxima legibilidad.

## Cómo lo verás antes de decidir

Se añadirá un **pequeño selector flotante en la esquina inferior izquierda** con 5 opciones: `Ninguno · Aurora · Meridianos · Constelación · Patrón`. Click para cambiar al instante. La preferencia se guarda en `localStorage` para no perderla al recargar.

Cuando elijas tu favorito, en una segunda iteración:
- Quitamos el selector
- Dejamos solo el fondo elegido como definitivo
- (O lo eliminamos todo si ninguno convence)

## Detalles técnicos

- **Nuevo archivo** `src/components/AnimatedBackground.tsx` con un componente que recibe `variant: "none" | "aurora" | "meridians" | "constellation" | "pattern"` y renderiza el fondo correspondiente como `<div class="fixed inset-0 -z-10 pointer-events-none">`.
- **Animaciones** añadidas a `src/styles.css` como keyframes `gc-aurora-drift`, `gc-meridian-flow` (transformaciones lentas, `prefers-reduced-motion` respetado → estado estático).
- **Selector** en `src/routes/index.tsx`: pequeño `<div>` flotante con 5 botones tipo chip. Estado local + persistencia en `localStorage` bajo la clave `geoChallenge:bgVariant`.
- **Legibilidad**: las cards del juego ya tienen `bg-card` sólido, así que el fondo no afecta la lectura. Las opacidades del fondo se mantienen ≤15%.
- **Rendimiento**: solo CSS/SVG, sin librerías extra. Las animaciones usan `transform` y `opacity` (GPU-friendly).

## Lo que NO se hace en este paso

- No se elige aún el fondo definitivo — esa es tu decisión tras probarlos.
- No se toca la lógica del juego, traducciones, ni datos de países.
- No se añaden imágenes pesadas ni dependencias nuevas.
