
import type { Service, ValidationResult, SvgPathData } from '../types/service.types';

// validariones auxiliares
const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === 'string' && value.trim().length > 0;
};

// verifica si un valor es un entero positivo
const isPositiveInteger = (value: unknown): value is number => {
  return typeof value === 'number' && Number.isInteger(value) && value > 0;
};

// valida si una ruta SVG es válida (básico)
const isValidSvgPath = (path: unknown): path is SvgPathData => {
  if (!isNonEmptyString(path)) {
    return false;
  }

  // Expresión regular simple para validar comandos SVG básicos
  const svgPathRegex = /^[MmLlHhVvCcSsQqTtAaZz0-9\s,.-]+$/;
  return svgPathRegex.test(path);
};

// valida si el tamaño es válido
const isValidSize = (size: unknown): boolean => {
  return size === 'normal' || size === 'large';
};

// valida un objeto de servicio individual
export const validateService = (service: unknown): ValidationResult => {
  const errors: string[] = [];

  if (!service || typeof service !== 'object') {
    return {
      isValid: false,
      errors: ['Service must be a valid object']
    };
  }

  const serviceObj = service as Record<string, unknown>;

  if (!isPositiveInteger(serviceObj.id)) {
    errors.push(`Invalid ID: must be a positive integer`);
  }

  if (!isNonEmptyString(serviceObj.titulo)) {
    errors.push(`Invalid titulo: must be a non-empty string`);
  }

  if (!isNonEmptyString(serviceObj.descripcion)) {
    errors.push(`Invalid descripcion: must be a non-empty string`);
  }

  if (!isValidSvgPath(serviceObj.icon)) {
    errors.push(`Invalid icon: must be a valid SVG path string`);
  }

  if (!isValidSize(serviceObj.size)) {
    errors.push(`Invalid size: must be 'normal' or 'large'`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// valida un array de servicios
export const validateServiceArray = (services: unknown): ValidationResult => {
  if (!Array.isArray(services)) {
    return {
      isValid: false,
      errors: ['Services must be an array']
    };
  }

  if (services.length === 0) {
    return {
      isValid: false,
      errors: ['Services array cannot be empty']
    };
  }

  const allErrors: string[] = [];

  services.forEach((service, index) => {
    const result = validateService(service);
    if (!result.isValid) {
      allErrors.push(`Service at index ${index}: ${result.errors.join(', ')}`);
    }
  });

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
};

// verifica si hay IDs duplicados en el array de servicios
export const hasDuplicateIds = (services: Service[]): boolean => {
  const ids = new Set<number>();

  for (const service of services) {
    if (ids.has(service.id)) {
      return true;
    }
    ids.add(service.id);
  }

  return false;
};

/// Asegura que el array de servicios es válido y no tiene IDs duplicados
export function assertValidServices(services: unknown): asserts services is Service[] {
  const arrayValidation = validateServiceArray(services);

  if (!arrayValidation.isValid) {
    throw new Error(`Service validation failed:\n${arrayValidation.errors.join('\n')}`);
  }

  const validServices = services as Service[];

  if (hasDuplicateIds(validServices)) {
    throw new Error('Duplicate service IDs detected');
  }
}
