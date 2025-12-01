# 🖥️ Kernel - Landing Page

Landing page para **Kernel**, servicio técnico de reparación de PC y notebooks en Rosario, Santa Fe.

## 🚀 Tecnologías

- **[Astro](https://astro.build)** - Framework web moderno y rápido
- **TypeScript** - Tipado estricto y seguridad
- **CSS moderno** - Variables CSS, Grid, Flexbox
- **FormSubmit** - Envío de formularios sin backend

## ✨ Características

- 🎨 Diseño moderno y minimalista con estética tech
- 📱 Totalmente responsive (mobile-first)
- ⚡ Carga ultrarrápida y optimizada
- 🎭 Animaciones suaves al hacer scroll
- 📧 Formulario de contacto funcional
- 🔍 SEO optimizado
- ♿ Accesible (ARIA labels, semántica HTML)

## 📦 Estructura del Proyecto

```
kernel-landing/
├── src/
│   ├── components/          # Componentes Astro
│   │   ├── Hero.astro
│   │   ├── Servicios.astro
│   │   ├── DesarrolloWeb.astro
│   │   ├── Contacto.astro
│   │   └── Footer.astro
│   ├── layouts/             # Layout principal
│   ├── pages/               # Páginas del sitio
│   ├── types/               # Tipos TypeScript
│   ├── utils/               # Utilidades y helpers
│   └── data/                # Datos estáticos
├── public/                  # Archivos estáticos
└── package.json
```

## 🛠️ Instalación y Desarrollo

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

## 📬 Configuración del Formulario

El formulario usa **FormSubmit** para enviar mensajes a `kernel.tech.rosario@gmail.com`.

**Primera vez:**

1. Enviar un mensaje de prueba
2. Revisar el email de verificación
3. Confirmar el link que llega

## 🎨 Paleta de Colores

```css
--bg-primary: #0a0a0a      /* Fondo principal */
--bg-secondary: #1a1a1a    /* Fondo secundario */
--accent: #00ff88          /* Verde neón (principal) */
--accent-dim: #00cc6e      /* Verde oscuro */
--text-primary: #ffffff    /* Texto principal */
--text-muted: #999999      /* Texto secundario */
```

## 🏗️ Principios de Desarrollo

El código sigue principios **SOLID** y mejores prácticas:

- ✅ Single Responsibility - Cada componente tiene una única función
- ✅ TypeScript estricto con tipos bien definidos
- ✅ Early returns para reducir anidamiento
- ✅ Funciones pequeñas y reutilizables
- ✅ Manejo robusto de errores
- ✅ Código documentado con JSDoc

## 📄 Licencia

© 2024 Kernel. Todos los derechos reservados.

---

**Desarrollado con** 💚 **usando Astro**
