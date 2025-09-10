import { assertEquals } from "@std/assert";
import {
  Animal,
  Circulo,
  CuentaBancaria,
  Empleado,
  Estudiante,
  Libro,
  Persona,
  Producto,
  Rectangulo,
  Vehiculo,
} from "./clases.ts";

Deno.test("Persona.saludar retorna saludo correcto", () => {
  const p = new Persona("Juan", 25);
  assertEquals(p.saludar(), "Hola, soy Juan");
});

Deno.test("Rectangulo.area retorna área correcta", () => {
  const r = new Rectangulo(4, 5);
  assertEquals(r.area(), 20);
});

Deno.test("CuentaBancaria depositar y retirar", () => {
  const c = new CuentaBancaria(100);
  c.depositar(50);
  c.retirar(30);
  assertEquals(c.saldo, 120);
});

Deno.test("Libro.leer retorna mensaje correcto", () => {
  const l = new Libro("El Quijote", 500);
  assertEquals(l.leer(), "Leyendo El Quijote");
});

Deno.test("Producto.aplicarDescuento aplica descuento", () => {
  const prod = new Producto("Lapiz", 10);
  prod.aplicarDescuento(20);
  assertEquals(prod.precio, 8);
});

Deno.test("Animal.sonido retorna mensaje correcto", () => {
  const a = new Animal("Perro");
  assertEquals(a.sonido(), "Sonido de Perro");
});

Deno.test("Estudiante.promedio calcula promedio", () => {
  const e = new Estudiante("Ana", [10, 8, 9]);
  assertEquals(e.promedio(), 9);
});

Deno.test("Empleado.aumentarSalario suma correctamente", () => {
  const emp = new Empleado("Luis", 1000);
  emp.aumentarSalario(200);
  assertEquals(emp.salario, 1200);
});

Deno.test("Circulo.area calcula área correctamente", () => {
  const c = new Circulo(2);
  assertEquals(Math.round(c.area()), 13); // área = pi * r^2
});

Deno.test("Vehiculo.acelerar suma velocidad", () => {
  const v = new Vehiculo("Toyota", 50);
  v.acelerar(30);
  assertEquals(v.velocidad, 80);
});
