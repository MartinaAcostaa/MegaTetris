import { PiezaRotable } from "./PiezaRotable.ts";

export class PiezaLDerecha extends PiezaRotable {
  public constructor() {
    super("L Derecha", [
      [1, 0],
      [1, 0],
      [1, 1]
    ]);
  }
}
