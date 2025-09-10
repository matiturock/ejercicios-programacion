import { assertEquals } from "@std/assert";
import {
  saludar,
  calcularAreaRectangulo,
  esPositivo,
  concatenarStrings,
  esNull,
  numeroAString,
  stringVacio,
  sumarOpcionales,
  procesarId,
  obtenerLongitud
} from "./variables-y-tipos-de-dato.ts";

Deno.test("saludar debe retornar un saludo con el nombre", () => {
  assertEquals(saludar("Juan"), "¡Hola Juan!");
  assertEquals(saludar("María"), "¡Hola María!");
});

Deno.test("calcularAreaRectangulo debe calcular el área correctamente", () => {
  assertEquals(calcularAreaRectangulo(5, 3), 15);
  assertEquals(calcularAreaRectangulo(2, 2), 4);
});

Deno.test("esPositivo debe identificar números positivos", () => {
  assertEquals(esPositivo(5), true);
  assertEquals(esPositivo(-3), false);
  assertEquals(esPositivo(0), false);
});

Deno.test("concatenarStrings debe unir dos strings", () => {
  assertEquals(concatenarStrings("Hola", "Mundo"), "HolaMundo");
  assertEquals(concatenarStrings("TypeScript", "2024"), "TypeScript2024");
});

Deno.test("esNull debe identificar valores null", () => {
  assertEquals(esNull(null), true);
  assertEquals(esNull(undefined), false);
  assertEquals(esNull(""), false);
});

Deno.test("numeroAString debe convertir números a strings", () => {
  assertEquals(numeroAString(123), "123");
  assertEquals(numeroAString(-456), "-456");
  assertEquals(numeroAString(0), "0");
});

Deno.test("stringVacio debe identificar strings vacíos", () => {
  assertEquals(stringVacio(""), true);
  assertEquals(stringVacio("texto"), false);
  assertEquals(stringVacio(" "), false);
});

Deno.test("sumarOpcionales debe manejar parámetros opcionales", () => {
  assertEquals(sumarOpcionales(1, 2), 3);
  assertEquals(sumarOpcionales(1), 1);
  assertEquals(sumarOpcionales(), 0);
});

Deno.test("procesarId debe manejar union types", () => {
  assertEquals(procesarId(123), "ID: 123");
  assertEquals(procesarId("ABC"), "ID: ABC");
});

Deno.test("obtenerLongitud debe usar type assertion correctamente", () => {
  assertEquals(obtenerLongitud("Hola"), 4);
  assertEquals(obtenerLongitud([1, 2, 3]), 3);
});