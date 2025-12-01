
import type { Service } from '../types/service.types';

// catalogo de servicios ofrecidos
export const SERVICES_CATALOG: ReadonlyArray<Service> = [
  {
    id: 1,
    titulo: 'Reparación de PC y Notebooks',
    descripcion: 'Solución de problemas de hardware y software. Cambio de componentes dañados.',
    icon: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />',
    size: 'large' as const
  },
  {
    id: 2,
    titulo: 'Limpieza y Pasta Térmica',
    descripcion: 'Mantenimiento preventivo para óptimo rendimiento térmico.',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    size: 'normal' as const
  },
  {
    id: 3,
    titulo: 'Asesoramiento Técnico',
    descripcion: 'Te ayudo a elegir los mejores componentes según tu presupuesto y necesidades.',
    icon: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    size: 'normal' as const
  },
  {
    id: 4,
    titulo: 'Armado de PC Personalizado',
    descripcion: 'Ensamblado profesional de tu PC gamer, workstation o de uso general.',
    icon: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18M3 9h18M3 15h18"/>',
    size: 'large' as const
  },
  {
    id: 5,
    titulo: 'Instalación de Sistemas',
    descripcion: 'Windows o Linux adaptado a tu hardware. Drivers y optimización incluida.',
    icon: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    size: 'normal' as const
  },
  {
    id: 6,
    titulo: 'Optimización y Actualización',
    descripcion: 'Mejorá el rendimiento de tu equipo. Upgrade de RAM, SSD y más.',
    icon: '<path d="m12 19-7-7 7-7M19 12H5"/>',
    size: 'normal' as const
  },
  {
    id: 7,
    titulo: 'Recuperación de Datos',
    descripcion: 'Rescate de información importante de discos dañados.',
    icon: '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16M21 21v-5h-5"/>',
    size: 'normal' as const
  },
  {
    id: 8,
    titulo: 'Diagnóstico de Fallas',
    descripcion: 'Identificación precisa del problema. Diagnóstico sin cargo.',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    size: 'normal' as const
  }
];

/// Obtiene todos los servicios del catálogo
export const getAllServices = (): Service[] => {
  return [...SERVICES_CATALOG];
};

/// Obtiene la cantidad total de servicios en el catálogo
export const getServicesCount = (): number => {
  return SERVICES_CATALOG.length;
};
