import { PiezaRotable } from "./PiezaRotable.ts";

export class PiezaT extends PiezaRotable {
  public constructor() {
    super("T", [
      [0, 1, 0],
      [1, 1, 1]
    ]);
  }
}
