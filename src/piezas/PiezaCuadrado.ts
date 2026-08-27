import { PiezaBase } from "./PiezaBase";

export class PiezaCuadrado extends PiezaBase {
  public constructor() {
    super("Cuadrado", [
      [1, 1],
      [1, 1]
    ]);
  }
}
