import test from "node:test";
import assert from "node:assert/strict";
import { PiezaELeIzq } from "../src/piezas/PiezaEleIzq.ts";



  test("crear una pieza Lizquierda Izquierda con su forma", () => {
  const pieza = new PiezaELeIzq();

  assert.equal(pieza.nombre, "L Izquierda");
  assert.deepEqual(pieza.forma, [
    [0, 1],
    [0, 1],
    [1, 1]
  ]);
  });


  test("Rotar ELEizquierda la pieza a la izquierda", () => {
  const pieza = new PiezaELeIzq();

  pieza.rotarIzq();
 
  assert.equal(pieza.nombre, "L Izquierda");
  assert.deepEqual(pieza.forma, [
    [1, 1, 1],
    [0, 0, 1]
    
  ]);
  });   

   test("Rotar ELE la pieza a la derecha", () => {
  const pieza = new PiezaELeIzq();

  pieza.rotarDer();
 
  assert.equal(pieza.nombre, "L Izquierda");
  assert.deepEqual(pieza.forma, [
    [1, 0, 0],
    [1, 1, 1]
    
  ]);
  });   

  
  
