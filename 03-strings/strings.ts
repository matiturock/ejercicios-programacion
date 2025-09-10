/**
 * MANIPULACIÓN DE STRINGS EN TYPESCRIPT
 * ===================================
 * 
 * ¿Qué es un String?
 * ------------------
 * Un string es una secuencia de caracteres que se utiliza para representar texto.
 * En TypeScript/JavaScript, los strings se pueden crear con comillas simples (''),
 * comillas dobles ("") o backticks (``) para template literals.
 * 
 * Casos de uso comunes:
 * --------------------
 * - Nombres de usuario y contraseñas
 * - Mensajes y contenido de texto
 * - URLs y rutas de archivos
 * - Procesamiento de datos en formato texto
 * - Manipulación de HTML/XML
 * 
 * Métodos importantes de String:
 * ---------------------------
 * - length: Obtiene la longitud del string
 * - toLowerCase()/toUpperCase(): Convierte a minúsculas/mayúsculas
 * - trim(): Elimina espacios al inicio y final
 * - split(separator): Convierte string en array
 * - slice(start, end): Extrae una porción del string
 * - replace(search, replace): Reemplaza texto
 * - includes(search): Busca si contiene un substring
 * - indexOf(search): Encuentra la posición de un substring
 * - charAt(index): Obtiene el carácter en una posición
 * 
 * Template Literals:
 * ----------------
 * Los template literals permiten:
 * - Strings multilínea
 * - Interpolación de expresiones: ${expresión}
 * - Ejemplo: `Hola ${nombre}, tienes ${edad} años`
 * 
 * EXPRESIONES REGULARES (RegExp)
 * ============================
 * 
 * ¿Qué son?
 * ---------
 * Las expresiones regulares son patrones que se utilizan para hacer coincidir
 * combinaciones de caracteres en strings. En TypeScript/JavaScript se crean con
 * /patron/ o new RegExp('patron').
 * 
 * Patrones comunes:
 * ---------------
 * ^ : Inicio del string
 * $ : Final del string
 * . : Cualquier carácter
 * * : 0 o más ocurrencias
 * + : 1 o más ocurrencias
 * ? : 0 o 1 ocurrencia
 * \d : Cualquier dígito
 * \w : Caracteres de palabra [A-Za-z0-9_]
 * \s : Espacios en blanco
 * [...] : Conjunto de caracteres
 * 
 * Ejemplos prácticos:
 * -----------------
 * - Email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
 * - Teléfono: /^\d{10}$/
 * - URL: /https?:\/\/[\w\-\.]+(:\d+)?.*$/
 * 
 * Métodos de RegExp:
 * ----------------
 * - test(): Prueba si hay coincidencia
 * - exec(): Busca coincidencia y retorna detalles
 * - match(): Encuentra coincidencias en un string
 * - replace(): Reemplaza coincidencias
 * 
 * Flags comunes:
 * ------------
 * g: Global (todas las coincidencias)
 * i: Case-insensitive
 * m: Multilínea
 * 
 * Ejemplo: /pattern/gi
 */

/**
 * Ejercicio 1: Invertir Cadena
 * Crear una función que tome una cadena como entrada y devuelva la cadena invertida.
 * Por ejemplo: "hola" -> "aloh"
 */
export function reverseString(str: string): string {
  return str;
}

/**
 * Ejercicio 2: Contar Vocales
 * Crear una función que cuente el número de vocales (a,e,i,o,u) en una cadena,
 * sin importar si son mayúsculas o minúsculas.
 */
export function countVowels(str: string): number {
  return 0;
}

/**
 * Ejercicio 3: Verificar Palíndromo
 * Crear una función que determine si una cadena es un palíndromo,
 * ignorando espacios, signos de puntuación y mayúsculas/minúsculas.
 * Por ejemplo: "A man a plan a canal Panama" -> true
 */
export function isPalindrome(str: string): boolean {
  return false;
}

/**
 * Ejercicio 4: Capitalizar Palabras
 * Crear una función que tome una cadena y convierta la primera letra
 * de cada palabra en mayúscula.
 * Por ejemplo: "hello world" -> "Hello World"
 */
export function capitalizeWords(str: string): string {
  return str;
}

/**
 * Ejercicio 5: Eliminar Espacios
 * Crear una función que elimine todos los espacios de una cadena,
 * incluyendo espacios múltiples y espacios al inicio/final.
 */
export function removeSpaces(str: string): string {
  return str;
}

/**
 * Ejercicio 6: Contar Ocurrencias
 * Crear una función que cuente cuántas veces aparece un carácter específico
 * en una cadena.
 */
export function countOccurrences(str: string, char: string): number {
  return 0;
}

/**
 * Ejercicio 7: Truncar Cadena
 * Crear una función que corte una cadena si excede una longitud máxima
 * y agregue "..." al final.
 * Por ejemplo: truncateString("hello world", 5) -> "hello..."
 */
export function truncateString(str: string, maxLength: number): string {
  return str;
}

/**
 * Ejercicio 8: Convertir a camelCase
 * Crear una función que convierta una cadena con guiones o guiones bajos
 * a formato camelCase.
 * Por ejemplo: "hello-world" -> "helloWorld"
 */
export function convertToCamelCase(str: string): string {
  return str;
}

/**
 * Ejercicio 9: Extraer Emails
 * Crear una función que extraiga todas las direcciones de correo electrónico
 * válidas de una cadena y las devuelva en un array.
 */
export function extractEmails(str: string): string[] {
  return [];
}

/**
 * Ejercicio 10: Enmascarar Tarjeta de Crédito
 * Crear una función que enmascare todos los dígitos de un número de tarjeta
 * excepto los últimos 4, reemplazando los demás con asteriscos.
 * Por ejemplo: "4111111111111111" -> "************1111"
 */
export function maskCreditCard(cardNumber: string): string {
  return cardNumber;
}