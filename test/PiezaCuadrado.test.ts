import test from "node:test";
import assert from "node:assert/strict";
import { PiezaCuadrado } from "../src/piezas/PiezaCuadrado.ts";

test("crear una pieza Cuadrado con su forma", () => {
  const pieza = new PiezaCuadrado();

  assert.equal(pieza.nombre, "Cuadrado");
  assert.deepEqual(pieza.forma, [
    [1, 1],
    [1, 1]
  ]);
});
