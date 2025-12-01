// utilidades para la gestión del Intersection Observer
// y la animación al hacer scroll

// Configuración del observador
export interface ObserverConfig {
  readonly threshold: number;
  readonly rootMargin: string;
}

// Configuración predeterminada del observador
const DEFAULT_OBSERVER_CONFIG: ObserverConfig = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
} as const;

// Clases CSS utilizadas para la animación
const ANIMATION_CLASSES = {
  TRIGGER: 'animate-on-scroll',
  VISIBLE: 'visible'
} as const;

// Verifica si el Intersection Observer es compatible con el navegador
export const isIntersectionObserverSupported = (): boolean => {
  // Verifica si se está ejecutando en un entorno de navegador
  if (typeof window === 'undefined') {
    return false;
  }

  // Verifica la existencia de la API
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver is not supported in this browser');
    return false;
  }

  return true;
};

/// Obtiene los elementos a observar según el selector proporcionado
const getElementsToObserve = (selector: string): Element[] => {
  if (!selector || typeof selector !== 'string') {
    console.error('Invalid selector provided to getElementsToObserve');
    return [];
  }

  try {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements);
  } catch (error) {
    console.error(`Failed to query elements with selector "${selector}":`, error);
    return [];
  }
};

/// Maneja las intersecciones detectadas por el observador
const handleIntersection = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
): void => {
  if (!entries || entries.length === 0) {
    return;
  }

  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    // Agrega la clase para activar la animación
    entry.target.classList.add(ANIMATION_CLASSES.VISIBLE);

    // Deja de observar el elemento una vez que es visible
    observer.unobserve(entry.target);
  });
};

/// Crea una instancia del Intersection Observer con la configuración dada
const createObserver = (config: ObserverConfig): IntersectionObserver | null => {
  if (!isIntersectionObserverSupported()) {
    return null;
  }

  try {
    return new IntersectionObserver(
      (entries, observer) => handleIntersection(entries, observer),
      config
    );
  } catch (error) {
    console.error('Failed to create IntersectionObserver:', error);
    return null;
  }
};

/// Observa los elementos seleccionados con el observador dado
const observeElements = (
  observer: IntersectionObserver | null,
  selector: string
): number => {
  if (!observer) {
    console.warn('Cannot observe elements: observer is null');
    return 0;
  }

  const elements = getElementsToObserve(selector);

  if (elements.length === 0) {
    console.info(`No elements found with selector "${selector}"`);
    return 0;
  }

  // Observa cada elemento
  let observedCount = 0;
  elements.forEach((element) => {
    try {
      observer.observe(element);
      observedCount++;
    } catch (error) {
      console.error('Failed to observe element:', element, error);
    }
  });

  return observedCount;
};

/// Desconecta el observador para liberar recursos
export const disconnectObserver = (observer: IntersectionObserver | null): void => {
  if (!observer) {
    return;
  }

  try {
    observer.disconnect();
  } catch (error) {
    console.error('Failed to disconnect observer:', error);
  }
};

/// Clase para gestionar la animación al hacer scroll usando Intersection Observer
export class ScrollAnimationObserver {
  private observer: IntersectionObserver | null = null;
  private config: ObserverConfig;
  private isInitialized = false;

  constructor(config: ObserverConfig = DEFAULT_OBSERVER_CONFIG) {
    this.config = config;
  }

  /// Inicializa el observador y comienza a observar los elementos
  public init(): boolean {
    if (this.isInitialized) {
      console.warn('Observer already initialized');
      return false;
    }
    if (!isIntersectionObserverSupported()) {
      return false;
    }

    // Limpia cualquier recurso previo
    this.cleanup();

    // Crea el observador
    this.observer = createObserver(this.config);

    // Verifica la creación del observador
    if (!this.observer) {
      console.error('Failed to initialize observer');
      return false;
    }

    // Observa los elementos con la clase de activación
    const observedCount = observeElements(
      this.observer,
      `.${ANIMATION_CLASSES.TRIGGER}`
    );

    this.isInitialized = true;

    console.info(`ScrollAnimationObserver initialized. Observing ${observedCount} elements.`);
    return true;
  }

  /// Limpia y desconecta el observador
  public cleanup(): void {
    if (this.observer) {
      disconnectObserver(this.observer);
      this.observer = null;
    }
    this.isInitialized = false;
  }

  /// Reinicia el observador
  public reinit(): boolean {
    this.cleanup();
    return this.init();
  }

  /// Verifica si el observador está activo
  public isActive(): boolean {
    return this.isInitialized && this.observer !== null;
  }
}

/// Inicializa y retorna una instancia del ScrollAnimationObserver
export const initScrollAnimations = (
  config: ObserverConfig = DEFAULT_OBSERVER_CONFIG
): ScrollAnimationObserver => {
  const observer = new ScrollAnimationObserver(config);
  observer.init();
  return observer;
};
