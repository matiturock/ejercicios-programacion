/**
 * CLASES Y OBJETOS DE INSTANCIA EN TYPESCRIPT
 * ========================================
 * 
 * ¿Qué son las clases?
 * ------------------
 * Las clases son plantillas para crear objetos que encapsulan datos y comportamiento.
 * A diferencia de los objetos literales, las clases permiten crear múltiples instancias
 * con la misma estructura y comportamiento.
 * 
 * Diferencias con Objetos Literales:
 * ------------------------------
 * 1. Clases:
 *    - Son plantillas reutilizables
 *    - Permiten herencia
 *    - Tienen constructores
 *    - Soportan modificadores de acceso
 *    - Implementan interfaces
 * 
 * 2. Objetos Literales:
 *    - Son instancias únicas
 *    - No tienen herencia
 *    - No tienen constructores
 *    - No tienen modificadores de acceso
 *    - Son más simples y directos
 * 
 * Pilares de la Programación Orientada a Objetos:
 * ------------------------------------------
 * 1. Encapsulamiento:
 *    - Ocultar detalles internos
 *    - Modificadores: private, protected, public
 *    Ejemplo:
 *    class Cuenta {
 *      private saldo: number;
 *      public depositar(monto: number): void {
 *        this.saldo += monto;
 *      }
 *    }
 * 
 * 2. Herencia:
 *    - Reutilización de código
 *    - Extensión de funcionalidad
 *    Ejemplo:
 *    class Animal {
 *      protected nombre: string;
 *    }
 *    class Perro extends Animal {
 *      ladrar(): void { }
 *    }
 * 
 * 3. Polimorfismo:
 *    - Múltiples formas de un método
 *    - Sobrescritura de métodos
 *    Ejemplo:
 *    class Figura {
 *      area(): number { return 0; }
 *    }
 *    class Circulo extends Figura {
 *      override area(): number { return Math.PI * r * r; }
 *    }
 * 
 * 4. Abstracción:
 *    - Simplificar interfaces
 *    - Ocultar complejidad
 *    Ejemplo:
 *    abstract class BaseDatos {
 *      abstract conectar(): void;
 *    }
 * 
 * Características de las Clases:
 * --------------------------
 * 1. Constructor:
 *    - Método especial para inicialización
 *    - Se ejecuta al crear instancias
 * 
 * 2. Propiedades:
 *    - Datos de la clase
 *    - Pueden ser públicas o privadas
 * 
 * 3. Métodos:
 *    - Comportamiento de la clase
 *    - Operaciones sobre propiedades
 * 
 * 4. Modificadores de acceso:
 *    - public: Acceso desde cualquier lugar
 *    - private: Solo dentro de la clase
 *    - protected: Clase y subclases
 * 
 * Casos de uso comunes:
 * ------------------
 * - Modelos de datos
 * - Servicios y controladores
 * - Componentes de UI
 * - Gestión de estado
 * - Lógica de negocio
 * - Patrones de diseño
 * 
 * Métodos y propiedades especiales:
 * -----------------------------
 * - Getters y Setters
 * - Métodos estáticos
 * - Propiedades estáticas
 * - Métodos abstractos
 * - Interfaces de clase
 * 
 * Ejemplo completo:
 * --------------
 * class Usuario {
 *   private _password: string;
 *   
 *   constructor(
 *     public readonly id: number,
 *     public nombre: string,
 *     password: string
 *   ) {
 *     this._password = password;
 *   }
 *   
 *   get password(): string {
 *     return '****';
 *   }
 *   
 *   static crearInvitado(): Usuario {
 *     return new Usuario(0, 'Invitado', '');
 *   }
 * }
 */

// Ejercicio 1:
// Crea una clase Persona con propiedades nombre y edad, y un método saludar() que retorna "Hola, soy {nombre}".
export class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    // Tu código aquí
  }
  saludar(): string {
    return "";
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
    return 0;
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
    return "";
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
    return "";
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
    return 0;
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
    return 0;
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
