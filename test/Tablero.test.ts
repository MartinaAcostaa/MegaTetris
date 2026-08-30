import test from "node:test";
import assert from "node:assert/strict";
import { Tablero } from "../src/Tablero.ts";

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