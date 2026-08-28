import { PiezaBase } from "./PiezaBase.ts";

export class PiezaPerroIzq extends PiezaBase {
  public constructor() {
    super("Perro Izquierda", [
      [0, 1, 1],
      [1, 1, 0],
      
    ]);
  }
}