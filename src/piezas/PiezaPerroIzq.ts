import { PiezaRotable } from "./PiezaRotable.ts";

export class PiezaPerroIzq extends PiezaRotable {
  public constructor() {
    super("Perro Izquierda", [
      [0, 1, 1],
      [1, 1, 0],
      
    ]);


  }

}