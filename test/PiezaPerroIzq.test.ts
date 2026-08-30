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

 test("Rotar la pieza perro izquierda hacia la izquierda", () => {
  const pieza = new PiezaPerroIzq();

  pieza.rotarIzq();

  assert.equal(pieza.nombre, "Perro Izquierda");
  assert.deepEqual(pieza.forma, [
    [1, 0],
    [1, 1],
    [0, 1]
  ]);
  });

  test("Rotar la pieza perro izquierda hacia la derecha", () => {
  const pieza = new PiezaPerroIzq();

  pieza.rotarDer();

  assert.equal(pieza.nombre, "Perro Izquierda");
  assert.deepEqual(pieza.forma, [
    [1, 0],
    [1, 1],
    [0, 1]
  ]);
  });