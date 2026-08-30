
import { PiezaRotable} from "./PiezaRotable.ts";

export class PiezaELeIzq extends PiezaRotable{

  public constructor() {
    super("L Izquierda", [
      [0, 1],
      [0, 1],
      [1, 1]
    ]);
  }

}

