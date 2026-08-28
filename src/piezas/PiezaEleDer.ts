import { PiezaBase } from "./PiezaBase.ts";

export class PiezaLDerecha extends PiezaBase {
  public constructor() {
    super("L Derecha", [
      [1, 0],
      [1, 0],
      [1, 1]
    ]);
  }
}
