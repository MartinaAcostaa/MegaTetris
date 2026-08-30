import { PiezaBase } from "./piezas/PiezaBase.ts";

export class Tablero {
  private _celdas: number[][];

  public constructor() {
    this._celdas = Array.from(
      { length: 20 },
      () => Array(10).fill(0)
    );
  }

  public get celdas(): number[][] {
    return this._celdas.map((fila) => [...fila]);
  }

  public set celdas(nuevasCeldas: number[][]) {
    this._celdas = nuevasCeldas.map((fila) => [...fila]);
  }

public agregarPieza(pieza: PiezaBase, columna: number): void {
  const anchoPieza = pieza.forma[0].length;
  const estaDentro =
    columna >= 0 &&
    columna + anchoPieza <= this._celdas[0].length;

  if (!estaDentro) {
    throw new Error("La pieza supera los limites del tablero");
  }

  pieza.forma.forEach((fila, filaPieza) => {
    fila.forEach((celda, columnaPieza) => {
      const columnaTablero = columna + columnaPieza;

      this._celdas[filaPieza][columnaTablero] = Math.max(
        this._celdas[filaPieza][columnaTablero],
        celda
      );
    });
  });
}
}