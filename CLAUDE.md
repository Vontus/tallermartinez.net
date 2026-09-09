# Taller Martínez

Landing **bilingüe (es/en)** de **Taller Martínez**, la marca de servicios de
informática de Alberto Martínez para **negocios locales** (autónomo): web, datos,
copias de seguridad, redes sociales e **IA aplicada**, llevado por una sola
persona, en Torrevieja, la provincia de Alicante y la Región de Murcia.

> Marca separada de [vontus.dev](https://vontus.dev) (la cara personal/dev,
> portfolio y código abierto). Taller Martínez es la cara de negocio/servicios.

## Posicionamiento y tono (para escribir copy)

- **Target:** dueños de negocios locales pequeños, **no técnicos**. En la zona hay
  mucho residente británico, de ahí la versión inglesa.
- **Promesa central:** despreocuparse. El cliente quiere **no pelearse** con la
  tecnología, no "soluciones disruptivas".
- **Voz:** cercana, en cristiano, de tú a tú. Evitar tecnicismos y lenguaje
  corporativo ("interlocutor", "departamento", claims grandilocuentes).
- **Inglés = británico nativo, no traducción literal.** Si un juego de palabras no
  traduce limpio, se reescribe la idea (no se calca).
- **Cuidar la repetición** de "tu negocio" / "informático" (se mantienen solo en
  el H1 y la frase de contraste del problema, por SEO).

## Identidad visual

- **Logo `>M`:** la `>` (naranja) es un **prompt**; la `M` (blanca) es la inicial.
  Sobre gris carbón. Hecho con la tipografía **League Spartan Bold** (la `>` y la
  `M` son glifos reales de la fuente, convertidos a **trazos vectoriales**).
- **El `>` es marca y viñeta**, no texto de terminal. Prefijo en eyebrows, kickers
  y listas (`<span class="chev">&gt;</span>`). NO prompts literales tipo
  `usuario:~$` (el cliente no los entendería).
- **Paleta:** gris carbón + acento naranja, en `:root` de `src/styles/global.css`
  (`--carbon*`, `--accent`, `--fog*`). Solo modo oscuro.
- **Tipografía:** el **logotipo** es League Spartan (outlined, sin cargar la
  fuente). El **cuerpo** es sans del sistema; mono (`--mono`) solo en detalles.

## Activos generados (logo, wordmark, OG)

NO se editan a mano: se **generan** desde League Spartan con `fonttools` (instancia
la fuente variable a Bold 700 y extrae los glifos a `path` con `SVGPathPen`) y se
rasterizan con `sharp`.

- `public/logo.svg`, `public/favicon.svg` — la marca `>M`.
- `public/wordmark.svg` — "Taller Martínez" outlined (header).
- `public/og.png` (es), `public/og-en.png` (en) — 1200×630, imagen social.

## Stack

[Astro](https://astro.build) — sitio estático, sin framework de UI. pnpm. TS strict.

## i18n

[Paraglide JS](https://paraglidejs.com) (inlang), con el routing propio de
Paraglide (sin `astro:i18n`: exige `output: 'server'`, incompatible con
GitHub Pages estático):

- **Mensajes por idioma:** `messages/es.json` y `messages/en.json` (claves flat
  snake_case, namespaced por sección/página, p. ej. `services_item_0_titulo`).
  **Todo el texto vive ahí.** El compilador de Paraglide (plugin de vite en
  `astro.config.mjs`) genera `src/paraglide/` (`messages.js` → `m.*`,
  `runtime.js` → `getLocale`, `setLocale`, `localizeHref`, `locales`,
  `baseLocale`, `assertIsLocale`) en cada `pnpm dev`/`pnpm build` — **no se
  comitea** (el propio compilador crea un `.gitignore` dentro de esa carpeta).
- **Datos no traducibles** (contacto, metadatos por idioma, URLs/tags de
  proyectos): `src/i18n/content.ts`, fuera de Paraglide.
- **Markup único:** `src/components/Landing.astro` pinta las secciones
  llamando a `m.*` (lee el locale actual con `getLocale()`, fijado antes de
  renderizar). `src/pages/[locale]/index.astro` genera `/es/` y `/en/` vía
  `getStaticPaths()` + `setLocale()` — sin páginas duplicadas por idioma.
- **Rutas:** `/es/` y `/en/` (prefijo siempre, configurado en `urlPatterns` del
  plugin). Los enlaces internos, el hreflang y el selector de idioma se
  construyen con `localizeHref()`, nunca a mano. La raíz `/`
  (`src/pages/index.astro`) es un **redirector cliente** que lee
  `navigator.languages` y manda a `/es/` o `/en/` (por defecto es, vía
  `baseLocale` del runtime de Paraglide); entrar directo a `/es` o `/en` se
  respeta. La raíz va `noindex`. El locale se fija en build (no hace falta
  `paraglideMiddleware()`, eso es solo para SSR).

## SEO

- Por idioma: `<html lang>`, title, description, Open Graph, Twitter y JSON-LD
  `ProfessionalService` localizados (en `Base.astro`, desde `m.*`/`content.ts`).
- `hreflang` es/en/x-default en cada página + `public/sitemap.xml` (ambas URLs) y
  `public/robots.txt`. `og:image` propio por idioma.

## Estructura

```
src/
  layouts/Base.astro        <head> (meta/SEO/hreflang/JSON-LD), header, footer. Lee getLocale()
  components/
    Landing.astro           Todas las secciones; llama a m.* (lee getLocale())
    SectionHead.astro       kicker (opcional) + título + intro
    ServiceCard.astro       Tarjeta. Prop `featured` → variante IA (banner ancho).
                            Estructura .card-body/.card-title/.card-desc
    Kicker.astro            `> texto` (un solo sitio para el espacio tras el `>`)
  i18n/content.ts           Datos no traducibles (contacto, metadatos, proyectos)
  paraglide/                Generado por el compilador de Paraglide — NO se comitea
  pages/{index,[locale]/index}.astro
  styles/global.css         Todos los estilos (un único archivo)
messages/{es,en}.json       Todo el texto del sitio
project.inlang/settings.json
public/  logo.svg wordmark.svg favicon.svg og.png og-en.png CNAME robots.txt sitemap.xml
```

### Convenciones

- **Componetizar lo que se repite** (cards, cabeceras, kickers) para que las
  variantes no diverjan. Espaciado título→descripción de las cards: fuente única
  en `.card-body { gap }`.
- **Texto nuevo → a los mensajes** (`messages/es.json` y `messages/en.json`),
  nunca hardcodear en el markup, y siempre en los **dos idiomas**. Claves flat
  snake_case, namespaced por sección (ver claves existentes como referencia).
- PRs y commits **en inglés**.

## Desarrollo y despliegue

```bash
pnpm install
pnpm dev      # http://localhost:4321/  (/, /es/, /en/)
pnpm build    # genera dist/
```

Push a `main` → GitHub Actions despliega a GitHub Pages. Dominio propio vía
`public/CNAME`; `astro.config.mjs` con `base: '/'`.
