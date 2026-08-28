
import { PiezaBase } from "./PiezaBase.ts";

export class PiezaELeIzq extends PiezaBase{

  public constructor() {
    super("L Izquierda", [
      [0, 1],
      [0, 1],
      [1, 1]
    ]);
  }

}

