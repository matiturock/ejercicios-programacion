import { assertEquals } from "@std/assert";
import {
  aMayusculas,
  contarLargos,
  contarNegativos,
  duplicarArray,
  filtrarPares,
  invertirArray,
  maximoArray,
  promedioArray,
  stringMasLargo,
  sumaArray,
} from "./bucles.ts";

Deno.test("sumaArray: suma todos los elementos", () => {
  assertEquals(sumaArray([1, 2, 3, 4]), 10);
});

Deno.test("maximoArray: retorna el mayor elemento", () => {
  assertEquals(maximoArray([1, 5, 3, 2]), 5);
});

Deno.test("filtrarPares: retorna solo los pares", () => {
  assertEquals(filtrarPares([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
});

Deno.test("contarLargos: cuenta strings con más de 5 caracteres", () => {
  assertEquals(contarLargos(["hola", "programacion", "loop", "ejercicio"]), 2);
});

Deno.test("duplicarArray: duplica cada elemento", () => {
  assertEquals(duplicarArray([1, 2, 3]), [2, 4, 6]);
});

Deno.test("contarNegativos: cuenta elementos negativos", () => {
  assertEquals(contarNegativos([1, -2, 3, -4, 0]), 2);
});

Deno.test("aMayusculas: convierte todos los strings a mayúsculas", () => {
  assertEquals(aMayusculas(["hola", "mundo"]), ["HOLA", "MUNDO"]);
});

Deno.test("promedioArray: calcula el promedio", () => {
  assertEquals(promedioArray([2, 4, 6, 8]), 5);
});

Deno.test("invertirArray: invierte el array", () => {
  assertEquals(invertirArray([1, 2, 3]), [3, 2, 1]);
});

Deno.test("stringMasLargo: retorna el string más largo", () => {
  assertEquals(stringMasLargo(["uno", "tres", "programacion"]), "programacion");
});
