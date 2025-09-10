/**
 * CONDICIONALES EN TYPESCRIPT
 * =========================
 * 
 * ¿Qué son las estructuras condicionales?
 * ------------------------------------
 * Las estructuras condicionales permiten ejecutar diferentes bloques de código
 * basándose en condiciones booleanas (verdadero/falso).
 * 
 * Tipos de condicionales:
 * --------------------
 * 1. if...else:
 *    if (condición) {
 *      // código si es verdadero
 *    } else {
 *      // código si es falso
 *    }
 * 
 * 2. else if (múltiples condiciones):
 *    if (condición1) {
 *      // código
 *    } else if (condición2) {
 *      // código
 *    } else {
 *      // código
 *    }
 * 
 * 3. switch:
 *    switch(valor) {
 *      case 1:
 *        // código
 *        break;
 *      default:
 *        // código
 *    }
 * 
 * 4. Operador ternario:
 *    condición ? valorSiVerdadero : valorSiFalso
 * 
 * Operadores de comparación:
 * -----------------------
 * === : Igualdad estricta
 * !== : Desigualdad estricta
 * >   : Mayor que
 * <   : Menor que
 * >=  : Mayor o igual que
 * <=  : Menor o igual que
 * 
 * Operadores lógicos:
 * ----------------
 * && : AND (y)
 * || : OR (o)
 * !  : NOT (no)
 * 
 * Casos de uso comunes:
 * ------------------
 * - Validación de formularios
 * - Control de acceso
 * - Lógica de juegos
 * - Manejo de errores
 * - Filtrado de datos
 * 
 * Buenas prácticas:
 * --------------
 * 1. Usar === en lugar de == para comparaciones
 * 2. Mantener las condiciones simples y legibles
 * 3. Evitar anidar demasiados if/else
 * 4. Considerar el uso de switch para múltiples casos
 * 5. Usar constantes para valores mágicos
 */

// Ejercicio 1:
export function esParOImpar(numero: number): string {
  return numero % 2 === 0 ? "Par" : "Impar";
}

// Ejercicio 2:
export function mayorOMenorEdad(edad: number): string {
  if (edad >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

// Ejercicio 3:
export function numeroMayor(a: number, b: number): number {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Ejercicio 4:
export function esVocalOConsonante(letra: string): string {
  const vocales = "aeiouáéíóú";
  const consonantes = "bcdfghjklmnñopqrstvwxyz";

  letra = letra.toLowerCase();

  if (vocales.includes(letra)) {
    return "Vocal";
  } else if (consonantes.includes(letra)) {
    return "Consonante";
  } else {
    return "Caracter desconocido";
  }
}

// Ejercicio 5:
export function aprobadoOSuspenso(nota: number): string {
  return nota >= 5 ? "Aprobado" : "Suspenso";
}

// Ejercicio 6:
export function tipoDeNumero(numero: number): string {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
}

// Ejercicio 7:
export function sonIguales(a: number, b: number): string {
  return a === b ? "Iguales" : "Distintos";
}

// Ejercicio 8:
export function tipoDeDia(dia: string): string {
  const diasLaborales = ["lunes", "martes", "miércoles", "jueves", "viernes"];
  const finesDeSemana = ["sábado", "domingo"];

  dia = dia.toLowerCase();

  if (diasLaborales.includes(dia)) {
    return "Día laboral";
  } else if (finesDeSemana.includes(dia)) {
    return "Fin de semana";
  } else {
    return "Día desconocido";
  }
}

// Ejercicio 9:
export function clasificarTemperatura(temp: number): string {
  if (temp < 10) {
    return "Frío";
  } else if (temp >= 10 && temp <= 25) {
    return "Templado";
  } else {
    return "Calor";
  }
}

// Ejercicio 10:
export function esBisiesto(anio: number): string {
  if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    return "Bisiesto";
  } else {
    return "No bisiesto";
  }
}
