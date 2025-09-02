// Ejercicio 1:
// Escribe una función que reciba un número y devuelva "Par" si el número es par, o "Impar" si es impar.
export function esParOImpar(numero: number): string {
  // Tu código aquí
}

// Ejercicio 2:
// Escribe una función que reciba una edad y devuelva "Mayor de edad" si la edad es 18 o más, o "Menor de edad" si es menor.
export function mayorOMenorEdad(edad: number): string {
  // Tu código aquí
}

// Ejercicio 3:
// Escribe una función que reciba dos números y devuelva el mayor de ellos.
export function numeroMayor(a: number, b: number): number {
  // Tu código aquí
}

// Ejercicio 4:
// Escribe una función que reciba un carácter y devuelva "Vocal" si es una vocal, o "Consonante" si es una consonante.
export function esVocalOConsonante(letra: string): string {
  // Tu código aquí
}

// Ejercicio 5:
// Escribe una función que reciba una nota (0-10) y devuelva "Aprobado" si la nota es 5 o más, o "Suspenso" si es menor.
export function aprobadoOSuspenso(nota: number): string {
  // Tu código aquí
}

// Ejercicio 6:
// Escribe una función que reciba un número y devuelva "Positivo" si es mayor que cero, "Negativo" si es menor que cero, o "Cero" si es igual a cero.
export function tipoDeNumero(numero: number): string {
  // Tu código aquí
}

// Ejercicio 7:
// Escribe una función que reciba dos números y devuelva "Iguales" si son iguales, o "Distintos" si son diferentes.
export function sonIguales(a: number, b: number): string {
  // Tu código aquí
}

// Ejercicio 8:
// Escribe una función que reciba el nombre de un día de la semana y devuelva "Fin de semana" si es sábado o domingo, o "Día laboral" si es cualquier otro.
export function tipoDeDia(dia: string): string {
  // Tu código aquí
}

// Ejercicio 9:
// Escribe una función que reciba una temperatura y devuelva "Frío" si es menor a 10, "Templado" si está entre 10 y 25, y "Calor" si es mayor a 25.
export function clasificarTemperatura(temp: number): string {
  // Tu código aquí
}

// Ejercicio 10:
// Escribe una función que reciba un año y devuelva "Bisiesto" si el año es bisiesto, o "No bisiesto" si no lo es.
export function esBisiesto(anio: number): string {
  if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    return "Bisiesto";
  } else {
    return "No bisiesto";
  }
}
