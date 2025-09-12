// game.test.ts
import { assertEquals, assertStringIncludes } from "@std/assert";
import { spy, stub } from "@std/testing/mock";
import { GameStatus, NumberGuessingGame } from "./adivina-el-numero.ts";

Deno.test("NumberGuessingGame - adivinanza correcta", () => {
  const game = new NumberGuessingGame();

  game.setSecretNumber(50); // Forzar el número secreto para la prueba

  const response = game.makeGuess(50);

  assertStringIncludes(response, "Felicidades");
  assertEquals(game.gameStatus, GameStatus.Win);
});

Deno.test("NumberGuessingGame - adivinanza incorrecta y perder el juego", () => {
  const game = new NumberGuessingGame(1, 100, 3);
  game.setSecretNumber(75); // Forzar el número secreto para la prueba

  let response = game.makeGuess(50);
  assertStringIncludes(response, "El número es mayor");
  assertEquals(game.gameStatus, GameStatus.InProgress);
  assertEquals(game.attempts, 1);

  response = game.makeGuess(90);
  assertStringIncludes(response, "El número es menor");
  assertEquals(game.gameStatus, GameStatus.InProgress);
  assertEquals(game.attempts, 2);

  let invalidUserInput = game.validateUserInput("150");
  assertEquals(invalidUserInput, null);
  assertEquals(game.gameStatus, GameStatus.InProgress);

  response = game.makeGuess(60);
  assertEquals(game.gameStatus, GameStatus.Lose);
  assertStringIncludes(response, "Lo siento, has agotado tus intentos");
});
