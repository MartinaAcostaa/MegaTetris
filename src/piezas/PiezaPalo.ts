import { PiezaBase } from "./PiezaBase.ts";

export class PiezaPalo extends PiezaBase {
  public constructor() {
    super("Palo", [
      [1],
      [1],
      [1],
      [1]
    ]);
  }
}
