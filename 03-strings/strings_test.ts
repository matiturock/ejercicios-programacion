import { assertEquals } from "@std/assert";
import {
  reverseString,
  countVowels,
  isPalindrome,
  capitalizeWords,
  removeSpaces,
  countOccurrences,
  truncateString,
  convertToCamelCase,
  extractEmails,
  maskCreditCard
} from "./strings.ts";

Deno.test("debe invertir una cadena de texto", () => {
  assertEquals(reverseString("hello"), "olleh");
  assertEquals(reverseString("TypeScript"), "tpircSepyT");
});

Deno.test("debe contar el número de vocales en una cadena", () => {
  assertEquals(countVowels("hello"), 2);
  assertEquals(countVowels("TypeScript"), 2);
  assertEquals(countVowels("AEIOU"), 5);
});

Deno.test("debe verificar si una cadena es un palíndromo", () => {
  assertEquals(isPalindrome("radar"), true);
  assertEquals(isPalindrome("A man a plan a canal Panama"), true);
  assertEquals(isPalindrome("hello"), false);
});

Deno.test("debe capitalizar la primera letra de cada palabra", () => {
  assertEquals(capitalizeWords("hello world"), "Hello World");
  assertEquals(capitalizeWords("typescript is awesome"), "Typescript Is Awesome");
});

Deno.test("debe eliminar todos los espacios de una cadena", () => {
  assertEquals(removeSpaces("hello world"), "helloworld");
  assertEquals(removeSpaces("   spaces   everywhere   "), "spaceseverywhere");
});

Deno.test("debe contar las ocurrencias de un carácter en una cadena", () => {
  assertEquals(countOccurrences("hello", "l"), 2);
  assertEquals(countOccurrences("typescript", "t"), 2);
});

Deno.test("debe truncar una cadena y agregar puntos suspensivos", () => {
  assertEquals(truncateString("hello world", 5), "hello...");
  assertEquals(truncateString("short", 10), "short");
});

Deno.test("debe convertir una cadena a formato camelCase", () => {
  assertEquals(convertToCamelCase("hello-world"), "helloWorld");
  assertEquals(convertToCamelCase("foo_bar_baz"), "fooBarBaz");
});

Deno.test("debe extraer direcciones de correo electrónico de una cadena", () => {
  const text = "Contact us at test@example.com or support@test.com";
  assertEquals(
    extractEmails(text),
    ["test@example.com", "support@test.com"]
  );
});

Deno.test("debe enmascarar un número de tarjeta de crédito", () => {
  assertEquals(maskCreditCard("4111111111111111"), "************1111");
  assertEquals(maskCreditCard("378282246310005"), "***********0005");
});