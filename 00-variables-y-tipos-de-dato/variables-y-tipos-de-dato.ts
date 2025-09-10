/**
 * VARIABLES Y TIPOS DE DATOS EN TYPESCRIPT
 * ======================================
 * 
 * ¿Qué son las variables?
 * ----------------------
 * Las variables son contenedores para almacenar datos. En TypeScript,
 * las variables deben declararse con un tipo específico, lo que ayuda
 * a prevenir errores durante el desarrollo.
 * 
 * Declaración de variables:
 * ----------------------
 * - let: Para variables que pueden cambiar
 * - const: Para variables que no cambiarán
 * - var: (no recomendado) Scope function-level
 * 
 * Tipos de datos básicos:
 * --------------------
 * 1. number:
 *    - Enteros y decimales
 *    - let edad: number = 25;
 *    - let precio: number = 99.99;
 * 
 * 2. string:
 *    - Texto
 *    - let nombre: string = "Juan";
 *    - let mensaje: string = `Hola ${nombre}`;
 * 
 * 3. boolean:
 *    - true o false
 *    - let activo: boolean = true;
 * 
 * 4. null y undefined:
 *    - Valores especiales
 *    - let nulo: null = null;
 *    - let indefinido: undefined = undefined;
 * 
 * 5. any:
 *    - Cualquier tipo (evitar su uso)
 *    - let cualquiera: any = 4;
 * 
 * 6. void:
 *    - Ausencia de valor
 *    - function saludar(): void { }
 * 
 * Casos de uso comunes:
 * ------------------
 * - Almacenar datos de usuario
 * - Contadores y acumuladores
 * - Estados de aplicación
 * - Configuraciones
 * - Resultados de cálculos
 * 
 * Type Assertions:
 * -------------
 * - as Type
 * - <Type>variable
 * 
 * Union Types:
 * ----------
 * - let id: number | string;
 * 
 * Type Aliases:
 * -----------
 * type Punto = {
 *   x: number;
 *   y: number;
 * };
 */

// Ejercicio 1: Crear una función que reciba un nombre y retorne un saludo
export function saludar(nombre: string): string {
  return "";
}

// Ejercicio 2: Crear una función que calcule el área de un rectángulo
export function calcularAreaRectangulo(base: number, altura: number): number {
  return 0;
}

// Ejercicio 3: Crear una función que verifique si un número es positivo
export function esPositivo(numero: number): boolean {
  return false;
}

// Ejercicio 4: Crear una función que concatene dos strings
export function concatenarStrings(str1: string, str2: string): string {
  return "";
}

// Ejercicio 5: Crear una función que determine si un valor es null
export function esNull(valor: any): boolean {
  return false;
}

// Ejercicio 6: Crear una función que convierta un número a string
export function numeroAString(numero: number): string {
  return "";
}

// Ejercicio 7: Crear una función que determine si un string está vacío
export function stringVacio(str: string): boolean {
  return false;
}

// Ejercicio 8: Crear una función que sume dos números opcionales
export function sumarOpcionales(a?: number, b?: number): number {
  return 0;
}

// Ejercicio 9: Crear una función que maneje union types
export function procesarId(id: number | string): string {
  return "";
}

// Ejercicio 10: Crear una función que use type assertion
export function obtenerLongitud(obj: any): number {
  return 0;
}