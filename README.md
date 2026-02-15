# Kernel - Landing Page

Landing page para **Kernel**, desarrollo web profesional y servicio técnico de PC en Rosario, Santa Fe.

## Tecnologías

- **[Astro](https://astro.build)** - Framework web moderno y rápido
- **TypeScript** - Tipado estricto y seguridad
- **CSS moderno** - Variables CSS, Grid, Flexbox
- **FormSubmit** - Envío de formularios sin backend

## Características

- Diseño moderno y minimalista con estética tech
- Totalmente responsive (mobile-first)
- Carga ultrarrápida y optimizada
- Animaciones suaves al hacer scroll (progressive enhancement)
- Formulario de contacto funcional
- SEO optimizado
- Accesible (ARIA labels, semántica HTML, main landmark)
- Navbar sticky con menú hamburguesa en mobile

## Estructura del Proyecto

```
kernel-rosario/
├── src/
│   ├── components/
│   │   ├── Navbar.astro              # Navegación sticky con menú mobile
│   │   ├── Hero.astro                # Hero principal (enfocado a desarrollo web)
│   │   ├── DesarrolloWeb.astro       # Sección de servicios web + features
│   │   ├── PaquetesWeb.astro         # 3 paquetes: Esencial, Pro, Profesional
│   │   ├── Portfolio.astro           # Portfolio de proyectos realizados
│   │   ├── Proceso.astro             # 5 pasos del proceso de trabajo
│   │   ├── Servicios.astro           # Servicios de soporte técnico PC (bento grid)
│   │   ├── ServiceCard.astro         # Card individual de servicio PC
│   │   ├── AtencionPersonalizada.astro # Diferenciador de atención
│   │   ├── PorQueKernel.astro        # Razones para elegir Kernel
│   │   ├── Contacto.astro            # Sección de contacto (wrapper)
│   │   ├── InfoContacto.astro        # Datos de contacto y WhatsApp
│   │   ├── FormularioContacto.astro  # Formulario con validación client-side
│   │   └── Footer.astro              # Footer con links y redes
│   ├── layouts/
│   │   └── Layout.astro              # Layout global (SEO, fonts, CSS vars)
│   ├── pages/
│   │   └── index.astro               # Página principal (composición de secciones)
│   ├── types/
│   │   └── service.types.ts          # Tipos TypeScript para servicios
│   ├── utils/
│   │   ├── intersection-observer.ts  # Animaciones de scroll
│   │   ├── service.helpers.ts        # Helpers para servicios
│   │   └── service.validator.ts      # Validación de datos de servicios
│   └── data/
│       └── services.data.ts          # Catálogo de servicios PC
├── public/
│   ├── fonts/                        # Departure Mono (font local)
│   └── portfolio/                    # Screenshots de proyectos (.webp)
└── package.json
```

## Orden de secciones

1. **Navbar** - Logo + Desarrollo Web / Servicios PC / Contacto
2. **Hero** - Enfocado a desarrollo web como servicio principal
3. **Desarrollo Web** - Features y puntos destacados del servicio
4. **Paquetes Web** - Landing Esencial, Landing Pro, Sitio Profesional
5. **Portfolio** - Proyectos realizados con screenshots y links
6. **Proceso** - 5 pasos: idea, contenido, desarrollo, publicación, mantenimiento
7. **Servicios PC** - Bento grid con 8 servicios de soporte técnico
8. **Atención Personalizada** - Diferenciador
9. **Por Qué Kernel** - 4 razones de confianza
10. **Contacto** - Info + formulario (con optgroups web/PC)
11. **Footer** - Links a secciones web y PC + contacto + redes

## Instalación y Desarrollo

### Requisitos

- Node.js 18+
- npm o pnpm

### Comandos

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Configuración del Formulario

El formulario usa **FormSubmit** para enviar mensajes a `kernel.tech.rosario@gmail.com`.

**Primera vez:**

1. Enviar un mensaje de prueba
2. Revisar el email de verificación
3. Confirmar el link que llega

## Paleta de Colores

```css
--bg-primary: #0a0a0a      /* Fondo principal */
--bg-secondary: #1a1a1a    /* Fondo secundario */
--accent: #00ff88          /* Verde neón (principal) */
--accent-dim: #00cc6e      /* Verde oscuro */
--text-primary: #ffffff    /* Texto principal */
--text-muted: #999999      /* Texto secundario */
```

## Principios de Desarrollo

- Single Responsibility - Cada componente tiene una única función
- TypeScript estricto con tipos bien definidos
- Progressive enhancement - Contenido visible sin JS, animaciones como mejora
- Early returns para reducir anidamiento
- Funciones pequeñas y reutilizables
- Manejo robusto de errores

## Licencia

© 2025 Kernel. Todos los derechos reservados.

---

**Desarrollado con Astro**
