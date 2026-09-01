import test from "node:test";
import assert from "node:assert/strict";
import { Tetris } from "../src/Tetris.ts";

test("crear y comenzar una partida de Tetris", () => {
  const juego = new Tetris();

  assert.equal(juego.estado, "no_iniciado");

  juego.comenzar();

  assert.equal(juego.estado, "jugando");
});