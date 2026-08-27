
import { PiezaT } from "../src/piezas/PiezaT";



 test("crear una pieza T con su forma", () => {
  const pieza = new PiezaT();

  expect(pieza.nombre).toBe("T");
  expect(pieza.forma).toEqual([
    [0, 1, 0],
    [1, 1, 1]
  ]);
});
