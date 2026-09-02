import test from "node:test";
import assert from "node:assert/strict";
import { Tetris } from "../src/Tetris.ts";
import { PiezaT } from "../src/piezas/PiezaT.ts";
import { PiezaCuadrado } from "../src/piezas/PiezaCuadrado.ts";
import { PiezaPalo } from "../src/piezas/PiezaPalo.ts";


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

  juego.MoverpiezaAbajoConTick();

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
  juego.tablero.agregarPieza(new PiezaT(), 2);

  assert.equal(juego.estado, "finalizado");
  
});

test("Se gana tetris", () => {
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
