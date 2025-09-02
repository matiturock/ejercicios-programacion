// Ejercicio 1:
// Define un tipo Persona con nombre (string) y edad (number).
// Escribe una función que reciba un objeto Persona y devuelva un string con el formato "Nombre tiene Edad años".
export type Persona = {
  nombre: string;
  edad: number;
};
export function describirPersona(persona: Persona): string {
  // Tu código aquí
}

// Ejercicio 2:
// Define un tipo Producto con nombre (string) y precio (number).
// Escribe una función que reciba un array de Producto y devuelva el producto más caro.
export type Producto = {
  nombre: string;
  precio: number;
};
export function productoMasCaro(productos: Producto[]): Producto {
  // Tu código aquí
}

// Ejercicio 3:
// Define un tipo Libro con titulo (string) y paginas (number).
// Escribe una función que reciba un array de Libro y devuelva la suma total de páginas.
export type Libro = {
  titulo: string;
  paginas: number;
};
export function totalPaginas(libros: Libro[]): number {
  // Tu código aquí
}

// Ejercicio 4:
// Define un tipo Rectangulo con ancho y alto (number).
// Escribe una función que reciba un Rectangulo y devuelva su área.
export type Rectangulo = {
  ancho: number;
  alto: number;
};
export function areaRectangulo(rect: Rectangulo): number {
  // Tu código aquí
}

// Ejercicio 5:
// Define un tipo Usuario con username (string) y activo (boolean).
// Escribe una función que reciba un array de Usuario y devuelva la cantidad de usuarios activos.
export type Usuario = {
  username: string;
  activo: boolean;
};
export function contarActivos(usuarios: Usuario[]): number {
  // Tu código aquí
}
