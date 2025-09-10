// Tests para los ejercicios de condicionales

import { assertEquals } from "@std/assert";
import {
  aprobadoOSuspenso,
  clasificarTemperatura,
  esBisiesto,
  esParOImpar,
  esVocalOConsonante,
  mayorOMenorEdad,
  numeroMayor,
  sonIguales,
  tipoDeDia,
  tipoDeNumero,
} from "./condicionales.ts";

Deno.test("esParOImpar: retorna 'Par' para números pares", () => {
  assertEquals(esParOImpar(4), "Par");
});
Deno.test("esParOImpar: retorna 'Impar' para números impares", () => {
  assertEquals(esParOImpar(3), "Impar");
});

Deno.test("mayorOMenorEdad: retorna 'Mayor de edad' para 18 o más", () => {
  assertEquals(mayorOMenorEdad(20), "Mayor de edad");
});
Deno.test("mayorOMenorEdad: retorna 'Menor de edad' para menos de 18", () => {
  assertEquals(mayorOMenorEdad(15), "Menor de edad");
});

Deno.test("numeroMayor: retorna el mayor de dos números", () => {
  assertEquals(numeroMayor(5, 8), 8);
  assertEquals(numeroMayor(10, 2), 10);
});

Deno.test("esVocalOConsonante: retorna 'Vocal' para vocales", () => {
  assertEquals(esVocalOConsonante("a"), "Vocal");
  assertEquals(esVocalOConsonante("E"), "Vocal");
});
Deno.test("esVocalOConsonante: retorna 'Consonante' para consonantes", () => {
  assertEquals(esVocalOConsonante("b"), "Consonante");
});

Deno.test("aprobadoOSuspenso: retorna 'Aprobado' para nota >= 5", () => {
  assertEquals(aprobadoOSuspenso(7), "Aprobado");
});
Deno.test("aprobadoOSuspenso: retorna 'Suspenso' para nota < 5", () => {
  assertEquals(aprobadoOSuspenso(3), "Suspenso");
});

Deno.test("tipoDeNumero: positivo, negativo o cero", () => {
  assertEquals(tipoDeNumero(5), "Positivo");
  assertEquals(tipoDeNumero(-2), "Negativo");
  assertEquals(tipoDeNumero(0), "Cero");
});

Deno.test("sonIguales: retorna 'Iguales' si son iguales", () => {
  assertEquals(sonIguales(4, 4), "Iguales");
});
Deno.test("sonIguales: retorna 'Distintos' si son diferentes", () => {
  assertEquals(sonIguales(4, 5), "Distintos");
});

Deno.test("tipoDeDia: retorna 'Fin de semana' para sábado y domingo", () => {
  assertEquals(tipoDeDia("sábado"), "Fin de semana");
  assertEquals(tipoDeDia("domingo"), "Fin de semana");
});
Deno.test("tipoDeDia: retorna 'Día laboral' para otros días", () => {
  assertEquals(tipoDeDia("lunes"), "Día laboral");
});

Deno.test("clasificarTemperatura: frío, templado o calor", () => {
  assertEquals(clasificarTemperatura(5), "Frío");
  assertEquals(clasificarTemperatura(15), "Templado");
  assertEquals(clasificarTemperatura(30), "Calor");
});

Deno.test("esBisiesto: retorna 'Bisiesto' para años bisiestos", () => {
  assertEquals(esBisiesto(2020), "Bisiesto");
});
Deno.test("esBisiesto: retorna 'No bisiesto' para años no bisiestos", () => {
  assertEquals(esBisiesto(2019), "No bisiesto");
});
