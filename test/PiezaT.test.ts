import test from "node:test";
import assert from "node:assert/strict";
import { PiezaT } from "../src/piezas/PiezaT.ts";

test("crear una pieza T con su forma", () => {
  const pieza = new PiezaT();

  assert.equal(pieza.nombre, "T");
  assert.deepEqual(pieza.forma, [
    [0, 1, 0],
    [1, 1, 1]
  ]);
});

test("Rotar la pieza T hacia la izuqierda", () => {
  const pieza = new PiezaT();
   pieza.rotarIzq();

  assert.equal(pieza.nombre, "T");
  assert.deepEqual(pieza.forma, [
    [0, 1],
    [1, 1],
    [0, 1]
  ]);
});

test("Rotar la pieza T hacia la derecha", () => {
  const pieza = new PiezaT();
   pieza.rotarDer();

  assert.equal(pieza.nombre, "T");
  assert.deepEqual(pieza.forma, [
    [1, 0],
    [1, 1],
    [1, 0]
  ]);
});