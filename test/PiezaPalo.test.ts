import test from "node:test";
import assert from "node:assert/strict";
import { PiezaPalo } from "../src/piezas/PiezaPalo.ts";

test("crear una pieza Palo con su forma", () => {
  const pieza = new PiezaPalo();

  assert.equal(pieza.nombre, "Palo");
  assert.deepEqual(pieza.forma, [
    [1],
    [1],
    [1],
    [1]
  ]);
});

test("Rotar la pieza Palo a la izquierda", () => {
 const pieza = new PiezaPalo();
 
   pieza.rotarIzq();

  assert.equal(pieza.nombre, "Palo");
  assert.deepEqual(pieza.forma, [
    [1,1,1,1],
   
  ]);
});

test("Rotar la pieza Palo a la derecha", () => {
 const pieza = new PiezaPalo();
 
   pieza.rotarDer();

  assert.equal(pieza.nombre, "Palo");
  assert.deepEqual(pieza.forma, [
    [1,1,1,1],
   
  ]);
});