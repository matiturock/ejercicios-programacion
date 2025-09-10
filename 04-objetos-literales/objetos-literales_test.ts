import { assertEquals } from "@std/assert";
import {
  areaRectangulo,
  contarActivos,
  describirPersona,
  Libro,
  Persona,
  Producto,
  productoMasCaro,
  Rectangulo,
  totalPaginas,
  Usuario,
} from "./objetos-literales.ts";

Deno.test("describirPersona: formato correcto", () => {
  const persona: Persona = { nombre: "Ana", edad: 30 };
  assertEquals(describirPersona(persona), "Ana tiene 30 años");
});

Deno.test("productoMasCaro: retorna el producto más caro", () => {
  const productos: Producto[] = [
    { nombre: "A", precio: 10 },
    { nombre: "B", precio: 25 },
    { nombre: "C", precio: 15 },
  ];
  assertEquals(productoMasCaro(productos), { nombre: "B", precio: 25 });
});

Deno.test("totalPaginas: suma total de páginas", () => {
  const libros: Libro[] = [
    { titulo: "Libro1", paginas: 100 },
    { titulo: "Libro2", paginas: 200 },
  ];
  assertEquals(totalPaginas(libros), 300);
});

Deno.test("areaRectangulo: calcula el área", () => {
  const rect: Rectangulo = { ancho: 5, alto: 4 };
  assertEquals(areaRectangulo(rect), 20);
});

Deno.test("contarActivos: cuenta usuarios activos", () => {
  const usuarios: Usuario[] = [
    { username: "user1", activo: true },
    { username: "user2", activo: false },
    { username: "user3", activo: true },
  ];
  assertEquals(contarActivos(usuarios), 2);
});
