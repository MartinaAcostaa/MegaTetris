import test from "node:test";
import assert from "node:assert/strict";
import { Clock } from "../src/Clock.ts";

test("se prueba que cuando se llama al método Tick(), el valor de getTick() aumenta en 1", () => {

  const clock = new Clock();    
  clock.Tick();
  assert.strictEqual(clock.getTick(), 1);

});

test("se prueba que cuando se llama al método Tick() 2 vecesel valor de getTick() aumenta a 2", () => {

  const clock = new Clock();    
  clock.Tick();
  clock.Tick();
  assert.strictEqual(clock.getTick(), 2);

});