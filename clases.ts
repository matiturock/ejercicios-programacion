// Ejercicio 1:
// Crea una clase Persona con propiedades nombre y edad, y un método saludar() que retorna "Hola, soy {nombre}".
export class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    // Tu código aquí
  }
  saludar(): string {
    // Tu código aquí
  }
}

// Ejercicio 2:
// Crea una clase Rectangulo con propiedades ancho y alto, y un método area() que retorna el área.
export class Rectangulo {
  ancho: number;
  alto: number;
  constructor(ancho: number, alto: number) {
    // Tu código aquí
  }
  area(): number {
    // Tu código aquí
  }
}

// Ejercicio 3:
// Crea una clase CuentaBancaria con propiedad saldo y métodos depositar(monto) y retirar(monto).
export class CuentaBancaria {
  saldo: number;
  constructor(saldoInicial: number) {
    // Tu código aquí
  }
  depositar(monto: number): void {
    // Tu código aquí
  }
  retirar(monto: number): void {
    // Tu código aquí
  }
}

// Ejercicio 4:
// Crea una clase Libro con propiedades titulo y paginas, y un método leer() que retorna "Leyendo {titulo}".
export class Libro {
  titulo: string;
  paginas: number;
  constructor(titulo: string, paginas: number) {
    // Tu código aquí
  }
  leer(): string {
    // Tu código aquí
  }
}

// Ejercicio 5:
// Crea una clase Producto con propiedades nombre y precio, y un método aplicarDescuento(porcentaje).
export class Producto {
  nombre: string;
  precio: number;
  constructor(nombre: string, precio: number) {
    // Tu código aquí
  }
  aplicarDescuento(porcentaje: number): void {
    // Tu código aquí
  }
}

// Ejercicio 6:
// Crea una clase Animal con propiedad especie y método sonido() que retorna "Sonido de {especie}".
export class Animal {
  especie: string;
  constructor(especie: string) {
    // Tu código aquí
  }
  sonido(): string {
    // Tu código aquí
  }
}

// Ejercicio 7:
// Crea una clase Estudiante con propiedades nombre y calificaciones (array de números), y método promedio().
export class Estudiante {
  nombre: string;
  calificaciones: number[];
  constructor(nombre: string, calificaciones: number[]) {
    // Tu código aquí
  }
  promedio(): number {
    // Tu código aquí
  }
}

// Ejercicio 8:
// Crea una clase Empleado con propiedades nombre y salario, y método aumentarSalario(monto).
export class Empleado {
  nombre: string;
  salario: number;
  constructor(nombre: string, salario: number) {
    // Tu código aquí
  }
  aumentarSalario(monto: number): void {
    // Tu código aquí
  }
}

// Ejercicio 9:
// Crea una clase Circulo con propiedad radio y método area() que retorna el área del círculo.
export class Circulo {
  radio: number;
  constructor(radio: number) {
    // Tu código aquí
  }
  area(): number {
    // Tu código aquí
  }
}

// Ejercicio 10:
// Crea una clase Vehiculo con propiedades marca y velocidad, y método acelerar(monto).
export class Vehiculo {
  marca: string;
  velocidad: number;
  constructor(marca: string, velocidad: number) {
    // Tu código aquí
  }
  acelerar(monto: number): void {
    // Tu código aquí
  }
}
