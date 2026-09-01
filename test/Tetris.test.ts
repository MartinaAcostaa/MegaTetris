import test from "node:test";
import assert from "node:assert/strict";
import { Tetris } from "../src/Tetris.ts";
import { PiezaT } from "../src/piezas/PiezaT.ts";
import { PiezaCuadrado } from "../src/piezas/PiezaCuadrado.ts";

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

test("rotar la pieza actual hacia la izquierda desde Tetris", () => {
  const juego = new Tetris();
  const pieza = new PiezaT();

  juego.comenzar();
  juego.tablero.agregarPieza(pieza, 0);

  juego.rotarIzquierda();

  assert.deepEqual(pieza.forma, [
    [0, 1],
    [1, 1],
    [0, 1]
  ]);
});

test("rotar la pieza actual hacia la derecha desde Tetris", () => {
  const juego = new Tetris();
  const pieza = new PiezaT();

  juego.comenzar();
  juego.tablero.agregarPieza(pieza, 0);

  juego.rotarDerecha();

  assert.deepEqual(pieza.forma, [
    [1, 0],
    [1, 1],
    [1, 0]
  ]);
});

test("informar que el juego finalizó cuando no hay lugar para otra pieza", () => {
  const juego = new Tetris();

  juego.comenzar();
  juego.tablero.agregarPieza(new PiezaCuadrado(), 0);
  juego.tablero.agregarPieza(new PiezaT(), 0);

  assert.equal(juego.estado, "finalizado");
});