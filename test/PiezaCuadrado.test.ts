
import { PiezaCuadrado } from "../src/piezas/PiezaCuadrado";

describe("Materia", () => {
  test("crear una pieza Cuadrado con su forma", () => {
  const pieza = new PiezaCuadrado();

  expect(pieza.nombre).toBe("Cuadrado");
  expect(pieza.forma).toEqual([
    [1, 1],
    [1, 1]
  ]);
  });


});

