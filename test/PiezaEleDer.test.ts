
import test from "node:test";
import assert from "node:assert/strict";
import { PiezaLDerecha } from "../src/piezas/PiezaEleDer.ts";

  test("crear una pieza L Derecha con su forma", () => {
  const pieza = new  PiezaLDerecha();

  assert.equal(pieza.nombre, "L Derecha");
  assert.deepEqual(pieza.forma, [
    [1, 0],
    [1, 0],
    [1, 1]
  ]);
  });   

  
  

