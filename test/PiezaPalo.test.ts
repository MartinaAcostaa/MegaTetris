

import { PiezaPalo } from "../src/piezas/PiezaPalo";


  test("crear una pieza Palo con su forma", () => {
  const pieza = new PiezaPalo();

  expect(pieza.nombre).toBe("Palo");
  expect(pieza.forma).toEqual([
    [1],
    [1],
    [1],
    [1]
  ]);
});

