# Portafolio Personal — Richard Assis

> **Backend Software Engineer** especializado en **Java + Spring Boot**, APIs REST seguras, persistencia de datos relacional y despliegue en producción con Docker y AWS.

Sitio web y portafolio técnico construido con **Astro**, **Tailwind CSS**, **TypeScript** y **MDX** mediante la API de colecciones de contenido (Content Layer). Diseñado bajo una estética dark técnica, minimalista, inspirada en plataformas como Vercel, Linear y Railway, optimizado para Lighthouse ≥ 95 y despliegue en Vercel o Cloudflare Pages.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (v7) — Cero JavaScript innecesario en el cliente, generación estática (SSG) de alto rendimiento.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4 vía `@tailwindcss/vite`) con paleta técnica personalizada y soporte Dark/Light mode con persistencia local.
- **Tipografía:** `Inter` (sans-serif para lectura fluida) y `JetBrains Mono` (monoespaciada técnica para código y badges).
- **Contenido:** Casos de estudio en formato **MDX** con esquemas tipados con **Zod** (`src/content.config.ts`).
- **SEO & Accesibilidad:** Sitemap XML automático (`@astrojs/sitemap`), `robots.txt`, Open Graph / Twitter Card tags, navegación por teclado y contraste AA.

---

## 📁 Estructura del Proyecto

```text
Portafolio/
├── public/
│   ├── favicon.svg             # Favicon técnico en SVG con acento verde esmeralda
│   └── robots.txt              # Reglas de rastreo y enlace al sitemap
├── src/
│   ├── components/
│   │   ├── Badge.astro         # Badges para tecnologías y disponibilidad
│   │   ├── Footer.astro        # Enlaces de contacto, redes y copyright
│   │   ├── Marquee.astro       # Fila animada con loop infinito de tecnologías
│   │   ├── Navbar.astro        # Barra de navegación sticky con blur y menú móvil
│   │   ├── ProjectCard.astro   # Tarjeta interactiva de proyecto
│   │   ├── Section.astro       # Contenedor con anchos (720px / 1100px) y py-24
│   │   └── ThemeToggle.astro   # Switch Dark / Light mode sin parpadeo (FOUC)
│   ├── content/
│   │   └── proyectos/
│   │       ├── sistema-academico.mdx   # Caso de estudio: Sistema Académico
│   │       └── sistema-inventario.mdx  # Caso de estudio: Sistema de Inventario
│   ├── layouts/
│   │   └── Layout.astro        # Layout base con metadata SEO, fuentes y tema
│   ├── pages/
│   │   ├── index.astro         # Página de inicio (Hero, Marquee, Destacados, Bio)
│   │   ├── sobre-mi.astro      # Biografía extendida, formación en U. de Cartagena
│   │   ├── contacto.astro      # Canales directos y formulario de contacto
│   │   └── proyectos/
│   │       ├── index.astro     # Catálogo completo de proyectos
│   │       └── [slug].astro    # Render dinámico de cada caso de estudio MDX
│   ├── styles/
│   │   └── global.css          # Variables CSS de tema, utilidades y animaciones
│   └── content.config.ts       # Esquema Zod de validación para casos de estudio
├── astro.config.mjs            # Integraciones de Astro (MDX, Sitemap, Vite)
├── package.json
├── tailwind.config.mjs         # Paleta de colores, fuentes y anchos de lectura
├── tsconfig.json               # Configuración estricta de TypeScript con path aliases
└── README.md
```

---

## 🚀 Instalación y Desarrollo Local

### Requisitos previos
- **Node.js:** Versión `>= 22.12.0`
- **pnpm:** Versión `10.x` o superior (también compatible con `npm` o `yarn`)

### Pasos

1. Clonar el repositorio y acceder a la carpeta:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Portafolio
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```
   *O usando el modo background según AGENTS.md:*
   ```bash
   astro dev --background
   ```
   *Para gestionarlo:* `astro dev status`, `astro dev logs`, `astro dev stop`.

4. Abrir en el navegador: [http://localhost:4321](http://localhost:4321)

---

## 📝 Personalización de Placeholders

Antes del despliegue a producción, reemplaza los siguientes placeholders con tu información real:

| Archivo | Placeholder | Descripción |
| :--- | :--- | :--- |
| `src/components/Footer.astro` | `[TU_EMAIL]` | Correo electrónico de contacto |
| `src/components/Footer.astro` | `[TU_GITHUB]` | Usuario de GitHub |
| `src/components/Footer.astro` | `[TU_LINKEDIN]` | Usuario / ID de perfil de LinkedIn |
| `src/pages/contacto.astro` | `[TU_EMAIL]`, `[TU_GITHUB]`, `[TU_LINKEDIN]` | Canales directos de contacto |
| `src/pages/contacto.astro` | `[TU_FORM_ID]` | ID de Formspree (o reemplazar action con API propia) |
| `src/content/proyectos/*.mdx` | `[COMPLETAR: ...]` | URLs de repositorios, demos, métricas y Swagger |
| `astro.config.mjs` y `public/robots.txt` | `https://richardassis.dev` | Tu dominio final en producción |

---

## ➕ Cómo Agregar un Nuevo Caso de Estudio

Crea un nuevo archivo `.mdx` dentro de `src/content/proyectos/` con el siguiente formato:

```mdx
---
title: "Nombre del Proyecto"
description: "Resumen técnico de 1 o 2 líneas del proyecto."
tagline: "Subtítulo descriptivo o valor central."
stack: ["Java", "Spring Boot", "Docker"]
year: "2025"
featured: true
role: "Backend Developer"
links:
  repo: "https://github.com/usuario/repo"
  demo: "https://demo.com"
  docs: "https://api-docs.com"
---

# Nombre del Proyecto
[Una línea: qué es y para quién.]

## Contexto
[Qué problema existía, por qué lo construí.]

## Decisiones técnicas
- Por qué [tecnología X] y no [alternativa]
- Cómo manejé [problema concreto]
- Cómo estructuré [parte del sistema]

## Arquitectura
\`\`\`
[Diagrama simple en ASCII o descripción de capas]
\`\`\`

## Resultados
- [Métrica o logro concreto]

## Stack
- Backend: ...
- Base de datos: ...

## Links
- **Repositorio:** [Enlace](...)
- **Demo:** [Enlace](...)
- **Docs:** [Enlace](...)
```

Astro validará automáticamente los campos del frontmatter mediante el esquema Zod y creará la ruta `/proyectos/[nombre-archivo]`.

---

## 🚢 Despliegue en Producción

### Opción A: Vercel (Recomendado)
1. Conecta tu repositorio de GitHub a tu cuenta de [Vercel](https://vercel.com/).
2. Vercel detectará automáticamente que es un proyecto **Astro**.
3. Parámetros de build predeterminados:
   - **Framework Preset:** Astro
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`
4. Haz clic en **Deploy**.

### Opción B: Cloudflare Pages
1. Inicia sesión en el panel de Cloudflare y ve a **Workers & Pages** > **Create application** > **Pages**.
2. Conecta tu repositorio.
3. Ajustes de compilación:
   - **Framework Preset:** Astro
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
4. Haz clic en **Save and Deploy**.

---

## 🧪 Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `pnpm dev` | Inicia el entorno local de desarrollo con hot-reloading |
| `pnpm build` | Compila el sitio estático optimizado en la carpeta `./dist/` |
| `pnpm preview` | Sirve localmente los archivos compilados en `./dist/` |
| `pnpm astro check` | Ejecuta diagnóstico de TypeScript y componentes Astro |
