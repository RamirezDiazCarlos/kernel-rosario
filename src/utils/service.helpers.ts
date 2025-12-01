// utilidades para manejar servicios y animaciones

import type { Service, AnimationConfig, SvgIconConfig } from '../types/service.types';

// Configuración predeterminada de animación
const DEFAULT_ANIMATION_CONFIG: AnimationConfig = {
  baseDelay: 0,
  delayMultiplier: 0.1
} as const;

// Configuración predeterminada de icono SVG
const DEFAULT_SVG_CONFIG: SvgIconConfig = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  strokeWidth: 2
} as const;

// Calcula el retraso de animación basado en el índice
/**
 * calcular el retraso de animación basado en el índice
 * @param index - index de la animación
 * @param config - configuración de animación opcional
 * @returns css retraso como cadena (ej. "0.3s")
 */
export const calculateAnimationDelay = (
  index: number,
  config: AnimationConfig = DEFAULT_ANIMATION_CONFIG
): string => {
  if (index < 0) {
    console.warn(`Invalid animation index: ${index}. Using 0.`);
    return '0s';
  }

  const delay = config.baseDelay + config.delayMultiplier * (index + 1);
  return `${delay}s`;
};

/**
 *grenera las clases CSS para una tarjeta de servicio
 * usar tamaño para determinar clases adicionales
 *
 * @param service - objeto de servicio
 * @returns cadena de clases CSS
 */
export const generateServiceCardClasses = (service: Service): string => {
  if (!service) {
    console.error('Cannot generate classes for undefined service');
    return 'servicio-card animate-on-scroll';
  }

  const baseClasses = ['servicio-card', 'animate-on-scroll'];

  if (service.size === 'large') {
    baseClasses.push('large');
  }

  return baseClasses.join(' ');
};

/**
 * Obtiene la configuración completa del icono SVG
 * Combina valores predeterminados con anulaciones proporcionadas
 *
 * @param overrides - anulaciones parciales para la configuración SVG
 * @returns configuración completa del icono SVG
 */
export const getSvgIconConfig = (
  overrides: Partial<SvgIconConfig> = {}
): SvgIconConfig => {
  return {
    ...DEFAULT_SVG_CONFIG,
    ...overrides
  };
};

/**
 * Busca un servicio por ID
 * Usa validación temprana para entradas inválidas
 *
 * @param services -  Array de servicios
 * @param id - ID del servicio a buscar
 * @returns Servicio encontrado o null
 */
export const findServiceById = (
  services: ReadonlyArray<Service>,
  id: number
): Service | null => {
  if (!Array.isArray(services) || services.length === 0) {
    return null;
  }

  if (!Number.isInteger(id) || id <= 0) {
    console.warn(`Invalid service ID: ${id}`);
    return null;
  }

  const service = services.find(s => s.id === id);
  return service ?? null;
};

/**
 * Filtra servicios por tamaño
 * 
 *
 * @param services - Array de servicios
 * @param size - Tamaño a filtrar ('normal' | 'large')
 * @returns Array de servicios filtrados
 */
export const filterServicesBySize = (
  services: ReadonlyArray<Service>,
  size: 'normal' | 'large'
): ReadonlyArray<Service> => {
  if (!Array.isArray(services)) {
    console.error('Invalid services array');
    return [];
  }

  return services.filter(service => service.size === size);
};

/**
 * Clona el array de servicios
 * Realiza una copia profunda para evitar mutaciones
 *
 * @param services - Array de servicios a clonar
 * @returns Nuevo array de servicios clonados
 */
export const cloneServices = (services: ReadonlyArray<Service>): Service[] => {
  if (!Array.isArray(services)) {
    console.error('Cannot clone invalid services array');
    return [];
  }

  return services.map(service => ({ ...service }));
};

/**
 * Sanitiza contenido SVG para prevenir XSS
 *
 * @param content - Contenido SVG a sanitizar
 * @returns Contenido SVG sanitizado
 */
export const sanitizeSvgPath = (content: string): string => {
  if (typeof content !== 'string') {
    console.warn('Cannot sanitize non-string content');
    return '';
  }

  // Elimina etiquetas de script y atributos peligrosos
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};
