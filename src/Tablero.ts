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
}