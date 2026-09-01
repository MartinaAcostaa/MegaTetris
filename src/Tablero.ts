import { PiezaBase } from "./piezas/PiezaBase.ts";
import { PiezaRotable } from "./piezas/PiezaRotable.ts";

export class Tablero {
  private _celdas: number[][];
  private _piezaActual: PiezaBase | null;
  private _filaActual: number;
  private _columnaActual: number;
  private _juegoTerminado: boolean;

  public constructor() {
    this._celdas = Array.from(
      { length: 20 },
      () => Array(10).fill(0)
    );
    this._piezaActual = null;
    this._filaActual = 0;
    this._columnaActual = 0;
    this._juegoTerminado = false;
  }

  public get juegoTerminado(): boolean {
    return this._juegoTerminado;
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

    const hayEspacio = pieza.forma.every((fila, filaPieza) =>
      fila.every(
        (celda, columnaPieza) =>
          celda === 0 ||
          this._celdas[filaPieza][columna + columnaPieza] === 0
      )
    );

    this._juegoTerminado = this._juegoTerminado || !hayEspacio;

    pieza.forma.forEach((fila, filaPieza) => {
      fila.forEach((celda, columnaPieza) => {
        const columnaTablero = columna + columnaPieza;

        this._celdas[filaPieza][columnaTablero] = Math.max(
          this._celdas[filaPieza][columnaTablero],
          celda * Number(hayEspacio)
        );
      });
    });

    this._piezaActual = hayEspacio ? pieza : this._piezaActual;
    this._filaActual = hayEspacio ? 0 : this._filaActual;
    this._columnaActual = hayEspacio ? columna : this._columnaActual;

    this.eliminarLineasCompletas();
  }

  public eliminarLineasCompletas(): void {
    const filasNoCompletas = this._celdas.filter(
      (fila) => !fila.every((celda) => celda === 1)
    );

    const filasEliminadas = this._celdas.length - filasNoCompletas.length;

    const filasVacias = Array.from(
      { length: filasEliminadas },
      () => Array(this._celdas[0].length).fill(0)
    );

    this._celdas = [...filasVacias, ...filasNoCompletas];
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

  public moverPiezaAbajo(): void {
    const pieza = this._piezaActual!;

    pieza.forma.forEach((fila, filaPieza) => {
      fila.forEach((celda, columnaPieza) => {
        const filaTablero = this._filaActual + filaPieza;
        const columnaTablero = this._columnaActual + columnaPieza;

        this._celdas[filaTablero][columnaTablero] *= 1 - celda;
      });
    });

    const filaSiguiente = this._filaActual + 1;
    const entraPorAbajo =
      filaSiguiente + pieza.forma.length <= this._celdas.length;

    const espacioLibre =
      entraPorAbajo &&
      pieza.forma.every((fila, filaPieza) =>
        fila.every(
          (celda, columnaPieza) =>
            celda === 0 ||
            this._celdas[filaSiguiente + filaPieza]
              [this._columnaActual + columnaPieza] === 0
        )
      );

    if (espacioLibre) {
      this._filaActual = filaSiguiente;
    }

    pieza.forma.forEach((fila, filaPieza) => {
      fila.forEach((celda, columnaPieza) => {
        const filaTablero = this._filaActual + filaPieza;
        const columnaTablero = this._columnaActual + columnaPieza;

        this._celdas[filaTablero][columnaTablero] = Math.max(
          this._celdas[filaTablero][columnaTablero],
          celda
        );
      });
    });

    this.eliminarLineasCompletas();
  }

  private rotarPieza(rotar: (pieza: PiezaRotable) => void): void {
    const pieza = this._piezaActual as PiezaRotable;
    const formaOriginal = pieza.forma;

    pieza.forma.forEach((fila, filaPieza) => {
      fila.forEach((celda, columnaPieza) => {
        const filaTablero = this._filaActual + filaPieza;
        const columnaTablero = this._columnaActual + columnaPieza;

        this._celdas[filaTablero][columnaTablero] *= 1 - celda;
      });
    });

    rotar(pieza);

    const entraDentro =
      this._columnaActual + pieza.forma[0].length <= this._celdas[0].length &&
      this._filaActual + pieza.forma.length <= this._celdas.length;

    const hayEspacio =
      entraDentro &&
      pieza.forma.every((fila, filaPieza) =>
        fila.every(
          (celda, columnaPieza) =>
            celda === 0 ||
            this._celdas[this._filaActual + filaPieza]
              [this._columnaActual + columnaPieza] === 0
        )
      );

    pieza.forma = hayEspacio ? pieza.forma : formaOriginal;

    pieza.forma.forEach((fila, filaPieza) => {
      fila.forEach((celda, columnaPieza) => {
        const filaTablero = this._filaActual + filaPieza;
        const columnaTablero = this._columnaActual + columnaPieza;

        this._celdas[filaTablero][columnaTablero] = Math.max(
          this._celdas[filaTablero][columnaTablero],
          celda
        );
      });
    });
  }

  public rotarPiezaIzq(): void {
    this.rotarPieza((pieza) => pieza.rotarIzq());
  }

  public rotarPiezaDer(): void {
    this.rotarPieza((pieza) => pieza.rotarDer());
  }
}