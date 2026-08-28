import test from "node:test";
import assert from "node:assert/strict";
import { PiezaELeIzq } from "../src/piezas/PiezaEleIzq.ts";


  test("crear una pieza L Izquierda con su forma", () => {
  const pieza = new PiezaELeIzq();

  assert.equal(pieza.nombre, "L Izquierda");
  assert.deepEqual(pieza.forma, [
    [0, 1],
    [0, 1],
    [1, 1]
  ]);
  });

