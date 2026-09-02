import { Clock } from "./Clock.ts";
import { Tablero } from "./Tablero.ts";

export type EstadoJuego =
  | "no_iniciado"
  | "jugando"
  | "finalizado"
  | "ganado";

export class Tetris {
  private _estado: EstadoJuego;
  private _tablero: Tablero;
  private _reloj: Clock;

  public constructor(lineasParaGanar: number = 10) {
    this._estado = "no_iniciado";
    this._tablero = new Tablero(lineasParaGanar);
    this._reloj = new Clock();
  }

  public get estado(): EstadoJuego {
    return this._tablero.juegoTerminado
      ? "finalizado"
      : this._tablero.juegoGanado
        ? "ganado"
        : this._estado;
  }

  public get tablero(): Tablero {
    return this._tablero;
  }

  public get reloj(): Clock {
    return this._reloj;
  }

  public comenzar(): void {
    this._estado = "jugando";
  }

  public MoverpiezaAbajoConTick(): void {
  this._reloj.Tick();
  this._tablero.moverPiezaAbajo();
}

public rotarIzquierda(): void {
  this._tablero.rotarPiezaIzq();
}

public rotarDerecha(): void {
  this._tablero.rotarPiezaDer();
}
}
