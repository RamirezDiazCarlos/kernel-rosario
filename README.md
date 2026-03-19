# Kernel — Desarrollo Web y Servicio Técnico

Landing page de **Kernel**, agencia de desarrollo web y servicio técnico de PC en Rosario, Santa Fe, Argentina.

**Sitio en producción:** [kerneldev.com.ar](https://www.kerneldev.com.ar)

---

## Stack

| Tecnología                   | Versión | Uso                                            |
| ---------------------------- | ------- | ---------------------------------------------- |
| [Astro](https://astro.build) | 5.x     | Framework principal (output: hybrid)           |
| React                        | 19      | Componentes interactivos (island architecture) |
| TypeScript                   | —       | Tipado estricto en todo el proyecto            |
| Tailwind CSS                 | 3.x     | Estilos utilitarios                            |
| CSS puro                     | —       | Variables CSS, Grid, Flexbox                   |
| Framer Motion                | 12.x    | Animaciones scroll-driven (MacBook section)    |
| Resend                       | —       | Envío de emails transaccionales                |
| Vercel Analytics             | —       | Métricas de visitas                            |
| @astrojs/vercel              | —       | Adapter para deploy en Vercel                  |
| @astrojs/sitemap             | —       | Generación automática de sitemap.xml           |

---

## Estructura del proyecto

```
kernel-rosario/
├── src/
│   ├── components/
│   │   ├── Navbar.astro                  # Sticky + hamburguesa en mobile
│   │   ├── Hero.astro                    # Word flip animation + 2 CTAs
│   │   ├── DesarrolloWeb.astro           # Servicios web + features
│   │   ├── MacbookSection.astro          # Contenedor hybrid desktop/mobile
│   │   ├── MacbookShowcase.tsx           # React island con scroll animation
│   │   ├── FAQ.astro                     # Preguntas frecuentes
│   │   ├── PaquetesWeb.astro             # 3 paquetes: Esencial, Pro, Profesional
│   │   ├── Portfolio.astro               # Grid de proyectos realizados
│   │   ├── Proceso.astro                 # 5 pasos del proceso de trabajo
│   │   ├── Servicios.astro               # Bento grid de servicios PC
│   │   ├── ServiceCard.astro             # Card individual de servicio
│   │   ├── AtencionPersonalizada.astro   # Diferenciadores del servicio
│   │   ├── PorQueKernel.astro            # Razones para elegir Kernel
│   │   ├── Contacto.astro               # Wrapper de contacto
│   │   ├── InfoContacto.astro            # Datos, WhatsApp, banner presupuesto
│   │   ├── FormularioContacto.astro      # Formulario simple de contacto
│   │   ├── Footer.astro                  # Links + redes sociales
│   │   └── ui/
│   │       └── macbook-scroll.tsx        # Componente scroll-driven (Aceternity UI)
│   ├── layouts/
│   │   └── Layout.astro                  # HTML global, SEO, OG, JSON-LD, Analytics
│   ├── pages/
│   │   ├── index.astro                   # Página principal
│   │   ├── presupuesto.astro             # Formulario de presupuesto
│   │   └── presupuesto.ts                # Endpoint SSR — procesa y envía email via Resend
│   ├── data/
│   │   └── services.data.ts              # Catálogo de servicios PC
│   ├── types/
│   │   └── service.types.ts              # Interfaces TypeScript
│   ├── utils/
│   │   ├── intersection-observer.ts      # ScrollAnimationObserver (scroll animations)
│   │   ├── service.helpers.ts            # Helpers de servicios
│   │   └── service.validator.ts          # Validación de datos
│   ├── lib/
│   │   └── utils.ts                      # cn() utility (clsx + tailwind-merge)
│   └── styles/
│       └── globals.css                   # Variables CSS + shadcn tokens
├── public/
│   ├── favicon/                          # ico, svg, png, webmanifest
│   ├── fonts/                            # Departure Mono (local)
│   ├── portfolio/                        # Screenshots de proyectos (.webp)
│   ├── tuNegocio2.webp                  # Mockup para MacBook animation
│   ├── og-image.jpg                      # Open Graph image (1200x630)
│   └── robots.txt                        # SEO
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

---

## Orden de secciones (index)

1. Navbar
2. Hero — word flip: "necesita / merece / busca / proyecta"
3. Desarrollo Web — descripción del servicio + features
4. MacBook Section — animación scroll-driven en desktop, mockup estático en mobile
5. FAQ
6. Paquetes Web — Landing Esencial, Landing Pro, Sitio Profesional
7. Portfolio — proyectos realizados
8. Proceso — 5 pasos: idea → contenido → desarrollo → publicación → mantenimiento
9. Servicios PC — bento grid
10. Atención Personalizada
11. Por Qué Kernel
12. Contacto — info + formulario
13. Footer

---

## Variables de entorno

```bash
RESEND_API_KEY=re_...
```

Configurar en `.env` para desarrollo local y en **Vercel → Settings → Environment Variables** para producción.

---

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev         # http://localhost:4321

# Build
npm run build

# Preview del build
npm run preview
```

---

## SEO

- JSON-LD `LocalBusiness` con dirección, redes, serviceType y areaServed
- Open Graph + Twitter Card
- Sitemap automático via `@astrojs/sitemap`
- Canonical URL dinámica
- Favicon completo (ico, svg, png, webmanifest)
- Verificación Google Search Console incluida

---

## Paleta de colores

```css
--bg-primary: #0a0a0a /* Fondo principal */ --bg-secondary: #1a1a1a
  /* Fondo secundario */ --accent: #00ff88 /* Verde neón */
  --accent-dim: #00cc6e /* Verde oscuro */ --text-primary: #ffffff
  /* Texto principal */ --text-muted: #999999 /* Texto secundario */;
```

---

## Principios de desarrollo

- **Single Responsibility** — cada componente tiene una única función
- **Progressive enhancement** — contenido visible sin JS, animaciones como mejora
- **TypeScript estricto** — tipos bien definidos en componentes y utilities
- **Mobile-first** — diseño responsive desde mobile hacia arriba

---

© 2025 Kernel. Todos los derechos reservados.
