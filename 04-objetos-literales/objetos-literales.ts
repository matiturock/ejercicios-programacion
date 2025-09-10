/**
 * OBJETOS LITERALES EN TYPESCRIPT
 * =============================
 * 
 * ¿Qué son los objetos literales?
 * -----------------------------
 * Los objetos literales son colecciones de pares clave-valor que permiten 
 * agrupar datos relacionados en una única estructura. En TypeScript, podemos 
 * definir tipos específicos para estos objetos, lo que agrega seguridad y 
 * autocompletado en nuestro código.
 * 
 * Sintaxis básica:
 * --------------
 * const persona = {
 *    nombre: "Juan",
 *    edad: 25
 * };
 * 
 * Definición de tipos:
 * -----------------
 * type Persona = {
 *    nombre: string;
 *    edad: number;
 * };
 * 
 * interface Persona {
 *    nombre: string;
 *    edad: number;
 * }
 * 
 * Características principales:
 * ------------------------
 * 1. Propiedades opcionales:
 *    type Perfil = {
 *      nombre: string;
 *      telefono?: string; // Propiedad opcional
 *    };
 * 
 * 2. Propiedades de solo lectura:
 *    type Config = {
 *      readonly apiKey: string;
 *    };
 * 
 * 3. Index signatures:
 *    type Diccionario = {
 *      [key: string]: string;
 *    };
 * 
 * Casos de uso comunes:
 * ------------------
 * - Datos de usuario/perfil
 * - Configuraciones
 * - Respuestas de API
 * - Estados de aplicación
 * - DTOs (Data Transfer Objects)
 * - Modelos de datos
 * 
 * Métodos comunes:
 * -------------
 * - Object.keys(): Obtener array de claves
 * - Object.values(): Obtener array de valores
 * - Object.entries(): Obtener array de pares [clave, valor]
 * - Object.assign(): Combinar objetos
 * - Spread operator (...): Clonar/combinar objetos
 * 
 * Buenas prácticas:
 * --------------
 * 1. Usar interfaces para tipos reutilizables
 * 2. Definir tipos específicos en lugar de 'any'
 * 3. Utilizar propiedades opcionales cuando sea necesario
 * 4. Usar readonly para propiedades inmutables
 * 5. Evitar la modificación directa de objetos
 * 
 * Ejemplo de uso:
 * ------------
 * type Producto = {
 *    id: number;
 *    nombre: string;
 *    precio: number;
 * };
 * 
 * function calcularTotal(productos: Producto[]): number {
 *    return productos.reduce((total, prod) => total + prod.precio, 0);
 * }
 */

// Ejercicio 1:
// Define un tipo Persona con nombre (string) y edad (number).
// Escribe una función que reciba un objeto Persona y devuelva un string con el formato "Nombre tiene Edad años".
export type Persona = {
  nombre: string;
  edad: number;
};
export function describirPersona(persona: Persona): string {
  return "";
}

// Ejercicio 2:
// Define un tipo Producto con nombre (string) y precio (number).
// Escribe una función que reciba un array de Producto y devuelva el producto más caro.
export type Producto = {
  nombre: string;
  precio: number;
};
export function productoMasCaro(productos: Producto[]): Producto {
  return { nombre: "", precio: 0 };
}

// Ejercicio 3:
// Define un tipo Libro con titulo (string) y paginas (number).
// Escribe una función que reciba un array de Libro y devuelva la suma total de páginas.
export type Libro = {
  titulo: string;
  paginas: number;
};
export function totalPaginas(libros: Libro[]): number {
  return 0;
}

// Ejercicio 4:
// Define un tipo Rectangulo con ancho y alto (number).
// Escribe una función que reciba un Rectangulo y devuelva su área.
export type Rectangulo = {
  ancho: number;
  alto: number;
};
export function areaRectangulo(rect: Rectangulo): number {
  return 0;
}

// Ejercicio 5:
// Define un tipo Usuario con username (string) y activo (boolean).
// Escribe una función que reciba un array de Usuario y devuelva la cantidad de usuarios activos.
export type Usuario = {
  username: string;
  activo: boolean;
};
export function contarActivos(usuarios: Usuario[]): number {
  return 0;
}
