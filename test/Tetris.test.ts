import test from "node:test";
import assert from "node:assert/strict";
import { Tetris } from "../src/Tetris.ts";
import { PiezaT } from "../src/piezas/PiezaT.ts";

test("crear y comenzar una partida de Tetris", () => {
  const juego = new Tetris();

  assert.equal(juego.estado, "no_iniciado");

  juego.comenzar();

  assert.equal(juego.estado, "jugando");
});

test("un tick avanza el reloj y mueve la pieza actual", () => {
  const juego = new Tetris();
  const pieza = new PiezaT();

  juego.comenzar();
  juego.tablero.agregarPieza(pieza, 0);

  juego.tick();

  assert.equal(juego.reloj.getTick(), 1);

  assert.deepEqual(
    juego.tablero.celdas
      .slice(0, 3)
      .map((fila) => fila.slice(0, 3)),
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ]
  );
});