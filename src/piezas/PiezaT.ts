import { PiezaBase } from "./PiezaBase.ts";

export class PiezaT extends PiezaBase {
  public constructor() {
    super("T", [
      [0, 1, 0],
      [1, 1, 1]
    ]);
  }
}
