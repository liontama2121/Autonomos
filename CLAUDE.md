# CLAUDE.md — AUTONOMOS (rama juancode_1.0)

> Reglas permanentes de diseño y construcción para la landing page de AUTONOMOS.
> Sello: **JuanCode — futurista oscuro premium**.

---

## Contexto

**AUTONOMOS** = plataforma tecnológica integral del sector automotriz colombiano. Conecta autopartes legales, servicios mecánicos, grúas, ambulancias y asistencia vial 24/7 en un solo ecosistema digital.

Stack: **HTML/CSS/JS vanilla en un único `index.html`**. Sin frameworks. Sin librerías externas salvo Google Fonts. Carpeta `image/` con `logo.png` (cuadrado) y `logo_largo.png` (horizontal).

---

## SISTEMA DE DISEÑO

### Variables CSS (en `:root`)

```css
--bg:#070A12;
--bg-2:#0B1020;
--surface:rgba(255,255,255,0.04);
--surface-2:rgba(255,255,255,0.06);
--border:rgba(255,255,255,0.10);
--border-strong:rgba(255,255,255,0.18);
--text:#EDF1FA;
--text-dim:#A6B0C3;
--text-faint:#6C778C;
--g1:#22D3EE;   /* cian */
--g2:#4F8BFF;   /* azul */
--g3:#A855F7;   /* violeta */
--g4:#FB7185;   /* coral */
--grad: linear-gradient(110deg, var(--g1) 0%, var(--g2) 32%, var(--g3) 64%, var(--g4) 100%);
--grad-soft: linear-gradient(110deg, rgba(34,211,238,.18), rgba(79,139,255,.18), rgba(168,85,247,.18), rgba(251,113,133,.18));
--radius:18px;
--radius-lg:26px;
--maxw:1240px;
```

### Reglas visuales obligatorias

- **Fondo global:** `position:fixed` cubriendo TODA la página, `z-index` negativo. Dos capas:
  1. Malla de puntos sutil con `radial-gradient` repetido (`background-size:38px 38px`, opacidad ~0.05, máscara radial para desvanecer en bordes).
  2. Tres orbes de luz difusos (`filter:blur(90px)`, opacidad ~0.42): cian arriba-izquierda, violeta derecha-medio, azul abajo-centro.
  - **Nunca** cajas ni cortes visibles en el fondo.

- **SELLO CLAVE (degradado en texto):** TODOS los `h1`, `h2` y números de stats llevan `--grad` aplicado vía `background-clip:text; -webkit-text-fill-color:transparent`. Clase reutilizable `.grad-text`. Aplicar solo a la palabra/frase clave, **no a todo el titular**.

- **Glassmorphism:** todas las cards usan `--surface` + `backdrop-filter:blur(12-16px)` + borde `--border`.

- **Tipografía:** **Sora** (títulos, 600/700/800) + **Manrope** (cuerpo, 400/500/600/700). Cargar desde Google Fonts.

- **Botones:** estilo pill (`border-radius:999px`).
  - `.btn-primary`: fondo `--grad`, texto oscuro `#06080F`.
  - `.btn-ghost`: `--surface` + borde.
  - Hover: `translateY(-3px)` + sombra de color.

- **Animación de entrada:** clase `.reveal` (opacity 0, translateY 28px) → `.in` con `IntersectionObserver` al scroll. Transición 0.7s.

- **Borde degradado en hover de service-cards:** técnica `::before` con `padding:1px`, `background:--grad`, `mask-composite:xor`, opacidad 0→1 en hover.

---

## LOGOS (`image/`)

- **Hero:** `image/logo.png` cuadrado, ancho ~420px, flotando. Animación `float` (translateY 0→-22px, 6s infinito). Detrás: glow `--grad` con `blur(70px)` pulsante. Alrededor: 2 órbitas punteadas (border dashed) de 480px y 600px rotando en sentidos opuestos (`spin` 40s y 60s).
- **Navbar:** `image/logo_largo.png` horizontal, altura 38px.
- **Footer:** mismo logo horizontal, altura 34px.
- **Fallback:** ambos `<img>` con `onerror` que oculta y muestra texto "AUTONOMOS" con `.grad-text`. En el hero, fallback = card glass con texto + nota "Coloca image/logo.png".

---

## ESTRUCTURA

Orden estricto de secciones:
1. **Navbar fija** (`#nav`) — transparente al inicio, `.scrolled` al pasar 30px de scroll.
2. **Hero** (`#inicio`) — grid 2 columnas, logo flotante a la derecha.
3. **Tu Aliado** (`#aliado`) — card full-width con `--grad-soft`.
4. **El Problema / Mercado** (`#mercado`) — 4 stat-cards con cifras reales.
5. **Servicios** (`#servicios`) — grid 3×2 de 6 service-cards.
6. **Tienda / Marketplace** (`#tienda`) — chips de filtro + grid 4 columnas de 12 productos + carrito.
7. **Por qué AUTONOMOS** (`#diferenciadores`) — grid 2×2 de 4 pilares.
8. **CTA Final** (`#cta`) — card con `--grad-soft`.
9. **Footer** — grid 4 columnas + barra inferior.
10. **WhatsApp flotante** — botón circular fijo abajo-derecha, enlace `wa.me/573046452629`.

---

## DATOS QUE NO SE CAMBIAN

### Cifras reales del mercado (Colombia)
- **$410 mil M** — pérdidas por hurto de vehículos y autopartes (ene–jul 2025).
- **+27.000** — carros, motos y autopartes hurtados en los primeros 7 meses de 2025.
- **2.000+** — autopartes ilegales y 800 motores regrabados incautados en Bogotá en 2025.
- **~10%** — repuestos importados de forma irregular según la DIAN.

### Productos del marketplace (12 items)
Campos: `n` (nombre), `c` (categoría-key), `cat` (label), `d` (descripción), `p` (precio COP), `e` (emoji).
Categorías: `frenos`, `motor`, `electrico`, `llantas`, `accesorios`.
Lista completa definida en `index.html`.

### Contacto
- WhatsApp: **+57 304 645 2629** → `https://wa.me/573046452629`
- Email soporte: `soporte@autonomos.co`
- Ciudad: Bogotá, Colombia

### Firma footer
`Hecho con amor por **JuanCode**` (JuanCode con `.grad-text`).

---

## RESPONSIVE

- **≤1024px:** hero → 1 columna centrado; tagline con borde superior en vez de izquierdo; grids problema/servicios/productos → 2 columnas.
- **≤640px:** todos los grids → 1 columna; navbar con hamburguesa + menú glass; botón ghost del navbar oculto; carrito centrado; padding de secciones reducido (~76px).

---

## CRITERIOS DE CALIDAD

- Degradado multicolor visible en CADA titular destacado y en números de stats.
- Orbes + malla cubriendo TODO el fondo sin cortes.
- Logo del hero flotando grande con glow y órbitas.
- Tienda filtra por categoría y suma al carrito.
- Cifras del mercado reales — no inventar ni modificar.
- Footer siempre con "Hecho con amor por JuanCode".

---

## Reglas de trabajo

- **Un solo archivo** `index.html` con HTML + CSS (en `<style>`) + JS (en `<script>`).
- **No frameworks**, no librerías externas salvo Google Fonts.
- **No crear archivos extras** de documentación fuera de este `CLAUDE.md`.
- **Preferir editar** sobre crear nuevos archivos.
- Logos viven en `image/`.
