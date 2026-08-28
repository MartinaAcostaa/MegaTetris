import test from "node:test";
import assert from "node:assert/strict";
import { PiezaPerroIzq } from "../src/piezas/PiezaPerroIzq.ts";

  test("crear una pieza Perro Izquierda con su forma", () => {
  const pieza = new PiezaPerroIzq();

  assert.equal(pieza.nombre, "Perro Izquierda");
  assert.deepEqual(pieza.forma, [
    [0, 1, 1],
    [1, 1, 0]
  ]);
  });

