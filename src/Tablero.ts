import { PiezaBase } from "./piezas/PiezaBase.ts";
import { PiezaRotable } from "./piezas/PiezaRotable.ts";

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

public agregarPiezaAleatoria(pieza: PiezaRotable): void {
  const cantidadDeGiros = Math.floor(Math.random() * 4);

  Array.from({ length: cantidadDeGiros }).forEach(() => {
    pieza.rotarDer();
  });

  const anchoPieza = pieza.forma[0].length;
  const columnaMaxima = this._celdas[0].length - anchoPieza;
  const columnaAleatoria = Math.floor(
    Math.random() * (columnaMaxima + 1)
  );

  this.agregarPieza(pieza, columnaAleatoria);
}
}