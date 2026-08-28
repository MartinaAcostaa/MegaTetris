import test from "node:test";
import assert from "node:assert/strict";
import { PiezaPerroDerecha } from "../src/piezas/PiezaPerroDer.ts";

  test("crear una pieza Perro Derecha con su forma", () => {
  const pieza = new PiezaPerroDerecha();

  assert.equal(pieza.nombre, "Perro Derecha");
  assert.deepEqual(pieza.forma, [
    [1, 1, 0],
    [0, 1, 1]
  ]);
  });

