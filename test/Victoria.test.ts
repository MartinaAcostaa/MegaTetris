import test from "node:test";
import assert from "node:assert/strict";
import { Tetris } from "../src/Tetris.ts";
import { Tablero } from "../src/Tablero.ts";
import { PiezaPalo } from "../src/piezas/PiezaPalo.ts";

test("contar las lineas eliminadas", () => {
  const tablero = new Tablero();
  const celdas = tablero.celdas;

  celdas[18] = Array(10).fill(1);
  celdas[19] = Array(10).fill(1);
  tablero.celdas = celdas;

  tablero.eliminarLineasCompletas();

  assert.equal(tablero.lineasEliminadas, 2);
});

test("informar que el tablero gano al alcanzar la cantidad de lineas objetivo", () => {
  const tablero = new Tablero(1);
  const celdas = tablero.celdas;

  celdas[19] = Array(10).fill(1);
  tablero.celdas = celdas;

  tablero.eliminarLineasCompletas();

  assert.equal(tablero.juegoGanado, true);
});

test("informar que el tetris se gano al completar la cantidad de lineas objetivo", () => {
  const lineasQueCompletaUnPalo = 4;
  const juego = new Tetris(lineasQueCompletaUnPalo);

  juego.comenzar();

  for (let columna = 0; columna < juego.tablero.celdas[0].length; columna++) {
    juego.tablero.agregarPieza(new PiezaPalo(), columna);

    Array.from({ length: 18 }).forEach(() => {
      juego.MoverpiezaAbajoConTick();
    });
  }

  assert.equal(juego.tablero.lineasEliminadas, lineasQueCompletaUnPalo);
  assert.equal(juego.estado, "ganado");
});
