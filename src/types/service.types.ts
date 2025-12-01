
// Tamaños de tarjeta para el diseño en cuadrícula
export type ServiceCardSize = 'normal' | 'large';

// Datos de ruta SVG
export type SvgPathData = string;

// Representa un servicio ofrecido
export interface Service {
  readonly id: number;
  readonly titulo: string;
  readonly descripcion: string;
  readonly icon: SvgPathData;
  readonly size: ServiceCardSize;
}
// Resultado de la validación de datos
export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: ReadonlyArray<string>;
}

// Configuración de animación
export interface AnimationConfig {
  readonly baseDelay: number;
  readonly delayMultiplier: number;
}

// Configuración de icono SVG
export interface SvgIconConfig {
  readonly width: number;
  readonly height: number;
  readonly viewBox: string;
  readonly strokeWidth: number;
}
