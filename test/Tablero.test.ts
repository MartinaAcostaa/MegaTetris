import test from "node:test";
import assert from "node:assert/strict";
import { Tablero } from "../src/Tablero.ts";
import { PiezaT } from "../src/piezas/PiezaT.ts";

test("crear un tablero vacío de 20 filas por 10 columnas", () => {
  const tablero = new Tablero();

  assert.equal(tablero.celdas.length, 20);
  assert.equal(
    tablero.celdas.every((fila) => fila.length === 10),
    true
  );
  assert.equal(
    tablero.celdas.flat().every((celda) => celda === 0),
    true
  );
});

test("agregar una pieza completa dentro del tablero", () => {
  const tablero = new Tablero();
  const pieza = new PiezaT();

  tablero.agregarPieza(pieza, 0);

  assert.deepEqual(
    tablero.celdas
      .slice(0, 2)
      .map((fila) => fila.slice(0, 3)),
    pieza.forma
  );
});

test("no agregar una pieza fuera de los límites laterales", () => {
  const tablero = new Tablero();
  const pieza = new PiezaT();

  assert.throws(
    () => tablero.agregarPieza(pieza, -1),
    /limites/
  );

  assert.throws(
    () => tablero.agregarPieza(pieza, 8),
    /limites/
  );

  assert.equal(
    tablero.celdas.flat().every((celda) => celda === 0),
    true
  );
});

test("agregar una pieza completa con posición y orientación aleatorias", () => {
  const tablero = new Tablero();
  const pieza = new PiezaT();

  tablero.agregarPiezaAleatoria(pieza);

  assert.equal(
    tablero.celdas.flat().filter((celda) => celda === 1).length,
    4
  );

  assert.equal(
    tablero.celdas.every((fila) => fila.length === 10),
    true
  );
});