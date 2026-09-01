import test from "node:test";
import assert from "node:assert/strict";
import { Tablero } from "../src/Tablero.ts";
import { PiezaT } from "../src/piezas/PiezaT.ts";
import { PiezaCuadrado } from "../src/piezas/PiezaCuadrado.ts";
import { PiezaPalo } from "../src/piezas/PiezaPalo.ts";

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

test("mover la pieza actual una fila hacia abajo", () => {
  const tablero = new Tablero();
  const pieza = new PiezaT();

  tablero.agregarPieza(pieza, 0);
  tablero.moverPiezaAbajo();

  assert.deepEqual(
    tablero.celdas
      .slice(0, 3)
      .map((fila) => fila.slice(0, 3)),
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ]
  );
});

test("detener la pieza actual al llegar al fondo del tablero", () => {
  const tablero = new Tablero();
  const pieza = new PiezaT();

  tablero.agregarPieza(pieza, 0);

  Array.from({ length: 25 }).forEach(() => {
    tablero.moverPiezaAbajo();
  });

  assert.deepEqual(
    tablero.celdas
      .slice(18, 20)
      .map((fila) => fila.slice(0, 3)),
    pieza.forma
  );

  assert.equal(
    tablero.celdas.flat().filter((celda) => celda === 1).length,
    4
  );
});

test("detener la pieza actual cuando encuentra otra pieza debajo", () => {
  const tablero = new Tablero();
  const piezaFija = new PiezaCuadrado();

  tablero.agregarPieza(piezaFija, 0);

  Array.from({ length: 18 }).forEach(() => {
    tablero.moverPiezaAbajo();
  });

  const piezaActual = new PiezaCuadrado();
  tablero.agregarPieza(piezaActual, 0);

  Array.from({ length: 20 }).forEach(() => {
    tablero.moverPiezaAbajo();
  });

  assert.deepEqual(
    tablero.celdas
      .slice(16, 20)
      .map((fila) => fila.slice(0, 2)),
    [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1]
    ]
  );
});

test("finalizar el juego cuando no hay lugar en la primera fila para una nueva pieza", () => {
  const tablero = new Tablero();
  const piezaFija = new PiezaCuadrado();

  tablero.agregarPieza(piezaFija, 0);

  const piezaNueva = new PiezaT();
  tablero.agregarPieza(piezaNueva, 0);

  assert.equal(tablero.juegoTerminado, true);

  assert.deepEqual(
    tablero.celdas
      .slice(0, 2)
      .map((fila) => fila.slice(0, 3)),
    [
      [1, 1, 0],
      [1, 1, 0]
    ]
  );
});

test("el juego no termina si hay lugar para la pieza en la primera fila", () => {
  const tablero = new Tablero();
  const pieza = new PiezaT();

  tablero.agregarPieza(pieza, 0);

  assert.equal(tablero.juegoTerminado, false);
});

test("rotar la pieza actual cuando hay espacio para la nueva orientación", () => {
  const tablero = new Tablero();
  const pieza = new PiezaPalo();

  tablero.agregarPieza(pieza, 0);
  tablero.rotarPiezaIzq();

  assert.deepEqual(pieza.forma, [[1, 1, 1, 1]]);
  assert.deepEqual(tablero.celdas[0].slice(0, 4), [1, 1, 1, 1]);
});

test("detener el giro de la pieza actual cuando la nueva orientación no entra en el tablero", () => {
  const tablero = new Tablero();
  const pieza = new PiezaPalo();

  tablero.agregarPieza(pieza, 9);
  tablero.rotarPiezaIzq();

  assert.deepEqual(pieza.forma, [[1], [1], [1], [1]]);
  assert.deepEqual(
    tablero.celdas.slice(0, 4).map((fila) => fila[9]),
    [1, 1, 1, 1]
  );
});

test("eliminar una línea completa y bajar todas las celdas de arriba", () => {
  const tablero = new Tablero();
  const celdas = tablero.celdas;

  celdas[19] = Array(10).fill(1);
  celdas[18][0] = 1;
  celdas[18][1] = 1;
  tablero.celdas = celdas;

  tablero.eliminarLineasCompletas();

  assert.equal(tablero.celdas.length, 20);
  assert.deepEqual(tablero.celdas[19], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
  assert.deepEqual(tablero.celdas[0], Array(10).fill(0));
});

test("eliminar automáticamente la línea que se completa al agregar una pieza", () => {
  const tablero = new Tablero();
  const celdas = tablero.celdas;

  celdas[0] = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
  tablero.celdas = celdas;

  tablero.agregarPieza(new PiezaCuadrado(), 0);

  assert.equal(tablero.celdas.length, 20);
  assert.deepEqual(tablero.celdas[0], Array(10).fill(0));
  assert.deepEqual(tablero.celdas[1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
});