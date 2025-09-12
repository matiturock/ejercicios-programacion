import { assertEquals } from "@std/assert";
import { fizzBuzz } from "./fizz-buzz.ts";

Deno.test("fizzBuzz", () => {
  assertEquals(fizzBuzz(1), 1);
  assertEquals(fizzBuzz(2), 2);
  assertEquals(fizzBuzz(3), "Fizz");
  assertEquals(fizzBuzz(5), "Buzz");
  assertEquals(fizzBuzz(15), "FizzBuzz");
});
