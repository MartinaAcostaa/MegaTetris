import { PiezaRotable } from "./PiezaRotable.ts";

export class PiezaPalo extends PiezaRotable{
  public constructor() {
    super("Palo", [
      [1],
      [1],
      [1],
      [1]
    ]);
  }
}
