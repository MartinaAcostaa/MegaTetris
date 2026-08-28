import { PiezaBase } from "./PiezaBase.ts";

export class PiezaPerroDerecha extends PiezaBase {
  public constructor() {
    super("Perro Derecha", [
      [1, 1, 0],
      [0, 1, 1],
      
    ]);
  }
}