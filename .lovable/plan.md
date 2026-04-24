## Objetivo
Usar la imagen `Social_image22.png` que subiste como imagen de previsualización social (la que aparece al compartir el link en LinkedIn, Twitter/X, WhatsApp, Facebook, etc.).

## Cambios

1. **Copiar la imagen al proyecto**
   - Copiar `user-uploads://Social_image22.png` a `public/og-image.png`.
   - De este modo queda disponible públicamente en `https://geochallengedaily.lovable.app/og-image.png`, que es exactamente la URL que ya está configurada en los meta tags.

2. **No hace falta tocar `src/routes/__root.tsx`**
   - Los meta tags `og:image` y `twitter:image` ya apuntan a `https://geochallengedaily.lovable.app/og-image.png`.
   - Al colocar el archivo en `public/og-image.png`, la URL empezará a resolver correctamente.

## Notas
- Dimensiones de tu imagen (~1410×853): funcional para previews, aunque el estándar recomendado es 1200×630. Las plataformas la mostrarán bien recortada al centro.
- Tras publicar, los caches de LinkedIn/Twitter/Facebook pueden tardar en refrescar. Se pueden forzar con:
  - LinkedIn Post Inspector
  - Twitter/X Card Validator
  - Facebook Sharing Debugger