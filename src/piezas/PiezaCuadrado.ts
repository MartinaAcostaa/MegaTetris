import { PiezaRotable } from "./PiezaRotable.ts";

export class PiezaCuadrado extends PiezaRotable {
  public constructor() {
    super("Cuadrado", [
      [1, 1],
      [1, 1]
    ]);
  }
}
