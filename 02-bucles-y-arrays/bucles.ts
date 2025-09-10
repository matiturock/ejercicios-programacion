/**
 * BUCLES Y ARRAYS EN TYPESCRIPT
 * ============================
 * 
 * ¿Qué son los Arrays?
 * -------------------
 * Un array es una estructura de datos que permite almacenar múltiples elementos
 * en una única variable. En TypeScript, los arrays pueden ser tipados para
 * contener elementos específicos.
 * 
 * Declaración:
 * - let numeros: number[] = [1, 2, 3];
 * - let nombres: Array<string> = ["Ana", "Juan"];
 * 
 * Casos de uso comunes:
 * -------------------
 * - Listas de usuarios
 * - Colección de resultados
 * - Manejo de datos tabulares
 * - Histórico de operaciones
 * - Almacenamiento de coordenadas
 * 
 * Métodos importantes de Array:
 * --------------------------
 * - push(): Agrega elementos al final
 * - pop(): Elimina y retorna el último elemento
 * - shift(): Elimina y retorna el primer elemento
 * - unshift(): Agrega elementos al inicio
 * - splice(): Modifica el array (eliminar/agregar elementos)
 * - slice(): Crea una copia de una porción del array
 * - map(): Crea un nuevo array transformando elementos
 * - filter(): Crea un array con elementos que cumplen una condición
 * - reduce(): Reduce el array a un único valor
 * - forEach(): Ejecuta una función para cada elemento
 * 
 * Bucles en TypeScript:
 * -------------------
 * 1. for tradicional:
 *    for (let i = 0; i < array.length; i++) {
 *      // código
 *    }
 * 
 * 2. for...of (para elementos):
 *    for (const elemento of array) {
 *      // código
 *    }
 * 
 * 3. for...in (para índices):
 *    for (const indice in array) {
 *      // código
 *    }
 * 
 * 4. while:
 *    while (condición) {
 *      // código
 *    }
 * 
 * 5. do...while:
 *    do {
 *      // código
 *    } while (condición);
 * 
 * Métodos funcionales:
 * ------------------
 * - forEach(): Para iteración simple
 * - map(): Para transformar elementos
 * - filter(): Para filtrar elementos
 * - reduce(): Para acumular valores
 * - some(): Para verificar si algún elemento cumple una condición
 * - every(): Para verificar si todos los elementos cumplen una condición
 */

// Ejercicio 1:
// Escribe una función que reciba un array de números y devuelva la suma de todos sus elementos.
export function sumaArray(arr: number[]): number {
  let suma = 0;
  arr.forEach(function (numero) {
    suma += numero;
  });
  return suma;
}


// Ejercicio 2:
// Escribe una función que reciba un array de números y devuelva el mayor elemento.
export function maximoArray(arr: number[]): number {
  return 0;
}

// Ejercicio 3:
// Escribe una función que reciba un array de números y devuelva un nuevo array con solo los números pares.
export function filtrarPares(arr: number[]): number[] {
  return [];
}

// Ejercicio 4:
// Escribe una función que reciba un array de strings y devuelva la cantidad de strings que tienen más de 5 caracteres.
export function contarLargos(arr: string[]): number {
  return 0;
}

// Ejercicio 5:
// Escribe una función que reciba un array de números y devuelva un nuevo array con cada elemento multiplicado por 2.
export function duplicarArray(arr: number[]): number[] {
  return [];
}

// Ejercicio 6:
// Escribe una función que reciba un array de números y devuelva la cantidad de elementos negativos.
export function contarNegativos(arr: number[]): number {
  return 0;
}

// Ejercicio 7:
// Escribe una función que reciba un array de strings y devuelva un array con los strings en mayúsculas.
export function aMayusculas(arr: string[]): string[] {
  return [];
}

// Ejercicio 8:
// Escribe una función que reciba un array de números y devuelva el promedio de sus elementos.
export function promedioArray(arr: number[]): number {
  return 0;
}

// Ejercicio 9:
// Escribe una función que reciba un array de números y devuelva un array con los elementos en orden inverso.
export function invertirArray(arr: number[]): number[] {
  return [];
}

// Ejercicio 10:
// Escribe una función que reciba un array de strings y devuelva el string más largo.
export function stringMasLargo(arr: string[]): string {
  return "";
}
