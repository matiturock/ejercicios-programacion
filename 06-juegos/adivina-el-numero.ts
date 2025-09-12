/*
Adivina el Numero
-----------------

Crea un juego donde el usuario debe adivinar un número aleatorio entre 1 y 100. El usuario tiene un número limitado de intentos para adivinar el número correcto. Después de cada intento, el juego debe indicar si el número es mayor o menor que el número objetivo.

Requisitos:
- El juego debe generar un número aleatorio entre 1 y 100.
- El usuario debe tener un número limitado de intentos (por ejemplo, 10).
- Después de cada intento, el juego debe indicar si el número es mayor o menor que el número objetivo.
- Si el usuario adivina el número, el juego debe mostrar un mensaje de felicitación y cuantos intentos le tomó adivinar.
- Si el usuario se queda sin intentos, el juego debe revelar el número objetivo.

NOTA 1: Usar `prompt` para pedir la entrada del usuario y `console.log` para mostrar mensajes.
NOTA 2: Para generar un número aleatorio, puedes usar `Math.random()` y `Math.floor()`.
NOTA 3: Usar POO para estructurar el código (clases, métodos, etc.) mediante la clase `NumberGuessingGame`.
*/

export enum GameStatus {
  "Win",
  "Lose",
  "InProgress",
}

export class NumberGuessingGame {
  private secretNumber: number;

  constructor(
    public min: number = 1,
    public max: number = 100,
    public maxAttempts: number = 10,
    public attempts: number = 0,
    public gameStatus: GameStatus = GameStatus.InProgress,
  ) {
    this.secretNumber = this.generateRandomNumber();
  }

  initGameLoop(): void {
    this.welcomeMessage();

    while (this.gameStatus === GameStatus.InProgress) {
      const guessNumber = this.getUserInput();

      if (guessNumber !== null) {
        const message = this.makeGuess(guessNumber);
        console.log(message);
      }
    }
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  private welcomeMessage(): void {
    console.log(`Bienvenido al juego de Adivina el Número!`);
    console.log(
      `Estoy pensando en un número entre ${this.min} y ${this.max}. Tienes ${this.maxAttempts} intentos para adivinarlo.`,
    );
  }

  private getAttempsRemaining(): number {
    return this.maxAttempts - this.attempts;
  }

  setSecretNumber(number: number) {
    this.secretNumber = number;
  }

  makeGuess(guess: number): string {
    this.attempts++;

    if (guess === this.secretNumber) {
      this.gameStatus = GameStatus.Win;
      return `Felicidades! Has adivinado el número ${this.secretNumber} en ${this.attempts} intentos.`;
    }

    if (this.attempts >= this.maxAttempts) {
      this.gameStatus = GameStatus.Lose;
      return `Lo siento, has agotado tus intentos. El número era ${this.secretNumber}.`;
    }

    if (guess < this.secretNumber) {
      return `El número es mayor. Te quedan ${this.getAttempsRemaining()} intentos`;
    } else {
      return `El número es menor. Te quedan ${this.getAttempsRemaining()} intentos`;
    }
  }

  getUserInput(
    promptFn: (message: string) => string | null = globalThis.prompt,
  ): number | null {
    const input = promptFn("Introduce tu número:");
    const result = this.validateUserInput(input);
    if (result === null) {
      console.log(
        `Entrada no válida. Por favor, introduce un número entre ${this.min} y ${this.max}.`,
      );
    }
    return result;
  }

  validateUserInput(input: string | null): number | null {
    if (input === null) {
      return null;
    }

    const guess = Number.parseInt(input);

    if (Number.isNaN(guess) || guess < this.min || guess > this.max) {
      return null;
    }
    return guess;
  }
}

export function playGame() {
  const game = new NumberGuessingGame();
  game.initGameLoop();
}
