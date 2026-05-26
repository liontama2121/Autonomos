# CLAUDE.md — AUTONOMOS (sitio multipágina, rama juancode_1.0)

> Reglas permanentes para el sitio web multipágina de AUTONOMOS.
> Sello: **JuanCode — futurista oscuro premium**.

---

## Contexto

**AUTONOMOS** = plataforma tecnológica integral del sector automotriz colombiano. Autopartes legales, talleres certificados, mecánicos a domicilio, grúas, ambulancias y asistencia vial 24/7.

Stack: **HTML/CSS/JS vanilla multipágina**. Sin frameworks. Sin librerías salvo Google Fonts.

---

## Arquitectura de archivos

```
/
├── CLAUDE.md
├── index.html         (Inicio)
├── tienda.html        (catálogo + filtros + carrito)
├── producto.html      (detalle ?id=)
├── servicios.html
├── nosotros.html
├── css/styles.css     (todo el CSS compartido, único archivo)
├── js/
│   ├── data.js        (PRODUCTS global)
│   ├── cart.js        (localStorage "autonomos_cart")
│   └── main.js        (navbar scroll, hamburguesa, reveal, active link, updateCartUI)
└── image/             (logo.png cuadrado, logo_largo.png horizontal)
```

Navbar, footer, fondo (orbes+malla) y WhatsApp flotante son **idénticos** en las 5 páginas. El navbar marca `.active` el link de la página actual usando `<body data-page="...">`.

---

## SISTEMA DE DISEÑO

### Variables CSS (`:root`)

```css
--bg:#070A12; --bg-2:#0B1020;
--surface:rgba(255,255,255,0.04); --surface-2:rgba(255,255,255,0.06);
--border:rgba(255,255,255,0.10); --border-strong:rgba(255,255,255,0.18);
--text:#EDF1FA; --text-dim:#A6B0C3; --text-faint:#6C778C;
--g1:#22D3EE; --g2:#4F8BFF; --g3:#A855F7; --g4:#FB7185;
--grad: linear-gradient(110deg, var(--g1) 0%, var(--g2) 32%, var(--g3) 64%, var(--g4) 100%);
--grad-soft: linear-gradient(110deg, rgba(34,211,238,.18), rgba(79,139,255,.18), rgba(168,85,247,.18), rgba(251,113,133,.18));
--radius:18px; --radius-lg:26px; --maxw:1240px;
```

### Reglas visuales

- **Fondo global:** `position:fixed inset:0 z-index:-2/-1`. Capa (a) malla puntos `radial-gradient` 38×38px op 0.05 con máscara radial. Capa (b) 3 orbes `filter:blur(90px) opacity:.42`: cian arriba-izq, violeta der-medio, azul abajo-centro. Sin cajas/cortes.
- **`.grad-text` (sello):** TODOS los h1/h2 destacados y números de stats con `background:--grad; background-clip:text; -webkit-text-fill-color:transparent`. Solo a la palabra/frase clave.
- **Glassmorphism:** `--surface` + `backdrop-filter:blur(12-16px)` + `border:--border`.
- **Tipografía:** **Sora** (títulos 600/700/800) + **Manrope** (cuerpo 400/500/600/700). Google Fonts.
- **Botones pill** `border-radius:999px`. `.btn-primary` = `--grad` + `#06080F`; `.btn-ghost` = `--surface` + borde. Hover `translateY(-3px)` + sombra de color.
- **`.reveal` → `.in`** vía `IntersectionObserver`, transición 0.7s.
- **Borde degradado hover** en service-cards: `::before padding:1px background:--grad mask-composite:xor`, opacity 0→1.

### LOGOS (`image/`)

- **Navbar:** `image/logo_largo.png`, **height 52px** (móvil 42px). Fallback onerror → "AUTONOMOS" Sora 800, 1.7rem, `.grad-text`.
- **Footer:** mismo logo horizontal, **height 42px**, mismo fallback.
- **Hero home:** `image/logo.png` cuadrado, ancho ~440px, flotando (`@keyframes float` translateY 0→-22px, 6s). Glow `--grad blur(70px)` pulsante. 2 órbitas dashed (480px y 600px) rotando 40s y 60s sentidos opuestos. Fallback = card glass con "AUTONOMOS" `.grad-text`.

---

## NAVBAR (idéntico en todas las páginas, `#nav`)

- Fija top, padding `18px 0`. Transparente; `.scrolled` (scroll>30px) → `rgba(7,10,18,.72)+blur(18px)+border-bottom`.
- Izquierda: logo horizontal → `index.html`.
- Centro: Inicio · Servicios · Tienda · Quiénes Somos. Link activo: `.active` (color `--text` + subrayado degradado).
- Derecha: btn ghost "Ver tienda" + btn primary "Descargar app" + ícono carrito 🛒 con contador (lee `localStorage`).
- Móvil ≤640px: links ocultos, hamburguesa → menú glass vertical. Logo 42px.

## FOOTER (idéntico)

Grid 4 cols:
- **Marca**: logo + "Plataforma tecnológica integral del sector automotriz. Autopartes, servicios, logística y asistencia vial en un solo ecosistema digital."
- **Plataforma**: Inicio, Servicios, Tienda, Quiénes Somos.
- **Aliados**: Talleres, Mecánicos a domicilio, Grúas y ambulancias.
- **Contacto**: 📞 304 645 2629 (`wa.me/573046452629`), Bogotá Colombia, `soporte@autonomos.co`.
Barra inferior: "© AUTONOMOS — Todos los derechos reservados" + "Hecho con amor por **JuanCode**" (`.grad-text`).

## WHATSAPP FLOTANTE
Botón circular 60px abajo-derecha, gradiente `#25D366 → #128C7E`, ícono 💬, animación pulso. Link `https://wa.me/573046452629`.

---

## DATOS QUE NO SE CAMBIAN

### Cifras del mercado (Colombia, reales)
- **$410 mil M** — pérdidas por hurto vehículos y autopartes (ene–jul 2025).
- **+27.000** — vehículos y autopartes hurtados (primeros 7 meses 2025).
- **2.000+** — autopartes ilegales y 800 motores regrabados incautados en Bogotá 2025.
- **~10%** — repuestos importados de forma irregular según DIAN.

### Productos (12 items en `js/data.js`)
Campos: `id`, `n`, `c`, `cat`, `d`, `dl`, `p`, `e`, `specs`.
Categorías: `frenos`, `motor`, `electrico`, `llantas`, `accesorios`. Badge "✓ Legal" en todos.

### Contacto
- WhatsApp: **+57 304 645 2629** → `https://wa.me/573046452629`
- Email: `soporte@autonomos.co`
- Bogotá, Colombia.

### Visión y Misión (literales)
- **Visión**: "Ser la plataforma líder en Colombia y Latinoamérica en soluciones automotrices, servicios independientes y asistencia vial, integrando en un solo ecosistema digital la venta de autopartes, servicios mecánicos, grúas, ambulancias, logística y oportunidades para trabajadores autónomos."
- **Misión**: "Brindar una plataforma digital integral que conecte autopartes, servicios automotrices, asistencia vial y trabajadores autónomos, facilitando el acceso rápido, seguro y eficiente a soluciones de movilidad, reparación y atención de emergencias, impulsando el crecimiento de talleres, distribuidores y trabajadores independientes."

### Firma footer
`Hecho con amor por **JuanCode**` (JuanCode con `.grad-text`).

---

## CARRITO (js/cart.js)

- Clave `localStorage`: `"autonomos_cart"`. Objeto `{id: cantidad}`.
- API global: `addToCart(id, qty=1)`, `removeFromCart(id)`, `getCartCount()`, `getCartItems()`, `updateCartUI()`.
- `updateCartUI()` actualiza todos los `[data-cart-count]` de la página. Llamar al cargar.
- Formato precio: `'$ ' + n.toLocaleString('es-CO')`.

---

## RESPONSIVE

- **≤1024px**: heros 2-col → 1 col centrado; grids 4→2 col; layouts alternados servicios → apilados.
- **≤640px**: grids → 1 col; navbar hamburguesa; producto → 1 col; padding secciones ~76px.

---

## CRITERIOS DE CALIDAD

- Navbar/footer/fondo/WhatsApp IDÉNTICOS en las 5 páginas.
- Carrito persiste vía `localStorage`; contador navbar actualizado en todas.
- `.grad-text` visible en cada titular destacado y números.
- Orbes+malla cubren todo el fondo sin cortes.
- Logo navbar 52px (móvil 42px), logo hero flotante grande con glow+órbitas.
- Cards tienda enlazan a `producto.html?id=`; botón Agregar **no navega**.
- Cifras del mercado **reales**, no inventar.
- Footer siempre "Hecho con amor por JuanCode".
- Sin frameworks, sin libs externas salvo Google Fonts.
