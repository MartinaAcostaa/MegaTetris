export abstract class PiezaBase {
  private _nombre: string;
  private _forma: number[][];

  protected constructor(nombre: string, forma: number[][]) {
    this._nombre = nombre;
    this._forma = forma.map((fila) => [...fila]);
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(nuevoNombre: string) {
    this._nombre = nuevoNombre;
  }

  public get forma(): number[][] {
    return this._forma.map((fila) => [...fila]);
  }

  public set forma(nuevaForma: number[][]) {
    this._forma = nuevaForma.map((fila) => [...fila]);
  }
}