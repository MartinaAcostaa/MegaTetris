
import test from "node:test";
import assert from "node:assert/strict";
import { PiezaLDerecha } from "../src/piezas/PiezaEleDer.ts";

  test("crear una pieza L Derecha con su forma", () => {
  const pieza = new  PiezaLDerecha();

  assert.equal(pieza.nombre, "L Derecha");
  assert.deepEqual(pieza.forma, [
    [1, 0],
    [1, 0],
    [1, 1]
  ]);
  });   

  test("Rotar ELEDerecha la pieza a la izquierda", () => {
  const pieza = new PiezaLDerecha();

  pieza.rotarIzq();
 
  assert.equal(pieza.nombre, "L Derecha");
  assert.deepEqual(pieza.forma, [
    [0, 0, 1],
    [1, 1, 1]
    
  ]);
  });   

   test("Rotar ELEderecha la pieza a la derecha", () => {
  const pieza = new PiezaLDerecha();

  pieza.rotarDer();
 
  assert.equal(pieza.nombre, "L Derecha");
  assert.deepEqual(pieza.forma, [
    [1, 1, 1],
    [1, 0, 0]
    
  ]);
  });   

  
  

