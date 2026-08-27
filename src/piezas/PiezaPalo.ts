import { PiezaBase } from "./PiezaBase";

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
