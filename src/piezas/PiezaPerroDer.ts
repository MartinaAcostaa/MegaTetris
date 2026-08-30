import { PiezaRotable } from "./PiezaRotable.ts";

export class PiezaPerroDerecha extends PiezaRotable {
  public constructor() {
    super("Perro Derecha", [
      [1, 1, 0],
      [0, 1, 1],
      
    ]);
  }
}